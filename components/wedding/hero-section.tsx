import { FloralDecoration } from "./floral-decoration"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-background to-pink-50/50" />
      
      {/* Top floral decoration */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <FloralDecoration position="top" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Bismillah */}
        <p className="text-muted-foreground text-lg mb-8 font-serif">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        {/* Wedding Title */}
        <div className="mb-8">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">
            Walimatul Urus
          </p>
          <h1 className="text-3xl md:text-4xl font-sans font-semibold text-foreground tracking-wide">
            Majlis Perkahwinan
          </h1>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-primary/30" />
          <svg className="w-6 h-6 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="h-px w-16 bg-primary/30" />
        </div>

        {/* Couple Names */}
        <div className="space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-foreground italic">
            Maisarah
          </h2>
          <p className="text-2xl text-primary font-serif">&</p>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-foreground italic">
            Syarafi
          </h2>
        </div>

        {/* Save the Date */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-sm border border-primary/10">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
            Save the Date
          </p>
          <p className="text-2xl font-sans font-medium text-foreground">
            15 April 2026
          </p>
        </div>
      </div>

      {/* Bottom floral decoration */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <FloralDecoration position="bottom" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
