import MotionWrap from "@/components/MotionWrap";
import Timeline from "@/components/Timeline";
import CTAButton from "@/components/CTAButton";
import { resume } from "@/data/resume";

export default function ExperiencePage() {
  return (
    <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Experience</h1>
            <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-200">
              End-to-end delivery across RPA and software development roles—production support, migrations, and performance optimization.
            </p>
          </div>
          <CTAButton href="/resume" variant="secondary">Resume</CTAButton>
        </div>

        <div className="mt-10">
          <Timeline items={resume.experience} />
        </div>
      </section>
    </MotionWrap>
  );
}
