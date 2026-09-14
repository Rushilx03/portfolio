import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-3xl border border-border bg-surface p-8 shadow-sm md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Welcome
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-foreground-muted">{profile.tagline}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground-muted">
            {profile.blurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/profile_pic.jpeg"
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-12">
              <p className="text-xs font-medium uppercase tracking-widest text-white/80">Based in</p>
              <p className="mt-1 text-base font-semibold text-white">{profile.location}</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-3 rounded-3xl border border-border bg-surface p-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              GitHub <span aria-hidden>→</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              LinkedIn <span aria-hidden>→</span>
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              LeetCode <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
