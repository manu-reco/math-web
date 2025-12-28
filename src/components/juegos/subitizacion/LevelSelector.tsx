import { Level } from "@/data/subitizacionPatterns";

interface LevelSelectorProps {
    levels: Level[];
    onSelectLevel: (level: Level) => void;
}

export default function LevelSelector({ levels, onSelectLevel }: LevelSelectorProps) {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Selecciona un nivel
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {levels.map((level) => {
                    const isAvailable = level.patterns.length > 0;
                    
                    return (
                        <button
                            key={level.id}
                            onClick={() => isAvailable && onSelectLevel(level)}
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
                                    ${isAvailable ? 'text-primary' : 'text-gray-400'}
                                `}>
                                    Nivel {level.id}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    {level.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    {level.description}
                                </p>
                                {isAvailable && (
                                    <div className="text-xs text-primary font-medium">
                                        {level.patterns.length} patrones
                                    </div>
                                )}
                                {!isAvailable && (
                                    <div className="text-xs text-gray-500 font-medium mt-2">
                                        Próximamente
                                    </div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
