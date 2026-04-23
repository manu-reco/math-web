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

    const commonProps = {
        style: {
            zIndex: definition.zIndex ?? 10,
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
            {definition.type === 'text' && definition.text && (
                <div
                    className={`font-bold text-${definition.textColor ?? 'text'} ${definition.textOutline ? 'text-outline' : ''} ${definition.textOutlineSize ? '[--outline-size:' + definition.textOutlineSize + ']' : ''} ${definition.textOutlineColor ? '[--outline-color:' + definition.textOutlineColor + ']' : ''} select-none rounded-2xl ${definition.draggable ? 'shadow-xl inset-shadow-xl' : 'p-5'}`}
                    style={{
                        fontSize: typeof definition.textFontSize === 'number'
                            ? `${definition.textFontSize}rem`
                            : (definition.textFontSize || '2rem'),
                        backgroundColor: definition.draggable
                            ? `rgba(255, 255, 255, ${((definition.textBackgroundOpacity ?? 30) > 1 ? (definition.textBackgroundOpacity ?? 30) / 100 : (definition.textBackgroundOpacity ?? 30))})`
                            : `rgba(0, 0, 0, ${((definition.textBackgroundOpacity ?? 30) > 1 ? (definition.textBackgroundOpacity ?? 30) / 100 : (definition.textBackgroundOpacity ?? 30))})`,
                    }}
                >
                    {definition.text}
                </div>
            )}
            {/* Añadir confetti si triggerConfetti lo indica */}
            {triggerConfetti && <ConfettiOnMount onMount={handleConfetti} />}
        </>
    );

    if (definition.draggable) {
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
