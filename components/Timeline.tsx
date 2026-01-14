export default function Timeline({
  items
}: {
  items: {
    company: string;
    title: string;
    dates: string;
    location: string;
    bullets: string[];
  }[];
}) {
  return (
    <div className="space-y-6">
      {items.map((r) => (
        <div
          key={`${r.company}-${r.dates}`}
          className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{r.company}</p>
              <h3 className="text-lg font-semibold">{r.title}</h3>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              {r.dates} • {r.location}
            </div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
            {r.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
