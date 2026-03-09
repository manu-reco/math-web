export interface Game {
    id: string;
    title: string;
    image: string;
    area: string;
    level: string;
    description: string;
    skills: string[];
    isAvailable: boolean;
    path: string;
}

export const games: Game[] = [
    {
        id: "subitizacion",
        title: "Subitización",
        image: "/subitizacion/subitizacion-juego-web.jpg",
        area: "Aritmética",
        level: "Primeros pasos y segundo ciclo",
        description: "Reconoce la cantidad de elementos sin necesidad de contar uno por uno.",
        skills: ["Concepto de cantidad", "Conteo", "Subitización", "Suma", "Composición y descomposición"],
        isAvailable: true,
        path: "/actividades/subitizacion/"
    },
    {
        id: "arboles-y-manzanas-1",
        title: "Árboles y manzanas. Parte 1",
        image: "/cuentos/arboles-y-manzanas.jpg",
        area: "Aritmética",
        level: "Primeros pasos",
        description: "Cuento interactivo para aprender a contar hasta 2 con manzanas y árboles.",
        skills: ["Sentido numérico", "Cantidad", "Cardinalidad", "Subitización", "Comunicación oral"],
        isAvailable: true,
        path: "/actividades/cuentos/arboles-y-manzanas-1"
    },
    {
        id: "buho-ejemplo",
        title: "Búhos al árbol",
        image: "/cuentos/tree.png",
        area: "Aritmética",
        level: "Primeros pasos",
        description: "Ejemplo de cuento interactivo con un búho que vuela al árbol.",
        skills: ["En desarrollo"],
        isAvailable: true,
        path: "/actividades/cuentos/owl-tree"
    },
    {
        id: "juego-4",
        title: "Próximamente",
        image: "logo-buho-relleno-color.svg",
        area: "Aritmética",
        level: "Segundo ciclo",
        description: "Juego todavía en desarrollo",
        skills: ["En desarrollo"],
        isAvailable: false,
        path: "#"
    },
    {
        id: "juego-5",
        title: "Próximamente",
        image: "logo-buho-relleno-color.svg",
        area: "Aritmética",
        level: "Tercer ciclo",
        description: "Juego todavía en desarrollo",
        skills: ["En desarrollo"],
        isAvailable: false,
        path: "#"
    }
];
