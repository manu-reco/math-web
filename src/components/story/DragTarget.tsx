"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { DragTargetDefinition, ActorState } from "@/types/story";

interface DragTargetProps {
    target: DragTargetDefinition;
    actors: Map<string, ActorState>;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
    onComplete: () => void;
}

export default function DragTarget({ target }: DragTargetProps) {
    const [isHighlighted] = useState(false);

    // TODO: Implementar lógica de drag & drop cuando sea necesario
    // const checkDrop = (actorId: string, actorPos: { x: number; y: number }) => { ... }

    return (
        <motion.div
            className="absolute border-2 border-dashed border-yellow-400 bg-yellow-100/30 rounded-lg"
            style={{
                left: `${target.x}%`,
                top: `${target.y}%`,
                width: `${target.width}%`,
                height: `${target.height}%`,
                transform: 'translate(-50%, -50%)',
            }}
            animate={{
                borderColor: isHighlighted ? '#fbbf24' : '#facc15',
                backgroundColor: isHighlighted ? 'rgba(254, 243, 199, 0.5)' : 'rgba(254, 243, 199, 0.3)',
            }}
        />
    );
}
