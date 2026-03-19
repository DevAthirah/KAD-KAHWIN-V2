"use client"

import { useState, useRef } from "react"
import { Upload, Send, X, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

interface GuestbookProps {
  onSubmit: (message: {
    name: string
    message: string
    attendance: string
    guest_count: number
    photo_url?: string
  }) => Promise<void>
}

export function Guestbook({ onSubmit }: GuestbookProps) {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir")
  const [guestCount, setGuestCount] = useState(1)
  const [photo, setPhoto] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    
    try {
      await onSubmit({
        name: name.trim(),
        message: message.trim(),
        attendance,
        guest_count: guestCount,
        photo_url: photo || undefined,
      })

      // Reset form
      setName("")
      setMessage("")
      setAttendance("hadir")
      setGuestCount(1)
      setPhoto(null)
    } catch (error) {
      console.error("Failed to submit:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const removePhoto = () => {
    setPhoto(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-background to-secondary/50">
      <div className="max-w-md mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-sans font-medium text-foreground mb-2">
            Ucapan & RSVP
          </h2>
          <p className="text-sm text-muted-foreground">
            Kirimkan ucapan dan sahkan kehadiran anda
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px w-12 bg-primary/30" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Nama anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card border-primary/20 focus:border-primary rounded-xl h-12 px-4"
              required
            />
          </div>

          <div>
            <Textarea
              placeholder="Tulis ucapan anda di sini..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-card border-primary/20 focus:border-primary rounded-xl min-h-[120px] px-4 py-3 resize-none"
              required
            />
          </div>

          {/* Attendance selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Kehadiran
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setAttendance("hadir")}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                  attendance === "hadir"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-primary/20 bg-card text-muted-foreground hover:border-primary/40"
                }`}
              >
                <span className="text-sm font-medium">Hadir</span>
              </button>
              <button
                type="button"
                onClick={() => setAttendance("tidak_hadir")}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                  attendance === "tidak_hadir"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-primary/20 bg-card text-muted-foreground hover:border-primary/40"
                }`}
              >
                <span className="text-sm font-medium">Tidak Hadir</span>
              </button>
            </div>
          </div>

          {/* Guest count - only show if attending */}
          {attendance === "hadir" && (
            <div className="space-y-2 text-center">
              <label className="text-sm font-medium text-foreground flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Jumlah Tetamu
              </label>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-10 h-10 rounded-full border-2 border-primary/20 bg-card flex items-center justify-center text-foreground hover:border-primary/40 transition-colors"
                >
                  -
                </button>
                <span className="text-lg font-medium text-foreground w-8 text-center">
                  {guestCount}
                </span>
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                  className="w-10 h-10 rounded-full border-2 border-primary/20 bg-card flex items-center justify-center text-foreground hover:border-primary/40 transition-colors"
                >
                  +
                </button>
                {/*<span className="text-sm text-muted-foreground">orang</span>*/}
              </div>
            </div>
          )}

          {/* Photo upload */}
          <div className="flex justify-center">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            
            {photo ? (
              <div className="relative inline-block">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/20">
                  <Image
                    src={photo}
                    alt="Uploaded photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={removePhoto}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-card rounded-full flex items-center justify-center shadow-sm"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <label
                htmlFor="photo-upload"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl cursor-pointer transition-colors border border-primary/10"
              >
                <Upload className="w-4 h-4" />
                <span className="text-sm">Muat naik foto (pilihan)</span>
              </label>
            )}
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isSubmitting || !name.trim() || !message.trim()}
            className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Menghantar...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Hantar Ucapan
              </span>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
