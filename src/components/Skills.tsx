import { skillGroups } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            Toolkit
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Skills & Abilities
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              delayClassName={
                index % 3 === 1
                  ? "reveal-delay-1"
                  : index % 3 === 2
                    ? "reveal-delay-2"
                    : ""
              }
            >
              <div>
                <h3 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-base text-foreground/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
