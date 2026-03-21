import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { TravelLog } from "./types";

const travelDirectory = path.join(process.cwd(), "content/travel");

export function getTravelLogs(): TravelLog[] {
    if (!fs.existsSync(travelDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(travelDirectory);
    
    const allLogs = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(travelDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            
            const { data, content } = matter(fileContents);
            
            return {
                id: data.id,
                slug,
                title: data.title,
                description: data.description,
                cover_image: data.cover_image,
                start_date: data.start_date,
                end_date: data.end_date,
                locations_to_visit: data.locations_to_visit,
                transportation_rates: data.transportation_rates,
                published: data.published,
                content: content,
            } as TravelLog;
        });

    return allLogs.sort((a, b) => {
        if (!a.start_date) return 1;
        if (!b.start_date) return -1;
        return (new Date(b.start_date).getTime() - new Date(a.start_date).getTime());
    });
}

export function getTravelLogBySlug(slug: string): TravelLog | undefined {
    const logs = getTravelLogs();
    return logs.find((log) => log.slug === slug);
}
