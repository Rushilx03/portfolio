"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (!res.ok) {
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">Get in Touch</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <p className="text-sm font-medium text-primary-hover">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-1 block text-sm text-foreground hover:text-primary">
              {profile.email}
            </a>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <p className="text-sm font-medium text-primary-hover">Phone</p>
            <a href={`tel:${profile.phone}`} className="mt-1 block text-sm text-foreground hover:text-primary">
              {profile.phone}
            </a>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <p className="text-sm font-medium text-primary-hover">Elsewhere</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                LinkedIn
              </a>
              <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                LeetCode
              </a>
              <a href={profile.links.codeforces} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                Codeforces
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 shadow-sm md:col-span-3"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="resize-none rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-primary-hover">Thanks — your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              {errorMessage || "Couldn't send that."} Please email directly instead:{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
