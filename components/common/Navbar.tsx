"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const link = (href: string) =>
    `font-display text-xs ${
      path === href ? "text-orange" : "text-cream"
    }`;

  return (
    <header className="bg-maroon">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
        
        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange/60 text-orange sm:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={link(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl text-orange sm:text-3xl"
        >
          BAKE MAGIC
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Bag"
            className="hidden h-10 w-10 rounded-lg border border-orange/60 sm:block"
          >
            🛍
          </button>

          <Link
            href="/menu"
            className="rounded-lg bg-orange px-3 py-2 font-display text-xs text-maroon sm:px-4"
          >
            MENU
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-cream/20 px-4 pb-4 sm:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`${link(item.href)} py-3 text-sm`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}