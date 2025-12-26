export interface IconPosition {
    row: number; // 0-2
    col: number; // 0-4
}

export interface Pattern {
    id: string;
    positions: IconPosition[];
    icon: string; // Ruta del SVG
}

export interface Level {
    id: number;
    name: string;
    description: string;
    patterns: Pattern[];
}

export const subitizacionLevels: Level[] = [
    {
        id: 1,
        name: "Nivel 1: Números del 1 al 3",
        description: "Reconoce cantidades pequeñas del 1 al 3",
        patterns: [
            // Cantidad 1
            {
                id: "1-center",
                positions: [{ row: 1, col: 2 }],
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "1-topleft",
                positions: [{ row: 0, col: 0 }],
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "1-bottomright",
                positions: [{ row: 2, col: 4 }],
                icon: "/subitizacion/buho-rojo.png"
            },
            
            // Cantidad 2
            {
                id: "2-horizontal",
                positions: [
                    { row: 1, col: 1 },
                    { row: 1, col: 3 }
                ],
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "2-vertical",
                positions: [
                    { row: 0, col: 2 },
                    { row: 2, col: 2 }
                ],
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "2-diagonal",
                positions: [
                    { row: 0, col: 0 },
                    { row: 2, col: 4 }
                ],
                icon: "/subitizacion/buho-rojo.png"
            },
            
            // Cantidad 3
            {
                id: "3-row",
                positions: [
                    { row: 1, col: 0 },
                    { row: 1, col: 2 },
                    { row: 1, col: 4 }
                ],
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "3-column",
                positions: [
                    { row: 0, col: 2 },
                    { row: 1, col: 2 },
                    { row: 2, col: 2 }
                ],
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "3-triangle",
                positions: [
                    { row: 0, col: 2 },
                    { row: 2, col: 0 },
                    { row: 2, col: 4 }
                ],
                icon: "/subitizacion/buho-rojo.png"
            },
        ]
    },
    {
        id: 2,
        name: "Nivel 2: Números del 4 al 5",
        description: "Reconoce cantidades del 4 al 5",
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
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "4-square",
                positions: [
                    { row: 0, col: 1 },
                    { row: 0, col: 3 },
                    { row: 2, col: 1 },
                    { row: 2, col: 3 }
                ],
                icon: "/subitizacion/buho-rojo.png"
            },
            {
                id: "4-cross",
                positions: [
                    { row: 0, col: 2 },
                    { row: 1, col: 1 },
                    { row: 1, col: 3 },
                    { row: 2, col: 2 }
                ],
                icon: "/subitizacion/buho-rojo.png"
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
                icon: "/subitizacion/buho-rojo.png"
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
                icon: "/subitizacion/buho-rojo.png"
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
                icon: "/subitizacion/buho-rojo.png"
            },
        ]
    },
    {
        id: 3,
        name: "Nivel 3: Próximamente",
        description: "Números del 6 al 10 (En desarrollo)",
        patterns: []
    }
];

// Utilidad para mezclar un array (Fisher-Yates shuffle)
export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
