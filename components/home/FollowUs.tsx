import Image from "next/image";

export default function FollowUs() {
const socials = [
{ label: "Instagram", href: "#" },
{ label: "Facebook", href: "#" },
{ label: "X (Twitter)", href: "#" },
];

const photos = [
{
src: "/images/social/royalfalooda.jpg",
alt: "Jelly donuts",
className: "",
},
{
src: "/images/social/shopside.jpg",
alt: "Bagel",
className: "",
},
{
src: "/images/social/shopinside.jpg",
alt: "Eating a croissant",
className: "col-span-2 md:col-start-1 md:row-start-2",
},
{
src: "/images/social/shop.jpg",
alt: "Holding a bakery bag",
className:
"col-span-2 row-span-2 md:col-start-3 md:row-start-1",
},
];

return (
<section className="mx-auto max-w-6xl px-4 pb-20 md:px-5">
<div className="flex flex-wrap items-center gap-3 md:gap-4">
<h2 className="font-display text-4xl md:text-5xl">FOLLOW US</h2>

{socials.map((social) => (
<a
key={social.label}
href={social.href}
className="rounded-md bg-orange px-3 py-2 font-display text-xs"
>
{social.label}
</a>
))}
</div>

<div className="mt-8 grid grid-cols-2 auto-rows-[10rem] gap-3 sm:auto-rows-[13rem] md:grid-cols-4 md:auto-rows-[16rem] md:gap-4 lg:auto-rows-[19rem]">
{photos.map((photo) => (
<div
key={photo.src}
className={`relative overflow-hidden rounded-3xl bg-orange/20 ${photo.className}`}
>
<Image
src={photo.src}
alt={photo.alt}
fill
sizes="(max-width: 768px) 50vw, 25vw"
className="object-cover transition-transform duration-500 hover:scale-105"
/>
</div>
))}
</div>
</section>
);
}