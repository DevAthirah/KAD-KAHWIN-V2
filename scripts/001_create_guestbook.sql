-- Create guestbook messages table
CREATE TABLE IF NOT EXISTS public.guestbook_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  attendance TEXT NOT NULL DEFAULT 'hadir',
  guest_count INTEGER DEFAULT 1,
  photo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.guestbook_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read messages (public guestbook)
CREATE POLICY "Anyone can view guestbook messages" 
  ON public.guestbook_messages 
  FOR SELECT 
  USING (true);

-- Allow anyone to insert messages (public guestbook - no auth required)
CREATE POLICY "Anyone can add guestbook messages" 
  ON public.guestbook_messages 
  FOR INSERT 
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_guestbook_created_at 
  ON public.guestbook_messages(created_at DESC);
