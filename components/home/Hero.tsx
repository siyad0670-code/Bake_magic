import Image from "next/image";
import Link from "next/link";

export default function Hero() {
return (
<section className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-3 px-4 py-6 md:gap-6 md:px-5 md:py-14">
<div>
<h1 className="font-display text-[clamp(1.3rem,6.5vw,4.5rem)] leading-[1.05]">
YOUR DAILY
<br />
FRESH BAKE
</h1>

<p className="mt-3 max-w-sm text-[11px] leading-snug sm:text-sm md:mt-4">
Bakes that hug you back — soft breads, cheeky donuts, and pastries
made fresh daily.
</p>

<Link
href="/menu"
className="font-display mt-4 inline-block rounded-md bg-orange px-3 py-1.5 text-[10px] md:mt-6 md:px-5 md:py-2 md:text-xs"
>
ORDER NOW
</Link>
</div>

<div className="rounded-3xl bg-[#ffd3a6] p-2 md:rounded-[2.5rem] md:p-4">
<Image
src="/images/hero/macron.jpg"
alt="Colourful macarons"
width={800}
height={600}
priority
className="aspect-[4/3] w-full rounded-2xl object-contain md:rounded-[2rem]"
/>
</div>
</section>
);
}