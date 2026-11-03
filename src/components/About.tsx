import { profile } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Profile
          </h2>
        </Reveal>

        <Reveal delayClassName="reveal-delay-1" className="mt-10 max-w-3xl">
          <p className="text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
            {profile.summary}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
