"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { StoryData, ActorState } from "@/types/story";
import Page from "./Page";
import useStoryControls from "@/hooks/use-story-controls";
import { withBasePath } from "@/lib/assetPath";
import ProgressNavigator from "@/components/actividades/ProgressNavigator";

interface StoryPlayerProps {
    story: StoryData;
    onComplete?: () => void;
    subtitlesEnabled?: boolean;
}

export default function StoryPlayer({ story, onComplete, subtitlesEnabled = true }: StoryPlayerProps) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [actors, setActors] = useState<Map<string, ActorState>>(new Map());
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [viewportScale, setViewportScale] = useState(1);
    const actorsRef = useRef(actors);

    const currentPage = story.pages[currentPageIndex];

    useEffect(() => {
        actorsRef.current = actors;
    }, [actors]);

    // Actualizar estado de actor
    const updateActor = useCallback((actorId: string, updates: Partial<ActorState>) => {
        setActors(prev => {
            const newActors = new Map(prev);
            const actor = newActors.get(actorId);
            if (actor) {
                newActors.set(actorId, { ...actor, ...updates });
            }
            return newActors;
        });
    }, []);

    const { advancePage, goToPreviousPage, handleBackgroundClick } = useStoryControls({
        story,
        currentPage,
        currentPageIndex,
        isTransitioning,
        setCurrentPageIndex,
        setIsTransitioning,
        actorsRef,
        updateActor,
        onComplete,
    });

    // Inicializar actores del cuento
    useEffect(() => {
        const initialActors = new Map<string, ActorState>();

        story.actors.forEach(actorDef => {
            if (!initialActors.has(actorDef.id)) {
                const basePosition = actorDef.type === "subtitle"
                    ? { x: 50, y: 90 }
                    : { x: actorDef.x, y: actorDef.y };
                initialActors.set(actorDef.id, {
                    id: actorDef.id,
                    definition: actorDef,
                    currentPosition: basePosition,
                    visible: false,
                    isDragging: false,
                    isAnimating: false,
                    triggerConfetti: false,
                    animationType: undefined,
                });
            }
        });

        setActors(initialActors);
    }, [story]);

    // Precargar imágenes
    useEffect(() => {
        const imagesToLoad: string[] = [];

        // Recopilar todas las imágenes
        story.actors.forEach(actor => {
            if (actor.type === 'image' && actor.src) {
                imagesToLoad.push(actor.src);
            }
        });

        story.pages.forEach(page => {
            if (page.background) imagesToLoad.push(page.background);
        });

        // Precargar
        let loadedCount = 0;
        const totalImages = imagesToLoad.length;

        if (totalImages === 0) {
            setAssetsLoaded(true);
            return;
        }

        imagesToLoad.forEach(src => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setAssetsLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                console.error(`Error loading image: ${src}`);
                if (loadedCount === totalImages) {
                    setAssetsLoaded(true);
                }
            };
            img.src = withBasePath(src);
        });
    }, [story]);

    // Escala global según ancho de pantalla (para móvil)
    useEffect(() => {
        const updateScale = () => {
            const baseWidth = 1200; // ancho de referencia
            const minScale = 0.6;
            const nextScale = Math.min(1, Math.max(minScale, window.innerWidth / baseWidth));
            setViewportScale(nextScale);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    if (!assetsLoaded) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-gray-700 font-medium">Cargando cuento...</p>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="w-full h-[calc(100dvh-4rem)] overflow-hidden relative"
            onClick={handleBackgroundClick}
        >
            <Page
                page={currentPage}
                actors={actors}
                updateActor={updateActor}
                onAdvance={advancePage}
                globalBackground={story.background}
                globalBackgroundColor={story.backgroundColor}
                viewportScale={viewportScale}
                subtitlesEnabled={subtitlesEnabled}
            />

            <ProgressNavigator
                currentStep={currentPageIndex + 1}
                totalSteps={story.pages.length}
                onPrevious={(e) => {
                    e.stopPropagation();
                    goToPreviousPage();
                }}
                onNext={(e) => {
                    e.stopPropagation();
                    advancePage();
                }}
                isPreviousDisabled={currentPageIndex === 0}
                previousAriaLabel="Página anterior"
                nextAriaLabel="Página siguiente"
                position="absolute"
            />
        </div>
    );
}
