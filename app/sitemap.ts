import { MetadataRoute } from "next";
import { getTravelLogs } from "@/lib/travel";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const travelEntries: MetadataRoute.Sitemap = getTravelLogs()
    .filter((log) => log.published)
    .map((log) => ({
      url: `https://maninder.co.in/travel/${log.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const blogEntries: MetadataRoute.Sitemap = getPosts()
    .map((post) => ({
      url: `https://maninder.co.in/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    {
      url: "https://maninder.co.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://maninder.co.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://maninder.co.in/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://maninder.co.in/milow",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://maninder.co.in/docscannerplus",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://maninder.co.in/lastmiletracker",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...travelEntries,
    ...blogEntries,
  ];
}
