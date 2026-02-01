interface InstructionsScreenProps {
    onStart: () => void;
}

export default function InstructionsScreen({ onStart }: InstructionsScreenProps) {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">
                Instrucciones para el profesor
            </h2>
            
            <div className="space-y-6 text-lg">
                <section>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                        ¿Qué es la subitización?
                    </h3>
                    <p className="mb-3">
                        La subitización es la capacidad de reconocer rápidamente la cantidad de elementos 
                        en un conjunto pequeño sin necesidad de contarlos uno por uno.
                    </p>
                    <p>
                        De manera innata, las personas podemos identificar conjuntos de 1, 2 y 3 elementos de un solo vistazo. Esta habilidad se puede desarrollar, y con la práctica, los estudiantes podrán reconocer cantidades mayores de forma instantánea y aprender descomposiciones de números sin darse cuenta. 😉
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                        ¿Cómo funciona esta actividad?
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Selecciona un nivel de dificultad apropiado para tus estudiantes</li>
                        <li>Aparecerán iconos en diferentes posiciones de una cuadrícula</li>
                        <li>Los estudiantes deben identificar rápidamente cuántos iconos hay</li>
                        <li>Pulsa la <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Barra espaciadora</kbd> para mostrar el siguiente patrón</li>
                        <li>Al completar todos los patrones del nivel, podrás avanzar al siguiente</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                        Niveles disponibles
                    </h3>
                    <ul className="space-y-2 ml-4">
                        <li><strong>Nivel 1:</strong> Números del 1 al 3</li>
                        <li><strong>Nivel 2:</strong> Números del 1 al 4</li>
                        <li><strong>Nivel 3:</strong> Números del 1 al 5</li>
                    </ul>
                </section>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-blue-900">
                        <strong>💡 Consejo:</strong> Anima a los estudiantes a decir el número en voz alta 
                        sin contar. El objetivo es desarrollar el reconocimiento visual inmediato.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={onStart}
                    className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                    Comenzar actividad
                </button>
            </div>
        </div>
    );
}
