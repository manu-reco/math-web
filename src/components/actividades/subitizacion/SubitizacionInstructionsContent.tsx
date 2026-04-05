import ActivityControlsText from "../ActivityControlsText";
import { ArticleSection, TipBox } from "@/components/pildoras/ArticleComponents";

export default function SubitizacionInstructionsContent() {
    return (
        <>
            <ArticleSection title="¿Qué es la subitización?">
                <p className="mb-3">
                    La subitización es la capacidad de <strong>reconocer rápidamente la cantidad de elementos</strong> en un conjunto pequeño <strong>sin necesidad de contarlos uno por uno</strong>.
                </p>
                <p>
                    De manera innata, las personas podemos identificar conjuntos de 1, 2 y 3 elementos de un solo vistazo.
                    Esta habilidad se puede desarrollar, y con la práctica, los estudiantes podrán reconocer cantidades mayores de forma instantánea y aprender descomposiciones de números sin darse cuenta. 😉
                </p>
            </ArticleSection>

            <ArticleSection title="¿Cómo funciona esta actividad?">
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Selecciona un nivel de dificultad apropiado para tus estudiantes. Comienza con dibujos de colores para facilitar la agrupación, y puntos negros para avanzar hacia lo abstracto.</li>
                    <li>Aparecerán iconos en diferentes posiciones de una cuadrícula</li>
                    <li>Los estudiantes deben identificar rápidamente cuántos iconos hay</li>
                    <li>Pasa al siguiente patrón tocando la pantalla o presionando el Espacio o las flechas</li>
                    <li>Al completar todos los patrones del nivel, podrás avanzar al siguiente, o repetirlo para aumentar la rapidez de reacción</li>
                </ul>
            </ArticleSection>

            <ArticleSection title="Niveles disponibles">
                <ul className="space-y-2 ml-4">
                    <li><strong>Nivel 1:</strong> Números del <strong>1 al 3</strong></li>
                    <li><strong>Nivel 2:</strong> Números del <strong>1 al 4</strong></li>
                    <li><strong>Nivel 3:</strong> Números del <strong>1 al 5</strong></li>
                </ul>
            </ArticleSection>

            <TipBox>
                    Consejo: Anima a los estudiantes a decir el número <strong> en voz alta
                    sin contar</strong>. El objetivo es desarrollar el reconocimiento visual inmediato.
            </TipBox>

            <ActivityControlsText />
        </>
    );
}
