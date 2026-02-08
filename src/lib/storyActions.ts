import type { ActionDefinition, ActorState } from "@/types/story";

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
                animationDuration: action.duration || 1000,
                animationType: 'appear',
                triggerConfetti: action.confetti === true,
            });
            if (action.confetti === true) {
                setTimeout(() => {
                    updateActor(action.actor, { triggerConfetti: false });
                }, 50);
            }
            setTimeout(() => {
                updateActor(action.actor, {
                    isAnimating: false,
                    animationType: undefined,
                });
            }, action.duration || 1000);
            break;

        case 'disappear':
            // Animar desaparición
            updateActor(action.actor, {
                isAnimating: true,
                animationDuration: action.duration || 1000,
                animationType: 'disappear',
            });
            setTimeout(() => {
                updateActor(action.actor, {
                    visible: false,
                    isAnimating: false,
                    animationType: undefined,
                });
            }, action.duration || 1000);
            break;

        case 'move':
            if (action.to) {
                updateActor(action.actor, {
                    visible: true, // Hacer visible si estaba oculto
                    currentPosition: action.to,
                    isAnimating: true,
                    animationDuration: action.duration || 1500,
                    animationType: 'move',
                });

                // Marcar como no animando después de la duración
                setTimeout(() => {
                    updateActor(action.actor, { isAnimating: false, animationType: undefined });
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
}
