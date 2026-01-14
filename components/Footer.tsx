import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">{site.name}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{site.role}</p>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
            <span className="mx-2">•</span>
            <a className="hover:underline" href={`tel:${site.phone}`}>{site.phone}</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with Next.js + Tailwind.
        </p>
      </div>
    </footer>
  );
}
