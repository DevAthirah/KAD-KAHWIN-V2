import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapSection() {
  const venueAddress = "47, Lengkok Meru Permai 3, Halaman Meru Permai, 30020 Ipoh, Perak"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(venueAddress)}`

  return (
    <section className="px-6 py-16 bg-card">
      <div className="max-w-md mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-sans font-medium text-foreground mb-2">
            Lokasi Majlis
          </h2>
          <p className="text-sm text-muted-foreground">
            Klik untuk navigasi ke lokasi
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px w-12 bg-primary/30" />
        </div>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-sm mb-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31812.297937284704!2d101.08267597269585!3d4.6762560339934796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ca937759b51037%3A0xdeaa9bc21a922ce8!2sHalaman%20Meru%20Permai%2C%20Ipoh%2C%20Perak!5e0!3m2!1sen!2smy!4v1773585479445!5m2!1sen!2smy" 
          width="100%" 
          height="250" 
          style={{border:0}}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Venue Location"
          className="grayscale-[30%]"
          ></iframe>
        </div>

        {/* Address card */}
        <div className="bg-secondary/50 rounded-xl p-4 border border-primary/10 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-sans font-medium text-foreground text-sm mb-1">
                Rumah Perempuan
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                47, Lengkok Meru Permai 3,<br />
                Halaman Meru Permai,<br />
                Bandar Meru Raya,<br />
                30020 Ipoh, Perak
              </p>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-xl border-primary/20 hover:bg-primary/5"
          >
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-4 h-4 mr-2" />
              Google Maps
            </a>
          </Button>
          <Button
            asChild
            className="h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-4 h-4 mr-2" />
              Waze
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
