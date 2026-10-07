const PHONE = "919710804040"; // രാജ്യ കോഡ് ഉൾപ്പെടെ, + ഇല്ലാതെ
const MESSAGE = "Hi Bake Magic, I'd like to place an order!";

export default function FloatingContact() {
return (
<div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
{/* Call */}
<a
href={`tel:+${PHONE}`}
aria-label="Call us"
className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-lg transition hover:scale-110 active:scale-95"
>
<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
<path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
</svg>
</a>

{/* WhatsApp */}
<a
href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
target="_blank"
rel="noopener noreferrer"
aria-label="Chat on WhatsApp"
className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 active:scale-95"
>
<svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
<path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.3A11 11 0 1020.5 3.5zM12 20a8.9 8.9 0 01-4.5-1.2l-.3-.2-2.8.8.8-2.7-.2-.3A8.9 8.9 0 1112 20zm4.9-6.6c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6 0a7.3 7.3 0 01-3.6-3.1c-.3-.5.3-.4.8-1.4a.5.5 0 000-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.1 5.1 0 001.1 2.7 11.700 11.700 0 004.500 3.900c1.700.700 1.700.500 2 .500a2.600 2.600 0 001.700-1.200 2.100 2.100 0 00.150-1.200c-.1-.1-.3-.2-.6-.3z" />
</svg>
</a>
</div>
);
}