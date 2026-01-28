"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StoryPlayer from "@/components/story/StoryPlayer";
import { validateStoryData } from "@/lib/validateStory";
import type { StoryData } from "@/types/story";

interface StoryChapterConfig {
    id: string;
    storyData: unknown;
}

interface StoryPageTemplateProps {
    storyData?: unknown;
    chapters?: StoryChapterConfig[];
    backHref?: string;
    renderCompletion?: (params: {
        story: StoryData;
        chapterIndex: number;
        chapterCount: number;
        onRestart: () => void;
        onNextChapter: () => void;
        hasNextChapter: boolean;
    }) => ReactNode;
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
    renderCompletion,
    renderError,
}: StoryPageTemplateProps) {
    const [gameCompleted, setGameCompleted] = useState(false);
    const [chapterIndex, setChapterIndex] = useState(0);

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
        if (renderCompletion) {
            return (
                <>{
                    renderCompletion({
                        story: validatedStory,
                        chapterIndex,
                        chapterCount,
                        onRestart: handleRestart,
                        onNextChapter: handleNextChapter,
                        hasNextChapter,
                    })
                }</>
            );
        }
        return (
            <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center">
                <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md">
                    <div className="text-6xl mb-6">🎉</div>
                    <h1 className="text-3xl font-bold mb-4">
                        {hasNextChapter
                            ? `¡Capítulo ${chapterIndex + 1} completado!`
                            : "¡Cuento completado!"}
                    </h1>
                    <p className="text-text-secondary mb-8">
                        Has terminado de leer &quot;{validatedStory.title}&quot;
                    </p>
                    <div className="flex flex-col gap-4">
                        {hasNextChapter ? (
                            <button
                                onClick={handleNextChapter}
                                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                            >
                                Ir al capítulo {chapterIndex + 2}
                            </button>
                        ) : (
                            <button
                                onClick={handleRestart}
                                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                            >
                                Leer de nuevo
                            </button>
                        )}
                        <Link
                            href={backHref}
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-text-secondary px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                        >
                            <ArrowLeft size={20} />
                            Volver a Juegos
                        </Link>
                    </div>
                </div>
            </div>
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
                onComplete={() => setGameCompleted(true)}
            />
        </div>
    );
}
