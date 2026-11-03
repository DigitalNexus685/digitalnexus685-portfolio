import { experience } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            Career
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {experience.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              delayClassName={index === 0 ? "" : "reveal-delay-1"}
            >
              <article className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12">
                <div>
                  <p className="font-mono text-xs tracking-wide text-muted">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-2 text-accent">
                    {job.company}
                    <span className="text-muted"> · {job.location}</span>
                  </p>
                </div>

                <ul className="space-y-3 border-l border-line pl-5 md:pl-6">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative text-[0.95rem] leading-relaxed text-muted before:absolute before:-left-[1.4rem] before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70 md:before:-left-[1.65rem]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
