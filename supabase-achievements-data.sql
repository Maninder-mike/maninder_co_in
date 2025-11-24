-- Add some achievement-worthy runs to the existing logs
insert into public.running_logs (run_date, distance_km, duration_mins, run_type, location, notes)
values 
  ('2023-10-15', 42.20, 235, 'Race', 'Toronto Waterfront', 'First Marathon!'),
  ('2024-03-10', 21.10, 105, 'Race', 'Vancouver', 'New HM PB'),
  ('2024-05-20', 10.00, 48, 'Tempo', 'Central Park', 'Fast 10k'),
  ('2024-06-15', 5.00, 22, 'Intervals', 'Track', '5k Time Trial');
