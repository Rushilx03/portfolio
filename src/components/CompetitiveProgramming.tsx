import { competitiveProgramming, leadership } from "@/data/content";

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
        Competitive Programming & Leadership
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {competitiveProgramming.stats.map((stat) => {
          const content = (
            <>
              <p className="text-sm font-medium text-primary-hover">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</p>
              {stat.sub && <p className="mt-1 text-sm text-foreground-muted">{stat.sub}</p>}
            </>
          );
          return stat.url ? (
            <a
              key={stat.label}
              href={stat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-border bg-primary-soft p-6 transition-transform hover:-translate-y-0.5"
            >
              {content}
            </a>
          ) : (
            <div key={stat.label} className="rounded-3xl border border-border bg-primary-soft p-6">
              {content}
            </div>
          );
        })}
      </div>

      <p className="mt-6 rounded-3xl border border-border bg-surface p-6 text-sm leading-relaxed text-foreground-muted shadow-sm">
        {competitiveProgramming.summary}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {leadership.map((item) => (
          <div key={item.title} className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
