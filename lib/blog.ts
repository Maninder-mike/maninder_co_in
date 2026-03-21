import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    content: string;
};

export function getPosts(): BlogPost[] {
    if (!fs.existsSync(blogDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogDirectory);
    
    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(blogDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            
            const { data, content } = matter(fileContents);
            
            return {
                slug,
                title: data.title,
                date: data.date,
                summary: data.summary,
                content,
            };
        });

    return allPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    const posts = getPosts();
    return posts.find((post) => post.slug === slug);
}
