interface ProgressNavigatorProps {
    currentStep: number;
    totalSteps: number;
    onPrevious: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isPreviousDisabled?: boolean;
    isNextDisabled?: boolean;
    previousAriaLabel?: string;
    nextAriaLabel?: string;
    position?: "absolute" | "fixed";
}

export default function ProgressNavigator({
    currentStep,
    totalSteps,
    onPrevious,
    onNext,
    isPreviousDisabled = false,
    isNextDisabled = false,
    previousAriaLabel = "Elemento anterior",
    nextAriaLabel = "Elemento siguiente",
    position = "absolute",
}: ProgressNavigatorProps) {
    const displayStep = Math.min(Math.max(currentStep, 0), Math.max(totalSteps, 0));
    const basePositionClass =
        position === "fixed"
            ? "fixed bottom-4 left-1/2 -translate-x-1/2"
            : "absolute bottom-4 left-1/2 -translate-x-1/2";

    return (
        <div className={`${basePositionClass} z-30 bg-black/50 text-white px-3 py-2 rounded-full text-sm flex items-center gap-3`}>
            <button
                type="button"
                onClick={onPrevious}
                disabled={isPreviousDisabled}
                className="hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label={previousAriaLabel}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <span className="min-w-12 text-center">
                {displayStep} / {totalSteps}
            </span>

            <button
                type="button"
                onClick={onNext}
                disabled={isNextDisabled}
                className="hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label={nextAriaLabel}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
