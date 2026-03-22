"use client"

import Image from "next/image"
import { User, Check, X, Users } from "lucide-react"

export interface GuestMessage {
  id: string
  name: string
  message: string
  attendance: string
  guest_count: number
  photo_url?: string | null
  created_at: string
}

interface GuestMessagesProps {
  messages: GuestMessage[]
}

export function GuestMessages({ messages }: GuestMessagesProps) {
  if (messages.length === 0) {
    return (
      <section className="px-6 py-8 bg-secondary/50">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Belum ada ucapan. Jadilah yang pertama!
          </p>
        </div>
      </section>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("ms-MY", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }

  const totalAttending = messages
    .filter((m) => m.attendance === "hadir")
    .reduce((sum, m) => sum + (m.guest_count || 1), 0)

  return (
    <section className="px-6 py-8 bg-secondary/50">
      <div className="max-w-md mx-auto">
        {/* Section title */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-sans font-medium text-foreground">
            Ucapan Tetamu
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {messages.length} ucapan diterima
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-primary">
            <Users className="w-3 h-3" />
            <span>{totalAttending} tetamu akan hadir</span>
          </div>
        </div>

        {/* Messages container - scrollable */}
        <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2 scrollbar-thin">
  {messages.map((msg) => (
    <div
      key={msg.id}
      className="bg-card rounded-xl p-4 border border-primary/10 shadow-sm"
    >
      <div className="flex items-start gap-3">
        
        {/* Avatar  */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary/60" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          
          {/* Name + Attendance */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-sans font-medium text-foreground text-sm truncate">
                {msg.name}
              </h4>

              {/* Attendance badge */}
              {msg.attendance === "hadir" ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                  <Check className="w-3 h-3" />
                  Hadir
                  {msg.guest_count > 1 && (
                    <span className="ml-0.5">({msg.guest_count})</span>
                  )}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
                  <X className="w-3 h-3" />
                  Tidak Hadir
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          {msg.message && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              {msg.message}
            </p>
          )}

          {/* BIG Uploaded Photo */}
          {msg.photo_url && (
            <div className="mt-2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-primary/10">
                <Image
                  src={msg.photo_url}
                  alt="Guest photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Date */}
          <span className="block text-xs text-muted-foreground/70 mt-2">
            {formatDate(msg.created_at)}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}
