import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-svh place-items-center bg-bg px-4 text-fg">
      <div className="panel w-full max-w-md p-8">
        <Link to="/" className="font-display text-lg">ORBITAL</Link>
        <h1 className="font-display mt-6 text-3xl font-bold">Sign in</h1>
        <p className="mt-2 text-sm text-muted">The desk is open either way. An account keeps your name on the profile.</p>
        <div className="mt-6 grid gap-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((provider) => (
              <button
                key={provider.providerId}
                type="button"
                onClick={() => signIn(provider.providerId, { callbackURL: "/profile" })}
                className="h-12 rounded-full border border-line px-4 text-sm font-semibold hover:border-cyan"
              >
                Continue with {provider.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-muted">Sign-in is disabled.</p>
          )}
        </div>
      </div>
    </main>
  );
}
