import { Calendar, Clock, MapPin } from "lucide-react"

export function EventDetails() {
  return (
    <section className="px-6 py-16 bg-card">
      <div className="max-w-md mx-auto text-center">
        {/* Section title */}
        <h2 className="text-2xl font-sans font-medium text-foreground mb-8">
          Butiran Majlis
        </h2>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px w-12 bg-primary/30" />
        </div>

        {/* Event cards */}
        <div className="space-y-6">
          {/* Date */}
          <div className="bg-secondary/50 rounded-xl p-6 border border-primary/10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Tarikh
              </span>
            </div>
            <p className="text-xl font-sans font-medium text-foreground">
              Sabtu, 28 Mac 2026
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              08 Syawal 1447H
            </p>
          </div>

          {/* Time */}
          <div className="bg-secondary/50 rounded-xl p-6 border border-primary/10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Masa
              </span>
            </div>
            <p className="text-xl font-sans font-medium text-foreground">
              10:00 pagi - 12:00 tengahari
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Ketibaan tetamu bermula jam 10:00 pagi
            </p>
          </div>

          {/* Location */}
          <div className="bg-secondary/50 rounded-xl p-6 border border-primary/10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Lokasi
              </span>
            </div>
            <p className="text-xl font-sans font-medium text-foreground mb-2">
              Rumah Perempuan
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              47, Lengkok Meru Permai 3,<br />
              Halaman Meru Permai,<br />
              Bandar Meru Raya,<br />
              30020 Ipoh, Perak
            </p>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-10 flex items-center justify-center">
          <svg className="w-8 h-8 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
