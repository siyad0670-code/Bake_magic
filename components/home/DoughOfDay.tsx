
import Image from "next/image";

export default function DoughOfDay() {
  return (
    <section className="mx-auto max-w-5xl px-5">
      <div className="grid items-center gap-8 rounded-[3rem] bg-maroon p-8 text-cream md:grid-cols-2 md:p-12">

        <Image
          src="/images/hero/avilmilk.jpg"
          alt="Salted Honey Butter Croissant"
          width={600}
          height={600}
          className="aspect-square w-full rounded-[2.5rem] bg-orange/30 object-cover"
        />

        <div>
          <span className="rounded-md bg-lime px-2 py-1 text-xs text-maroon">
            “Today’s Special”
          </span>

          <h2 className="font-display mt-3 text-4xl">
            Avil Milk
          </h2>

          <p className="mt-4 text-sm">
            A creamy and refreshing Kerala classic made with banana, milk, aval and a touch of sweetness. A deliciously filling treat that's perfect for any time of the day.
          </p>

          <button className="font-display mt-6 rounded-md bg-orange px-5 py-2 text-xs text-maroon">
            ADD TO BAG
          </button>
        </div>

      </div>
    </section>
  );
}


