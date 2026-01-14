import CTAButton from "./CTAButton";

export default function ProjectCard({
  title,
  tags,
  impact,
  links
}: {
  title: string;
  tags: string[];
  impact: string[];
  links: { github?: string; demo?: string };
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {t}
          </span>
        ))}
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
        {impact.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-5 flex gap-2">
        <CTAButton href={links.github ?? "#"} variant="secondary" external>
          GitHub
        </CTAButton>
        <CTAButton href={links.demo ?? "#"} variant="ghost" external>
          Demo
        </CTAButton>
      </div>
    </div>
  );
}
