import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/config/menuData";

export default function Favorites() {
const favorites = menuItems.filter((i) => i.favorite).slice(0, 4);

return (
<section className="mx-auto max-w-6xl px-4 py-12 md:px-5 md:py-20">
<div className="flex items-end justify-between gap-3">
<div>
<h2 className="font-display text-3xl md:text-6xl">Our Favorites</h2>
<p className="mt-2 text-sm">Top picks that&apos;ll make you smile</p>
</div>
<Link
href="/menu"
className="font-display shrink-0 rounded-md bg-orange px-3 py-2 text-[10px] md:px-4 md:text-xs"
>
VIEW FULL MENU
</Link>
</div>

<div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
{favorites.map((item) => (
<article key={item.id} className="group">
<div className="overflow-hidden rounded-3xl border-2 border-maroon">
<Image
src={item.image}
alt={item.name}
width={400}
height={400}
className="aspect-square w-full bg-orange/20 object-cover transition-transform duration-500 group-hover:scale-110"
/>
</div>

<div className="mt-3 flex flex-col items-start gap-2">
<h3 className="font-display text-[13px] leading-tight md:text-base">
{item.name}
</h3>
<span className="rounded-full bg-orange px-3 py-1 font-display text-[11px] text-maroon md:text-sm">
₹{item.price}
</span>
</div>
</article>
))}
</div>
</section>
);
}