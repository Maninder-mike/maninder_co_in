-- Run this in your Supabase SQL Editor

-- 1. Create the contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create the subscribers table (for the newsletter)
CREATE TABLE IF NOT EXISTS public.subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- 4. Least-Privilege RLS Policies
-- Allow public/anonymous submissions with strict column-length checks
CREATE POLICY "Allow public insert on contact_messages"
    ON public.contact_messages
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        char_length(name) <= 200
        AND char_length(email) <= 320
        AND char_length(message) <= 5000
    );

CREATE POLICY "Allow public insert on subscribers"
    ON public.subscribers
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        char_length(email) <= 320
    );

-- Notice: No SELECT/UPDATE/DELETE policies are granted to anon/public.
-- Only the service role (used exclusively by the /admin page) can view or manage messages.
