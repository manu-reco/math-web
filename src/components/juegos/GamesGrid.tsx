import React from "react";

import GameCard from "@/components/juegos/GameCard";
import { Game } from "@/data/juegos";

interface GamesGridProps {
    games: Game[];
}

export default function GamesGrid({ games }: GamesGridProps) {
    return (
        <section className="container-custom max-w-7xl mx-auto mt-12 px-6" aria-label="Lista de juegos educativos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>

    );
}
