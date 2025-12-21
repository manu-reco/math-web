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
        id: "juego-2",
        title: "Juego 2",
        image: "/recta-numerica/5-buhos-rojos.png",
        area: "Aritmética",
        description: "Ejemplo de juego disponible próximamente.",
        skills: ["En desarrollo"],
        isAvailable: true,
        path: "#"
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
