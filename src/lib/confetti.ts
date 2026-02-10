import confetti from "canvas-confetti";

export function fireStarsConfetti(options?: { x: number; y: number }) {
    if (typeof window === "undefined") return;

    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 20,
        colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
        origin: {
            x: options?.x ?? 0.5,
            y: options?.y ?? 0.5
        }
    };

    const shoot = () => {
        confetti({
            ...defaults,
            particleCount: 40,
            shapes: ["star"],
        });
    };

    setTimeout(shoot, 100);
}
