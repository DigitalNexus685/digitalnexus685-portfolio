import { profile } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Let&apos;s work together
          </h2>
        </Reveal>

        <Reveal delayClassName="reveal-delay-1" className="mt-10 max-w-xl">
          <p className="text-lg leading-relaxed text-muted">
            Open to full-stack roles and project collaborations — especially
            Next.js, React, and Sanity CMS builds.
          </p>
        </Reveal>

        <Reveal delayClassName="reveal-delay-2" className="mt-12 space-y-5">
          <a
            href={`mailto:${profile.email}`}
            className="group block font-display text-2xl tracking-tight text-foreground transition-colors hover:text-accent md:text-4xl"
          >
            {profile.email}
            <span className="mt-2 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="block text-lg text-muted transition-colors hover:text-foreground"
          >
            {profile.phone}
          </a>

          <p className="text-sm text-muted/80">{profile.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
