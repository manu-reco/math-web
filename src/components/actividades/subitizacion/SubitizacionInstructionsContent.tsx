import ActivityControlsText from "../ActivityControlsText";

export default function SubitizacionInstructionsContent() {
    return (
        <>
            <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                    ¿Qué es la subitización?
                </h3>
                <p className="mb-3">
                    La subitización es la capacidad de reconocer rápidamente la cantidad de elementos
                    en un conjunto pequeño sin necesidad de contarlos uno por uno.
                </p>
                <p>
                    De manera innata, las personas podemos identificar conjuntos de 1, 2 y 3 elementos de un solo vistazo.
                    Esta habilidad se puede desarrollar, y con la práctica, los estudiantes podrán reconocer cantidades
                    mayores de forma instantánea y aprender descomposiciones de números sin darse cuenta. 😉
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
                    <li>Pulsa la Barra espaciadora para mostrar el siguiente patrón</li>
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

            <ActivityControlsText />
        </>
    );
}
