import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";

  const styles: Record<Variant, string> = {
    primary:
      "text-white bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 hover:opacity-90 shadow-sm",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900"
  };

  if (external) {
    return (
      <a
        className={`${base} ${styles[variant]}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles[variant]}`} href={href}>
      {children}
    </Link>
  );
}
