"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";

export function LogoAnimator() {
    const [text, setText] = useState("");
    const [easterEgg, setEasterEgg] = useState(false);
    const fullText = "Maninder";
    const secretMessage = " loves building cool stuff ☕✨";
    const clickCountRef = useRef(0);
    const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    const triggerEasterEgg = useCallback(() => {
        if (easterEgg) return;
        setEasterEgg(true);

        let charIndex = 0;
        const typeTimer = setInterval(() => {
            if (charIndex < secretMessage.length) {
                setText(fullText + secretMessage.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeTimer);
                // Reset after showing for 3 seconds
                setTimeout(() => {
                    setText(fullText);
                    setEasterEgg(false);
                }, 3000);
            }
        }, 60);
    }, [easterEgg]);

    const handleClick = useCallback(() => {
        clickCountRef.current++;

        if (clickTimerRef.current) {
            clearTimeout(clickTimerRef.current);
        }

        if (clickCountRef.current >= 5) {
            clickCountRef.current = 0;
            triggerEasterEgg();
            return;
        }

        // Reset click count after 800ms of inactivity
        clickTimerRef.current = setTimeout(() => {
            clickCountRef.current = 0;
        }, 800);
    }, [triggerEasterEgg]);

    return (
        <Link
            href="/"
            className="text-lg font-bold tracking-tighter cursor-pointer select-none"
            onClick={handleClick}
            aria-label="Home"
        >
            {text}
            <span className={`${easterEgg ? "animate-blink" : "animate-blink"}`}>_</span>
        </Link>
    );
}
