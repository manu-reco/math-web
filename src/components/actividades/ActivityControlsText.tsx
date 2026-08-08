"use client";

import { Highlighter } from "../UnderlinedWords";

export default function ActivityControlsText() {
    const isTouchDevice = typeof window !== "undefined" && (
        ("ontouchstart" in window) ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    );

    return (
        <>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Highlighter>Controles</Highlighter>
            </h3>
            {isTouchDevice ? (
                <p className="body-md text-text-secondary">
                    <span className="font-semibold">Toca la pantalla</span> para avanzar
                </p>
            ) : (
                <div className="body-md text-text-secondary space-y-2">
                    <p>
                        Pulsa <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">Espacio</kbd> o <span className="font-semibold">toca la pantalla</span> para avanzar.
                    </p>
                    <p>
                        También puedes pulsar <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">←</kbd> / <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">→</kbd> en el teclado para <span className="font-semibold">retroceder / avanzar</span>.
                    </p>
                </div>
            )}
        </>
    );
}
