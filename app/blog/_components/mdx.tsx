import React from 'react';

type HTMLProps<T extends HTMLElement> = React.HTMLAttributes<T>;

const components = {
    h1: (props: HTMLProps<HTMLHeadingElement>) => (
        <h1 className="mt-12 text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl text-zinc-900 dark:text-zinc-50" {...props} />
    ),
    h2: (props: HTMLProps<HTMLHeadingElement>) => (
        <h2 className="mt-16 mb-8 text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 first:mt-0" {...props} />
    ),
    h3: (props: HTMLProps<HTMLHeadingElement>) => (
        <h3 className="mt-10 mb-4 text-xl font-bold text-zinc-800 dark:text-zinc-200" {...props} />
    ),
    p: (props: HTMLProps<HTMLParagraphElement>) => (
        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium last:mb-0" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const href = props.href ?? '';
        // Block javascript: URLs to prevent XSS
        if (/^javascript:/i.test(href)) {
            return <span>{props.children}</span>;
        }
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        return (
            <a
                className="font-bold text-blue-600 underline underline-offset-4 decoration-blue-500/30 transition-colors hover:text-blue-500 hover:decoration-blue-500 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:text-blue-300 dark:hover:decoration-blue-300"
                {...props}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            />
        );
    },
    ul: (props: HTMLProps<HTMLDivElement>) => (
        <div className="space-y-4 mb-8">{props.children}</div>
    ),
    ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
        <ol className="mt-8 mb-8 list-decimal space-y-4 pl-6 text-zinc-600 dark:text-zinc-400 font-medium" {...props} />
    ),
    li: (props: HTMLProps<HTMLDivElement>) => (
        <div className="flex gap-4 items-start group">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors" />
            <div className="leading-relaxed">{props.children}</div>
        </div>
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => {
        const isInline = !props.className;
        return isInline ? (
            <code className="relative rounded bg-zinc-100 px-[0.4rem] py-[0.1rem] font-mono text-sm font-bold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200" {...props} />
        ) : (
            <code className="block rounded-2xl bg-zinc-950 p-6 font-mono text-sm text-zinc-50 overflow-x-auto border border-white/5" {...props} />
        );
    },
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="mt-8 mb-8 overflow-hidden rounded-2xl bg-zinc-950 shadow-2xl border border-white/10" {...props} />
    ),
    blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="mt-8 mb-8 border-l-4 border-blue-500 bg-blue-50/50 p-6 dark:bg-blue-900/10 rounded-r-2xl italic text-zinc-800 dark:text-zinc-200" {...props} />
    ),
    strong: (props: HTMLProps<HTMLElement>) => (
        <strong className="font-bold text-zinc-900 dark:text-zinc-100" {...props} />
    )
};

export function MDXComponents() {
    return components;
}
