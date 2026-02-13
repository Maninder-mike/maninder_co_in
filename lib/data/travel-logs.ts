import { TravelLog } from "../types";

export const travelLogs: TravelLog[] = [
    {
        id: "1",
        slug: "California",
        title: "California",
        description: "The ultimate West Coast expedition. Silicon Valley tech, Hollywood glitz, and Pacific Coast Highway vistas.",
        cover_image: "bg-gradient-to-br from-orange-400 to-rose-600",
        start_date: "2025-05-01",
        end_date: "2025-05-15",
        content: `
## The Golden State Expedition

California offers a perfect blend of technological innovation and natural beauty. This 15-day trip covers the most iconic spots on the West Coast.

### Silicon Valley: The Tech Heart
- **Computer History Museum**: A must-visit in Mountain View.
- **Apple Park Visitor Center**: Experience the architecture and tech in Cupertino.
- **Stanford University**: Walk through the historic campus and the Rodin Sculpture Garden.

### San Francisco: Fog and Bridges
- **Golden Gate Bridge**: Rent a bike and ride across to Sausalito.
- **Alcatraz Island**: Book your ferry at least 4 weeks in advance!
- **Pier 39**: Watch the sea lions and explore Fisherman's Wharf.

### Los Angeles: Entertainment Capital
- **Hollywood Sign Hike**: Best views from the Griffith Observatory.
- **Santa Monica Pier**: Iconic Pacific Ocean views and beach vibes.
- **Warner Bros Studio Tour**: Get behind the scenes of filmmaking.

### Pro Tips for Users
- **Rental Car**: Essential for California. Pick up at SFO and drop off at LAX.
- **Pacific Coast Highway (PCH)**: If time permits, drive Highway 1 instead of I-5 for breathtaking ocean views.
- **Weather**: Bring layers! San Francisco is surprisingly chilly even in Summer.
        `,
        locations_to_visit: ["San Francisco", "San Jose", "Monterey", "Santa Barbara", "Los Angeles"],
        transportation_rates: {
            "Bus (Inter-city)": "$25",
            "Private Taxi": "$80",
            "Flight (SFO-LAX)": "$120",
            "Rental Car (Daily)": "$65",
        },
        published: true,
    },
    {
        id: "2",
        slug: "canadian-rockies",
        title: "The Majestic Canadian Rockies",
        description: "Turquoise lakes, snow-capped peaks, and wild adventures in Alberta and British Columbia.",
        cover_image: "bg-gradient-to-br from-cyan-500 to-blue-700",
        start_date: "2025-07-10",
        end_date: "2025-07-24",
        content: `
## Peak Adventure: Banff to Vancouver

The Canadian Rockies in mid-summer are a sight to behold. This journey takes you from the soaring peaks of Banff to the coastal beauty of Vancouver.

### Banff & Lake Louise
- **Lake Louise**: Visit at sunrise to avoid the crowds and see the reflection of Victoria Glacier.
- **Banff Gondola**: Panoramic views of six mountain ranges.
- **Moraine Lake**: The most photographed lake in Canada (accessible only by shuttle).

### Jasper National Park
- **Icefields Parkway**: Rated one of the world's most beautiful drives.
- **Athabasca Glacier**: Walk on ancient ice with a guided tour.

### Vancouver: The Gateway
- **Stanley Park**: Cycle the 9km seawall for ocean and mountain views.
- **Granville Island**: Incredible local food markets and artisan shops.

### Trip Usability Guide
- **Park Passes**: Buy a "Discovery Pass" if you're visiting more than two national parks.
- **Wildlife Awareness**: Always maintain distance from elk and bears. Carry bear spray on hikes.
- **Best Time**: July and August offer perfect hiking weather.
        `,
        locations_to_visit: ["Banff", "Lake Louise", "Jasper", "Kamloops", "Vancouver"],
        transportation_rates: {
            "VIA Rail (The Canadian)": "$400+",
            "Brewster Express Shuttle": "$100",
            "Car Rental": "$85 CAD",
            "BC Ferries": "$20",
        },
        published: true,
    },
    {
        id: "3",
        slug: "atlantic-corridor",
        title: "The Atlantic Corridor: NYC to Toronto",
        description: "An urban odyssey spanning two countries. The skyline of Manhattan to the CN Tower.",
        cover_image: "/images/travel/atlantic-corridor.png",
        start_date: "2025-09-05",
        end_date: "2025-09-18",
        content: `
## Urban Exploration: NYC • Buffalo • Toronto

Cross the world's longest undefended border in style. This trip focuses on high-density culture, architecture, and food.

### New York City
- **Times Square & Broadway**: Catch a show and soak in the neon.
- **Central Park**: A green oasis in the concrete jungle.
- **The High Line**: Modern urban park built on a rail line.

### Niagara Falls & Buffalo
- **Maid of the Mist**: Get soaked by the power of the falls.
- **Buffalo Wings**: Visit Anchor Bar (the birthplace) for the real deal.

### Toronto
- **CN Tower**: Walk on the glass floor 113 floors up.
- **Distillery District**: Historic area with Victorian architecture and craft beer.

### Cross-Border Logistics
- **Passport**: Essential. Check visa requirements if you are not a citizen of the US/Canada.
- **Amtrak 'Maple Leaf'**: A scenic 12-hour train ride directly from NYC to Toronto.
- **Currency**: Buffalo uses USD, Toronto uses CAD. Most places are card-only now.
        `,
        locations_to_visit: ["New York City", "Buffalo", "Niagara Falls", "Toronto"],
        transportation_rates: {
            "Amtrak (NYC-Toronto)": "$135",
            "Greyhound Bus": "$65",
            "NYC Subway": "$2.90",
            "Toronto TTC": "$3.30",
        },
        published: true,
    },
    {
        id: "4",
        slug: "florida-sunshine",
        title: "Florida: The Sunshine State",
        description: "From the world's best theme parks to the neon lights of South Beach and the tropical vibes of Key West.",
        cover_image: "bg-gradient-to-br from-yellow-400 to-orange-500",
        start_date: "2025-11-01",
        end_date: "2025-11-15",
        content: `
## Sunshine & Sea: Orlando to Key West

Florida offers an unparalleled mix of family fun, coastal luxury, and unique ecosystems.

### Orlando: Theme Park Capital
- **Walt Disney World**: Plan your Genie+ strategy in advance.
- **Universal Studios**: Visit the Wizarding World of Harry Potter early in the morning.
- **Kennedy Space Center**: Witness the history of space flight (1 hour from Orlando).

### Miami & South Beach
- **Art Deco District**: Take a walking tour of Ocean Drive's historic architecture.
- **Little Havana**: Experience the vibrant Cuban culture on Calle Ocho.
- **Everglades Airboat Tour**: Spot alligators in their natural habitat.

### The Overseas Highway
- **Seven Mile Bridge**: One of the most scenic drives in the world.
- **Key West**: End your day at Mallory Square for the legendary sunset celebration.

### Pro Logistics
- **SunPass**: Essential for automatic toll payments on the Florida Turnpike.
- **Hurricane Season**: Be mindful of travel between June and October.
- **Hydration**: The Florida humidity is no joke—stay hydrated!
        `,
        locations_to_visit: ["Orlando", "Miami", "Key Largo", "Key West"],
        transportation_rates: {
            "Brightline Train": "$79",
            "Rental Car (Daily)": "$55",
            "Uber/Lyft (Miami)": "$25",
            "Key West Shuttle": "$90",
        },
        published: true,
    },
    {
        id: "5",
        slug: "pacific-northwest",
        title: "Pacific Northwest: Seattle & Victoria",
        description: "Emerald forests, tech giants, and island charm. A journey through Washington and BC.",
        cover_image: "bg-gradient-to-br from-emerald-600 to-teal-800",
        start_date: "2025-06-15",
        end_date: "2025-06-28",
        content: `
## The Emerald Frontier: PNW Odyssey

Explore the rain-shadowed beauty of the Pacific Northwest, where coffee culture meets rugged coasts.

### Seattle: Innovation & Coffee
- **Pike Place Market**: Catch a flying fish and visit the original Starbucks.
- **Space Needle**: High-altitude views across the Puget Sound.
- **Museum of Flight**: One of the largest air and space collections in the world.

### Victoria, BC
- **Butchart Gardens**: A world-renowned oasis transformed from a limestone quarry.
- **Royal BC Museum**: Deep dive into the First Nations history and natural past.
- **Whale Watching**: Spot Orcas and Humpbacks in the Salish Sea.

### PNW Usability
- **Clipper Ferry**: The fastest way to travel between Downtown Seattle and Downtown Victoria.
- **ORS Card**: Use a single card for all transit in Seattle.
- **Wait Times**: Victoria border crossing on the ferry can take time—arrive 90 minutes early.
        `,
        locations_to_visit: ["Seattle", "Bellevue", "Victoria", "Whistler"],
        transportation_rates: {
            "Victoria Clipper Ferry": "$160",
            "Link Light Rail": "$3.00",
            "Kenmore Air (Seaplane)": "$189",
            "BC Transit": "$2.50 CAD",
        },
        published: true,
    },
    {
        id: "6",
        slug: "quebec-heritage",
        title: "Quebec Heritage: Montreal & Quebec City",
        description: "Europe in North America. Cobblestone streets, French flair, and incredible gastronomy.",
        cover_image: "bg-gradient-to-br from-blue-600 to-indigo-900",
        start_date: "2025-10-01",
        end_date: "2025-10-12",
        content: `
## Joie de Vivre: The Quebec Corridor

Stepping into Quebec feels like a trip to Europe without the long flight. 

### Montreal: Cultural Hub
- **Old Montreal**: Stunning architecture and the Notre-Dame Basilica.
- **Mount Royal**: Hike up for the best view of the skyline.
- **Schwartz's Deli**: Famous Montreal smoked meat—expect a line!

### Quebec City: The Only Walled City
- **Château Frontenac**: The world's most photographed hotel.
- **Petit-Champlain**: One of the prettiest streets in North America.
- **Montmorency Falls**: Higher than Niagara Falls and just 15 mins from the city.

### Travel Tips
- **Language**: French is primary. Most people in tourist areas speak English, but a "Bonjour" goes a long way.
- **Fall Foliage**: October is peak time for the most beautiful red and gold leaves.
- **Poutine**: You haven't lived until you've had authentic Quebec cheese curds!
        `,
        locations_to_visit: ["Montreal", "Mont-Tremblant", "Quebec City"],
        transportation_rates: {
            "VIA Rail (Corridor)": "$55 CAD",
            "STM Metro (Day Pass)": "$11 CAD",
            "Orléans Express Bus": "$35 CAD",
            "Bixi Bike (Daily)": "$5 CAD",
        },
        published: true,
    },
    {
        id: "7",
        slug: "texas-triangle",
        title: "Texas Triangle: Legends & Tech",
        description: "Everything is bigger in Texas. From Austin's Silicon Hills to the Space Center in Houston.",
        cover_image: "bg-gradient-to-br from-red-600 to-blue-800",
        start_date: "2025-03-10",
        end_date: "2025-03-24",
        content: `
## The Lone Star Loop: Austin • San Antonio • Houston

Experience the unique culture where cowboy tradition meets cutting-edge technology.

### Austin: Live Music & Tech
- **South by Southwest (SXSW)**: Plan months in advance if visiting in March.
- **State Capitol**: An impressive pink granite structure.
- **Barton Springs**: A natural spring-fed pool consistent at 68 degrees year-round.

### San Antonio: History
- **The Alamo**: Remember the history of Texas independence.
- **River Walk**: A lush subterranean level below city streets filled with shops and dining.

### Houston: The Bayou City
- **NASA Space Center**: The home of Mission Control.
- **Museum District**: 19 world-class institutions within walking distance.

### Texas Logistics
- **BBQ**: It's a way of life here. Franklin BBQ and Terry Black's are musts.
- **Distances**: Expect long drives. Texas is huge. 
- **The Heat**: March is pleasant, but avoid July/August if you aren't a fan of 100°+ days.
        `,
        locations_to_visit: ["Austin", "San Antonio", "Houston", "Dallas"],
        transportation_rates: {
            "Rental Truck": "$75",
            "Gasoline (Per Gallon)": "Cheap!",
            "Vonlane (Luxury Bus)": "$105",
            "Uber (Austin)": "$20",
        },
        published: true,
    },
    {
        id: "8",
        slug: "southwest-crossroads",
        title: "Southwest Crossroads: Vegas & Canyon",
        description: "The neon glow of the Strip meets the eternal silence of the Grand Canyon.",
        cover_image: "bg-gradient-to-br from-amber-600 to-orange-900",
        start_date: "2025-04-15",
        end_date: "2025-04-28",
        content: `
## Neon & Nature: Nevada to Arizona

A trip of extremes—from the high-energy entertainment of Vegas to the soul-stirring depth of the Grand Canyon.

### Las Vegas: The Strip
- **Bellagio Fountains**: Free show every 30 minutes.
- **High Roller**: The world's tallest observation wheel.
- **Fremont Street**: The historic soul of Vegas under a massive LED canopy.

### The Grand Canyon
- **South Rim**: The most iconic views. Accessible year-round.
- **Bright Angel Trail**: Hike down into the canyon (be careful, coming back up is hard!).
- **Desert View Drive**: Incredible viewpoints for 25 miles along the rim.

### Southwest Guidance
- **National Park Entry**: $35 per vehicle for Grand Canyon.
- **Driving**: It's a 4-5 hour drive from Vegas to the South Rim. 
- **Hydration**: The desert is extremely dry. Carry 2 liters of water minimum per person.
        `,
        locations_to_visit: ["Las Vegas", "Hoover Dam", "Seligman", "Grand Canyon"],
        transportation_rates: {
            "Helicopter Tour": "$350",
            "Rental Car": "$60",
            "Vegas Monorail": "$5",
            "Grand Canyon Shuttle": "Free",
        },
        published: true,
    }
];
