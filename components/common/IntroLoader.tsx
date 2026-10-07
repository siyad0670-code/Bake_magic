"use client";
import { useEffect, useState } from "react";

const TITLE = "BAKE MAGIC";
const MIN_TIME = 3200; // കുറഞ്ഞത് ഇത്ര ms ലോഡർ നിൽക്കും
const HOLD = 700; // 100% ആയ ശേഷം നിൽക്കുന്ന സമയം
const SLIDE = 1400; // മുകളിലേക്ക് സ്ലൈഡ് ചെയ്യുന്ന സമയം
const MAX_WAIT = 8000; // പേജ് ലോഡ് ആയില്ലെങ്കിലും ഇത്ര കഴിഞ്ഞാൽ തുടരും

export default function IntroLoader() {
const [show, setShow] = useState(true);
const [leaving, setLeaving] = useState(false);
const [progress, setProgress] = useState(0);

useEffect(() => {
if (sessionStorage.getItem("introSeen")) {
setShow(false);
return;
}
document.body.style.overflow = "hidden";

let loaded = document.readyState === "complete";
const onLoad = () => (loaded = true);
window.addEventListener("load", onLoad);

const start = performance.now();
let raf = 0;
let done = false;
const timers: ReturnType<typeof setTimeout>[] = [];

const tick = (now: number) => {
const elapsed = now - start;
let p = Math.min(elapsed / MIN_TIME, 1) * 100;
// പേജ് ലോഡ് ആകാത്തിടത്തോളം 99-ൽ നിർത്തും
if (!loaded && elapsed < MAX_WAIT) p = Math.min(p, 99);
setProgress(Math.floor(p));

if (p >= 100 && !done) {
done = true;
timers.push(setTimeout(() => setLeaving(true), HOLD));
timers.push(
setTimeout(() => {
setShow(false);
document.body.style.overflow = "";
sessionStorage.setItem("introSeen", "1");
}, HOLD + SLIDE)
);
return;
}
raf = requestAnimationFrame(tick);
};
raf = requestAnimationFrame(tick);

return () => {
cancelAnimationFrame(raf);
timers.forEach(clearTimeout);
window.removeEventListener("load", onLoad);
document.body.style.overflow = "";
};
}, []);

if (!show) return null;

return (
<div
role="status"
aria-label="Loading Bake Magic Live Bakery"
style={{ transitionDuration: `${SLIDE}ms` }}
className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-maroon transition-transform ease-[cubic-bezier(0.83,0,0.17,1)] ${
leaving ? "-translate-y-full" : "translate-y-0"
}`}
>
<div
className={`flex flex-col items-center transition-all duration-700 ease-out ${
leaving ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
}`}
>
<h1 className="font-display flex text-[11vw] leading-none text-orange sm:text-7xl">
{TITLE.split("").map((ch, i) => (
<span
key={i}
className="intro-letter inline-block"
style={{ animationDelay: `${i * 110}ms` }}
>
{ch === " " ? "\u00A0" : ch}
</span>
))}
</h1>

<p className="intro-sub font-display mt-4 rounded-full bg-lime px-4 py-1.5 text-[3.2vw] text-maroon sm:text-sm">
LIVE BAKERY
</p>

<div className="mt-10 h-1 w-44 overflow-hidden rounded-full bg-cream/20">
<div
className="h-full bg-orange"
style={{ width: `${progress}%` }}
/>
</div>
<p className="font-display mt-3 text-xs text-cream">{progress}%</p>
</div>
</div>
);
}