"use client";

import { ReactNode, useState } from "react";
import StoryPlayer from "@/components/story/StoryPlayer";
import ActivityInstructionsModal from "../ActivityInstructionsModal";
import StoryInstructionsContent from "@/components/actividades/cuentos/StoryInstructionsContent";
import { PdfButton } from "@/components/pildoras/ArticleComponents";
import { validateStoryData } from "@/lib/validateStory";
import type { StoryData } from "@/types/story";
import FixedExitButton from "../FixedExitButton";
import StoryErrorScreen from "./StoryErrorScreen";
import StoryCompletionScreen from "@/components/actividades/cuentos/StoryCompletionScreen";

interface StoryChapterConfig {
    id: string;
    storyData: unknown;
}

interface StoryTemplateSharedProps {
    backHref?: string;
    renderError?: (params: { chapterIndex: number; chapterCount: number }) => ReactNode;
}

interface SingleChapterStoryPageTemplateProps extends StoryTemplateSharedProps {
    storyData: unknown;
}

interface MultiChapterStoryPageTemplateProps extends StoryTemplateSharedProps {
    chapters: StoryChapterConfig[];
}

const DEFAULT_BACK_HREF = "/actividades";

/**
 * Plantilla base para páginas de cuentos interactivos.
 * Valida los datos del cuento y maneja la lógica de finalización.
 * @param chapters Configuración de capítulos del cuento.
 * @param props.backHref URL para el enlace de regreso (por defecto: "/actividades").
 * @param props.renderError Función para renderizar una pantalla de error personalizada.
 * @returns Componente de la página del cuento.
 */
function StoryPageTemplateBase({
    chapters,
    backHref = DEFAULT_BACK_HREF,
    renderError,
}: MultiChapterStoryPageTemplateProps) {
    const [gameCompleted, setGameCompleted] = useState(false);
    const [chapterIndex, setChapterIndex] = useState(0);
    const [completedChapters, setCompletedChapters] = useState<boolean[]>([]);

    const currentChapter = chapters[chapterIndex];
    const chapterCount = chapters.length;
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

    const storyTitle = (() => {
        try {
            return validateStoryData(currentChapter?.storyData).title || "este cuento";
        } catch {
            return "este cuento";
        }
    })();

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

    return (
        <div className="pb-10">
            <FixedExitButton backHref={backHref} />
            <ActivityInstructionsModal>
                <PdfButton
                    filePath={`/cuentos/Arboles-y-manzanas-el-numero-2.pdf`}
                    label={storyTitle ? `${storyTitle}` : "Descargar el cuento"} />
                <StoryInstructionsContent />
            </ActivityInstructionsModal>

            {gameCompleted ? (
                <StoryCompletionScreen
                    backHref={backHref}
                    chapterIndex={chapterIndex}
                    chapterCount={chapterCount}
                    chapterTitles={chapters.map((chapter, index) => {
                        try {
                            const parsed = validateStoryData(chapter.storyData) as StoryData;
                            return parsed.title || `Capítulo ${index + 1}`;
                        } catch {
                            return `Capítulo ${index + 1}`;
                        }
                    })}
                    completedChapters={chapters.map((_, index) => !!completedChapters[index])}
                    hasNextChapter={hasNextChapter}
                    onRestart={handleRestart}
                    onNextChapter={handleNextChapter}
                    onSelectChapter={handleSelectChapter}
                />
            ) : (
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
            )}
        </div>
    );
}

export function SingleChapterStoryPageTemplate({
    storyData,
    backHref,
    renderError,
}: SingleChapterStoryPageTemplateProps) {
    return (
        <StoryPageTemplateBase
            chapters={[{ id: "capitulo-1", storyData }]}
            backHref={backHref}
            renderError={renderError}
        />
    );
}

export function MultiChapterStoryPageTemplate({
    chapters,
    backHref,
    renderError,
}: MultiChapterStoryPageTemplateProps) {
    return (
        <StoryPageTemplateBase
            chapters={chapters}
            backHref={backHref}
            renderError={renderError}
        />
    );
}
