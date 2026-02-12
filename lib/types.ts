export type Project = {
    id: string;
    title: string;
    description: string;
    outcome?: string;
    category?: string;
    icon?: string;
    stack: string[];
    link: string | null;
    github_url: string | null;
    image_url: string | null;
    is_featured: boolean;
    display_order: number;
    created_at?: string;
    updated_at?: string;
};

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
