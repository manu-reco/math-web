import { Level } from "./subitizacionPatterns";


// Constantes para iconos
const BUHO = {
    ROJO: "/subitizacion/buho-rojo.png",
    AZUL: "/subitizacion/buho-azul.png",
    VERDE: "/subitizacion/buho-verde.png",
    AMARILLO: "/subitizacion/buho-amarillo.png",
} as const;

const PUNTO = "/subitizacion/punto.svg";

// ============================================
// NIVELES DEL JUEGO
// ============================================
export const subitizacionLevels: {
    concrete: Level[],
    abstract: Level[]
} = {
    concrete: [
        {
            id: 1,
            name: "Nivel 1: Números del 1 al 3",
            description: "Para los más pequeños, reconocemos las cantidades más pequeñas.",
            patterns: [
                // Cantidad 1
                { patternId: "1-center", icons: [BUHO.ROJO] },
                { patternId: "1-center", icons: [BUHO.VERDE] },
                { patternId: "1-left", icons: [BUHO.ROJO] },
                { patternId: "1-top-left", icons: [BUHO.VERDE] },
                { patternId: "1-bottom-right", icons: [BUHO.ROJO] },
                { patternId: "1-second-column", icons: [BUHO.VERDE] },

                // Cantidad 2
                { patternId: "2-left-to-right", icons: [BUHO.ROJO] },
                { patternId: "2-horizontal", icons: [BUHO.ROJO] },
                { patternId: "2-horizontal", icons: [BUHO.ROJO, BUHO.VERDE] },
                { patternId: "2-vertical", icons: [BUHO.ROJO] },
                { patternId: "2-vertical", icons: [BUHO.VERDE, BUHO.ROJO] },
                { patternId: "2-diagonal", icons: [BUHO.ROJO] },
                { patternId: "2-diagonal-reverse", icons: [BUHO.VERDE] },
                { patternId: "2-scattered", icons: [BUHO.ROJO, BUHO.VERDE] },
                { patternId: "2-scattered-reverse", icons: [BUHO.VERDE, BUHO.ROJO] },
                { patternId: "2-vertical-left", icons: [BUHO.ROJO] },
                { patternId: "2-vertical-right", icons: [BUHO.VERDE] },

                // Cantidad 3
                { patternId: "3-left-to-right", icons: [BUHO.ROJO] },
                { patternId: "3-left-to-right", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.VERDE] },
                { patternId: "3-row", icons: [BUHO.VERDE] },
                { patternId: "3-row", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.ROJO] },
                { patternId: "3-row", icons: [BUHO.VERDE, BUHO.AZUL, BUHO.ROJO] },
                { patternId: "3-column", icons: [BUHO.AZUL] },
                { patternId: "3-column", icons: [BUHO.AZUL, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "3-column", icons: [BUHO.AZUL, BUHO.ROJO, BUHO.VERDE] },
                { patternId: "3-column", icons: [BUHO.ROJO] },
                { patternId: "3-triangle", icons: [BUHO.ROJO] },
                { patternId: "3-triangle", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "3-diagonal", icons: [BUHO.ROJO] },
                { patternId: "3-1left-2right", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "3-leftdiagonal-1right", icons: [BUHO.AZUL, BUHO.AZUL, BUHO.VERDE] },
            ]
        },
        {
            id: 2,
            name: "Nivel 2: Números del 1 al 4",
            description: "Introducimos el número 4 y reconocemos distintas formas de componerlo (2+2, 3+1...).",
            patterns: [
                // Cantidad 1
                { patternId: "1-center", icons: [BUHO.VERDE] },
                { patternId: "1-left", icons: [BUHO.ROJO] },
                { patternId: "1-top-left", icons: [BUHO.VERDE] },
                { patternId: "1-bottom-right", icons: [BUHO.ROJO] },

                // Cantidad 2
                { patternId: "2-left-to-right", icons: [BUHO.ROJO] },
                { patternId: "2-horizontal", icons: [BUHO.VERDE] },
                { patternId: "2-vertical", icons: [BUHO.ROJO] },
                { patternId: "2-diagonal", icons: [BUHO.ROJO] },
                { patternId: "2-diagonal-reverse", icons: [BUHO.VERDE] },
                { patternId: "2-vertical-left", icons: [BUHO.ROJO] },
                { patternId: "2-vertical-right", icons: [BUHO.VERDE] },

                // Cantidad 3
                { patternId: "3-left-to-right", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.VERDE] },
                { patternId: "3-row", icons: [BUHO.VERDE] },
                { patternId: "3-row", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.ROJO] },
                { patternId: "3-column", icons: [BUHO.AMARILLO] },
                { patternId: "3-column", icons: [BUHO.AZUL, BUHO.AZUL, BUHO.VERDE] },
                { patternId: "3-triangle", icons: [BUHO.ROJO] },
                { patternId: "3-triangle", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "3-diagonal", icons: [BUHO.ROJO] },
                { patternId: "3-1left-2right", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "3-leftdiagonal-1right", icons: [BUHO.AZUL, BUHO.AZUL, BUHO.VERDE] },

                // Cantidad 4
                { patternId: "4-left-to-right", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.AZUL, BUHO.AZUL] },
                { patternId: "4-left-to-right", icons: [BUHO.ROJO, BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AMARILLO] },
                { patternId: "4-corners", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "4-square", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "4-square", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.ROJO, BUHO.VERDE] },
                { patternId: "4-cross", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.AZUL, BUHO.AZUL] },
                { patternId: "4-2topleft-2bottomright", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "4-2topright-2bottomleft", icons: [BUHO.AZUL, BUHO.AZUL, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "4-triangleleft-1right", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.ROJO, BUHO.VERDE] },
                { patternId: "4-triangleleft-1right", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.VERDE, BUHO.AZUL] },
            ]
        },
        {
            id: 3,
            name: "Nivel 3: Números del 1 al 5",
            description: "Reforzamos patrones anteriores e introducimos combinaciones con el número 5 (2+3, 4+1...).",
            patterns: [
                // Cantidad 1
                { patternId: "1-center", icons: [BUHO.AZUL] },
                { patternId: "1-bottom-right", icons: [BUHO.AMARILLO] },

                // Cantidad 2
                { patternId: "2-horizontal", icons: [BUHO.ROJO, BUHO.VERDE] },
                { patternId: "2-diagonal", icons: [BUHO.AZUL] },
                { patternId: "2-vertical-right", icons: [BUHO.AMARILLO] },

                // Cantidad 3
                { patternId: "3-row", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.AZUL] },
                { patternId: "3-row", icons: [BUHO.VERDE] },
                { patternId: "3-column", icons: [BUHO.AZUL, BUHO.ROJO, BUHO.VERDE] },
                { patternId: "3-column", icons: [BUHO.AMARILLO] },
                { patternId: "3-triangle", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "3-diagonal", icons: [BUHO.AZUL] },
                { patternId: "3-1left-2right", icons: [BUHO.AMARILLO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "3-leftdiagonal-1right", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.AZUL] },

                // Cantidad 4
                { patternId: "4-left-to-right", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "4-left-to-right", icons: [BUHO.AZUL, BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AZUL] },
                { patternId: "4-corners", icons: [BUHO.ROJO, BUHO.VERDE, BUHO.VERDE, BUHO.ROJO] },
                { patternId: "4-square", icons: [BUHO.AZUL, BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AZUL] },
                { patternId: "4-square", icons: [BUHO.VERDE] },
                { patternId: "4-cross", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.AZUL, BUHO.AZUL] },
                { patternId: "4-2topleft-2bottomright", icons: [BUHO.AMARILLO, BUHO.AMARILLO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "4-2topright-2bottomleft", icons: [BUHO.AZUL, BUHO.AZUL, BUHO.ROJO, BUHO.ROJO] },
                { patternId: "4-triangleleft-1right", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.VERDE, BUHO.AMARILLO] },
                { patternId: "4-triangleleft-1right", icons: [BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AMARILLO, BUHO.ROJO] },

                // Cantidad 5
                { patternId: "5-x", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.AZUL, BUHO.ROJO, BUHO.ROJO] },
                { patternId: "5-x", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.AMARILLO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "5-plus", icons: [BUHO.AZUL, BUHO.VERDE, BUHO.VERDE, BUHO.VERDE, BUHO.AZUL] },
                { patternId: "5-plus", icons: [BUHO.ROJO] },
                { patternId: "5-2left-3right", icons: [BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AZUL, BUHO.AZUL, BUHO.AZUL] },
                { patternId: "5-3left-2right", icons: [BUHO.ROJO, BUHO.ROJO, BUHO.ROJO, BUHO.VERDE, BUHO.VERDE] },
                { patternId: "5-2top-3bottom", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AMARILLO] },
                { patternId: "5-3top-2bottom", icons: [BUHO.AZUL, BUHO.AZUL, BUHO.AZUL, BUHO.ROJO, BUHO.ROJO] },
                { patternId: "5-4left-1right", icons: [BUHO.VERDE, BUHO.VERDE, BUHO.VERDE, BUHO.VERDE, BUHO.AMARILLO] },
                { patternId: "5-1left-4right", icons: [BUHO.AZUL, BUHO.ROJO, BUHO.AZUL, BUHO.AZUL, BUHO.AZUL] },
                { patternId: "5-4top-1bottom", icons: [BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AMARILLO, BUHO.AMARILLO, BUHO.VERDE] },
                { patternId: "5-1top-4bottom", icons: [BUHO.AZUL, BUHO.ROJO, BUHO.ROJO, BUHO.ROJO, BUHO.ROJO] },
            ]
        }
    ],
    abstract: [
        {
            id: 1,
            name: "Nivel 1: Números del 1 al 3",
            description: "Para los más pequeños, reconocemos las cantidades más pequeñas (abstracto).",
            patterns: [
                // Cantidad 1
                { patternId: "1-center", icons: [PUNTO] },
                { patternId: "1-left", icons: [PUNTO] },
                { patternId: "1-top-left", icons: [PUNTO] },
                { patternId: "1-bottom-right", icons: [PUNTO] },
                { patternId: "1-second-column", icons: [PUNTO] },

                // Cantidad 2
                { patternId: "2-left-to-right", icons: [PUNTO] },
                { patternId: "2-horizontal", icons: [PUNTO] },
                { patternId: "2-vertical", icons: [PUNTO] },
                { patternId: "2-diagonal", icons: [PUNTO] },
                { patternId: "2-diagonal-reverse", icons: [PUNTO] },
                { patternId: "2-scattered", icons: [PUNTO] },
                { patternId: "2-scattered-reverse", icons: [PUNTO] },
                { patternId: "2-vertical-left", icons: [PUNTO] },
                { patternId: "2-vertical-right", icons: [PUNTO] },

                // Cantidad 3
                { patternId: "3-left-to-right", icons: [PUNTO] },
                { patternId: "3-row", icons: [PUNTO] },
                { patternId: "3-column", icons: [PUNTO] },
                { patternId: "3-triangle", icons: [PUNTO] },
                { patternId: "3-diagonal", icons: [PUNTO] },
                { patternId: "3-1left-2right", icons: [PUNTO] },
                { patternId: "3-leftdiagonal-1right", icons: [PUNTO] },
            ]
        },
        {
            id: 2,
            name: "Nivel 2: Números del 1 al 4",
            description: "Introducimos el número 4 y reconocemos distintas formas de componerlo (2+2, 3+1...).",
            patterns: [
                // Cantidad 1
                { patternId: "1-center", icons: [PUNTO] },
                { patternId: "1-left", icons: [PUNTO] },
                { patternId: "1-top-left", icons: [PUNTO] },
                { patternId: "1-bottom-right", icons: [PUNTO] },

                // Cantidad 2
                { patternId: "2-left-to-right", icons: [PUNTO] },
                { patternId: "2-horizontal", icons: [PUNTO] },
                { patternId: "2-vertical", icons: [PUNTO] },
                { patternId: "2-diagonal", icons: [PUNTO] },
                { patternId: "2-diagonal-reverse", icons: [PUNTO] },
                { patternId: "2-vertical-left", icons: [PUNTO] },
                { patternId: "2-vertical-right", icons: [PUNTO] },

                // Cantidad 3
                { patternId: "3-left-to-right", icons: [PUNTO] },
                { patternId: "3-row", icons: [PUNTO] },
                { patternId: "3-column", icons: [PUNTO] },
                { patternId: "3-triangle", icons: [PUNTO] },
                { patternId: "3-diagonal", icons: [PUNTO] },
                { patternId: "3-1left-2right", icons: [PUNTO] },
                { patternId: "3-leftdiagonal-1right", icons: [PUNTO] },

                // Cantidad 4
                { patternId: "4-left-to-right", icons: [PUNTO] },
                { patternId: "4-corners", icons: [PUNTO] },
                { patternId: "4-square", icons: [PUNTO] },
                { patternId: "4-cross", icons: [PUNTO] },
                { patternId: "4-2topleft-2bottomright", icons: [PUNTO] },
                { patternId: "4-2topright-2bottomleft", icons: [PUNTO] },
                { patternId: "4-triangleleft-1right", icons: [PUNTO] },
            ]
        },
        {
            id: 3,
            name: "Nivel 3: Números del 1 al 5",
            description: "Reforzamos patrones anteriores e introducimos combinaciones con el número 5 (2+3, 4+1...).",
            patterns: [
                // Cantidad 1
                { patternId: "1-center", icons: [PUNTO] },
                { patternId: "1-bottom-right", icons: [PUNTO] },

                // Cantidad 2
                { patternId: "2-horizontal", icons: [PUNTO] },
                { patternId: "2-diagonal", icons: [PUNTO] },
                { patternId: "2-vertical-right", icons: [PUNTO] },

                // Cantidad 3
                { patternId: "3-row", icons: [PUNTO] },
                { patternId: "3-column", icons: [PUNTO] },
                { patternId: "3-triangle", icons: [PUNTO] },
                { patternId: "3-diagonal", icons: [PUNTO] },
                { patternId: "3-1left-2right", icons: [PUNTO] },
                { patternId: "3-leftdiagonal-1right", icons: [PUNTO] },

                // Cantidad 4
                { patternId: "4-left-to-right", icons: [PUNTO] },
                { patternId: "4-corners", icons: [PUNTO] },
                { patternId: "4-square", icons: [PUNTO] },
                { patternId: "4-square", icons: [PUNTO] },
                { patternId: "4-cross", icons: [PUNTO] },
                { patternId: "4-2topleft-2bottomright", icons: [PUNTO] },
                { patternId: "4-2topright-2bottomleft", icons: [PUNTO] },
                { patternId: "4-triangleleft-1right", icons: [PUNTO] },

                // Cantidad 5
                { patternId: "5-x", icons: [PUNTO] },
                { patternId: "5-plus", icons: [PUNTO] },
                { patternId: "5-2left-3right", icons: [PUNTO] },
                { patternId: "5-3left-2right", icons: [PUNTO] },
                { patternId: "5-2top-3bottom", icons: [PUNTO] },
                { patternId: "5-3top-2bottom", icons: [PUNTO] },
                { patternId: "5-4left-1right", icons: [PUNTO] },
                { patternId: "5-1left-4right", icons: [PUNTO] },
                { patternId: "5-4top-1bottom", icons: [PUNTO] },
                { patternId: "5-1top-4bottom", icons: [PUNTO] },
            ]
        }
    ]
};

