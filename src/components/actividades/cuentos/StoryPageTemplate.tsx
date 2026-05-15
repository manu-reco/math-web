"use client";

import { ReactNode, useMemo, useState } from "react";
import StoryPlayer from "@/components/story/StoryPlayer";
import ActivityInstructionsModal from "../ActivityInstructionsModal";
import StoryInstructionsContent from "@/components/actividades/cuentos/StoryInstructionsContent";
import { PdfButton } from "@/components/pildoras/ArticleComponents";
import { validateStoryData } from "@/lib/validateStory";
import type { StoryData } from "@/types/story";
import FixedExitButton from "../FixedExitButton";
import StoryErrorScreen from "./StoryErrorScreen";
import StoryCompletionScreen from "@/components/actividades/cuentos/StoryCompletionScreen";
import { Captions, CaptionsOff } from "lucide-react";
import ExpandingFab from "@/components/ExpandingFab";

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
    const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);

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

    const parsedChapter = useMemo(() => {
        if (!currentChapter) {
            return { story: null as StoryData | null, error: new Error("Missing chapter") };
        }

        try {
            return { story: validateStoryData(currentChapter.storyData) as StoryData, error: null as Error | null };
        } catch (error) {
            return { story: null as StoryData | null, error: error as Error };
        }
    }, [currentChapter]);

    const chapterTitles = useMemo(() => chapters.map((chapter, index) => {
        try {
            const parsed = validateStoryData(chapter.storyData) as StoryData;
            return parsed.title || `Capítulo ${index + 1}`;
        } catch {
            return `Capítulo ${index + 1}`;
        }
    }), [chapters]);

    const storyTitle = parsedChapter.story?.title || "este cuento";

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
    if (parsedChapter.error || !parsedChapter.story) {
        console.error("Error validating story:", parsedChapter.error);
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

    const validatedStory = parsedChapter.story;

    return (
        <div className="pb-10">

            <FixedExitButton backHref={backHref} />
            <ActivityInstructionsModal>
                <PdfButton
                    filePath={`/cuentos/Arboles-y-manzanas-el-numero-2.pdf`}
                    label={storyTitle ? `${storyTitle}` : "Descargar el cuento"} />
                <StoryInstructionsContent />
            </ActivityInstructionsModal>

            <ExpandingFab
                top={9}
                right={1}
                icon={subtitlesEnabled ? Captions : CaptionsOff}
                label={subtitlesEnabled ? "Subtitulos" : "Subtitulos off"}
                ariaLabel={subtitlesEnabled ? "Ocultar subtitulos" : "Mostrar subtitulos"}
                onClick={() => setSubtitlesEnabled(prev => !prev)}
            />

            {gameCompleted ? (
                <StoryCompletionScreen
                    backHref={backHref}
                    chapterIndex={chapterIndex}
                    chapterCount={chapterCount}
                    chapterTitles={chapterTitles}
                    completedChapters={chapters.map((_, index) => !!completedChapters[index])}
                    hasNextChapter={hasNextChapter}
                    onRestart={handleRestart}
                    onNextChapter={handleNextChapter}
                    onSelectChapter={handleSelectChapter}
                />
            ) : (
                <StoryPlayer
                    story={validatedStory}
                    subtitlesEnabled={subtitlesEnabled}
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
