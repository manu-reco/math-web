import { Level } from "./subitizacionPatterns";


// Constantes para iconos
const ICONS = {
    BUHO_ROJO: "/subitizacion/buho-rojo.png",
    BUHO_AZUL: "/subitizacion/buho-azul.png",
    BUHO_VERDE: "/subitizacion/buho-verde.png",
    BUHO_AMARILLO: "/subitizacion/buho-amarillo.png",
} as const;

// ============================================
// NIVELES DEL JUEGO
// ============================================
export const subitizacionLevels: Level[] = [
    {
        id: 1,
        name: "Nivel 1: Números del 1 al 4",
        description: "Reconoce cantidades pequeñas del 1 al 4",
        patterns: [
            // Cantidad 1
            { patternId: "1-left", icons: [ICONS.BUHO_ROJO] },
            { patternId: "1-center", icons: [ICONS.BUHO_ROJO] },
            { patternId: "1-top-left", icons: [ICONS.BUHO_ROJO] },
            { patternId: "1-bottom-right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "1-second-column", icons: [ICONS.BUHO_ROJO] },

            // Cantidad 2
            { patternId: "2-left-to-right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-horizontal", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-vertical", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-diagonal", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-diagonal-reverse", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-scattered", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-scattered-reverse", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-left", icons: [ICONS.BUHO_ROJO] },
            { patternId: "2-right", icons: [ICONS.BUHO_ROJO] },

            // Cantidad 3
            { patternId: "3-left-to-right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "3-row", icons: [ICONS.BUHO_ROJO] },
            { patternId: "3-column", icons: [ICONS.BUHO_ROJO] },
            { patternId: "3-triangle", icons: [ICONS.BUHO_ROJO] },
            { patternId: "3-diagonal", icons: [ICONS.BUHO_ROJO] },
            { patternId: "3-1left-2right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "3-leftdiagonal-1right", icons: [ICONS.BUHO_ROJO] },

            // Cantidad 4
            { patternId: "4-left-to-right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-2topleft-2bottomright", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-2topright-2bottomleft", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-triangleleft-1right", icons: [ICONS.BUHO_ROJO] },
        ]
    },
    {
        id: 2,
        name: "Nivel 2: Números del 4 al 5",
        description: "Reconoce cantidades del 4 al 5",
        patterns: [
            // Cantidad 4
            { patternId: "4-left-to-right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-corners", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-square", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-cross", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-2topleft-2bottomright", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-2topright-2bottomleft", icons: [ICONS.BUHO_ROJO] },
            { patternId: "4-triangleleft-1right", icons: [ICONS.BUHO_ROJO] },


            // Cantidad 5
            { patternId: "5-x", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-plus", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-scattered", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-2left-3right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-3left-2right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-2top-3bottom", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-3top-2bottom", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-4-left-1right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-1left-4right", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-4top-1bottom", icons: [ICONS.BUHO_ROJO] },
            { patternId: "5-1top-4bottom", icons: [ICONS.BUHO_ROJO] },
        ]
    },
    {
        id: 3,
        name: "Nivel 3: Búhos de colores",
        description: "Reconoce cantidades con búhos rojos y verdes",
        patterns: [
            // Cantidad 2
            {
                patternId: "2-horizontal",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_VERDE]
            },
            {
                patternId: "2-vertical",
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_ROJO]
            },
            {
                patternId: "2-diagonal",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_VERDE]
            },

            // Cantidad 3
            {
                patternId: "3-row",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_ROJO]
            },
            {
                patternId: "3-triangle",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE]
            },

            // Cantidad 4
            {
                patternId: "4-2topleft-2bottomright",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE]
            },
            {
                patternId: "4-triangleleft-1right",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE]
            },
            {
                patternId: "4-triangleleft-1right",
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_ROJO]
            },            
            {
                patternId: "4-corners",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE]
            },
            {
                patternId: "4-square",
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO]
            },

            // Cantidad 5
            {
                patternId: "5-x",
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_ROJO,ICONS.BUHO_ROJO]
            },
            {
                patternId: "5-x",
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_ROJO,ICONS.BUHO_ROJO]
            },
            {
                patternId: "5-plus",
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE]
            },
            { 
                patternId: "5-2left-3right", 
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE]
            },
            { 
                patternId: "5-3left-2right", 
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE]
            },
            { 
                patternId: "5-2top-3bottom", 
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO]
            },
            { 
                patternId: "5-3top-2bottom", 
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE]
            },
            { 
                patternId: "5-4-left-1right", 
                icons: [ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_VERDE]
            },
            { 
                patternId: "5-1left-4right", 
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO]
            },
            { 
                patternId: "5-4top-1bottom", 
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_VERDE, ICONS.BUHO_ROJO]
            },
            { 
                patternId: "5-1top-4bottom", 
                icons: [ICONS.BUHO_VERDE, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO, ICONS.BUHO_ROJO]
            },
        ]
    }

];
