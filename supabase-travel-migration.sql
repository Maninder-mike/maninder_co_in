-- Create travel_logs table
create table if not exists travel_logs (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text,
  cover_image text, -- CSS gradient or Image URL
  start_date date,
  end_date date,
  content text, -- Markdown content for the itinerary/guide
  locations_to_visit jsonb, -- Array of strings: ["Space Needle", "Pike Place Market"]
  transportation_rates jsonb, -- Object: {"bus": "$2.75", "train": "$10", "metro": "$3"}
  published boolean default true,
  created_at timestamptz default now()
);

-- Insert dummy data for USA destinations
insert into travel_logs (slug, title, description, cover_image, start_date, end_date, content, locations_to_visit, transportation_rates)
values
(
  'seattle',
  'Seattle',
  'Emerald City adventures with coffee and rain.',
  'bg-gradient-to-br from-emerald-500 to-teal-600',
  '2024-06-01',
  '2024-06-05',
  '## Day 1: Downtown & Waterfront\nStart your day at **Pike Place Market**. Watch the fish throwers and grab a coffee at the original Starbucks. Walk down to the waterfront for great views.\n\n## Day 2: Space Needle & Chihuly\nTake the monorail to Seattle Center. Visit the **Space Needle** for panoramic views and the **Chihuly Garden and Glass** museum right next door.\n\n## Day 3: Capitol Hill & Parks\nExplore the vibrant Capitol Hill neighborhood. Visit **Kerry Park** for that classic skyline shot.',
  '["Pike Place Market", "Space Needle", "Chihuly Garden and Glass", "Kerry Park", "Museum of Pop Culture"]',
  '{"bus": "$2.75", "light_rail": "$2.25 - $3.50", "monorail": "$3.50"}'
),
(
  'san-francisco',
  'San Francisco',
  'Golden Gate views and hilly streets.',
  'bg-gradient-to-br from-orange-500 to-red-600',
  '2024-07-10',
  '2024-07-14',
  '## Day 1: The Bay\nWalk or bike across the **Golden Gate Bridge**. Visit **Fisherman’s Wharf** and see the sea lions at Pier 39.\n\n## Day 2: Alcatraz & City\nTake the ferry to **Alcatraz Island** (book in advance!). In the afternoon, ride a cable car and visit **Lombard Street**.\n\n## Day 3: Parks & Culture\nRelax in **Golden Gate Park**. Visit the **Painted Ladies** at Alamo Square.',
  '["Golden Gate Bridge", "Alcatraz Island", "Fisherman’s Wharf", "Lombard Street", "Golden Gate Park"]',
  '{"bus": "$2.50", "cable_car": "$8.00", "bart": "Distance based"}'
),
(
  'los-angeles',
  'Los Angeles',
  'Hollywood dreams and sunny beaches.',
  'bg-gradient-to-br from-purple-500 to-pink-600',
  '2024-08-05',
  '2024-08-10',
  '## Day 1: Hollywood\nWalk the **Hollywood Walk of Fame**. See the **Chinese Theatre**. Hike up to the **Griffith Observatory** for sunset.\n\n## Day 2: Beaches\nSpend the day at **Santa Monica Pier** and walk down to **Venice Beach**.\n\n## Day 3: Art & Culture\nVisit **The Getty Center** or **LACMA**. Drive through Beverly Hills.',
  '["Hollywood Sign", "Griffith Observatory", "Santa Monica Pier", "Venice Beach", "The Getty"]',
  '{"bus": "$1.75", "metro": "$1.75", "uber": "Variable"}'
),
(
  'las-vegas',
  'Las Vegas',
  'Neon lights and desert nights.',
  'bg-gradient-to-br from-fuchsia-600 to-purple-700',
  '2024-09-01',
  '2024-09-04',
  '## Day 1: The Strip\nWalk the **Las Vegas Strip**. See the fountains at **Bellagio**. Visit **The Venetian** canals.\n\n## Day 2: Downtown & Shows\nGo to **Fremont Street Experience**. Catch a Cirque du Soleil show in the evening.\n\n## Day 3: Nature Break\nTake a trip to **Red Rock Canyon** or **Hoover Dam**.',
  '["The Strip", "Bellagio Fountains", "Fremont Street", "High Roller", "Red Rock Canyon"]',
  '{"bus": "$6 (24h pass)", "monorail": "$5", "taxi": "Expensive"}'
),
(
  'chicago',
  'Chicago',
  'Windy City architecture and deep dish pizza.',
  'bg-gradient-to-br from-sky-500 to-blue-600',
  '2024-05-15',
  '2024-05-19',
  '## Day 1: The Loop\nVisit **Millennium Park** to see "The Bean" (Cloud Gate). Go up the **Willis Tower** Skydeck.\n\n## Day 2: Art & River\nVisit the **Art Institute of Chicago**. Take an **Architecture River Cruise**.\n\n## Day 3: Navy Pier\nWalk around **Navy Pier**. Enjoy some authentic deep dish pizza.',
  '["Millennium Park", "Willis Tower", "Art Institute", "Navy Pier", "Magnificent Mile"]',
  '{"bus": "$2.25", "L-train": "$2.50", "metra": "Zone based"}'
),
(
  'new-york',
  'New York',
  'The city that never sleeps.',
  'bg-gradient-to-br from-slate-700 to-zinc-900',
  '2024-10-01',
  '2024-10-06',
  '## Day 1: Midtown\nSee **Times Square**, **Rockefeller Center**, and **Grand Central Terminal**. \n\n## Day 2: Park & Museums\nWalk through **Central Park**. Visit the **Met** or **MoMA**.\n\n## Day 3: Downtown\nWalk the **Brooklyn Bridge**. Visit the **9/11 Memorial** and **One World Observatory**.',
  '["Central Park", "Times Square", "Statue of Liberty", "Empire State Building", "Brooklyn Bridge"]',
  '{"subway": "$2.90", "bus": "$2.90", "taxi": "Metered"}'
),
(
  'dallas',
  'Dallas',
  'Big things happen here.',
  'bg-gradient-to-br from-blue-700 to-indigo-800',
  '2024-11-10',
  '2024-11-13',
  '## Day 1: History\nVisit the **Sixth Floor Museum** at Dealey Plaza. Explore the **Dallas Arts District**.\n\n## Day 2: Nature & Views\nGo to the **Dallas Arboretum**. Visit **Reunion Tower** for views.',
  '["Sixth Floor Museum", "Reunion Tower", "Dallas Arboretum", "Klyde Warren Park"]',
  '{"dart_rail": "$3 (AM/PM pass)", "bus": "$2.50"}'
),
(
  'houston',
  'Houston',
  'Space City exploration.',
  'bg-gradient-to-br from-orange-600 to-red-700',
  '2024-12-05',
  '2024-12-08',
  '## Day 1: Space\nSpend the day at **Space Center Houston**. See the Saturn V rocket.\n\n## Day 2: Museums\nExplore the **Museum District**. Visit the **Houston Museum of Natural Science**.',
  '["Space Center Houston", "Houston Zoo", "Museum of Natural Science", "The Galleria"]',
  '{"bus": "$1.25", "light_rail": "$1.25"}'
),
(
  'st-louis',
  'St. Louis',
  'Gateway to the West.',
  'bg-gradient-to-br from-yellow-500 to-amber-600',
  '2024-04-20',
  '2024-04-23',
  '## Day 1: The Arch\nVisit the **Gateway Arch**. Take the tram to the top. Walk around the park.\n\n## Day 2: City Museum\nExplore the **City Museum** - it is a giant playground for all ages.\n\n## Day 3: Forest Park\nVisit the **St. Louis Zoo** (it is free!) in Forest Park.',
  '["Gateway Arch", "City Museum", "St. Louis Zoo", "Missouri Botanical Garden"]',
  '{"metro_link": "$2.50", "bus": "$1.00"}'
)
on conflict (slug) do nothing;
