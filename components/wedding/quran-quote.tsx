export function QuranQuote() {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-pink-50/50 to-background">
      <div className="max-w-md mx-auto text-center">
        {/* Decorative top element */}
        <div className="flex items-center justify-center mb-8">
          <svg className="w-12 h-12 text-primary/30" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="24" cy="24" r="20" />
            <circle cx="24" cy="24" r="14" />
            <path d="M24 4v8M24 36v8M4 24h8M36 24h8" />
          </svg>
        </div>

        {/* Arabic text */}
        <p className="text-2xl md:text-3xl text-foreground mb-6 leading-relaxed font-serif" dir="rtl">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>

        {/* Translation */}
        <p className="text-muted-foreground text-base leading-relaxed italic mb-6 font-serif">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
          pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa 
          tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>

        {/* Surah reference */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <p className="text-sm text-muted-foreground font-medium">
            Surah Ar-Rum, Ayat 21
          </p>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
        </div>

        {/* Decorative bottom element */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-16 bg-primary/20" />
          <svg className="w-4 h-4 text-primary/40" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
          </svg>
          <div className="h-px w-16 bg-primary/20" />
        </div>
      </div>
    </section>
  )
}
