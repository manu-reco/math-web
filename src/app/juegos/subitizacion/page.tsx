"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { subitizacionLevels, shuffleArray, Level, Pattern } from "@/data/subitizacionLevels";
import InstructionsScreen from "@/components/juegos/subitizacion/InstructionsScreen";
import LevelSelector from "@/components/juegos/subitizacion/LevelSelector";
import GameGrid from "@/components/juegos/subitizacion/GameGrid";
import CompletionScreen from "@/components/juegos/subitizacion/CompletionScreen";

type GameState = 'instructions' | 'levelSelect' | 'playing' | 'completed';

export default function SubitizacionPage() {
    // ESTADOS DEL JUEGO
    // Controla qué pantalla se muestra actualmente
    const [gameState, setGameState] = useState<GameState>('instructions');
    // Almacena el nivel seleccionado
    const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
    // Array de patrones randomizados para el nivel actual
    const [shuffledPatterns, setShuffledPatterns] = useState<Pattern[]>([]);
    // Índice del patrón actual dentro de shuffledPatterns
    const [currentPatternIndex, setCurrentPatternIndex] = useState(0);

    const goToSelectLevel = () => {
        setGameState('levelSelect');
    };

    const playLevel = (level: Level) => {
        setCurrentLevel(level);
        setShuffledPatterns(shuffleArray(level.patterns));
        setCurrentPatternIndex(0);
        setGameState('playing');
    };

    // Al pulsar Espacio: avanzar al siguiente patrón si estamos jugando
    useEffect(() => {    
        const nextPattern = () => {
            if (currentPatternIndex < shuffledPatterns.length - 1) {
                setCurrentPatternIndex(prev => prev + 1);
            } else {
                setGameState('completed');
            }
        };

        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.code === 'Space' && gameState === 'playing') {
                event.preventDefault();
                nextPattern();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress); 
        // cleanup: quita el listener antes de desmontar el componente o actualizarlo
    }, [gameState, shuffledPatterns, currentPatternIndex]);

    const handleNextLevel = () => {
        if (!currentLevel) return;
        
        const nextLevel = subitizacionLevels.find(l => l.id === currentLevel.id + 1);
        // Avanzar de nivel si existe el siguiente y tiene patrones
        if (nextLevel && nextLevel.patterns.length > 0) {
            playLevel(nextLevel);
        }
    };

    const handleRestart = () => {
        setCurrentLevel(null);
        setShuffledPatterns([]);
        setCurrentPatternIndex(0);
        setGameState('instructions');
    };

    // Comprueba si hay un siguiente nivel disponible para mostrar/ocultar el botón "Siguiente nivel"
    const hasNextLevel = currentLevel 
        ? subitizacionLevels.some(l => l.id === currentLevel.id + 1 && l.patterns.length > 0)
        : false;

    return (
        <div className="min-h-screen bg-linear-to-b from-purple-50 to-blue-50 pb-20">
            <header className="bg-white shadow-sm border-b border-gray-100">
                <div className="container-custom py-6">
                    <Link href="/juegos" className="text-primary hover:text-primary-hover font-medium mb-2 inline-block">
                        ← Volver a Juegos
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900">
                        Subitización 🦉
                    </h1>
                    {currentLevel && gameState === 'playing' && (
                        <p className="text-gray-600 mt-2">
                            {currentLevel.name} - Patrón {currentPatternIndex + 1} de {shuffledPatterns.length}
                        </p>
                    )}
                </div>
            </header>

            <main className="container-custom max-w-6xl mx-auto mt-12 px-6">
                {gameState === 'instructions' && (
                    <InstructionsScreen onStart={goToSelectLevel} />
                )}

                {gameState === 'levelSelect' && (
                    <LevelSelector 
                        levels={subitizacionLevels} 
                        onSelectLevel={playLevel} 
                    />
                )}

                {gameState === 'playing' && shuffledPatterns[currentPatternIndex] && (
                    <GameGrid pattern={shuffledPatterns[currentPatternIndex]} />
                )}

                {gameState === 'completed' && currentLevel && (
                    <CompletionScreen
                        levelName={currentLevel.name}
                        hasNextLevel={hasNextLevel}
                        onNextLevel={handleNextLevel}
                        onRestart={handleRestart}
                    />
                )}
            </main>
        </div>
    );
}
