-- Create contact_messages table for the demo
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow service role to insert (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'contact_messages'
      AND policyname = 'Allow service role to insert contact messages'
  ) THEN
    CREATE POLICY "Allow service role to insert contact messages"
      ON public.contact_messages
      FOR INSERT
      TO service_role
      WITH CHECK (true);
  END IF;
END$$;

-- Optional: Create a policy to allow authenticated users to read their own messages
-- Uncomment if you want to add this functionality later
-- CREATE POLICY "Users can read all contact messages"
--   ON public.contact_messages
--   FOR SELECT
--   TO authenticated
--   USING (true);

-- Create an index on created_at for efficient sorting
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx 
  ON public.contact_messages(created_at DESC);

-- Enable UUID generation (idempotent)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Newsletter subscribers table (create fresh if missing)
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  location TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert/upsert subscribers (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'newsletter_subscribers'
      AND policyname = 'Allow service role to manage subscribers'
  ) THEN
    CREATE POLICY "Allow service role to manage subscribers"
      ON public.newsletter_subscribers
      FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END$$;

CREATE INDEX IF NOT EXISTS newsletter_subscribers_created_at_idx
  ON public.newsletter_subscribers(created_at DESC);

-- If the table already existed from a previous version, migrate it:
DO $$
BEGIN
  -- Drop obsolete columns if they exist
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'newsletter_subscribers' AND column_name = 'confirmation_token'
  ) THEN
    ALTER TABLE public.newsletter_subscribers DROP COLUMN confirmation_token;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'newsletter_subscribers' AND column_name = 'confirmed_at'
  ) THEN
    ALTER TABLE public.newsletter_subscribers DROP COLUMN confirmed_at;
  END IF;

  -- Add location column if absent
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'newsletter_subscribers' AND column_name = 'location'
  ) THEN
    ALTER TABLE public.newsletter_subscribers ADD COLUMN location TEXT;
  END IF;

  -- Convert id to UUID if needed
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'newsletter_subscribers' AND column_name = 'id' AND data_type <> 'uuid'
  ) THEN
    -- Drop existing PK constraint if present
    IF EXISTS (
      SELECT 1 FROM information_schema.table_constraints
      WHERE table_schema = 'public' AND table_name = 'newsletter_subscribers' AND constraint_type = 'PRIMARY KEY'
    ) THEN
      ALTER TABLE public.newsletter_subscribers DROP CONSTRAINT IF EXISTS newsletter_subscribers_pkey;
    END IF;

    -- Drop existing default (e.g., nextval sequence for BIGSERIAL) to allow type change
    ALTER TABLE public.newsletter_subscribers
      ALTER COLUMN id DROP DEFAULT;

    -- Convert id values to UUIDs (assign new UUIDs) and set default
    ALTER TABLE public.newsletter_subscribers
      ALTER COLUMN id TYPE UUID USING gen_random_uuid();
    ALTER TABLE public.newsletter_subscribers
      ALTER COLUMN id SET DEFAULT gen_random_uuid();
    ALTER TABLE public.newsletter_subscribers
      ADD PRIMARY KEY (id);
  END IF;
END$$;
