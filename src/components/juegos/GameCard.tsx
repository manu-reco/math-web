import React from "react";

import { Game } from '@/data/juegos';
import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
    game: Game;
}

export default function GameCard({ game }: GameCardProps) {
    return (
        <Link
            key={game.id}
            href={game.isAvailable ? game.path : "#"}
            className={`group ${!game.isAvailable ? 'pointer-events-none' : ''}`}
        >
            <div className={`
                                bg-white rounded-2xl shadow-lg overflow-hidden 
                                transition-all duration-300 h-full flex flex-col
                                ${game.isAvailable
                    ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
                    : 'opacity-60 cursor-not-allowed'
                }
                            `}>
                {/* Imagen de portada */}
                <div className="relative w-full h-64 bg-linear-to-br from-primary/10 to-secondary/10">
                    <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {!game.isAvailable && (
                        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                                Próximamente
                            </span>
                        </div>
                    )}
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col grow">
                    {/* Saber */}
                    <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                            {game.area}
                        </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {game.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 mb-4 grow">
                        {game.description}
                    </p>

                    {/* Habilidades */}
                    <div className="flex flex-wrap gap-2">
                        {game.skills.map((habilidad, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                            >
                                {habilidad}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}