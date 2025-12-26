import Image from "next/image";
import { Pattern } from "@/data/subitizacionLevels";

interface GameGridProps {
    pattern: Pattern;
}

export default function GameGrid({ pattern }: GameGridProps) {
    const rows = 3;
    const cols = 5;

    // Crear un set para búsqueda rápida de posiciones ocupadas
    const occupiedPositions = new Set(
        pattern.positions.map(pos => `${pos.row}-${pos.col}`)
    );

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="grid gap-4" style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                            {Array.from({ length: cols }).map((_, colIndex) => {
                                const hasIcon = occupiedPositions.has(`${rowIndex}-${colIndex}`);
                                
                                return (
                                    <div
                                        key={`${rowIndex}-${colIndex}`}
                                        className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-lg border-2 border-gray-200"
                                    >
                                        {hasIcon && (
                                            <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-[fadeIn_0.3s_ease-in]">
                                                <Image
                                                    src={pattern.icon}
                                                    alt="Icono"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-600 text-lg">
                    Presiona <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">Espacio</kbd> para continuar
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    Patrón {pattern.id}
                </p>
            </div>
        </div>
    );
}
