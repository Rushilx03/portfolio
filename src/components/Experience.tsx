import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">Experience</h2>
      <div className="flex flex-col gap-6">
        {experience.map((job) => (
          <div
            key={job.role}
            className="rounded-3xl border border-border bg-surface p-8 shadow-sm"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                <p className="text-sm text-foreground-muted">{job.org}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground-muted">{job.period}</span>
                {job.link && (
                  <a
                    href={job.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-primary transition-colors hover:border-primary"
                  >
                    {job.link.label}
                  </a>
                )}
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
