"use client";

export default function InstructionText() {
    const isTouchDevice = typeof window !== "undefined" && (
        ("ontouchstart" in window) ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    );

    return (
        <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-3 underline underline-offset-4">
                Instrucciones
            </h3>
            {isTouchDevice ? (
                <p className="text-text-secondary text-lg">
                    <span className="font-semibold">Toca la pantalla</span> para avanzar
                </p>
            ) : (
                <div className="text-text-secondary text-lg space-y-2">
                    <p>
                        Pulsa <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">Espacio</kbd> o <span className="font-semibold">toca la pantalla</span> para avanzar.
                    </p>
                    <p>
                        También puedes pulsar <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">←</kbd> / <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">→</kbd> en el teclado para <span className="font-semibold">retroceder / avanzar</span>.
                    </p>
                </div>
            )}
        </div>
    );
}
