import { TravelLog } from "../types";

export const travelLogs: TravelLog[] = [
    {
        id: "1",
        slug: "northern-india",
        title: "Northern India",
        description: "Exploring the mountains and culture of the Himalayas.",
        cover_image: "bg-gradient-to-br from-slate-700 to-zinc-900",
        start_date: "2024-05-01",
        end_date: "2024-05-15",
        content: "## The Journey Begins\nExploring the majestic peaks...\n## Culture\nRich traditions and local flavors.",
        locations_to_visit: ["Leh", "Manali", "Dharamshala"],
        transportation_rates: {
            "Bus": "$10",
            "Private_Taxi": "$50",
        },
        published: true,
    },
];
