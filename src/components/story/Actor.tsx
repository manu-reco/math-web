"use client";

import React, { useRef, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import type { ActorState } from "@/types/story";
import { ConfettiOnMount } from "./ConfettiOnMount";
import { fireStarsConfetti } from "@/lib/confetti";
import { withBasePath } from "@/lib/assetPath";

interface ActorProps {
    actorState: ActorState;
    updateActor: (actorId: string, updates: Partial<ActorState>) => void;
    viewportScale: number;
}

export default function Actor({ actorState, updateActor, viewportScale }: ActorProps) {
    const { definition, currentPosition, visible, animationDuration, isAnimating, animationType, triggerConfetti } = actorState;
    const imageWidth = definition.width ?? 100;
    const imageHeight = definition.height ?? 100;
    const isSubtitle = definition.type === "subtitle";
    const isDraggable = !!definition.draggable && !isSubtitle;

    // Referencia para localizar el elemento en pantalla
    const actorRef = useRef<HTMLDivElement>(null);

    // Función para calcular la posición y disparar el confetti
    const handleConfetti = useCallback(() => {
        if (actorRef.current) {
            const rect = actorRef.current.getBoundingClientRect();
            const x = (rect.left + rect.width / 2) / window.innerWidth;
            const y = (rect.top + rect.height / 2) / window.innerHeight;
            fireStarsConfetti({ x, y });
        } else {
            fireStarsConfetti(); // Fallback al centro
        }
    }, []);

    if (!visible) return null;

    const handleDragStart = () => {
        updateActor(actorState.id, { isDragging: true });
    };

    const handleDragEnd = () => {
        updateActor(actorState.id, { isDragging: false });
    };

    const baseScale = (definition.scale ?? 1) * viewportScale;

    // Convertir ms a segundos para Framer Motion
    const durationInSeconds = (animationDuration ?? 1500) / 1000;

    const targetOpacity = animationType === 'disappear' && isAnimating ? 0 : 1;
    const targetScale = animationType === 'disappear' && isAnimating
        ? 0.3 * viewportScale
        : baseScale;

    const renderPosition = isSubtitle
        ? { x: 50, y: 90 }
        : currentPosition;

    const subtitleDefaults = {
        fontSize: "1.2rem",
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        strokeWidth: "8px",
        strokeColor: "white",
        textShadow: "2px 2px 3px black",
    };

    const commonProps = {
        style: {
            zIndex: definition.zIndex ?? (isSubtitle ? 15 : 10),
        },
        className: "absolute border-0",
        initial: {
            opacity: 0,
            scale: 0.3 * viewportScale,
            left: `${renderPosition.x}%`,
            top: `${renderPosition.y}%`,
            x: '-50%',
            y: '-50%',
        },
        animate: {
            opacity: targetOpacity,
            scale: targetScale,
            rotate: definition.rotation || 0,
            left: `${renderPosition.x}%`,
            top: `${renderPosition.y}%`,
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

    // Contenido interno para evitar duplicar código de Imagen/Texto
    const renderContent = () => (
        <>
            {definition.type === 'image' && definition.src && (
                <div
                    className="relative pointer-events-none select-none max-w-none"
                    style={{ width: imageWidth, height: imageHeight }}
                >
                    <Image
                        src={withBasePath(definition.src)}
                        alt={actorState.id}
                        fill
                        sizes={`${imageWidth}px`}
                        className="object-contain"
                        draggable={false}
                    />
                </div>
            )}
            {(definition.type === 'text' || definition.type === 'subtitle') && definition.text && (() => {
                const fontSize = isSubtitle
                    ? subtitleDefaults.fontSize
                    : (typeof definition.textFontSize === "number"
                        ? `${definition.textFontSize}rem`
                        : (definition.textFontSize || "2rem"));

                const backgroundColor = isSubtitle
                    ? subtitleDefaults.backgroundColor
                    : (definition.draggable
                        ? `rgba(255, 255, 255, ${((definition.textBackgroundOpacity ?? 30) > 1 ? (definition.textBackgroundOpacity ?? 30) / 100 : (definition.textBackgroundOpacity ?? 30))})`
                        : `rgba(0, 0, 0, ${((definition.textBackgroundOpacity ?? 30) > 1 ? (definition.textBackgroundOpacity ?? 30) / 100 : (definition.textBackgroundOpacity ?? 30))})`);

                const strokeWidth = definition.textOutlineSize ?? (isSubtitle ? subtitleDefaults.strokeWidth : undefined);
                const strokeColor = definition.textOutlineColor ?? (isSubtitle ? subtitleDefaults.strokeColor : undefined);
                const useStroke = isSubtitle || definition.textOutline;

                return (
                    <div
                        className={`font-bold text-${definition.textColor ?? 'text'} ${useStroke ? 'text-stroke' : ''} select-none rounded-2xl ${isDraggable ? 'shadow-xl inset-shadow-xl' : 'p-5'} ${isSubtitle ? 'w-[90vw] text-center' : ''}`}
                        style={{
                            fontSize,
                            backgroundColor,
                            textShadow: isSubtitle ? subtitleDefaults.textShadow : undefined,
                            ...(useStroke
                                ? {
                                    ["--stroke-width" as keyof React.CSSProperties]: strokeWidth,
                                    ["--stroke-color" as keyof React.CSSProperties]: strokeColor,
                                }
                                : undefined),
                        }}
                    >
                        {definition.text}
                    </div>
                );
            })()}
            {/* Añadir confetti si triggerConfetti lo indica */}
            {triggerConfetti && <ConfettiOnMount onMount={handleConfetti} />}
        </>
    );

    if (isDraggable) {
        return (
            <motion.div
                ref={actorRef}
                {...commonProps}
                drag
                dragElastic={0.1}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: baseScale * 1.1 }}
            >
                {renderContent()}
            </motion.div>
        );
    }

    return (
        <motion.div ref={actorRef} {...commonProps}>
            {renderContent()}
        </motion.div>
    );
}
