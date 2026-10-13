import Link from "next/link";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
};

type CTASectionProps = {
  title: string;
  description?: string;
  buttons: CTAButton[];
};

const variantClass = {
  primary:
    "px-8 py-4 bg-inase-red hover:bg-inase-red-light text-white font-bold tracking-wider transition-all hover:shadow-[0_0_20px_rgba(220,10,10,0.5)] active:scale-95",
  secondary:
    "px-8 py-4 bg-white hover:bg-gray-100 text-inase-black font-bold tracking-wider transition-all active:scale-95",
  outline:
    "px-8 py-4 border-2 border-inase-red text-inase-red hover:bg-inase-red hover:text-white font-bold tracking-wider transition-all active:scale-95",
};

export default function CTASection({ title, description, buttons }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-inase-black via-inase-black-light to-inase-black py-20 relative overflow-hidden">
      {/* Red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,10,10,0.1)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">{title}</h2>
        {description && (
          <p className="text-gray-400 mb-8 leading-relaxed">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {buttons.map((btn) => (
            <Link key={btn.href} href={btn.href} className={variantClass[btn.variant ?? "primary"]}>
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
