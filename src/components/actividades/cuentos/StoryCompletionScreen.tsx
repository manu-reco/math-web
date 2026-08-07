"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { ArrowRight, CheckCircle2, Circle, RotateCcw } from "lucide-react";

interface StoryCompletionScreenProps {
    backHref: string;
    chapterIndex: number;
    chapterCount: number;
    chapterTitles: string[];
    completedChapters: boolean[];
    hasNextChapter: boolean;
    onRestart: () => void;
    onNextChapter: () => void;
    onSelectChapter: (index: number) => void;
}

export default function StoryCompletionScreen({
    chapterIndex,
    chapterCount,
    chapterTitles,
    completedChapters,
    hasNextChapter,
    onRestart,
    onNextChapter,
    onSelectChapter,
}: StoryCompletionScreenProps) {

    useEffect(() => {
        confetti({
            spread: 360,
        });
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center max-w-md w-full">
                <div className="text-6xl mb-6">🎉</div>
                <h1 className="text-3xl font-bold mb-2">
                    {hasNextChapter
                        ? `¡Capítulo ${chapterIndex + 1} completado!`
                        : "¡Cuento completado!"}
                </h1>
                <p className="text-text-secondary mb-8">
                    Has terminado el capítulo {chapterIndex + 1} de {chapterCount}.
                </p>

                <div className="flex flex-col gap-3 mb-8">
                    {hasNextChapter && (
                        <Button
                            variant="primary"
                            size="lg"
                            width="full"
                            onClick={onNextChapter}
                        >
                            <ArrowRight className="inline-block mr-2" />
                            Ir al capítulo {chapterIndex + 2}
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        size="lg"
                        width="full"
                        onClick={onRestart}
                    >
                        <RotateCcw className="inline-block mr-2" />
                        Volver a leer
                    </Button>
                </div>

                <div className="text-left">
                    <h2 className="text-sm font-semibold text-gray-500 mb-3">Capítulos</h2>
                    <div className="space-y-2">
                        {chapterTitles.map((title, index) => {
                            const isCompleted = completedChapters[index];
                            const isCurrent = index === chapterIndex;
                            return (
                                <Button
                                    key={index}
                                    variant={isCurrent ? "outline" : "white"}
                                    size="sm"
                                    width="full"
                                    className="justify-between"
                                    onClick={() => onSelectChapter(index)}
                                >
                                    <div className="flex items-center gap-2">
                                        {isCompleted ? (
                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Circle className="h-4 w-4 text-gray-400" />
                                        )}
                                        <span className="text-sm font-medium text-gray-800">
                                            Capítulo {index + 1}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500 truncate max-w-40">
                                        {title || `Capítulo ${index + 1}`}
                                    </span>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
