import { education } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            Education
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Academic background
          </h2>
        </Reveal>

        <Reveal delayClassName="reveal-delay-1" className="mt-12 max-w-2xl">
          <p className="font-mono text-xs tracking-wide text-muted">
            {education.period}
          </p>
          <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
            {education.degree}
          </h3>
          <p className="mt-3 text-lg text-muted">
            {education.school}
            <span className="text-foreground/40"> · </span>
            {education.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
