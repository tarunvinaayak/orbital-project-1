import { create } from "zustand";
import { persist } from "zustand/middleware";

export const TOPICS = [
  "AI",
  "India",
  "Markets",
  "Startups",
  "Space",
  "Technology",
  "Business",
  "Climate",
] as const;

export type Topic = (typeof TOPICS)[number];

type Prefs = {
  topics: Topic[];
  toggleTopic: (topic: Topic) => void;
  briefingEmail: string | null;
  saveBriefing: (email: string) => void;
};

export const usePrefs = create<Prefs>()(
  persist(
    (set, get) => ({
      topics: [],
      toggleTopic: (topic) => {
        const topics = get().topics.includes(topic)
          ? get().topics.filter((item) => item !== topic)
          : [...get().topics, topic];
        set({ topics });
      },
      briefingEmail: null,
      saveBriefing: (email) => set({ briefingEmail: email }),
    }),
    { name: "orbital-prefs", skipHydration: true },
  ),
);
