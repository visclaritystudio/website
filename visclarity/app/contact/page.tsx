import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to Visclarity Studio by email, WhatsApp, or Instagram.",
};

export default function ContactPage() {
  return (
    <main className="px-6 pb-24 pt-36 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">Got Questions? Reach Out.</p>
        <h1 className="font-display text-4xl font-semibold tracking-tightest text-bone sm:text-5xl">
          Tell us what you're building.
        </h1>
        <p className="mt-6 max-w-xl text-mist">
          Send a short brief and we'll reply within one business day with next steps.
        </p>

        <div className="mt-16 grid gap-16 sm:grid-cols-[1fr_0.8fr]">
          <form
            action="mailto:visclaritystudio@gmail.com"
            method="post"
            encType="text/plain"
            className="grid gap-6"
          >
            <label className="grid gap-2">
              <span className="eyebrow">Name</span>
              <input
                name="name"
                required
                className="focus-ring border-b border-line bg-transparent py-3 text-bone outline-none placeholder:text-mist/40"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="eyebrow">Email</span>
              <input
                name="email"
                type="email"
                required
                className="focus-ring border-b border-line bg-transparent py-3 text-bone outline-none placeholder:text-mist/40"
                placeholder="you@company.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="eyebrow">What do you need help with?</span>
              <textarea
                name="message"
                required
                rows={5}
                className="focus-ring border-b border-line bg-transparent py-3 text-bone outline-none placeholder:text-mist/40"
                placeholder="Tell us about your business and what you're looking to build."
              />
            </label>
            <button
              type="submit"
              className="focus-ring mt-4 w-fit border border-bone px-8 py-3 font-display text-sm font-semibold text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              Send message
            </button>
          </form>

          <div className="grid gap-8 content-start">
            <div>
              <p className="eyebrow mb-2">Email</p>
              <a href="mailto:visclaritystudio@gmail.com" className="text-bone hover:text-brass focus-ring">
                visclaritystudio@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">WhatsApp</p>
              <a
                href="https://wa.me/6285174425142"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-brass focus-ring"
              >
                +62 851 7442 5142
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Instagram</p>
              <a
                href="https://instagram.com/visclarity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-brass focus-ring"
              >
                @visclarity
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
