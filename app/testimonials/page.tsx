import MotionWrap from "@/components/MotionWrap";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialsPage() {
  return (
    <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Testimonials</h1>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-200">
          Placeholder testimonials (swap these with real feedback when ready).
        </p>
        <div className="mt-10 max-w-3xl">
          <TestimonialCarousel />
        </div>
      </section>
    </MotionWrap>
  );
}
