import MotionWrap from "@/components/MotionWrap";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-200">
          Want help automating a workflow, migrating bots, or building production-ready UiPath solutions?
          Send a message and I’ll reply quickly.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-semibold">Direct</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <p><span className="text-slate-500 dark:text-slate-400">Email:</span> {site.email}</p>
              <p><span className="text-slate-500 dark:text-slate-400">Phone:</span> {site.phone}</p>
              <p><span className="text-slate-500 dark:text-slate-400">LinkedIn:</span> {site.linkedInLabel}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <CTAButton href={`mailto:${site.email}`} variant="primary" external>Email me</CTAButton>
              <CTAButton href={site.linkedInUrl} variant="secondary" external>LinkedIn</CTAButton>
              <CTAButton href="/resume" variant="ghost">Resume</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </MotionWrap>
  );
}
