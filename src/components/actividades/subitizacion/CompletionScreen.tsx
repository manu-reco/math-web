import { useEffect } from "react";

import confetti from "canvas-confetti";

interface CompletionPrimaryAction {
    label: string;
    onClick: () => void;
}

interface CompletionScreenProps {
    levelName: string;
    primaryAction?: CompletionPrimaryAction;
    onRestart: () => void;
}

export default function CompletionScreen({
    levelName,
    primaryAction,
    onRestart,
}: CompletionScreenProps) {

    useEffect(() => {
        confetti({
            spread: 360,
        })
    }, []);

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="text-6xl mb-6">🎉</div>

            <h2 className="text-4xl font-bold mb-4">
                ¡Felicidades!
            </h2>

            <p className="text-xl text-text-secondary mb-8">
                Has completado el <strong>{levelName}</strong>
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-8">
                <p className="text-green-900 text-lg">
                    ¡Excelente trabajo! Has practicado el reconocimiento visual de cantidades.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {primaryAction && (
                    <button
                        type="button"
                        onClick={primaryAction.onClick}
                        className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        {primaryAction.label}
                    </button>
                )}

                <button
                    type="button"
                    onClick={onRestart}
                    className="px-8 py-4 bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}
