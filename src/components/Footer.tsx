import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-foreground-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-4">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
