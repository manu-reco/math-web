"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";
import type { PageDefinition, ActorState, ActionDefinition } from "@/types/story";
import { executeStoryAction } from "@/lib/storyActions";
import { withBasePath } from "@/lib/assetPath";
import Actor from "./Actor";
import DragTarget from "./DragTarget";

interface PageProps {
    page: PageDefinition;
    actors: Map<string, ActorState>;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
    onAdvance: () => void;
    globalBackground?: string; // Background global de la historia
    globalBackgroundColor?: string; // Color de fondo global de la historia
    viewportScale: number;
}

export default function Page({ page, actors, updateActor, onAdvance, globalBackground, globalBackgroundColor, viewportScale }: PageProps) {
    const actorsRef = useRef(actors);
    const advanceOn = page.advanceOn ?? 'spaceOrClick';

    useEffect(() => {
        actorsRef.current = actors;
    }, [actors]);

    // Ejecutar una acción usando la función centralizada
    const executeAction = useCallback((action: ActionDefinition) => {
        const actor = actorsRef.current.get(action.actor);
        if (!actor) return;
        
        executeStoryAction(action, actor, updateActor);
    }, [updateActor]);

    // Ejecutar acciones onEnter cuando se monta la página
    useEffect(() => {
        if (page.onEnter) {
            page.onEnter.forEach((action, index) => {
                setTimeout(() => {
                    executeAction(action);
                }, action.delay ?? index * 100);
            });
        }

        // Auto-advance si está configurado
        if (advanceOn === 'auto' && page.autoAdvanceDelay) {
            const timer = setTimeout(() => {
                onAdvance();
            }, page.autoAdvanceDelay);
            return () => clearTimeout(timer);
        }
    }, [page.id, page.onEnter, advanceOn, page.autoAdvanceDelay, executeAction, onAdvance]);

    // Usar background de la página o el global como fallback
    const finalBackground = page.background ?? globalBackground;
    const finalBackgroundColor = page.backgroundColor ?? globalBackgroundColor ?? '#e0f2fe';

    return (
        <motion.div
            className="w-full h-full relative"
            animate={{
                backgroundColor: finalBackgroundColor,
            }}
            style={{
                backgroundImage: finalBackground ? `url(${withBasePath(finalBackground)})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Drag Targets (zonas de soltar) */}
            {page.dragTargets?.map(target => (
                <DragTarget
                    key={target.id}
                    target={target}
                    actors={actors}
                    updateActor={updateActor}
                    onComplete={() => {
                        if (advanceOn === 'dragComplete') {
                            onAdvance();
                        }
                    }}
                />
            ))}

            {/* Actores visibles en esta página */}
            {Array.from(actors.values()).map(actorState => (
                <Actor
                    key={actorState.id}
                    actorState={actorState}
                    updateActor={updateActor}
                    viewportScale={viewportScale}
                />
            ))}

        </motion.div>
    );
}