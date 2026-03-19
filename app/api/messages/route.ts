import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("guestbook_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  
  try {
    const body = await request.json();
    const { name, message, attendance, guest_count, photo_url } = body;

    // Validate required fields
    if (!name || !message || !attendance) {
      return NextResponse.json(
        { error: "Name, message, and attendance are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("guestbook_messages")
      .insert({
        name,
        message,
        attendance,
        guest_count: guest_count || 1,
        photo_url: photo_url || null,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
