import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description:
    "Enterprise RPA Developer specializing in UiPath REFramework, Orchestrator, queue-based automations, and API-driven workflows.",
  keywords: site.keywords,
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description:
      "Modern portfolio for an RPA Developer focused on UiPath, Orchestrator operations, and production-grade automations.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description:
      "UiPath REFramework • Orchestrator • Queues • API Automation • Power Automate"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
