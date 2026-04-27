import { forwardRef } from "react";
import Image from "next/image";
import { Pattern, IconPosition } from "@/data/subitizacionPatterns";

const GRID_CONFIG = {
    rows: 3,
    cols: 5,
} as const;

const STYLES = {
    cell: "w-14 h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 flex items-center justify-center",
    icon: "relative w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32",
    grid: "bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:p-10 xl:p-8 cursor-pointer hover:shadow-3xl focus:outline-none ring-1 focus:ring-4 ring-primary/30 transition-ring duration-200",
} as const;

interface GameGridProps {
    pattern: Pattern;
    onNext: () => void;
}

interface GridCellProps {
    position: IconPosition | null;
}

// Celda individual del grid
// Muestra un icono si la posición tiene uno asignado
function GridCell({ position }: GridCellProps) {
    if (!position) return <div className={STYLES.cell} />;

    return (
        <div className={STYLES.cell}>
            <div className={STYLES.icon}>
                <Image
                    src={position.icon}
                    alt="Icono"
                    fill
                    sizes="(min-width: 1280px) 128px, (min-width: 1024px) 112px, (min-width: 768px) 80px, 64px"
                    className="object-contain"
                />
            </div>
        </div>
    );
}

// Componente principal que muestra el grid de subitización
const GameGrid = forwardRef<HTMLDivElement, GameGridProps>(function GameGrid({ pattern, onNext }, ref) {

    // Crear mapa de posiciones ocupadas para búsqueda rápida
    const positionMap = new Map<string, IconPosition>();
    pattern.positions.forEach(pos => {
        positionMap.set(`${pos.row}-${pos.col}`, pos);
    });

    // Obtiene la posición en coordenadas específicas, o null si está vacía
    const getPosition = (row: number, col: number): IconPosition | null => {
        return positionMap.get(`${row}-${col}`) || null;
    };

    // Renderiza una fila del grid
    const renderRow = (rowIndex: number) => (
        <div
            key={rowIndex}
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${GRID_CONFIG.cols}, 1fr)` }}
        >
            {Array.from({ length: GRID_CONFIG.cols }).map((_, colIndex) => (
                <GridCell
                    key={`${rowIndex}-${colIndex}`}
                    position={getPosition(rowIndex, colIndex)}
                />
            ))}
        </div>
    );

    return (
        <div ref={ref} className="flex flex-col items-center justify-center">
            <button
                onClick={onNext}
                className={STYLES.grid}
                aria-label="Presiona para continuar al siguiente patrón"
            >
                <div
                    className="grid gap-4 lg:gap-5"
                    style={{ gridTemplateRows: `repeat(${GRID_CONFIG.rows}, 1fr)` }}
                >
                    {Array.from({ length: GRID_CONFIG.rows }).map((_, rowIndex) =>
                        renderRow(rowIndex)
                    )}
                </div>
            </button>
        </div>
    );
});

export default GameGrid;
