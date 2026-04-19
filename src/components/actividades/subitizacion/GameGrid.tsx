import Image from "next/image";
import { AnimatePresence, motion } from "motion/react"
import { Pattern, IconPosition } from "@/data/subitizacionPatterns";

const GRID_CONFIG = {
    rows: 3,
    cols: 5,
} as const;

const STYLES = {
    cell: "w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center",
    icon: "relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    grid: "bg-white rounded-2xl shadow-2xl p-8 md:p-12 cursor-pointer hover:shadow-3xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30",
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
            <motion.div
                className={STYLES.icon}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <Image
                    src={position.icon}
                    alt="Icono"
                    fill
                    sizes="(min-width: 1024px) 96px, (min-width: 768px) 80px, 64px"
                    className="object-contain"
                />
            </motion.div>
        </div>
    );
}

// Componente principal que muestra el grid de subitización
export default function GameGrid({ pattern, onNext }: GameGridProps) {

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
        <div className="flex flex-col items-center justify-center">
            <AnimatePresence mode="popLayout">
                <motion.button
                    key={pattern.id}
                    onClick={onNext}
                    className={STYLES.grid}
                    aria-label="Presiona para continuar al siguiente patrón"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <div
                        className="grid gap-4"
                        style={{ gridTemplateRows: `repeat(${GRID_CONFIG.rows}, 1fr)` }}
                    >
                        {Array.from({ length: GRID_CONFIG.rows }).map((_, rowIndex) =>
                            renderRow(rowIndex)
                        )}
                    </div>
                </motion.button>
            </AnimatePresence>
        </div>
    );
}
