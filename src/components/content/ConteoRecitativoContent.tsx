
import {
    ArticleHeader,
    ArticleSection,
    ActivityBox,
    TipBox,
    InfoBox,
} from "@/components/pildoras/ArticleComponents";

import { findArticleById } from "@/data/pildorasData";

export default function ConteoRecitativoContent() {
    const article = findArticleById("conteo-recitativo");

    return (
        <>
            <ArticleHeader
                title={article?.title || "Conteo Recitativo"}
                subtitle={article?.subtitle || "La secuencia numérica verbal"}
                description="El conteo recitativo es la capacidad de recitar la secuencia de números de memoria, como una retahíla. Es el primer paso para aprender a contar de verdad."
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="¿Qué es el Conteo Recitativo?">
                <p>
                    A menudo confundimos “saber contar” con “recitar números”. Un niño puede decir “uno, dos, tres, cuatro, cinco” perfectamente, pero no saber que eso significa una cantidad. El conteo recitativo es puramente verbal y memorístico.
                </p>
                <p>
                    Sin embargo, es un andamio fundamental. Sin la cadena numérica verbal estable, no se puede aplicar el conteo a objetos (conteo resultativo).
                </p>
            </ArticleSection>

            <ArticleSection title="Niveles de la Cadena Numérica">
                <InfoBox title="Fases de Fuson y Hall (1983)">
                    <ul className="list-decimal pl-5 space-y-2 mt-2">
                        <li><strong>Nivel Cuerda:</strong> Los números van todos pegados (“unodostrescuatro”).</li>
                        <li><strong>Nivel Cadena Irrompible:</strong> Distingue los números, pero siempre debe empezar desde el 1.</li>
                        <li><strong>Nivel Cadena Rompible:</strong> Puede empezar a contar desde cualquier número (ej. desde el 5).</li>
                        <li><strong>Nivel Cadena Numerable:</strong> Puede contar X números a partir de Y.</li>
                        <li><strong>Nivel Cadena Bidireccional:</strong> Puede contar hacia adelante y hacia atrás.</li>
                    </ul>
                </InfoBox>
            </ArticleSection>

            <ArticleSection title="Actividades para el Aula">
                <ActivityBox title="El Cohete (Cuenta atrás)">
                    <p>
                        Simular el lanzamiento de un cohete contando hacia atrás desde el 10. “10, 9, 8... ¡Despegue!”. Esto ayuda a desarrollar la cadena bidireccional.
                    </p>
                </ActivityBox>

                <ActivityBox title="El Número Prohibido">
                    <p>
                        Contamos en ronda, pero decidimos que un número (ej. el 4) no se puede decir. El alumno debe dar una palmada en lugar de decir el número.
                    </p>
                </ActivityBox>

                <TipBox>
                    Las canciones son la mejor herramienta para el nivel “Cuerda” y “Cadena Irrompible”. Usa rimas y melodías pegadizas.
                </TipBox>
            </ArticleSection>
        </>
    );
}
