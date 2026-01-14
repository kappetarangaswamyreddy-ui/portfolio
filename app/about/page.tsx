import MotionWrap from "@/components/MotionWrap";
import CTAButton from "@/components/CTAButton";

export default function AboutPage() {
  return (
    <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-200">
          I’m a hands-on automation builder focused on resilience, scalability, and clean architecture.
          I’ve delivered bots across web, Windows, mainframe, and Citrix environments and supported full
          lifecycle delivery—from feasibility to production monitoring.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "How I build",
              bullets: ["REFramework-first design", "Queue-based transactions", "Structured logging + retries", "Production monitoring mindset"]
            },
            {
              title: "What I automate",
              bullets: ["Excel/PDF/OCR flows", "Email + approvals", "Multi-application workflows", "Hybrid UI + API processes"]
            },
            {
              title: "What teams get",
              bullets: ["Reusable components", "Stable bots in production", "Clear runbooks/logs", "Fast, reliable delivery"]
            }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="font-semibold">{c.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
                {c.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-3">
          <CTAButton href="/experience" variant="primary">Experience Timeline</CTAButton>
          <CTAButton href="/contact" variant="secondary">Contact</CTAButton>
        </div>
      </section>
    </MotionWrap>
  );
}
