import Image from "next/image";
import { AnimatePresence, motion } from "motion/react"
import { Pattern } from "@/data/subitizacionLevels";

const GRID_CONFIG = {
    rows: 3,
    cols: 5,
} as const;

const STYLES = {
    cell: "w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-lg border-2 border-gray-200",
    icon: "relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    grid: "bg-white rounded-2xl shadow-2xl p-8 md:p-12 cursor-pointer hover:shadow-3xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30",
} as const;

interface GameGridProps {
    pattern: Pattern;
    onNext: () => void;
}

interface GridCellProps {
    hasIcon: boolean;
    iconSrc: string;
}

function GridCell({ hasIcon, iconSrc }: GridCellProps) {
    return (
        <div className={STYLES.cell}>
            {hasIcon && (
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
                        src={iconSrc}
                        alt="Icono"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            )}
        </div>
    );
}

function InstructionText() {
    return (
        <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
                Presiona{" "}
                <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono mx-1">
                    Espacio
                </kbd>{" "}
                o <span className="font-semibold">toca la pantalla</span> para continuar
            </p>
        </div>
    );
}


export default function GameGrid({ pattern, onNext }: GameGridProps) {
    // Crear un set para búsqueda rápida de posiciones ocupadas
    const occupiedPositions = new Set(
        pattern.positions.map(pos => `${pos.row}-${pos.col}`)
    );

    const isCellOccupied = (row: number, col: number): boolean => {
        return occupiedPositions.has(`${row}-${col}`);
    };

    const renderRow = (rowIndex: number) => (
        <div
            key={rowIndex}
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${GRID_CONFIG.cols}, 1fr)` }}
        >
            {Array.from({ length: GRID_CONFIG.cols }).map((_, colIndex) => (
                <GridCell
                    key={`${rowIndex}-${colIndex}`}
                    hasIcon={isCellOccupied(rowIndex, colIndex)}
                    iconSrc={pattern.icon}
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

            <InstructionText />
        </div>
    );
}
