import type { Metadata } from "next";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "About",
  description: "The story and vision behind Visclarity Studio, founded by Kevin in Denpasar, Bali.",
};

export default function AboutPage() {
  return (
    <main className="px-6 pb-24 pt-36 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow mb-4">Kevin's Vision Behind the Studio</p>
          <h1 className="font-display text-4xl font-semibold tracking-tightest text-bone sm:text-5xl">
            Creative work should not only look good — it should work hard to grow your business.
          </h1>
          <div className="mt-10 space-y-6 text-mist">
            <p>
              Hi, I'm Kevin, founder of Visclarity Studio, based in the vibrant heart of Denpasar,
              Bali. I've been in the creative industry since 2019, with a background in brand
              design and a deep passion for solving real-world business challenges through
              strategy, content, and storytelling.
            </p>
            <p>
              I started designing at 15 — not for fun, but because I saw how design could move
              people, shift perception, and drive growth. That curiosity evolved into hands-on
              experience across branding, marketing, and creative strategy. By 20, that journey
              became a full-stack agency built on one mission: work with clients as part of their
              team, not as another outsourced service.
            </p>
            <p>
              At Visclarity, we believe great creative work isn't just aesthetic — it's
              measurable, human, and built to drive results. Whether through digital campaigns,
              content creation, or branding, we help businesses grow with clarity and consistency.
            </p>
          </div>
        </div>
        <div className="aspect-[3/4] bg-line" />
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <p className="eyebrow mb-6">How We Work</p>
        <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-bone">Preparation</h3>
            <p className="mt-2 text-sm text-mist">We meet, agree on scope, then research and prepare.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-bone">Execution</h3>
            <p className="mt-2 text-sm text-mist">
              Once planning is complete, we move into production, editing, and quality control.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-bone">Evaluate</h3>
            <p className="mt-2 text-sm text-mist">
              We look back at what ran, analyze the reported data, and improve the next round.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <p className="eyebrow mb-6">The Team</p>
        <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-4">
          {[
            { name: "Kevin Virgiawan", role: "Creative Director" },
            { name: "I Kadek Sandy Andika", role: "Graphic Designer" },
            { name: "Dewa Tara", role: "Videographer" },
            { name: "Nadine Kalina Davi", role: "Social Media Strategist" },
          ].map((m) => (
            <div key={m.name}>
              <div className="aspect-[3/4] bg-line" />
              <p className="font-display mt-3 text-sm font-semibold text-bone">{m.name}</p>
              <p className="text-xs text-mist">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Stats />
      </div>
    </main>
  );
}
