"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";
import CTAButton from "./CTAButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry — ${name || "Hello"}`);
    const body = encodeURIComponent(`${msg}\n\nFrom: ${name}\nEmail: ${email}`);
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [name, email, msg]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-slate-600 dark:text-slate-300">Name</label>
          <input
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-800 dark:focus:ring-slate-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
          <input
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-800 dark:focus:ring-slate-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
        <textarea
          className="mt-1 h-32 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-800 dark:focus:ring-slate-700"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Tell me what you're looking to automate…"
        />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <CTAButton href={mailto} variant="primary" external>
          Send Email
        </CTAButton>
        <CTAButton href={`mailto:${site.email}`} variant="secondary" external>
          Copy Email
        </CTAButton>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
        This form uses mailto (no backend). If you want a real API endpoint, I can add one.
      </p>
    </div>
  );
}
