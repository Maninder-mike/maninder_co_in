import { notFound } from "next/navigation";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogPost, getPostBySlug, getPosts } from "../../../lib/blog";
import { SiteNav } from "../../_components/site-nav";
import { SiteFooter } from "../../_components/site-footer";
import { MDXComponents } from "../_components/mdx";
import { BlogCardCover } from "../_components/blog-card-cover";
import { ShareButton } from "../../_components/share-button";
import { Calendar, Clock, ChevronLeft, User } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Maninder`,
        description: post.summary,
    };
}

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post: BlogPost) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
            <SiteNav variant="default" />

            {/* Hero Header */}
            <div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <BlogCardCover slug={post.slug} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-black/10 to-transparent dark:from-zinc-950" />

                <div className="absolute inset-x-0 top-0 z-50 p-6 pointer-events-none">
                    <div className="mx-auto max-w-6xl flex justify-between items-center pointer-events-auto mt-20">
                        <Link
                            href="/blog"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-black/40"
                        >
                            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            All Posts
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="animate-slide-up space-y-4 sm:space-y-6 max-w-4xl px-4">
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                                Engineering
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                                {readingTime} min read
                            </div>
                        </div>

                        <h1 className="text-3xl font-black tracking-tighter text-white sm:text-5xl lg:text-7xl xl:text-8xl drop-shadow-2xl">
                            {post.title}
                        </h1>

                        {post.summary && (
                            <p className="mx-auto max-w-2xl text-base font-medium text-white/90 sm:text-lg lg:text-xl drop-shadow-lg leading-relaxed">
                                {post.summary}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 -mt-16 sm:-mt-24 relative z-10 pb-16 sm:pb-32">
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-[2.5fr_1fr]">
                    {/* Main Content Card */}
                    <div className="glass rounded-2xl sm:rounded-[2.5rem] bg-white/90 p-5 sm:p-8 dark:bg-zinc-900/90 lg:p-14 shadow-2xl order-2 lg:order-1">
                        <article className="prose prose-lg prose-zinc max-w-none dark:prose-invert">
                            <MDXRemote source={post.content} components={MDXComponents()} />
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <div className="glass lg:sticky lg:top-24 space-y-8 rounded-2xl sm:rounded-[2rem] bg-white/90 p-6 sm:p-8 dark:bg-zinc-900/90 shadow-xl">
                            <div>
                                <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                                    Post Metadata
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 dark:bg-blue-900/20">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Published</p>
                                            <p className="font-bold text-zinc-900 dark:text-zinc-100">
                                                {format(parseISO(post.date), "MMMM d, yyyy")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20">
                                            <Clock className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Read Time</p>
                                            <p className="font-bold text-zinc-900 dark:text-zinc-100">{readingTime} Minutes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-500 dark:bg-purple-900/20">
                                            <User className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Author</p>
                                            <p className="font-bold text-zinc-900 dark:text-zinc-100">Maninder Singh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                                <ShareButton title={post.title} url={`https://maninder.co.in/blog/${post.slug}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SiteFooter variant="default" />
        </div>
    );
}
