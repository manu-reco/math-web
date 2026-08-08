import React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Game } from '@/data/actividades';
import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
    game: Game;
}

export default function GameCard({ game }: GameCardProps) {
    const isAvailable = game.isAvailable;

    return (
        <article
            className={`group ${!isAvailable ? 'pointer-events-none' : ''}`}
            role="listitem"
        >
            <Link
                href={isAvailable ? game.path : "#"}
                aria-label={`${game.title}${!isAvailable ? ' - Próximamente' : ''}`}
                aria-disabled={!isAvailable}
                className="block h-full"
            >
                <Card
                    className={`pt-0 h-full transition-all duration-300 ${isAvailable
                        ? 'hover:-translate-y-1 hover:shadow-lg'
                        : 'opacity-60'
                    }`}
                >
                    <figure className="relative h-64 w-full bg-linear-to-br from-primary/10 to-secondary/10">
                        <Image
                            src={game.image}
                            alt={`Portada del juego ${game.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {!isAvailable && (
                            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center" role="status">
                                <span className="heading-sm text-white">
                                    Próximamente
                                </span>
                            </div>
                        )}
                    </figure>

                    <CardHeader className="gap-3">
                        <div className="flex flex-wrap gap-2">
                            <Badge size="lg" className="text-primary bg-primary/10">
                                {game.area}
                            </Badge>
                            <Badge size="lg" className="text-secondary bg-secondary/10">
                                {game.level}
                            </Badge>
                        </div>

                        <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                            {game.title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-4">
                        <CardDescription className="grow text-text-secondary">
                            {game.description}
                        </CardDescription>

                        <CardFooter className="flex-wrap gap-2 px-0 pt-0">
                            {game.skills.map((habilidad, idx) => (
                                <Badge
                                    key={idx}
                                    variant="outline"
                                    className="text-text-secondary font-normal bg-gray-100"
                                >
                                    {habilidad}
                                </Badge>
                            ))}
                        </CardFooter>
                    </CardContent>
                </Card>
            </Link>
        </article>
    );
}