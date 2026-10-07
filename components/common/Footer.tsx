import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const bakeryName = "Bake Magic";
  const address = "123 Crumb Street, kasarkode";
  const hours = "Open Daily: 7AM – 6PM";
  const email = "hello@bakemagic.com";

  return (
    <footer className="bg-maroon px-5 pt-12 text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 text-sm md:grid-cols-4">
        <p>
          A bakery born to make mornings
          <br />
          brighter and days fluffier.
        </p>

        <div>
          <h4 className="font-display mb-3">Quick Links</h4>

          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-3">Store</h4>

          <p>{address}</p>
          <p className="mt-2">{hours}</p>
        </div>

        <div>
          <h4 className="font-display mb-3">
            Sign up to our newsletter
          </h4>

          <input
            type="email"
            placeholder={email}
            className="w-full rounded-md bg-cream px-3 py-2 text-maroon"
          />

          <button className="font-display mt-2 w-full rounded-md bg-orange py-2 text-xs text-maroon">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <p className="font-display mx-auto mt-10 max-w-6xl text-center text-[19vw] leading-none text-orange">
        {bakeryName.toUpperCase()}
      </p>

      <p className="py-6 text-center text-xs">
        © {new Date().getFullYear()} {bakeryName}. All rights reserved.
      </p>
    </footer>
  );
}