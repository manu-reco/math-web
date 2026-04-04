"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { subitizacionLevels } from "@/data/subitizacionLevels";
import { shuffleArray, buildLevelPatterns, Level, Pattern } from "@/data/subitizacionPatterns";
import InstructionsScreen from "@/components/actividades/subitizacion/InstructionsScreen";
import LevelSelector from "@/components/actividades/subitizacion/LevelSelector";
import GameGrid from "@/components/actividades/subitizacion/GameGrid";
import CompletionScreen from "@/components/actividades/subitizacion/CompletionScreen";
import ProgressNavigator from "@/components/actividades/ProgressNavigator";

type GameState = 'instructions' | 'levelSelect' | 'playing' | 'completed';
type GameMode = 'concrete' | 'abstract';

export default function SubitizacionPage() {
    // ESTADOS DEL JUEGO
    const [gameState, setGameState] = useState<GameState>('instructions');
    const [currentMode, setCurrentMode] = useState<GameMode>('concrete');
    const [currentLevel, setCurrentLevel] = useState<Level | null>(null);

    // Array de patrones randomizados para el nivel actual
    const [shuffledPatterns, setShuffledPatterns] = useState<Pattern[]>([]);

    // Índice del patrón actual dentro de shuffledPatterns
    const [currentPatternIndex, setCurrentPatternIndex] = useState(0);

    // FUNCIONES DEL JUEGO
    const handleBack = () => {
        window.scrollTo({ top: 100, behavior: 'smooth' });

        if (gameState === 'levelSelect') {
            setGameState('instructions');
        } else if (gameState === 'playing' || gameState === 'completed') {
            setGameState('levelSelect');
        }
        // Si gameState === 'instructions', no hacemos nada aquí (el Link redirigirá a /actividades)
    };

    const goToSelectLevel = () => {
        window.scrollTo({ top: 100, behavior: 'smooth' });
        setGameState('levelSelect');
    };

    const playLevel = (level: Level, mode: GameMode) => {
        window.scrollTo({ top: 100, behavior: 'smooth' });
        setCurrentLevel(level);
        setCurrentMode(mode);
        // Construir patrones desde PatternTemplate a Pattern con iconos asignados
        const builtPatterns = buildLevelPatterns(level);
        setShuffledPatterns(shuffleArray(builtPatterns));
        setCurrentPatternIndex(0);
        setGameState('playing');
    };

    // Avanza al siguiente patrón de forma segura (sin desbordar índice)
    const nextPattern = useCallback(() => {
        setCurrentPatternIndex(prev => {
            const lastIndex = shuffledPatterns.length - 1;

            if (lastIndex < 0) return 0;

            if (prev >= lastIndex) {
                setGameState('completed');
                return lastIndex;
            }

            return prev + 1;
        });
    }, [shuffledPatterns.length]);

    // Retrocede al patrón anterior
    const previousPattern = useCallback(() => {
        setCurrentPatternIndex(prev => Math.max(0, prev - 1));
    }, []);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.code === 'Space' || event.code === 'ArrowRight') {
                event.preventDefault();
                if (gameState === 'playing') {
                    nextPattern();
                }
            }

            if (event.code === 'ArrowLeft') {
                event.preventDefault();
                if (gameState === 'playing') {
                    previousPattern();
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
        // cleanup: quita el listener antes de desmontar el componente o actualizarlo
    }, [gameState, nextPattern, previousPattern]);

    const handleNextLevel = () => {
        if (!currentLevel) return;

        const currentLevels = subitizacionLevels[currentMode];
        const nextLevelInMode = currentLevels.find(l => l.id === currentLevel.id + 1);

        // Si hay siguiente nivel en el modo actual
        if (nextLevelInMode && nextLevelInMode.patterns.length > 0) {
            playLevel(nextLevelInMode, currentMode);
        }
        // Si estamos en el último nivel de concrete, pasar al primer nivel de abstract
        else if (currentMode === 'concrete' && subitizacionLevels.abstract.length > 0) {
            const firstAbstractLevel = subitizacionLevels.abstract[0];
            if (firstAbstractLevel && firstAbstractLevel.patterns.length > 0) {
                playLevel(firstAbstractLevel, 'abstract');
            }
        }
    };

    const handleRestart = () => {
        setCurrentLevel(null);
        setCurrentMode('concrete');
        setShuffledPatterns([]);
        setCurrentPatternIndex(0);
        setGameState('instructions');
    };

    // Comprueba si hay un siguiente nivel disponible para mostrar/ocultar el botón "Siguiente nivel"
    const hasNextLevel = currentLevel ? (() => {
        const currentLevels = subitizacionLevels[currentMode];
        const nextLevelInMode = currentLevels.some(l => l.id === currentLevel.id + 1 && l.patterns.length > 0);

        // Si hay siguiente nivel en el modo actual, retornar true
        if (nextLevelInMode) return true;

        // Si estamos en concrete y no hay más niveles, verificar si hay niveles en abstract
        if (currentMode === 'concrete') {
            return subitizacionLevels.abstract.length > 0 && subitizacionLevels.abstract[0].patterns.length > 0;
        }

        return false;
    })() : false;

    return (
        <div className="min-h-screen bg-linear-to-b from-purple-50 to-blue-50 pb-20">
            <header className="bg-white shadow-sm border-b border-gray-100">
                <div className="container-custom py-6">
                    {gameState === 'instructions' ? (
                        <Link href="/actividades" className="text-primary hover:text-primary-hover font-medium mb-2 inline-block">
                            ← Volver a Actividades
                        </Link>
                    ) : (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="text-primary hover:text-primary-hover font-medium mb-2 inline-block hover:cursor-pointer"
                        >
                            ← Volver a {gameState === 'levelSelect' ? 'Instrucciones' : 'Selección de Nivel'}
                        </button>
                    )}
                    <h1 className="text-4xl font-bold">
                        Subitización 🦉
                    </h1>
                    {currentLevel && gameState === 'playing' && (
                        <p className="text-text-secondary mt-2">
                            {currentLevel.name} - Patrón {Math.min(currentPatternIndex + 1, shuffledPatterns.length)} de {shuffledPatterns.length}
                        </p>
                    )}
                </div>
            </header >

            <main className="container-custom max-w-6xl mx-auto mt-12 px-6">
                {gameState === 'instructions' && (
                    <InstructionsScreen onStart={goToSelectLevel} />
                )}

                {gameState === 'levelSelect' && (
                    <LevelSelector
                        concreteLevels={subitizacionLevels.concrete}
                        abstractLevels={subitizacionLevels.abstract}
                        onSelectLevel={playLevel}
                    />
                )}

                {gameState === 'playing' && shuffledPatterns[currentPatternIndex] && (
                    <>
                        <GameGrid
                            pattern={shuffledPatterns[currentPatternIndex]}
                            onNext={nextPattern}
                        />

                        <ProgressNavigator
                            currentStep={Math.min(currentPatternIndex + 1, shuffledPatterns.length)}
                            totalSteps={shuffledPatterns.length}
                            onPrevious={(e) => {
                                e.stopPropagation();
                                previousPattern();
                            }}
                            onNext={(e) => {
                                e.stopPropagation();
                                nextPattern();
                            }}
                            isPreviousDisabled={currentPatternIndex === 0}
                            isNextDisabled={shuffledPatterns.length === 0}
                            previousAriaLabel="Patrón anterior"
                            nextAriaLabel="Patrón siguiente"
                            position="fixed"
                        />
                    </>
                )}

                {gameState === 'completed' && currentLevel && (() => {
                    // Determinar si el siguiente nivel es el inicio de la sección abstracta
                    const currentLevels = subitizacionLevels[currentMode];
                    const isLastConcreteLevel = currentMode === 'concrete' &&
                        !currentLevels.some(l => l.id === currentLevel.id + 1 && l.patterns.length > 0);

                    const nextLevelMessage = isLastConcreteLevel && hasNextLevel
                        ? '¡Pasar a Abstracto! ⚫'
                        : undefined;

                    return (
                        <CompletionScreen
                            levelName={currentLevel.name}
                            hasNextLevel={hasNextLevel}
                            onNextLevel={handleNextLevel}
                            onRestart={handleRestart}
                            nextLevelMessage={nextLevelMessage}
                        />
                    );
                })()}
            </main>
        </div >
    );
}
