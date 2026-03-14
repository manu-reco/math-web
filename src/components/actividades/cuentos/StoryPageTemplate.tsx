"use client";

import { ReactNode, useState } from "react";
import StoryPlayer from "@/components/story/StoryPlayer";
import InstructionText from "../InstructionText";
import { validateStoryData } from "@/lib/validateStory";
import type { StoryData } from "@/types/story";
import FixedExitButton from "../FixedExitButton";
import StoryErrorScreen from "./StoryErrorScreen";
import StoryCompletionScreen from "@/components/actividades/cuentos/StoryCompletionScreen";

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

const DEFAULT_BACK_HREF = "/actividades";

/**
 * Plantilla para páginas de cuentos interactivos.
 * Valida los datos del cuento y maneja la lógica de finalización.
 * @param props.storyData Datos del cuento a mostrar.
 * @param props.backHref URL para el enlace de regreso (por defecto: "/actividades").
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
            <>
                <FixedExitButton backHref={backHref} />
                <StoryErrorScreen
                    errorMessage="No se encontró el capítulo del cuento."
                    backHref={backHref}
                />
            </>
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
            <>
                <FixedExitButton backHref={backHref} />
                <StoryErrorScreen
                    errorMessage="Hubo un problema con los datos del cuento. Por favor, contacta al administrador."
                    backHref={backHref}
                />
            </>
        );
    }

    // Mostrar pantalla de finalización si el cuento ha sido completado
    if (gameCompleted) {
        return (
            <>
                <FixedExitButton backHref={backHref} />
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
            </>
        );
    }

    // Renderizar el reproductor del cuento
    return (
        <div className="pb-10">
            <FixedExitButton backHref={backHref} />
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
            <InstructionText />
        </div>
    );
}
