"use client";

import { ReactNode, useState } from "react";
import StoryPlayer from "@/components/story/StoryPlayer";
import ActivityControlsText from "../ActivityControlsText";
import ActivityInstructionsModal from "../ActivityInstructionsModal";
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

    // Mostrar pantalla de finalización si el cuento ha sido completado
    return (
        <div className="pb-10">
            <FixedExitButton backHref={backHref} />
            <ActivityInstructionsModal title="Cómo jugar a Cuentos Interactivos">
                <section>
                    <h3 className="text-xl font-semibold text-primary mb-3">¿En qué consiste?</h3>
                    <p>
                        En este cuento, el alumnado sigue la historia y participa en pequeñas acciones para resolver
                        situaciones mientras avanza por la narración.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold text-primary mb-3">Cómo participar</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Lee en voz alta o deja que el alumnado lea cada escena</li>
                        <li>Haz que anticipen qué ocurrirá antes de avanzar</li>
                        <li>Refuerza estrategias y lenguaje matemático tras cada acción</li>
                    </ul>
                </section>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-blue-900">
                        <strong>Sugerencia:</strong> En {storyTitle}, pregunta al alumnado qué pistas visuales les ayudaron
                        a decidir cada respuesta.
                    </p>
                </div>

                <ActivityControlsText />
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
