import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-3xl border border-border bg-surface p-8 shadow-sm md:p-12">
          <div className="flex items-center gap-4">
            <Image
              src="/profile_pic.jpeg"
              alt={profile.name}
              width={72}
              height={72}
              priority
              className="h-[72px] w-[72px] shrink-0 rounded-full object-cover ring-2 ring-primary-soft"
            />
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Welcome
            </p>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
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
          <div className="rounded-3xl border border-border bg-primary-soft p-6">
            <p className="text-sm font-medium text-primary-hover">Based in</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{profile.location}</p>
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
