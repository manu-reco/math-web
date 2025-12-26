// Constantes para iconos
export const ICONS = {
    BUHO_ROJO: "/subitizacion/buho-rojo.png",
    BUHO_AZUL: "/subitizacion/buho-azul.png",
    BUHO_VERDE: "/subitizacion/buho-verde.png",
} as const;

export interface IconPosition {
    row: number; // 0-2
    col: number; // 0-4
    icon?: string; // Icono opcional para esta posición específica
}

export interface Pattern {
    id: string;
    positions: IconPosition[];
}

export interface Level {
    id: number;
    name: string;
    description: string;
    icon: string; // Icono predeterminado para todos los patrones del nivel
    patterns: Pattern[];
}

// Utilidad para mezclar un array (Fisher-Yates shuffle)
export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}


export const subitizacionLevels: Level[] = [
    {
        id: 1,
        name: "Nivel 1: Números del 1 al 4",
        description: "Reconoce cantidades pequeñas del 1 al 4",
        icon: ICONS.BUHO_ROJO,
        patterns: [
            // Cantidad 1
            {
                id: "1-center",
                positions: [{ row: 1, col: 2 }],
            },
            {
                id: "1-top-left",
                positions: [{ row: 0, col: 0 }],
            },
            {
                id: "1-bottom-right",
                positions: [{ row: 2, col: 4 }],
            },
            {
                id: "1-second-column",
                positions: [{ row: 2, col: 1 }],
            },
            
            // Cantidad 2
            {
                id: "2-horizontal",
                positions: [
                    { row: 1, col: 1 },
                    { row: 1, col: 3 }
                ],
            },
            {
                id: "2-vertical",
                positions: [
                    { row: 0, col: 2 },
                    { row: 2, col: 2 }
                ],
            },
            {
                id: "2-diagonal",
                positions: [
                    { row: 0, col: 0 },
                    { row: 2, col: 4 }
                ],
            },
            {
                id: "2-diagonal-reverse",
                positions: [
                    { row: 0, col: 4 },
                    { row: 2, col: 0 }
                ],
            },
            {
                id: "2-scattered",
                positions: [
                    { row: 0, col: 1 },
                    { row: 2, col: 3 }
                ],
            },
            {
                id: "2-scattered-reverse",
                positions: [
                    { row: 0, col: 3 },
                    { row: 2, col: 1 }
                ],
            },
            {
                id: "2-left",
                positions: [
                    { row: 0, col: 0 },
                    { row: 2, col: 0 }
                ],
            },
            {
                id: "2-right",
                positions: [
                    { row: 0, col: 4 },
                    { row: 2, col: 4 }
                ],
            },
            
            // Cantidad 3
            {
                id: "3-row",
                positions: [
                    { row: 1, col: 0 },
                    { row: 1, col: 2 },
                    { row: 1, col: 4 }
                ],
            },
            {
                id: "3-column",
                positions: [
                    { row: 0, col: 2 },
                    { row: 1, col: 2 },
                    { row: 2, col: 2 }
                ],
            },
            {
                id: "3-triangle",
                positions: [
                    { row: 0, col: 2 },
                    { row: 2, col: 0 },
                    { row: 2, col: 4 }
                ],
            },
            {
                id: "3-diagonal",
                positions: [
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 2, col: 4 }
                ],
            },
            {
                id: "3-1left-2right",
                positions: [
                    { row: 1, col: 1 },
                    { row: 1, col: 3 },
                    { row: 1, col: 4 }
                ],
            },
            {
                id: "3-leftdiagonal-1right",
                positions: [
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 1, col: 3 }
                ],
            },

            // Cantidad 4
            {
                id: "4-corners",
                positions: [
                    { row: 0, col: 0 },
                    { row: 0, col: 4 },
                    { row: 2, col: 0 },
                    { row: 2, col: 4 }
                ],
            },
            {
                id: "4-square",
                positions: [
                    { row: 0, col: 1 },
                    { row: 0, col: 3 },
                    { row: 2, col: 1 },
                    { row: 2, col: 3 }
                ],
            },
            {
                id: "4-cross",
                positions: [
                    { row: 0, col: 2 },
                    { row: 1, col: 1 },
                    { row: 1, col: 3 },
                    { row: 2, col: 2 }
                ],
            },
            {
                id: "4-2topleft-2bottomright",
                positions: [
                    { row: 0, col: 0 },
                    { row: 0, col: 1 },
                    { row: 2, col: 3 },
                    { row: 2, col: 4 }
                ],
            },
            {
                id: "4-2topright-2bottomleft",
                positions: [
                    { row: 0, col: 3 },
                    { row: 0, col: 4 },
                    { row: 2, col: 0 },
                    { row: 2, col: 1 }
                ],
            },
            {
                id: "4-triangleleft-1right",
                positions: [
                    { row: 0, col: 1 },
                    { row: 1, col: 0 },
                    { row: 1, col: 2 },
                    { row: 1, col: 4 }
                ],
            }
        ]
    },
    {
        id: 2,
        name: "Nivel 2: Números del 4 al 5",
        description: "Reconoce cantidades del 4 al 5",
        icon: ICONS.BUHO_ROJO,
        patterns: [
            // Cantidad 4
            {
                id: "4-corners",
                positions: [
                    { row: 0, col: 0 },
                    { row: 0, col: 4 },
                    { row: 2, col: 0 },
                    { row: 2, col: 4 }
                ],
            },
            {
                id: "4-square",
                positions: [
                    { row: 0, col: 1 },
                    { row: 0, col: 3 },
                    { row: 2, col: 1 },
                    { row: 2, col: 3 }
                ],
            },
            {
                id: "4-cross",
                positions: [
                    { row: 0, col: 2 },
                    { row: 1, col: 1 },
                    { row: 1, col: 3 },
                    { row: 2, col: 2 }
                ],
            },
            
            // Cantidad 5
            {
                id: "5-x",
                positions: [
                    { row: 0, col: 0 },
                    { row: 0, col: 4 },
                    { row: 1, col: 2 },
                    { row: 2, col: 0 },
                    { row: 2, col: 4 }
                ],
            },
            {
                id: "5-plus",
                positions: [
                    { row: 0, col: 2 },
                    { row: 1, col: 1 },
                    { row: 1, col: 2 },
                    { row: 1, col: 3 },
                    { row: 2, col: 2 }
                ],
            },
            {
                id: "5-scattered",
                positions: [
                    { row: 0, col: 1 },
                    { row: 0, col: 3 },
                    { row: 1, col: 2 },
                    { row: 2, col: 0 },
                    { row: 2, col: 4 }
                ],
            },
        ]
    },
    {
        id: 3,
        name: "Nivel 3: Próximamente",
        description: "Números del 6 al 10 (En desarrollo)",
        icon: ICONS.BUHO_ROJO,
        patterns: []
    }
];
