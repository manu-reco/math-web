"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { StoryData, ActorState, ActorDefinition, ActionDefinition, PageDefinition } from "@/types/story";
import Page from "./Page";
import { executeStoryAction } from "@/lib/storyActions";

interface StoryPlayerProps {
    story: StoryData;
    onComplete?: () => void;
}

export default function StoryPlayer({ story, onComplete }: StoryPlayerProps) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [actors, setActors] = useState<Map<string, ActorState>>(new Map());
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [viewportScale, setViewportScale] = useState(1);
    const actorsRef = useRef(actors);

    const currentPage = story.pages[currentPageIndex];
    const currentAdvanceOn = currentPage.advanceOn ?? 'spaceOrClick';

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

    // Ejecutar disappear al hacer “atrás” para actores que aparecieron en la página actual
    const runDisappearForAppearActions = useCallback((page: PageDefinition) => {
        const appearActions: ActionDefinition[] = [];

        if (page.onEnter) {
            appearActions.push(...page.onEnter.filter(action => action.action === "appear"));
        }

        const inlineActions = page.actors.filter(item => "action" in item) as ActionDefinition[];
        inlineActions.forEach(action => {
            if (action.action === "appear") {
                appearActions.push(action);
            }
        });

        if (appearActions.length === 0) return;

        const explicitExitDisappear = new Set(
            (page.onExit || [])
                .filter(action => action.action === "disappear")
                .map(action => action.actor)
        );

        appearActions.forEach(action => {
            if (explicitExitDisappear.has(action.actor)) return;

            const actor = actorsRef.current.get(action.actor);
            if (!actor || !actor.visible) return;

            executeStoryAction(
                {
                    actor: action.actor,
                    action: "disappear",
                    duration: action.duration,
                },
                actor,
                updateActor
            );
        });
    }, [updateActor]);

    // Inicializar actores de todas las páginas
    useEffect(() => {
        const initialActors = new Map<string, ActorState>();
        
        story.pages.forEach(page => {
            page.actors.forEach(item => {
                // Solo procesar definiciones de actores, no acciones
                if ('type' in item) {
                    const actorDef = item as ActorDefinition;
                    if (!initialActors.has(actorDef.id)) {
                        initialActors.set(actorDef.id, {
                            id: actorDef.id,
                            definition: actorDef,
                            currentPosition: { x: actorDef.x, y: actorDef.y },
                            visible: false, // Empiezan invisibles
                            isDragging: false,
                            isAnimating: false,
                            triggerConfetti: false,
                            animationType: undefined,
                        });
                    }
                }
            });
        });

        setActors(initialActors);
    }, [story]);

    // Precargar imágenes
    useEffect(() => {
        const imagesToLoad: string[] = [];

        // Recopilar todas las imágenes
        story.pages.forEach(page => {
            if (page.background) imagesToLoad.push(page.background);
            page.actors.forEach(item => {
                if ('type' in item && item.type === 'image' && item.src) {
                    imagesToLoad.push(item.src);
                }
            });
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
            img.src = src.startsWith('/') ? src : `/${src}`;
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

    // Avanzar a la siguiente página
    const advancePage = useCallback(() => {
        if (isTransitioning) return;

        for (const actor of actorsRef.current.values()) {
            if (actor.isAnimating) {
                return;
            }
        }

        if (currentPageIndex < story.pages.length - 1) {
            setIsTransitioning(true);
            setCurrentPageIndex(prev => prev + 1);
            setTimeout(() => setIsTransitioning(false), 100);
        } else {
            // Historia completada
            onComplete?.();
        }
    }, [currentPageIndex, story.pages.length, isTransitioning, onComplete]);

    // Retroceder a la página anterior
    const goToPreviousPage = useCallback(() => {
        if (isTransitioning) return;
        
        for (const actor of actorsRef.current.values()) {
            if (actor.isAnimating) {
                return;
            }
        }

        if (currentPageIndex > 0) {
            runDisappearForAppearActions(currentPage);
            setIsTransitioning(true);
            setCurrentPageIndex(prev => prev - 1);
            setTimeout(() => setIsTransitioning(false), 100);
        }
    }, [currentPageIndex, isTransitioning, currentPage, runDisappearForAppearActions]);

    // Manejador de teclado (Espacio y flechas)
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if ((event.code === 'ArrowRight' || event.code === 'Space') && currentAdvanceOn === 'spaceOrClick') {
                event.preventDefault();
                advancePage();
            } else if (event.code === 'ArrowLeft') {
                event.preventDefault();
                goToPreviousPage();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [advancePage, goToPreviousPage, currentAdvanceOn]);

    // Manejador de clic en el fondo
    const handleBackgroundClick = useCallback(() => {
        if (currentAdvanceOn === 'spaceOrClick') {
            advancePage();
        }
    }, [advancePage, currentAdvanceOn]);

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
            className="w-full h-screen overflow-hidden relative"
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
            />

            {/* Indicador de progreso con controles de navegación */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white px-3 py-2 rounded-full text-sm flex items-center gap-3">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        goToPreviousPage();
                    }}
                    disabled={currentPageIndex === 0}
                    className="hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Página anterior"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <span className="min-w-12 text-center">
                    {currentPageIndex + 1} / {story.pages.length}
                </span>
                
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        advancePage();
                    }}
                    disabled={currentPageIndex === story.pages.length - 1}
                    className="hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Página siguiente"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
