-- Create running_logs table
create table if not exists public.running_logs (
  id uuid default gen_random_uuid() primary key,
  run_date date not null,
  distance_km numeric(5,2) not null,
  duration_mins integer not null,
  run_type text not null check (run_type in ('Easy', 'Tempo', 'Long Run', 'Intervals', 'Race', 'Recovery')),
  location text,
  notes text,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.running_logs enable row level security;

-- Create policy to allow read access to everyone
create policy "Allow public read access"
  on public.running_logs
  for select
  to anon, authenticated
  using (true);

-- Insert some sample data
insert into public.running_logs (run_date, distance_km, duration_mins, run_type, location, notes)
values 
  (current_date - interval '2 days', 5.00, 30, 'Easy', 'Neighborhood', 'Morning jog'),
  (current_date - interval '5 days', 12.50, 75, 'Long Run', 'River Trail', 'Feeling good'),
  (current_date - interval '8 days', 8.00, 45, 'Tempo', 'Track', 'Speed work'),
  (current_date - interval '12 days', 6.20, 38, 'Easy', 'City Park', 'Recovery run');
