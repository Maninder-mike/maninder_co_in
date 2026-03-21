import Image from "next/image";

export function HeroGraphic() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-zinc-100 shadow-xl dark:bg-zinc-900/50 sm:aspect-[4/3] lg:aspect-square lg:w-[600px]">
            <Image
                src="/lastmile-app.png"
                alt="Last Mile Tracker UI"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
}
