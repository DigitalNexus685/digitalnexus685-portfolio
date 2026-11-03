import { profile } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end pb-20 pt-28 md:justify-center md:pb-28 md:pt-32"
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <p className="hero-animate font-mono text-xs tracking-[0.22em] text-accent uppercase">
          {profile.location}
        </p>

        <h1 className="hero-animate hero-animate-delay-1 mt-6 font-display text-[clamp(3.2rem,12vw,7.5rem)] leading-[0.9] tracking-[-0.04em] text-foreground">
          {profile.name}
        </h1>

        <div className="accent-line mt-6 h-px w-24 bg-accent md:w-32" />

        <p className="hero-animate hero-animate-delay-2 mt-8 max-w-xl font-display text-2xl tracking-tight text-foreground/90 md:text-3xl">
          {profile.title}
        </p>

        <p className="hero-animate hero-animate-delay-3 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          Building scalable web applications with Next.js, React, and Sanity —
          sharpened by AI-assisted development.
        </p>

        <div className="hero-animate hero-animate-delay-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center border border-line px-6 py-3 text-sm text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            View experience
          </a>
        </div>
      </div>
    </section>
  );
}
