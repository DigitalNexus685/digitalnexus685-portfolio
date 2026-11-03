import Image from "next/image";
import { projects } from "@/data/content";
import { Reveal } from "@/components/Reveal";

const toneClass: Record<"core" | "focus", string> = {
  core: "border-accent/35 bg-accent-soft text-accent",
  focus: "border-line bg-transparent text-foreground/75",
};

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            Selected work
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:gap-14">
          {projects.map((project, index) => (
            <Reveal
              key={project.url}
              delayClassName={index % 2 === 1 ? "reveal-delay-1" : ""}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-6 border-b border-line pb-10 transition-colors last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10 md:pb-14"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101214]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 52vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-80" />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
                    {project.role}
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills">
                    {project.stack.map((item) => (
                      <li
                        key={item.label}
                        className={`border px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.12em] uppercase transition-colors duration-300 ${toneClass[item.tone]}`}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-accent uppercase">
                    Visit site
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
