import Image from "next/image";
import WaveText from "@/components/about/WaveText";

export const metadata = {
  title: "About — Doughwey",
};

export default function AboutPage() {
  const heading =
    "Because life's better when it's a little....";

  const story = [
    "At Doughwey, we believe that good food shouldn't be complicated — just honest, warm, and a little cheeky. We're a small but mighty bakery that bakes every pastry, loaf, and donut with the kind of love (and butter) you can taste.",

    "Born out of a tiny kitchen and a big craving for comfort, Doughwey started as an experiment in “how happy can carbs make people?” The answer: very.",

    "Now, our ovens run from sunrise till the scent of freshly bxcxcxcxcsdfdfaked brioche fills the street — serving everyone from early risers to midnight snackers. Whether it's a flaky croissant, a smiling donut, or a soft loaf of milk bread, each bake is our way of spreading a little joy.",
  ];

  const gallery = [
    "baker",
    "display",
    "chef",
    "basket",
  ];

  const promise = {
    title: "Our Promise",
    text: "We keep it fresh, we keep it fun, and we keep it real. Every bake is made from scratch daily — no shortcuts, no weird stuff — just premium ingredients, patience, and passion.",
    highlight:
      "From the first proof to the last glaze, everything we make is hand-shaped, hand-filled, and heart-approved.",
  };

  const ingredients = {
    title: "Our Ingredients, Our Heart",
    text: "We care about what goes into every bake — and what it means for our planet. That's why we source local, seasonal ingredients whenever possible and use eco-friendly packaging that's kind to your hands and the earth. From our flour to our frosting, everything is thoughtfully chosen to make you feel good — inside and out.",
  };

  return (
    <>
      {/* Story */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-5 md:grid-cols-2 md:py-16">
        <div>
          <h1 className="font-display text-3xl leading-tight uppercase sm:text-5xl md:text-6xl">
            {heading}
          </h1>

          <div className="mt-6 max-w-md space-y-4 text-sm leading-relaxed">
            {story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#ffd3a6] p-4 md:self-start">
          <Image
            src="/images/about/muffins.png"
            alt="Two golden muffins"
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-contain"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-5 md:grid-cols-4 md:gap-5">
        {gallery.map((image) => (
          <Image
            key={image}
            src={`/images/about/${image}.jpg`}
            alt=""
            width={600}
            height={800}
            className="aspect-[3/4] w-full rounded-3xl bg-orange/20 object-cover"
          />
        ))}
      </section>

      {/* Promise */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-20">
        <div className="grid gap-6 rounded-[2rem] bg-maroon p-5 text-cream sm:p-8 md:grid-cols-2 md:items-center md:rounded-[3rem] md:p-12">
          <Image
            src="/images/about/oven.jpg"
            alt="Baker sliding bread into an oven"
            width={800}
            height={600}
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />

          <div>
            <h2 className="font-display text-3xl uppercase sm:text-5xl">
              {promise.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed">
              {promise.text}
            </p>

            <p className="mt-5 rounded-2xl bg-lime p-4 text-sm font-semibold text-maroon">
              {promise.highlight}
            </p>
          </div>
        </div>
      </section>

      <WaveText />

      {/* Ingredients */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-5 md:pb-20">
        <div className="grid gap-6 rounded-[2rem] bg-pink p-5 sm:p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:rounded-[3rem] md:p-12">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl">
              {ingredients.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed">
              {ingredients.text}
            </p>
          </div>

          <Image
            src="/images/about/ingredients.jpg"
            alt="Dough, eggs, honey and nuts"
            width={800}
            height={600}
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </>
  );
}