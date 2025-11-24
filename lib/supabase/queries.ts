import { supabaseServer } from "./server";

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link: string | null;
  github_url: string | null;
  image_url: string | null;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export async function getProjects(featured = false) {
  try {
    let query = supabaseServer
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (featured) {
      query = query.eq("is_featured", true);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }

    return (data as Project[]) || [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export type RunLog = {
  id: string;
  run_date: string;
  distance_km: number;
  duration_mins: number;
  run_type: string;
  location: string | null;
  notes: string | null;
};



export type Achievement = {
  distance_label: string;
  time_str: string;
  date_str: string;
  type: "5k" | "10k" | "21k" | "42k";
};

export async function getPersonalBests(): Promise<Achievement[]> {
  try {
    const { data, error } = await supabaseServer
      .from("running_logs")
      .select("*");

    if (error || !data) return [];

    const logs = data as RunLog[];
    const achievements: Achievement[] = [];

    // Helper to find best time for a minimum distance
    const findBest = (minDist: number, label: string, type: Achievement["type"]) => {
      const eligible = logs.filter((l) => l.distance_km >= minDist && l.distance_km < minDist + 2); // Within reasonable range
      if (eligible.length === 0) return;

      eligible.sort((a, b) => a.duration_mins - b.duration_mins); // Sort by fastest
      const best = eligible[0];

      const hours = Math.floor(best.duration_mins / 60);
      const mins = best.duration_mins % 60;
      const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

      achievements.push({
        distance_label: label,
        time_str: timeStr,
        date_str: new Date(best.run_date).getFullYear().toString(),
        type,
      });
    };

    findBest(5, "5K", "5k");
    findBest(10, "10K", "10k");
    findBest(21, "Half Marathon", "21k");
    findBest(42, "Marathon", "42k");

    return achievements.sort((a, b) => {
      const order = { "5k": 1, "10k": 2, "21k": 3, "42k": 4 };
      return order[a.type] - order[b.type];
    });
  } catch (e) {
    console.error(e);
    return [];
  }
}

export type TravelLog = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  cover_image: string | null;
  start_date: string | null;
  end_date: string | null;
  content: string | null;
  locations_to_visit: string[] | null;
  transportation_rates: Record<string, string> | null;
  published: boolean;
};

export async function getTravelLogs(): Promise<TravelLog[]> {
  try {
    const { data, error } = await supabaseServer
      .from("travel_logs")
      .select("*")
      .eq("published", true)
      .order("start_date", { ascending: false });

    if (error) {
      console.error("Error fetching travel logs:", error);
      return [];
    }

    return (data as TravelLog[]) || [];
  } catch (error) {
    console.error("Failed to fetch travel logs:", error);
    return [];
  }
}

export async function getTravelLogBySlug(slug: string): Promise<TravelLog | null> {
  try {
    const { data, error } = await supabaseServer
      .from("travel_logs")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      // console.error("Error fetching travel log:", error);
      return null;
    }

    return (data as TravelLog) || null;
  } catch (error) {
    console.error("Failed to fetch travel log:", error);
    return null;
  }
}
