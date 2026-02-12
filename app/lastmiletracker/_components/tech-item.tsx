
export function TechItem({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-4 font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            {name}
        </div>
    );
}
