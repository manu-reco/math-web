import { Level } from "@/data/subitizacionPatterns";

interface LevelSelectorProps {
    concreteLevels: Level[];
    abstractLevels: Level[];
    onSelectLevel: (level: Level, mode: 'concrete' | 'abstract') => void;
}

export default function LevelSelector({ concreteLevels, abstractLevels, onSelectLevel }: LevelSelectorProps) {
    const renderLevelCard = (level: Level, mode: 'concrete' | 'abstract') => {
        const isAvailable = level.patterns.length > 0;

        return (
            <button
                key={`${mode}-${level.id}`}
                onClick={() => isAvailable && onSelectLevel(level, mode)}
                disabled={!isAvailable}
                className={`
                    p-6 rounded-xl border-2 transition-all duration-300
                    ${isAvailable
                        ? 'bg-white border-primary hover:border-primary-hover hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                        : 'bg-gray-100 border-gray-300 opacity-60 cursor-not-allowed'
                    }
                `}
            >
                <div className="text-center">
                    <div className={`
                        text-4xl font-bold mb-3
                        ${isAvailable ? 'text-primary' : 'text-muted-foreground'}
                    `}>
                        Nivel {level.id}
                    </div>
                    <h3 className="font-semibold mb-2">
                        {level.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-3">
                        {level.description}
                    </p>
                    {isAvailable && (
                        <div className="text-xs text-primary font-medium">
                            {level.patterns.length} patrones
                        </div>
                    )}
                    {!isAvailable && (
                        <div className="text-xs text-muted-foreground font-medium mt-2">
                            Próximamente
                        </div>
                    )}
                </div>
            </button>
        );
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            {/* Sección Concreto */}
            <section>
                <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">Concreto (Búhos)</h2>

                    <p className="text-text-secondary">
                        Reconoce cantidades con búhos de colores
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {concreteLevels.map((level) => renderLevelCard(level, 'concrete'))}
                </div>
            </section>

            {/* Sección Abstracto */}
            <section>
                <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">
                        Abstracto (Puntos)
                    </h2>
                    <p className="text-text-secondary">
                        Reconoce cantidades con representación abstracta
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {abstractLevels.map((level) => renderLevelCard(level, 'abstract'))}
                </div>
            </section>
        </div>
    );
}
