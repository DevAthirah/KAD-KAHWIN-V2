"use client"

// Data fetching with SWR
import useSWR, { mutate } from "swr"
import { HeroSection } from "@/components/wedding/hero-section"
import { EventDetails } from "@/components/wedding/event-details"
import { QuranQuote } from "@/components/wedding/quran-quote"
import { Gallery } from "@/components/wedding/gallery"
import { Guestbook } from "@/components/wedding/guestbook"
import { GuestMessages, type GuestMessage } from "@/components/wedding/guest-messages"
import { MapSection } from "@/components/wedding/map-section"
import { Footer } from "@/components/wedding/footer"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function WeddingInvitation() {
  const { data: messages = [], isLoading } = useSWR<GuestMessage[]>(
    "/api/messages",
    fetcher
  )

  const handleAddMessage = async (newMessage: {
    name: string
    message: string
    attendance: string
    guest_count: number
    photo_url?: string
  }) => {
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })

    if (!response.ok) {
      throw new Error("Failed to submit message")
    }

    // Revalidate the messages list
    mutate("/api/messages")
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EventDetails />
      <QuranQuote />
      <Gallery />
      <Guestbook onSubmit={handleAddMessage} />
      {isLoading ? (
        <section className="px-6 py-8 bg-secondary/50">
          <div className="max-w-md mx-auto text-center">
            <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground mt-2">Memuatkan ucapan...</p>
          </div>
        </section>
      ) : (
        <GuestMessages messages={messages} />
      )}
      <MapSection />
      <Footer />
    </main>
  )
}
