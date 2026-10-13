import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-inase-black">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-inase-black via-[#1a0000] to-inase-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,10,10,0.15)_0%,_transparent_70%)]" />

      {/* Diagonal red accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-inase-red/20 to-transparent rotate-12 origin-top" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-inase-red/10 to-transparent -rotate-6 origin-top" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,10,10,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,10,10,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Event badge */}
        <div className="inline-flex items-center gap-2 bg-inase-red/10 border border-inase-red/40 px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-inase-red rounded-full animate-pulse" />
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">
            Charity Fight Event
          </span>
        </div>

        {/* Main copy */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-in-up">
          <span className="block text-white mb-2">格闘技を通じて、</span>
          <span className="block text-inase-red text-shadow-red">
            支援の輪を広げる
          </span>
          <span className="block text-white">チャリティーファイト</span>
        </h1>

        {/* Sub copy */}
        <div className="mb-12 animate-fade-in-up">
          <p className="text-xl md:text-2xl font-bold text-gray-200 mb-2">
            INASE Charity Fight
          </p>
          <p className="text-inase-red text-lg md:text-xl font-medium tracking-wider">
            〜子供達のために。〜
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <Link
            href="/events/next"
            className="w-full sm:w-auto px-8 py-4 bg-inase-red hover:bg-inase-red-light text-white font-bold text-base tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(220,10,10,0.6)] active:scale-95"
          >
            大会情報を見る
          </Link>
          <Link
            href="/recruitment"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:border-inase-red hover:text-inase-red text-white font-bold text-base tracking-wider transition-all duration-200 active:scale-95"
          >
            選手募集を見る
          </Link>
          <Link
            href="/sponsorship"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-inase-red/50 hover:border-inase-red hover:bg-inase-red/10 text-inase-red font-bold text-base tracking-wider transition-all duration-200 active:scale-95"
          >
            協賛について
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-inase-red/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
