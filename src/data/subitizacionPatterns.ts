// ============================================
// TIPOS DE DATOS
// ============================================

// Tipo para posición básica (solo coordenadas)
type Position = {
    row: number; // 0-2
    col: number; // 0-4
}

// Tipo para posición + icono
export interface IconPosition extends Position {
    icon: string;
}

// Configuración de patrón en un nivel (referencia a un patrón + iconos)
export interface PatternTemplate {
    patternId: string;
    icons: string[]; // Array de iconos. Si length=1, se usa para todas las posiciones
}

// Patrón construido con iconos asignados (se genera a partir de PatternTemplate)
export interface Pattern {
    id: string;
    positions: IconPosition[];
}

export interface Level {
    id: number;
    name: string;
    description: string;
    patterns: PatternTemplate[]; // Ahora usa PatternTemplate en vez de Pattern directamente
}

// ============================================
// CATÁLOGO DE PATRONES BASE (solo posiciones)
// ============================================
export const PATTERN_CATALOG: Record<string, Position[]> = {
    // Cantidad 1
    "1-left": [{ row: 1, col: 0 }],
    "1-center": [{ row: 1, col: 2 }],
    "1-top-left": [{ row: 0, col: 0 }],
    "1-bottom-right": [{ row: 2, col: 4 }],
    "1-second-column": [{ row: 2, col: 1 }],

    // Cantidad 2
    "2-left-to-right": [
        { row: 1, col: 0 },
        { row: 1, col: 1 }
    ],
    "2-horizontal": [
        { row: 1, col: 1 },
        { row: 1, col: 3 }
    ],
    "2-vertical": [
        { row: 0, col: 2 },
        { row: 2, col: 2 }
    ],
    "2-diagonal": [
        { row: 0, col: 0 },
        { row: 2, col: 4 }
    ],
    "2-diagonal-reverse": [
        { row: 0, col: 4 },
        { row: 2, col: 0 }
    ],
    "2-scattered": [
        { row: 0, col: 1 },
        { row: 2, col: 3 }
    ],
    "2-scattered-reverse": [
        { row: 0, col: 3 },
        { row: 2, col: 1 }
    ],
    "2-vertical-left": [
        { row: 0, col: 0 },
        { row: 2, col: 0 }
    ],
    "2-vertical-right": [
        { row: 0, col: 4 },
        { row: 2, col: 4 }
    ],

    // Cantidad 3
    "3-left-to-right": [
        { row: 1, col: 0 },
        { row: 1, col: 1 }
    ],
    "3-row": [
        { row: 1, col: 0 },
        { row: 1, col: 2 },
        { row: 1, col: 4 }
    ],
    "3-column": [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
        { row: 2, col: 2 }
    ],
    "3-triangle": [
        { row: 0, col: 2 },
        { row: 2, col: 0 },
        { row: 2, col: 4 }
    ],
    "3-diagonal": [
        { row: 0, col: 0 },
        { row: 1, col: 2 },
        { row: 2, col: 4 }
    ],
    "3-1left-2right": [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 1, col: 4 }
    ],
    "3-leftdiagonal-1right": [
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 3 }
    ],

    // Cantidad 4
    "4-left-to-right": [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 2 },
        { row: 1, col: 3 }
    ],
    "4-corners": [
        { row: 0, col: 0 },
        { row: 0, col: 4 },
        { row: 2, col: 0 },
        { row: 2, col: 4 }
    ],
    "4-square": [
        { row: 0, col: 1 },
        { row: 0, col: 3 },
        { row: 2, col: 1 },
        { row: 2, col: 3 }
    ],
    "4-cross": [
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 2, col: 2 }
    ],
    "4-2topleft-2bottomright": [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 2, col: 3 },
        { row: 2, col: 4 }
    ],
    "4-2topright-2bottomleft": [
        { row: 0, col: 3 },
        { row: 0, col: 4 },
        { row: 2, col: 0 },
        { row: 2, col: 1 }
    ],
    "4-triangleleft-1right": [
        { row: 0, col: 1 },
        { row: 1, col: 0 },
        { row: 1, col: 2 },
        { row: 1, col: 4 }
    ],

    // Cantidad 5
    "5-left-to-right": [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 2 },
        { row: 1, col: 3 },
        { row: 1, col: 4 }
    ],
    "5-x": [
        { row: 0, col: 0 },
        { row: 0, col: 4 },
        { row: 1, col: 2 },
        { row: 2, col: 0 },
        { row: 2, col: 4 }
    ],
    "5-plus": [
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 1, col: 2 },
        { row: 1, col: 3 },
        { row: 2, col: 2 }
    ],
    "5-scattered": [
        { row: 0, col: 1 },
        { row: 0, col: 3 },
        { row: 1, col: 2 },
        { row: 2, col: 0 },
        { row: 2, col: 4 }
    ],
    "5-2left-3right": [
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: 3 },
        { row: 1, col: 4 },
        { row: 2, col: 4 }
    ],
    "5-3left-2right": [
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 },
        { row: 0, col: 4 },
        { row: 1, col: 4 }
    ],
    "5-2top-3bottom": [
        { row: 0, col: 1 },
        { row: 0, col: 3 },
        { row: 1, col: 0 },
        { row: 1, col: 2 },
        { row: 2, col: 0 }
    ],
    "5-3top-2bottom": [
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
        { row: 2, col: 1 },
        { row: 2, col: 3 }
    ],
    "5-4left-1right": [
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 4 }
    ],
    "5-1left-4right": [
        { row: 0, col: 4 },
        { row: 1, col: 4 },
        { row: 2, col: 4 },
        { row: 1, col: 3 },
        { row: 1, col: 0 }
    ],
    "5-4top-1bottom": [
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
        { row: 0, col: 4 },
        { row: 2, col: 2 }
    ],
    "5-1top-4bottom": [
        { row: 0, col: 2 },
        { row: 2, col: 1 },
        { row: 2, col: 2 },
        { row: 2, col: 3 },
        { row: 2, col: 4 }
    ],
};

// ============================================
// UTILIDADES PARA CONSTRUIR PATRONES Y NIVELES
// ============================================

// Construir un Pattern a partir de un PatternTemplate (con iconos asignados)
export function buildPattern(template: PatternTemplate): Pattern {
    const positions = PATTERN_CATALOG[template.patternId];
    if (!positions) {
        throw new Error(`Patrón "${template.patternId}" no encontrado en PATTERN_CATALOG`);
    }

    // Comprobar si solo hay un icono para usarlo en todas las posiciones
    const usesSingleIcon = template.icons.length === 1;

    return {
        id: template.patternId,
        positions: positions.map((pos, index) => ({
            ...pos,
            // Se usa el mismo icono si solo hay uno, si no, se asigna según el índice
            icon: usesSingleIcon ? template.icons[0] : template.icons[index]
        }))
    };
}

// Construir todos los patrones de un nivel
export function buildLevelPatterns(level: Level): Pattern[] {
    return level.patterns.map(buildPattern);
}

// "Barajar" un array (Fisher-Yates shuffle)
export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
