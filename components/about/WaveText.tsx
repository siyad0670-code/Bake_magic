
import { aboutData } from "@/config/aboutData";
export default function WaveText() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-2 py-10">
      <svg viewBox="0 0 400 190" className="w-full" role="img" aria-label={aboutData.wave}>
        <defs><path id="wave" d="M10 40 C 90 20, 130 40, 190 85 S 300 130, 395 90" /></defs>
        <text className="font-display" fill="#f5702f" fontSize="30">
          <textPath href="#wave">{aboutData.wave}</textPath>
        </text>
        <image href="/images/about/macaron.png" x="270" y="95" width="110" height="90" />
        <image href="/images/about/cream-bun.png" x="10" y="85" width="100" height="100" />
      </svg>
    </section>
  );
}

