import Hero from "@/components/home/Hero";
import DoughOfDay from "@/components/home/DoughOfDay";
import Favorites from "@/components/home/Favorites";
import Marquee from "@/components/home/Marquee";
import Testimonials from "@/components/home/Testimonials";
import FollowUs from "@/components/home/FollowUs";

export default function Home() {
  return (
    <>
      <Hero />
      <DoughOfDay />
      <Favorites />
      <Marquee />
      <Testimonials />
      <FollowUs />
    </>
  );
}
