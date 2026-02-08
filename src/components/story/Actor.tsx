"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { ActorState } from "@/types/story";
import { ConfettiOnMount } from "./ConfettiOnMount";

interface ActorProps {
    actorState: ActorState;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
    viewportScale: number;
}

export default function Actor({ actorState, updateActor, viewportScale }: ActorProps) {
    const { definition, currentPosition, visible, animationDuration, isAnimating, animationType, triggerConfetti } = actorState;

    if (!visible) return null;

    const handleDragStart = () => {
        updateActor(actorState.id, { isDragging: true });
    };

    const handleDragEnd = () => {
        updateActor(actorState.id, { isDragging: false });
    };

    const baseScale = (definition.scale || 1) * viewportScale;

    // Convertir ms a segundos para Framer Motion
    const durationInSeconds = (animationDuration || 1500) / 1000;

    const targetOpacity = animationType === 'disappear' && isAnimating ? 0 : 1;
    const targetScale = animationType === 'disappear' && isAnimating
        ? 0.3 * viewportScale
        : baseScale;

    const commonProps = {
        style: {
            zIndex: definition.zIndex || 10,
        },
        className: "absolute",
        initial: {
            opacity: 0,
            scale: 0.3 * viewportScale,
            left: `${currentPosition.x}%`,
            top: `${currentPosition.y}%`,
            x: '-50%',
            y: '-50%',
        },
        animate: {
            opacity: targetOpacity,
            scale: targetScale,
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
                whileDrag={{ scale: baseScale * 1.1 }}
                style={{
                    ...commonProps.style,
                    zIndex: actorState.isDragging ? 100 : (definition.zIndex || 10),
                }}
            >
                {/* Añadir confetti si triggerConfetti lo indica */}
                {triggerConfetti && <ConfettiOnMount />}
                {definition.type === 'image' && definition.src && (
                    <Image
                        src={definition.src.startsWith('/') ? definition.src : `/${definition.src}`}
                        alt={actorState.id}
                        width={definition.width || 100}
                        height={definition.height || 100}
                        className="pointer-events-none select-none max-w-none"
                        draggable={false}
                    />
                )}
                {definition.type === 'text' && definition.text && (
                    <div
                        className="font-bold text-text select-none rounded-2xl shadow-xl inset-shadow-xl"
                        style={{
                            fontSize: typeof definition.textFontSize === 'number'
                                ? `${definition.textFontSize}rem`
                                : (definition.textFontSize || '2rem'),
                            backgroundColor: `rgba(255, 255, 255, ${((definition.textBackgroundOpacity ?? 30) > 1
                                ? (definition.textBackgroundOpacity ?? 30) / 100
                                : (definition.textBackgroundOpacity ?? 30))})`,
                        }}
                    >
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
                    className="pointer-events-none select-none max-w-none"
                    draggable={false}
                />
            )}
            {definition.type === 'text' && definition.text && (
                <div
                    className="font-bold text-text select-none rounded-2xl p-5"
                    style={{
                        fontSize: typeof definition.textFontSize === 'number'
                            ? `${definition.textFontSize}rem`
                            : (definition.textFontSize || '2rem'),
                        backgroundColor: `rgba(0, 0, 0, ${((definition.textBackgroundOpacity ?? 30) > 1
                            ? (definition.textBackgroundOpacity ?? 30) / 100
                            : (definition.textBackgroundOpacity ?? 30))})`,
                    }}
                >
                    {definition.text}
                </div>
            )}
            {/* Añadir confetti si triggerConfetti lo indica */}
            {triggerConfetti && <ConfettiOnMount />}
        </motion.div>
    );
}
