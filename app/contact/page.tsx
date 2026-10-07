import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Doughwey",
};

export default function ContactPage() {
  const heading = "Let's get this bread";
  const accent = "(literally).";

  const intro =
    "We love hearing from our fellow dough lovers! Drop us a message for custom orders, collaborations, or just to say hi.";

  const contactInfo = [
    {
      icon: "📍",
      text: "123 Crumb Street, New York City",
    },
    {
      icon: "📞",
      text: "(00) 000 - 0000",
    },
    {
      icon: "✉️",
      text: "hello@doughwey.com",
    },
    {
      icon: "🕖",
      text: "Open Daily: 7AM – 6PM",
    },
  ];

  const socials = [
    {
      label: "Instagram",
      href: "#",
      style: "bg-pink",
    },
    {
      label: "Facebook",
      href: "#",
      style: "bg-orange",
    },
    {
      label: "X (Twitter)",
      href: "#",
      style: "bg-cream",
    },
  ];

  const customOrder = {
    title: "Custom orders welcome!",
    text: "Planning a party? Need a special cake? Want 100 donuts for your office? We're here for it. Let's make it happen!",
  };

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-3xl px-4 pt-10 text-center sm:px-5 md:pt-16">
        <h1 className="font-display text-3xl leading-tight uppercase sm:text-5xl md:text-6xl">
          {heading}{" "}
          <span className="text-orange">{accent}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm sm:text-base">
          {intro}
        </p>
      </section>

      {/* Contact Form + Contact Info */}
      <section className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 sm:px-5 md:grid-cols-[1.4fr_1fr]">
        <ContactForm />

        <div className="flex flex-col gap-5">
          {/* Visit Us */}
          <div className="relative overflow-hidden rounded-[2rem] border border-maroon bg-[#ffd3a6] p-5 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl">
              Visit Us
            </h2>

            <ul className="mt-5 space-y-3 text-sm sm:text-base">
              {contactInfo.map((item) => (
                <li
                  key={item.text}
                  className="flex gap-3"
                >
                  <span aria-hidden>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            <Image
              src="/images/about/macaron.png"
              alt=""
              width={112}
              height={90}
              className="pointer-events-none absolute -bottom-2 -right-2 w-24 sm:w-28"
            />
          </div>

          {/* Follow Us */}
          <div className="rounded-[2rem] border border-maroon bg-[#ffd3a6] p-5 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl">
              Follow Us
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`${social.style} rounded-lg px-4 py-3 text-sm`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 md:py-16">
        <div className="rounded-[2rem] bg-lime px-5 py-10 text-center sm:px-8 sm:py-14 md:rounded-[3rem]">
          <h2 className="font-display text-3xl uppercase sm:text-5xl md:text-6xl">
            {customOrder.title}
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm sm:text-base">
            {customOrder.text}
          </p>
        </div>
      </section>
    </>
  );
}