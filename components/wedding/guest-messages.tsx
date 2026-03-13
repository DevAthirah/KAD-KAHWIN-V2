"use client"

import Image from "next/image"
import type { GuestMessage } from "@/app/page"
import { User } from "lucide-react"

interface GuestMessagesProps {
  messages: GuestMessage[]
}

export function GuestMessages({ messages }: GuestMessagesProps) {
  if (messages.length === 0) {
    return null
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("ms-MY", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }

  return (
    <section className="px-6 py-8 bg-pink-50/50">
      <div className="max-w-md mx-auto">
        {/* Section title */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-sans font-medium text-foreground">
            Ucapan Tetamu
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {messages.length} ucapan diterima
          </p>
        </div>

        {/* Messages container - scrollable */}
        <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-card rounded-xl p-4 border border-primary/10 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {msg.photo ? (
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      <Image
                        src={msg.photo}
                        alt={msg.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary/60" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-sans font-medium text-foreground text-sm truncate">
                      {msg.name}
                    </h4>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
