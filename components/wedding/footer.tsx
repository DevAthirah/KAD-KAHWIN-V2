import { FloralDecoration } from "./floral-decoration"

export function Footer() {
  return (
    <footer className="relative px-6 py-16 bg-gradient-to-b from-card to-pink-50/80 overflow-hidden">
      {/* Top floral decoration */}
      <div className="absolute top-0 left-0 right-0 flex justify-center opacity-50">
        <FloralDecoration position="top" />
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center">
        {/* Wedding rings illustration */}
        <div className="flex items-center justify-center mb-8">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left ring */}
            <circle 
              cx="22" 
              cy="32" 
              r="14" 
              stroke="oklch(0.72 0.12 350)" 
              strokeWidth="3"
              fill="none"
            />
            <circle 
              cx="22" 
              cy="32" 
              r="10" 
              stroke="oklch(0.8 0.08 350)" 
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            {/* Right ring */}
            <circle 
              cx="42" 
              cy="32" 
              r="14" 
              stroke="oklch(0.72 0.12 350)" 
              strokeWidth="3"
              fill="none"
            />
            <circle 
              cx="42" 
              cy="32" 
              r="10" 
              stroke="oklch(0.8 0.08 350)" 
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            {/* Diamond on right ring */}
            <path 
              d="M42 18 L45 22 L42 26 L39 22 Z" 
              fill="oklch(0.9 0.05 350)"
              stroke="oklch(0.72 0.12 350)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Thank you message */}
        <h2 className="text-2xl font-sans font-medium text-foreground mb-4">
          Terima Kasih
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 font-serif">
          Kehadiran dan doa restu anda amat kami hargai.<br />
          Semoga pertemuan kita dirahmati Allah SWT.
        </p>

        {/* Couple names */}
        <div className="mb-8">
          <p className="text-lg font-sans italic text-foreground">
            Nur Aisyah & Muhammad Arif
          </p>
        </div>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-primary/30" />
          <svg className="w-5 h-5 text-primary/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="h-px w-8 bg-primary/30" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/60">
          #NurAisyahArif2026
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  )
}
