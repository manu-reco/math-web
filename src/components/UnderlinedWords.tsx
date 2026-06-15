import React from "react";

import clsx from "clsx";

interface UnderlineWordsProps {
    children: React.ReactNode;
    colorClass?: string;
}

/**
 * DoubleUnderline component renders its children with a double underline effect using SVG paths. 
 * It is used to emphasize specific words or phrases in the content.
 * * @param children - The content to be wrapped with the double underline effect.
 * @param color - The color of the underline.
 */
export function DoubleUnderline({ children, colorClass }: UnderlineWordsProps) {
    const underlineColor = colorClass || "text-current/60"
    return (
        <span className="relative inline-block">
            <svg className={`absolute -bottom-3 left-0 w-full h-4 ${underlineColor} pointer-events-none`} preserveAspectRatio="none" viewBox="0 0 100 20">
                <path
                    d="M 1,8 Q 45,5 99,12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <path
                    d="M 8,13 Q 55,10 92,14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
            {children}
        </span>
    );
}

/** 
 * Highlighter component renders its children with a highlight effect using SVG paths. 
 * It is used to emphasize specific words or phrases in the content.
 * @param children - The content to be wrapped with the highlight effect.
 * @param colorClass - The color class of the highlight.
 */
export function Highlighter({ children, colorClass }: UnderlineWordsProps) {
    const highlightColor = `text-${colorClass || "current"}`
    return (
        <span className="relative inline-block">
            <span className="relative">{children}</span>
            <svg className={clsx(`absolute -bottom-1 left-0 w-full h-5 ${highlightColor} opacity-25 pointer-events-none`)} preserveAspectRatio="none" viewBox="0 0 100 20">
                {/* Trazo cerrado con curvas suaves arriba y abajo, pero extremos rectos */}
                <path
                    d="M 1,15 C 30,12 60,17 96,13 L 99,5 C 70,8 40,3 4,7 Z"
                    fill="currentColor"
                />
            </svg>
        </span>
    );
}

export function Highlighter2({ children, colorClass }: UnderlineWordsProps) {
    const highlightColor = colorClass || "text-current/25"
    return (
        <span className="relative">
            <svg className={`absolute -bottom-1 -left-2 w-[calc(107%)] h-5 ${highlightColor}`} preserveAspectRatio="none" viewBox="0 0 100 20">
                {/* Un polígono de 4 puntos que forma un trazo grueso diagonal */}
                <path
                    d="M 1,14 L 5,4 L 99,6 L 95,16 Z"
                    fill="currentColor"
                />
            </svg>
            {children}
        </span>
    );
}
