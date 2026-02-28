import { useCallback, useEffect } from "react";

// Hook para centralizar controles de navegación del cuento (avance, retroceso y bloqueos por animación).
import type { ActorState, ActionDefinition, PageDefinition, StoryData } from "@/types/story";
import { executeStoryAction } from "@/lib/storyActions";

interface UseStoryControlsParams {
	story: StoryData;
	currentPage: PageDefinition;
	currentPageIndex: number;
	isTransitioning: boolean;
	setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>;
	setIsTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
	actorsRef: React.RefObject<Map<string, ActorState>>;
	updateActor: (actorId: string, updates: Partial<ActorState>) => void;
	onComplete?: () => void;
}

export default function useStoryControls({
	story,
	currentPage,
	currentPageIndex,
	isTransitioning,
	setCurrentPageIndex,
	setIsTransitioning,
	actorsRef,
	updateActor,
	onComplete,
}: UseStoryControlsParams) {
	const currentAdvanceOn = currentPage.advanceOn ?? "spaceOrClick";

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
	}, [actorsRef, updateActor]);

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
	}, [actorsRef, currentPageIndex, isTransitioning, onComplete, setCurrentPageIndex, setIsTransitioning, story.pages.length]);

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
	}, [actorsRef, currentPage, currentPageIndex, isTransitioning, runDisappearForAppearActions, setCurrentPageIndex, setIsTransitioning]);

	// Manejador de teclado (Espacio y flechas)
	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if ((event.code === "ArrowRight" || event.code === "Space") && currentAdvanceOn === "spaceOrClick") {
				event.preventDefault();
				advancePage();
			} else if (event.code === "ArrowLeft") {
				event.preventDefault();
				goToPreviousPage();
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [advancePage, goToPreviousPage, currentAdvanceOn]);

	// Manejador de clic en el fondo
	const handleBackgroundClick = useCallback(() => {
		if (currentAdvanceOn === "spaceOrClick") {
			advancePage();
		}
	}, [advancePage, currentAdvanceOn]);

	return {
		advancePage,
		goToPreviousPage,
		handleBackgroundClick,
	};
}
