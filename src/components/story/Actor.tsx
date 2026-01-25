"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { ActorState } from "@/types/story";

interface ActorProps {
    actorState: ActorState;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
}

export default function Actor({ actorState, updateActor }: ActorProps) {
    const { definition, currentPosition, visible, animationDuration } = actorState;

    if (!visible) return null;

    const handleDragStart = () => {
        updateActor(actorState.id, { isDragging: true });
    };

    const handleDragEnd = () => {
        updateActor(actorState.id, { isDragging: false });
    };

    // Convertir ms a segundos para Framer Motion
    const durationInSeconds = (animationDuration || 1500) / 1000;

    const commonProps = {
        style: {
            zIndex: definition.zIndex || 10,
        },
        className: "absolute",
        initial: {
            opacity: 0,
            scale: 0.3,
            left: `${currentPosition.x}%`,
            top: `${currentPosition.y}%`,
            x: '-50%',
            y: '-50%',
        },
        animate: { 
            opacity: 1, 
            scale: definition.scale || 1,
            rotate: definition.rotation || 0,
            left: `${currentPosition.x}%`,
            top: `${currentPosition.y}%`,
            x: '-50%',
            y: '-50%',
        },
        transition: {
            type: "tween" as const,
            ease: "easeInOut" as const,
            duration: durationInSeconds,
        },
        layout: false,
    };

    if (definition.draggable) {
        return (
            <motion.div
                {...commonProps}
                drag
                dragElastic={0.1}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: 1.1 }}
                style={{
                    ...commonProps.style,
                    zIndex: actorState.isDragging ? 100 : (definition.zIndex || 10),
                }}
            >
                {definition.type === 'image' && definition.src && (
                    <Image
                        src={definition.src.startsWith('/') ? definition.src : `/${definition.src}`}
                        alt={actorState.id}
                        width={definition.width || 100}
                        height={definition.height || 100}
                        className="pointer-events-none select-none"
                        draggable={false}
                    />
                )}
                {definition.type === 'text' && definition.text && (
                    <div className="text-2xl font-bold text-gray-800 select-none">
                        {definition.text}
                    </div>
                )}
            </motion.div>
        );
    }

    return (
        <motion.div {...commonProps}>
            {definition.type === 'image' && definition.src && (
                <Image
                    src={definition.src.startsWith('/') ? definition.src : `/${definition.src}`}
                    alt={actorState.id}
                    width={definition.width || 100}
                    height={definition.height || 100}
                    className="pointer-events-none select-none"
                    draggable={false}
                />
            )}
            {definition.type === 'text' && definition.text && (
                <div className="text-2xl font-bold text-gray-800 select-none">
                    {definition.text}
                </div>
            )}
        </motion.div>
    );
}
