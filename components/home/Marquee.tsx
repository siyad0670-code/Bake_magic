
export default function Marquee() {
  const marquee = [
    "Hand-kneaded",
    "Fresh",
    "Oven-lov'd",
    "Baked at 4AM",
  ];

  const row = [...marquee, ...marquee];

  return (
    <div className="overflow-hidden bg-lime py-6">
      <div className="animate-marquee font-display flex w-max gap-8 text-4xl whitespace-nowrap md:text-6xl">
        {[...row, ...row].map((text, index) => (
          <span key={index}>
            {text.toUpperCase()}{" "}
            <span className="text-orange">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

