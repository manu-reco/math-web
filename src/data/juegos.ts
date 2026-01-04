export interface Game {
    id: string;
    title: string;
    image: string;
    area: string;
    description: string;
    skills: string[];
    isAvailable: boolean;
    path: string;
}

export const games: Game[] = [
    {
        id: "subitizacion",
        title: "Subitización",
        image: "/subitizacion/tarjetas-puntos-1-4-desord.png",
        area: "Aritmética",
        description: "Reconoce la cantidad de elementos sin necesidad de contar uno por uno.",
        skills: ["Concepto de cantidad", "Conteo", "Subitización", "Suma", "Composición y descomposición"],
        isAvailable: true,
        path: "/juegos/subitizacion/"
    },
    {
        id: "buho-ejemplo",
        title: "Búhos al árbol",
        image: "/cuentos/tree.png",
        area: "Aritmética",
        description: "Ejemplo de cuento interactivo con un búho que vuela al árbol.",
        skills: ["En desarrollo"],
        isAvailable: true,
        path: "/juegos/cuentos/owl-tree"
    },
    {
        id: "juego-3",
        title: "Próximamente",
        image: "/placeholder-game.png",
        area: "Aritmética",
        description: "Juego todavía en desarrollo",
        skills: ["En desarrollo"],
        isAvailable: false,
        path: "#"
    },
    {
        id: "juego-4",
        title: "Próximamente",
        image: "/placeholder-game.png",
        area: "Aritmética",
        description: "Juego todavía en desarrollo",
        skills: ["En desarrollo"],
        isAvailable: false,
        path: "#"
    }
];
