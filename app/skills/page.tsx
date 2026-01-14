import MotionWrap from "@/components/MotionWrap";
import SkillGroup from "@/components/SkillGroup";
import { resume } from "@/data/resume";

export default function SkillsPage() {
  const entries = Object.entries(resume.skills);

  return (
    <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Skills</h1>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-200">
          A practical toolkit for enterprise automation—RPA platforms, Orchestrator operations, APIs, scripting, and data.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([k, v]) => (
            <SkillGroup key={k} title={k} items={v} />
          ))}
        </div>
      </section>
    </MotionWrap>
  );
}
