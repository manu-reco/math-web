"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StoryPlayer from "@/components/story/StoryPlayer";
import { validateStoryData } from "@/lib/validateStory";
import type { StoryData } from "@/types/story";
import StoryCompletionScreen from "@/app/juegos/cuentos/_components/StoryCompletionScreen";

interface StoryChapterConfig {
    id: string;
    storyData: unknown;
}

interface StoryPageTemplateProps {
    storyData?: unknown;
    chapters?: StoryChapterConfig[];
    backHref?: string;
    renderError?: (params: { chapterIndex: number; chapterCount: number }) => ReactNode;
}

const DEFAULT_BACK_HREF = "/juegos";

/**
 * Plantilla para páginas de cuentos interactivos.
 * Valida los datos del cuento y maneja la lógica de finalización.
 * @param props.storyData Datos del cuento a mostrar.
 * @param props.backHref URL para el enlace de regreso (por defecto: "/juegos").
 * @param props.renderCompletion Función para renderizar la pantalla de finalización personalizada.
 * @param props.renderError Función para renderizar una pantalla de error personalizada.
 * @returns Componente de la página del cuento.
 */
export default function StoryPageTemplate({
    storyData,
    chapters,
    backHref = DEFAULT_BACK_HREF,
    renderError,
}: StoryPageTemplateProps) {
    const [gameCompleted, setGameCompleted] = useState(false);
    const [chapterIndex, setChapterIndex] = useState(0);
    const [completedChapters, setCompletedChapters] = useState<boolean[]>([]);

    const resolvedChapters: StoryChapterConfig[] = chapters?.length
        ? chapters
        : storyData
            ? [{ id: "capitulo-1", storyData } as StoryChapterConfig]
            : [];

    const currentChapter = resolvedChapters[chapterIndex];
    const chapterCount = resolvedChapters.length;
    const hasNextChapter = chapterIndex < chapterCount - 1;

    const handleRestart = () => setGameCompleted(false);
    const handleNextChapter = () => {
        if (!hasNextChapter) return;
        setGameCompleted(false);
        setChapterIndex(prev => prev + 1);
    };
    const handleSelectChapter = (index: number) => {
        if (index < 0 || index >= chapterCount) return;
        setGameCompleted(false);
        setChapterIndex(index);
    };

    // Validar datos del cuento
    let validatedStory: StoryData;
    if (!currentChapter) {
        if (renderError) {
            return <>{renderError({ chapterIndex, chapterCount })}</>;
        }
        return (
            <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error al cargar el cuento</h1>
                    <p className="mb-6">
                        No se encontraron capítulos para este cuento.
                    </p>
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Volver a Juegos
                    </Link>
                </div>
            </div>
        );
    }
    try {
        validatedStory = validateStoryData(currentChapter?.storyData) as StoryData;
    } catch (error) {
        console.error("Error validating story:", error);
        if (renderError) {
            return <>{renderError({ chapterIndex, chapterCount })}</>;
        }
        return (
            <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error al cargar el cuento</h1>
                    <p className="mb-6">
                        Hubo un problema con los datos del cuento. Por favor, contacta al administrador.
                    </p>
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Volver a Juegos
                    </Link>
                </div>
            </div>
        );
    }

    // Mostrar pantalla de finalización si el cuento ha sido completado
    if (gameCompleted) {
        return (
            <StoryCompletionScreen
                backHref={backHref}
                chapterIndex={chapterIndex}
                chapterCount={chapterCount}
                chapterTitles={resolvedChapters.map((chapter, index) => {
                    try {
                        const parsed = validateStoryData(chapter.storyData) as StoryData;
                        return parsed.title || `Capítulo ${index + 1}`;
                    } catch {
                        return `Capítulo ${index + 1}`;
                    }
                })}
                completedChapters={resolvedChapters.map((_, index) => !!completedChapters[index])}
                hasNextChapter={hasNextChapter}
                onRestart={handleRestart}
                onNextChapter={handleNextChapter}
                onSelectChapter={handleSelectChapter}
            />
        );
    }

    // Renderizar el reproductor del cuento
    return (
        <div className="relative">
            <Link
                href={backHref}
                className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-text-secondary px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all flex items-center gap-2 font-medium"
            >
                <ArrowLeft size={20} />
                Salir
            </Link>

            <StoryPlayer
                story={validatedStory}
                onComplete={() => {
                    setCompletedChapters(prev => {
                        const next = [...prev];
                        next[chapterIndex] = true;
                        return next;
                    });
                    setGameCompleted(true);
                }}
            />
        </div>
    );
}
