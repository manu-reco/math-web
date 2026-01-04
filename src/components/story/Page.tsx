"use client";

import { useEffect, useCallback } from "react";
import { motion } from "motion/react";
import type { PageDefinition, ActorState, ActionDefinition } from "@/types/story";
import Actor from "./Actor";
import TimelineAction from "./TimelineAction";

interface PageProps {
    page: PageDefinition;
    actors: Map<string, ActorState>;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
    onAdvance: () => void;
}

export default function Page({ page, actors, updateActor, onAdvance }: PageProps) {
    // Ejecutar una acción
    const executeAction = useCallback((action: ActionDefinition) => {
        const actor = actors.get(action.actor);
        if (!actor) return;

        switch (action.action) {
            case 'appear':
                updateActor(action.actor, { visible: true });
                break;
            case 'disappear':
                updateActor(action.actor, { visible: false });
                break;
            case 'move':
                if (action.to) {
                    updateActor(action.actor, {
                        isAnimating: true,
                        currentPosition: action.to
                    });
                }
                break;
            case 'playSound':
                if (action.sound) {
                    const audio = new Audio(action.sound);
                    audio.play().catch(err => console.error('Error playing sound:', err));
                }
                break;
        }
    }, [actors, updateActor]);

    // Ejecutar acciones onEnter cuando se monta la página
    useEffect(() => {
        if (page.onEnter) {
            page.onEnter.forEach((action, index) => {
                setTimeout(() => {
                    executeAction(action);
                }, action.delay || index * 100);
            });
        }

        // Auto-advance si está configurado
        if (page.advanceOn === 'auto' && page.autoAdvanceDelay) {
            const timer = setTimeout(() => {
                onAdvance();
            }, page.autoAdvanceDelay);
            return () => clearTimeout(timer);
        }
    }, [page, executeAction, onAdvance]);

    // Encontrar actores y acciones de esta página
    const pageActions = page.actors.filter(item => 'action' in item) as ActionDefinition[];

    return (
        <motion.div
            className="w-full h-full relative"
            style={{
                backgroundColor: page.backgroundColor || '#e0f2fe',
                backgroundImage: page.background ? `url(${page.background})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            {/* Actores visibles en esta página */}
            {Array.from(actors.values()).map(actorState => (
                <Actor
                    key={actorState.id}
                    actorState={actorState}
                    updateActor={updateActor}
                />
            ))}

            {/* Ejecutar acciones de la página */}
            {pageActions.map((action, index) => (
                <TimelineAction
                    key={`${action.actor}-${index}`}
                    action={action}
                    actors={actors}
                    updateActor={updateActor}
                />
            ))}
        </motion.div>
    );
}
