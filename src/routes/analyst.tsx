import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LabelPill, PageIntro } from "@/components/bits";
import { Shell } from "@/components/shell";
import { askAnalyst, type AnalystAnswer } from "@/lib/analyst";

export const Route = createFileRoute("/analyst")({ component: AnalystPage });

const prompts = [
  "What are the biggest developments today?",
  "Why is this important?",
  "What could happen next?",
  "How does this affect India?",
  "Show me the biggest technology trends.",
  "Explain this story like I'm 12.",
  "Compare today's developments with last month.",
];

function AnalystPage() {
  const [question, setQuestion] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [turns, setTurns] = useState<Array<{ question: string; answer: AnalystAnswer }>>([]);

  const ask = async (text: string) => {
    const clean = text.trim();
    if (clean.length < 2 || pending) return;
    setPending(true);
    setError("");
    try {
      const answer = await askAnalyst({ data: { question: clean } });
      setTurns((current) => [...current, { question: clean, answer }]);
      setQuestion("");
    } catch {
      setError("The desk could not answer that. Try a shorter question.");
    } finally {
      setPending(false);
    }
  };

  return (
    <Shell>
      <PageIntro kicker="World AI" title="Ask the desk." lede="Answers are grounded in the live wire. Fact, analysis, and forecast stay apart. If the headlines do not cover it, the desk says so." />
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <div className="flex gap-2 overflow-x-auto pb-4">
          {prompts.map((prompt) => (
            <button key={prompt} type="button" onClick={() => ask(prompt)} className="h-10 shrink-0 rounded-full border border-line px-3 text-sm text-muted hover:text-fg">
              {prompt}
            </button>
          ))}
        </div>
        <div className="grid gap-4">
          {turns.map((turn) => (
            <div key={turn.question} className="grid gap-3">
              <p className="text-sm text-faint">You · {turn.question}</p>
              <article className="panel p-5">
                <p className="text-xs tracking-widest text-cyan">{turn.answer.mode === "model" ? "WORLD AI" : "DESK BRIEF"}</p>
                <h2 className="font-display mt-2 text-2xl">{turn.answer.headline}</h2>
                <div className="mt-4 grid gap-3">
                  {turn.answer.sections.map((section) => (
                    <div key={section.label}>
                      <LabelPill label={section.label} />
                      <p className="mt-1 text-sm text-muted">{section.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            void ask(question);
          }}
        >
          <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask what matters, and why" className="h-12 flex-1 rounded-full border border-line bg-navy px-4 outline-none focus:border-cyan" />
          <button type="submit" disabled={pending} className="h-12 rounded-full bg-cyan px-5 font-semibold text-ink disabled:opacity-60">
            {pending ? "Reading…" : "Ask"}
          </button>
        </form>
        {error ? <p className="mt-3 text-sm text-live">{error}</p> : null}
      </div>
    </Shell>
  );
}
