"use client";

import { useEffect } from "react";
import type { ActionDefinition, ActorState } from "@/types/story";

interface TimelineActionProps {
    action: ActionDefinition;
    actors: Map<string, ActorState>;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
}

export default function TimelineAction({ action, actors, updateActor }: TimelineActionProps) {
    useEffect(() => {
        const actor = actors.get(action.actor);
        if (!actor) return;

        const executeAction = () => {
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
                            currentPosition: action.to,
                            isAnimating: true,
                            animationDuration: action.duration || 1500, // Por defecto 1.5s (más lento para niños)
                        });

                        // Marcar como no animando después de la duración
                        setTimeout(() => {
                            updateActor(action.actor, { isAnimating: false });
                        }, action.duration || 1500);
                    }
                    break;

                case 'playSound':
                    if (action.sound) {
                        const audio = new Audio(action.sound);
                        audio.play().catch(err => console.error('Error playing sound:', err));
                    }
                    break;
            }
        };

        // Ejecutar con delay si existe
        const timer = setTimeout(executeAction, action.delay || 0);
        return () => clearTimeout(timer);
    }, [action, actors, updateActor]);

    // Este componente no renderiza nada
    return null;
}
