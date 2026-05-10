import type { ActionDefinition, ActorState, Position } from "@/types/story";

const CONFETTI_COOLDOWN_MS = 300;
const confettiLastFired = new Map<string, number>();

// Type guards para el atributo "to" de las acciones
function isPositionPayload(value: ActionDefinition["to"]): value is Position {
    return (
        !!value
        && typeof value === "object"
        && "x" in value
        && "y" in value
        && typeof value.x === "number"
        && typeof value.y === "number"
    );
}

function isChangeSrcPayload(value: ActionDefinition["to"]): value is { src: string } {
    return (
        !!value
        && typeof value === "object"
        && "src" in value
        && typeof value.src === "string"
    );
}

function isChangeTextPayload(value: ActionDefinition["to"]): value is { text: string } {
    return (
        !!value
        && typeof value === "object"
        && "text" in value
        && typeof value.text === "string"
    );
}

/**
 * Ejecuta una acción sobre un actor
 * @param action - La definición de la acción a ejecutar
 * @param actor - El estado actual del actor
 * @param updateActor - Función para actualizar el estado del actor
 */
export function executeStoryAction(
    action: ActionDefinition,
    actor: ActorState,
    updateActor: (actorId: string, updates: Partial<ActorState>) => void
): void {
    switch (action.action) {
        case 'appear':
            // Ir a posición original y hacer visible
            updateActor(action.actor, {
                visible: true,
                currentPosition: { x: actor.definition.x, y: actor.definition.y },
                isAnimating: true,
                animationDuration: action.duration ?? 1000,
                animationType: 'appear',
            });
            if (action.confetti === true) {
                const now = Date.now();
                const lastFired = confettiLastFired.get(action.actor) ?? 0;

                if (now - lastFired > CONFETTI_COOLDOWN_MS) {
                    confettiLastFired.set(action.actor, now);
                    updateActor(action.actor, { triggerConfetti: true });
                    setTimeout(() => {
                        updateActor(action.actor, { triggerConfetti: false });
                    }, 50);
                }
            }
            setTimeout(() => {
                updateActor(action.actor, {
                    isAnimating: false,
                    animationType: undefined,
                });
            }, action.duration ?? 1000);
            break;

        case 'disappear':
            // Animar desaparición
            updateActor(action.actor, {
                isAnimating: true,
                animationDuration: action.duration ?? 1000,
                animationType: 'disappear',
            });
            setTimeout(() => {
                updateActor(action.actor, {
                    visible: false,
                    isAnimating: false,
                    animationType: undefined,
                });
            }, action.duration ?? 1000);
            break;

        case 'move':
            if (isPositionPayload(action.to)) {
                updateActor(action.actor, {
                    visible: true, // Hacer visible si estaba oculto
                    currentPosition: action.to,
                    isAnimating: true,
                    animationDuration: action.duration ?? 1500,
                    animationType: 'move',
                });

                // Marcar como no animando después de la duración
                setTimeout(() => {
                    updateActor(action.actor, { isAnimating: false, animationType: undefined });
                }, action.duration ?? 1500);
            }
            break;

        case 'change-src':
            if (isChangeSrcPayload(action.to)) {
                updateActor(action.actor, {
                    definition: {
                        ...actor.definition,
                        src: action.to.src,
                    },
                });
            }
            break;

        case 'change-text':
            if (isChangeTextPayload(action.to)) {
                updateActor(action.actor, {
                    definition: {
                        ...actor.definition,
                        text: action.to.text,
                    },
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
}
