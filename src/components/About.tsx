import { education } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">Education</h2>
      <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{education.institution}</h3>
            <p className="text-sm text-foreground-muted">{education.degree}</p>
          </div>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <span className="text-sm font-medium text-foreground-muted">{education.period}</span>
            <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-hover">
              CGPA {education.cgpa}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <span
              key={course}
              className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs text-foreground-muted"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
