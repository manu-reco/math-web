// Tipos TypeScript para el sistema de cuentos interactivos

export type ActionType = 'appear' | 'disappear' | 'move' | 'drag' | 'playSound';

export type AdvanceCondition = 'spaceOrClick' | 'dragComplete' | 'auto' | 'animation';

export interface Position {
    x: number; // Porcentaje 0-100
    y: number; // Porcentaje 0-100
}

export interface ActorDefinition {
    id: string;
    type: 'image' | 'text';
    src?: string; // Para type: 'image'
    text?: string; // Para type: 'text'
    x: number; // Posición inicial X (porcentaje)
    y: number; // Posición inicial Y (porcentaje)
    width?: number; // Ancho opcional (px)
    height?: number; // Alto opcional (px)
    interactive?: boolean;
    draggable?: boolean;
    scale?: number; // Escala inicial (default 1)
    rotation?: number; // Rotación inicial en grados
    zIndex?: number; // Orden de apilamiento
}

export interface ActionDefinition {
    actor: string; // ID del actor
    action: ActionType;
    to?: Position; // Para 'move'
    duration?: number; // Duración en ms
    delay?: number; // Retraso antes de ejecutar
    easing?: string; // Función de easing
    sound?: string; // Para 'playSound'
    targetId?: string; // Para 'drag' - ID del DragTarget
}

export interface DragTargetDefinition {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    acceptsActors: string[]; // IDs de actores que acepta
}

export interface PageDefinition {
    id: string;
    background?: string; // URL del fondo
    backgroundColor?: string; // Color de fondo alternativo
    actors: (ActorDefinition | ActionDefinition)[]; // Puede contener definiciones o acciones
    onEnter?: ActionDefinition[]; // Acciones al entrar a la página
    onExit?: ActionDefinition[]; // Acciones al salir de la página
    advanceOn: AdvanceCondition;
    dragTargets?: DragTargetDefinition[];
    autoAdvanceDelay?: number; // Para advanceOn: 'auto'
}

export interface StoryData {
    title: string;
    author?: string;
    narrator?: string;
    background?: string; // Background global (se usa si la página no define uno)
    backgroundColor?: string; // Color de fondo global (se usa si la página no define uno)
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
}

// Estado de la historia en runtime
export interface StoryState {
    currentPageIndex: number;
    actors: Map<string, ActorState>;
    isTransitioning: boolean;
    isCompleted: boolean;
}
