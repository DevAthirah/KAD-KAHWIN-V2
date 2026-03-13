"use client"

import { useState } from "react"
import { HeroSection } from "@/components/wedding/hero-section"
import { EventDetails } from "@/components/wedding/event-details"
import { QuranQuote } from "@/components/wedding/quran-quote"
import { Gallery } from "@/components/wedding/gallery"
import { Guestbook } from "@/components/wedding/guestbook"
import { GuestMessages } from "@/components/wedding/guest-messages"
import { MapSection } from "@/components/wedding/map-section"
import { Footer } from "@/components/wedding/footer"

export interface GuestMessage {
  id: string
  name: string
  message: string
  photo?: string
  createdAt: Date
}

export default function WeddingInvitation() {
  const [messages, setMessages] = useState<GuestMessage[]>([
    {
      id: "1",
      name: "Siti Aminah",
      message: "Tahniah! Semoga berbahagia hingga ke Jannah. Doa terbaik untuk kalian berdua.",
      createdAt: new Date("2026-03-01"),
    },
    {
      id: "2",
      name: "Ahmad Razak",
      message: "Selamat pengantin baru! Semoga kekal hingga ke akhir hayat.",
      createdAt: new Date("2026-03-05"),
    },
  ])

  const handleAddMessage = (newMessage: Omit<GuestMessage, "id" | "createdAt">) => {
    const message: GuestMessage = {
      ...newMessage,
      id: Date.now().toString(),
      createdAt: new Date(),
    }
    setMessages((prev) => [message, ...prev])
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EventDetails />
      <QuranQuote />
      <Gallery />
      <Guestbook onSubmit={handleAddMessage} />
      <GuestMessages messages={messages} />
      <MapSection />
      <Footer />
    </main>
  )
}
