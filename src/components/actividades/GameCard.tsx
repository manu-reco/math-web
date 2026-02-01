import React from "react";

import { Game } from '@/data/actividades';
import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
    game: Game;
}

export default function GameCard({ game }: GameCardProps) {
    return (
        <article
            className={`group ${!game.isAvailable ? 'pointer-events-none' : ''}`}
            role="listitem"
        >
            <Link
                href={game.isAvailable ? game.path : "#"}
                aria-label={`${game.title}${!game.isAvailable ? ' - Próximamente' : ''}`}
                aria-disabled={!game.isAvailable}
                className={`
                    bg-white rounded-2xl shadow-lg overflow-hidden 
                    transition-all duration-300 h-full flex flex-col
                    ${game.isAvailable
                        ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
                        : 'opacity-60 cursor-not-allowed'
                    }
                `}
            >
                {/* Imagen de portada */}
                <figure className="relative w-full h-64 bg-linear-to-br from-primary/10 to-secondary/10">
                    <Image
                        src={game.image}
                        alt={`Portada del juego ${game.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {!game.isAvailable && (
                        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center" role="status">
                            <span className="text-white text-2xl font-bold">
                                Próximamente
                            </span>
                        </div>
                    )}
                </figure>

                {/* Contenido */}
                <div className="p-6 flex flex-col grow">
                    {/* Saber y nivel */}
                    <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                            {game.area}
                        </span>
                        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full ml-2">
                            {game.level}
                        </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {game.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-text-secondary mb-4 grow">
                        {game.description}
                    </p>

                    {/* Habilidades */}
                    <footer className="flex flex-wrap gap-2">
                        {game.skills.map((habilidad, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-text-secondary text-xs rounded-full border border-gray-200"
                            >
                                {habilidad}
                            </span>
                        ))}
                    </footer>
                </div>
            </Link>
        </article>
    );
}