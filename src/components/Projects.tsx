import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`flex flex-col rounded-3xl border border-border bg-surface p-8 shadow-sm ${
              project.featured ? "" : "md:col-span-2"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                <p className="text-sm text-primary">{project.stack}</p>
              </div>
              {project.badge && (
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-hover">
                  {project.badge}
                </span>
              )}
            </div>

            <ul className="mt-4 flex flex-1 flex-col gap-2">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {project.links.length > 0 && (
              <div className="mt-6 flex gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
