import type { Metadata } from "next";
import { Dela_Gothic_One, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import IntroLoader from "@/components/common/IntroLoader";
import FloatingContact from "@/components/FloatingContact";

const display = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bake Magic — Your daily fresh bake",
  description:
    "Bakes that hug you back — soft breads, cheeky donuts, and pastries made fresh daily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <IntroLoader />
        <Navbar />

        <main>{children}</main>

        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}