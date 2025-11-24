"use client";

import { useEffect, useState } from "react";

export function LogoAnimator() {
    const [text, setText] = useState("");
    const fullText = "Maninder";

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(timer);
            }
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <span className="text-lg font-bold tracking-tighter">
            {text}
            <span className="animate-blink">_</span>
        </span>
    );
}
