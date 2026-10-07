
"use client";

import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "Softest bread I've ever held. (Yes, I held it like a baby.)",
      by: " Carlo M.",
    },
    {
      text: "If happiness had a smell, it'd be Doughwey at 7 AM.",
      by: "@themorninglatte",
    },
    {
      text: "Every pastry feels like a warm hug from a butter fairy.",
      by: " Lara G.",
    },
    {
      text: "I came for one bagel. I left with a box and no regrets.",
      by: " Dev P.",
    },
  ];

  const scroll = (direction: number) => {
    ref.current?.scrollBy({
      left: direction * 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <h2 className="font-display text-center text-4xl md:text-6xl">
        Bites of Praise
      </h2>

      <p className="mx-auto mt-3 max-w-lg text-center text-sm">
        We asked our dough lovers what they think — turns out, they
        can&apos;t keep their mouths shut.
      </p>

      <div
        ref={ref}
        className="no-scrollbar mt-10 flex snap-x gap-5 overflow-x-auto"
      >
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="w-80 shrink-0 snap-start rounded-3xl border border-maroon/60 p-5"
          >
            <p className="text-orange">★★★★★</p>

            <p className="mt-2 font-semibold">
              {testimonial.text}
            </p>

            <footer className="mt-3 text-xs">
              {testimonial.by}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          aria-label="Previous"
          onClick={() => scroll(-1)}
          className="h-10 w-10 rounded-full border border-maroon"
        >
          ←
        </button>

        <button
          aria-label="Next"
          onClick={() => scroll(1)}
          className="h-10 w-10 rounded-full border border-maroon"
        >
          →
        </button>
      </div>
    </section>
  );
}

