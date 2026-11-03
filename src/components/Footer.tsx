import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © 2026 {profile.name}
        </p>
        <p className="font-mono text-xs tracking-wide">
          Next.js · Sanity · React
        </p>
      </div>
    </footer>
  );
}
