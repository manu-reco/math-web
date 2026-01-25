"use client";

import { useEffect } from "react";
import type { ActionDefinition, ActorState } from "@/types/story";
import { executeStoryAction } from "@/lib/storyActions";

interface TimelineActionProps {
    action: ActionDefinition;
    actors: Map<string, ActorState>;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
}

export default function TimelineAction({ action, actors, updateActor }: TimelineActionProps) {
    useEffect(() => {
        const actor = actors.get(action.actor);
        if (!actor) return;

        // Ejecutar acción usando la función centralizada con delay si existe
        const timer = setTimeout(() => {
            executeStoryAction(action, actor, updateActor);
        }, action.delay || 0);
        
        return () => clearTimeout(timer);
    }, [action, actors, updateActor]);

    // Este componente no renderiza nada
    return null;
}
