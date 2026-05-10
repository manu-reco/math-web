// Tipos TypeScript para el sistema de cuentos interactivos

import type {
    ActionDefinition,
    ActorDefinition,
    DragTargetDefinition,
    PageDefinition,
    Position,
    StoryData,
} from "@/lib/storySchema";

export type { ActionDefinition, ActorDefinition, DragTargetDefinition, PageDefinition, Position, StoryData };

export type ActionType = ActionDefinition["action"];

export type AdvanceCondition = NonNullable<PageDefinition["advanceOn"]>;

export interface ChapterDefinition {
    actors: ActorDefinition[];
    pages: PageDefinition[];
}

// Estado de un actor en runtime
export interface ActorState {
    id: string;
    definition: ActorDefinition;
    currentPosition: Position;
    visible: boolean;
    isDragging: boolean;
    isAnimating: boolean;
    animationDuration?: number; // Duración de la animación actual en ms
    animationType?: 'appear' | 'disappear' | 'move';
    triggerConfetti?: boolean; // Indica si se debe disparar confetti al aparecer
}

// Estado de la historia en runtime
export interface StoryState {
    currentPageIndex: number;
    actors: Map<string, ActorState>;
    isTransitioning: boolean;
    isCompleted: boolean;
}
