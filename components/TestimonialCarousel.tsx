"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Rangaswamy consistently delivers stable automations with clear logs and strong exception handling.",
    name: "Stakeholder (Placeholder)",
    role: "Operations Lead"
  },
  {
    quote:
      "Fast turnaround, great communication, and production-ready bot design.",
    name: "Manager (Placeholder)",
    role: "Automation Program"
  },
  {
    quote:
      "A reliable automation partner who understands enterprise constraints and delivery timelines.",
    name: "Client (Placeholder)",
    role: "Delivery Owner"
  }
];

export default function TestimonialCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  const item = testimonials[i];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-lg leading-relaxed">“{item.quote}”</p>
      <div className="mt-5 text-sm text-slate-600 dark:text-slate-300">
        <span className="font-medium text-slate-900 dark:text-white">{item.name}</span> • {item.role}
      </div>
      <div className="mt-6 flex gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${
              idx === i ? "bg-slate-900 dark:bg-white" : "bg-slate-300 dark:bg-slate-700"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
