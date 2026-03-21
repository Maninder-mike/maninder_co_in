import { Metadata } from "next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { BlogPost, getPosts } from "../../lib/blog";
import { SiteNav } from "../_components/site-nav";
import { SiteFooter } from "../_components/site-footer";
import { BlogCardCover } from "./_components/blog-card-cover";

export const metadata: Metadata = {
    title: "Blog | Maninder",
    description: "Writings on software engineering, building products, and life.",
};

export default function BlogIndexPage() {
    const posts = getPosts();

    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
            <SiteNav variant="default" />

            <main className="mx-auto max-w-6xl px-6 py-32">
                <header className="mb-16">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Writings</h1>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Thoughts on software engineering, products, and running.
                    </p>
                </header>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {posts.length === 0 ? (
                        <p className="text-zinc-600 dark:text-zinc-400 col-span-full py-12 text-center">No posts found.</p>
                    ) : (
                        posts.map((post: BlogPost) => (
                            <Link 
                                key={post.slug} 
                                href={`/blog/${post.slug}`} 
                                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 block"
                            >
                                <BlogCardCover slug={post.slug} className="transition-transform duration-500 group-hover:scale-105" />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                    <h2 className="text-xl font-bold text-white mb-1 line-clamp-2">{post.title}</h2>
                                    <time className="text-sm text-white/80 font-mono mb-2 block">
                                        {format(parseISO(post.date), "MMMM d, yyyy")}
                                    </time>
                                    <span className="mt-2 inline-block translate-y-4 text-xs font-medium text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        Read Post →
                                    </span>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </main>

            <SiteFooter variant="default" />
        </div>
    );
}
