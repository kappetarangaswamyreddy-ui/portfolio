"use client";

import MotionWrap from "@/components/MotionWrap";
import CTAButton from "@/components/CTAButton";
import { resume } from "@/data/resume";
import { site } from "@/data/site";

export default function ResumePage() {
  return (
    <MotionWrap>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="no-print flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold">Resume</h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Print-friendly page. Use “Save as PDF” in your browser.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Print / Save as PDF
            </button>
            <CTAButton href="/resume.pdf" variant="secondary" external>
              Download PDF (optional)
            </CTAButton>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{site.name}</h2>
            <p className="text-sm text-slate-700 dark:text-slate-200">{site.role}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {site.email} • {site.phone} • {site.linkedInLabel}
            </p>
          </div>

          <hr className="my-6 border-slate-200 dark:border-slate-800" />

          <h3 className="text-lg font-semibold">Professional Summary</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            {resume.summary}
          </p>

          <h3 className="mt-8 text-lg font-semibold">Skills</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {Object.entries(resume.skills).map(([k, v]) => (
              <div key={k}>
                <p className="text-sm font-medium">{k}</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{v.join(", ")}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-semibold">Experience</h3>
          <div className="mt-4 space-y-6">
            {resume.experience.map((r) => (
              <div key={`${r.company}-${r.dates}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium">{r.company} — {r.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{r.dates} • {r.location}</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                  {r.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-semibold">Certifications</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-200">
            {resume.certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Education</h3>
          <div className="mt-3 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            {resume.education.map((e) => (
              <div key={e.degree}>
                <p className="font-medium">{e.degree}</p>
                <p className="text-slate-600 dark:text-slate-300">{e.school} — {e.location} • {e.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrap>
  );
}
