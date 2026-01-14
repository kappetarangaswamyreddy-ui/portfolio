import MotionWrap from "@/components/MotionWrap";
import ProjectCard from "@/components/ProjectCard";
import { resume } from "@/data/resume";

export default function ProjectsPage() {
  return (
    <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-200">
          Portfolio-style writeups based on enterprise automation work: REFramework patterns, Orchestrator-first design,
          and hybrid (UI + API) workflows.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {resume.projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} tags={p.tags} impact={p.impact} links={p.links} />
          ))}
        </div>
      </section>
    </MotionWrap>
  );
}
