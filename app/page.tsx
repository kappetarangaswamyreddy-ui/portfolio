import MotionWrap from "@/components/MotionWrap";
import CTAButton from "@/components/CTAButton";
import ProjectCard from "@/components/ProjectCard";
import { resume } from "@/data/resume";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = resume.projects.slice(0, 3);

  return (
    <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400">{site.role}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Enterprise RPA Developer building reliable UiPath automations.
            </h1>
            <p className="mt-5 text-base text-slate-700 dark:text-slate-200">
              I design production-grade bots using REFramework, Orchestrator queues, and API-driven automation
              across web, Windows, and Citrix—delivered end-to-end from build to monitoring.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href="/projects" variant="primary">View Projects</CTAButton>
              <CTAButton href="/resume" variant="secondary">Download Resume</CTAButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Production-ready automation", desc: "REFramework, retries, logging, exception handling" },
                { title: "Hybrid (UI + APIs)", desc: "REST/SOAP + UI flows for enterprise reliability" },
                { title: "Orchestrator operations", desc: "Queues, assets, credentials, monitoring" }
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="font-medium">{c.title}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-600 dark:text-slate-400">Quick Summary</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {resume.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["UiPath", "REFramework", "Orchestrator", "Queues", "Automation Anywhere", "Power Automate", "REST/SOAP"].map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            A few examples of production-style automation work and patterns.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.title} title={p.title} tags={p.tags} impact={p.impact} links={p.links} />
            ))}
          </div>

          <div className="mt-8">
            <CTAButton href="/projects" variant="ghost">See all projects →</CTAButton>
          </div>
        </div>
      </section>
    </MotionWrap>
  );
}
