
export type Concept = {
    id: string;
    title: string;
    description: string;
};

export type Chapter = {
    id: string;
    title: string;
    concepts: Concept[];
};

export type Level = {
    id: string;
    title: string; // e.g., "Primeros pasos"
    description: string;
};

export type Saber = {
    id: string;
    title: string; // e.g., "Aritmética"
    icon: string; // Name of the icon to use
    color: string; // Tailwind color class
    description: string;
};

export const SABERES: Saber[] = [
    {
        id: "aritmetica",
        title: "Aritmética",
        icon: "Calculator",
        color: "bg-blue-100 text-blue-600",
        description: "Domina los números y las operaciones básicas.",
    },
    {
        id: "geometria",
        title: "Geometría",
        icon: "Shapes",
        color: "bg-green-100 text-green-600",
        description: "Explora formas, espacios y dimensiones.",
    },
    {
        id: "problemas",
        title: "Problemas",
        icon: "BrainCircuit",
        color: "bg-purple-100 text-purple-600",
        description: "Desarrolla el pensamiento lógico y la resolución.",
    },
    {
        id: "medidas",
        title: "Medidas",
        icon: "Ruler",
        color: "bg-orange-100 text-orange-600",
        description: "Aprende a medir el mundo que te rodea.",
    },
    {
        id: "probabilidad",
        title: "Probabilidad y Estadística",
        icon: "BarChart3",
        color: "bg-red-100 text-red-600",
        description: "Analiza datos y predice resultados.",
    },
];

export const NIVELES: Level[] = [
    {
        id: "primeros-pasos",
        title: "Primeros Pasos",
        description: "Infantil y 1º ciclo de Primaria",
    },
    {
        id: "segundo-ciclo",
        title: "Segundo Ciclo",
        description: "3º y 4º de Primaria",
    },
    {
        id: "tercer-ciclo",
        title: "Tercer Ciclo",
        description: "5º y 6º de Primaria",
    },
];

// Mock data for content
export const COURSE_CONTENT: Record<string, Chapter[]> = {
    "aritmetica-primeros-pasos": [
        {
            id: "conceptos-basicos",
            title: "1. Conceptos básicos",
            concepts: [
                {
                    id: "mayor-menor",
                    title: "Mayor que / Menor que",
                    description: "Aprende a comparar cantidades.",
                },
                {
                    id: "izquierda-derecha",
                    title: "Izquierda - Derecha",
                    description: "Orientación espacial básica.",
                },
                {
                    id: "actividades-conceptos-basicos",
                    title: "Actividades Aritmética - Conceptos básicos",
                    description: "Para practicar lo aprendido.",
                }
            ],
        },
        {
            id: "conteo",
            title: "2. Conteo",
            concepts: [
                {
                    id: "conteo-recitativo",
                    title: "Conteo Recitativo",
                    description: "La secuencia numérica verbal.",
                },
                {
                    id: "conteo-resultativo",
                    title: "Conteo Resultativo",
                    description: "Contar para saber cuántos hay.",
                },
                {
                    id: "subitizacion",
                    title: "Subitización",
                    description: "Reconocer cantidades de un vistazo.",
                },
            ],
        },
    ],
    // Add more mock data as needed
};
