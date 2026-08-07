import { useEffect } from "react";

import { Button } from "@/components/ui/button";

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
                    <Button
                        variant="primary"
                        size="xl"
                        onClick={primaryAction.onClick}
                    >
                        {primaryAction.label}
                    </Button>
                )}

                <Button
                    variant="outline"
                    size="xl"
                    onClick={onRestart}
                >
                    Volver al inicio
                </Button>
            </div>
        </div>
    );
}
