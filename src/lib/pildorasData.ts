
export type Saber = {
    id: string;
    title: string; // e.g., "Aritmética"
    icon: string; // Name of the icon to use
    color: string; // Tailwind color class
    description: string;
};

export type Nivel = {
    id: string;
    title: string; // e.g., "Primeros pasos"
    description: string;
};

export type Article = {
    id: string;
    title: string;
    subtitle: string;
};

export type Chapter = {
    id: string;
    title: string;
    articles: Article[];
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

export const NIVELES: Nivel[] = [
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
            articles: [
                {
                    id: "mayor-menor",
                    title: "Mayor que / Menor que",
                    subtitle: "Aprende a comparar cantidades.",
                },
                {
                    id: "izquierda-derecha",
                    title: "Izquierda - Derecha",
                    subtitle: "Orientación espacial básica.",
                },
                {
                    id: "actividades-conceptos-basicos",
                    title: "Actividades Aritmética - Conceptos básicos",
                    subtitle: "Para practicar lo aprendido.",
                }
            ],
        },
        {
            id: "conteo",
            title: "2. Conteo",
            articles: [
                {
                    id: "conteo-recitativo",
                    title: "Conteo Recitativo",
                    subtitle: "La secuencia numérica verbal.",
                },
                {
                    id: "conteo-resultativo",
                    title: "Conteo Resultativo",
                    subtitle: "Contar para saber cuántos hay.",
                },
            ],
        },
        {
            id: "subitizacion",
            title: "Subitización",
            articles: [
                {
                    id: "subitizacion-tarjetas-puntos-1",
                    title: "Subitización con Tarjetas de Puntos: Nivel 1",
                    subtitle: "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo, y asociarlas con números arábigos. Números del 1 al 3.",
                },
                {
                    id: "subitizacion-tarjetas-puntos-2",
                    title: "Subitización con Tarjetas de Puntos: Nivel 2",
                    subtitle: "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo, y asociarlas con números arábigos. Números del 3 al 5.",
                },
                {
                    id: "subitizacion-tarjetas-puntos-3",
                    title: "Subitización con Tarjetas de Puntos: Nivel 3",
                    subtitle: "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo, y asociarlas con números arábigos. Números del 5 al 7.",
                },
            ]
        },
        {
            id: "recta-numerica",
            title: "1. Introducción a la Recta Numérica",
            articles: [
                {
                    id: "descubriendo-recta",
                    title: "Descubriendo la Recta Numérica",
                    subtitle: "Cómo crear una conversación en el aula para que los niños/as descubran el concepto",
                }
            ],
        },

    ],
    // Add more mock data as needed
};

// Función helper para encontrar un artículo por su ID en saberes y niveles
export function findArticleById(articleId: string): Article | undefined {
    for (const chapters of Object.values(COURSE_CONTENT)) {
        for (const chapter of chapters) {
            const article = chapter.articles.find(a => a.id === articleId);
            if (article) {
                return article;
            }
        }
    }
    return undefined;
}
