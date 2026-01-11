
import {
    ArticleHeader,
    ArticleSection,
    ActivityBox,
    TipBox,
    InfoBox,
    KeyPoints
} from "@/components/pildoras/ArticleComponents";

import { findArticleById } from "@/lib/pildorasData";

export default function MayorMenorContent() {
    const article = findArticleById("mayor-menor");

    return (
        <>
            <ArticleHeader
                title={article?.title || "Mayor que, Menor que e Igual"}
                subtitle={article?.subtitle || "Fundamentos de la comparación numérica"}
                description="La capacidad de comparar cantidades es fundamental para el desarrollo del sentido numérico. Antes de operar, los niños deben comprender las relaciones de magnitud."
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="Teoría: La Comparación">
                <p>
                    Comparar es establecer una relación entre dos o más objetos o cantidades. En la etapa de Educación Infantil y primer ciclo de Primaria, comenzamos comparando cualidades (más grande, más pequeño) para luego pasar a cantidades (más que, menos que).
                </p>
                <p>
                    Es crucial introducir los signos matemáticos <strong>{'>'}</strong>, <strong>{'<'}</strong> y <strong>{'='}</strong> solo cuando el concepto de cantidad y comparación verbal esté bien asentado.
                </p>
                <TipBox>
                    Una regla mnemotécnica clásica es “el cocodrilo siempre se come al número mayor”. La boca abierta apunta a la cantidad más grande.
                </TipBox>
            </ArticleSection>

            <ArticleSection title="Progresión de Aprendizaje">
                <KeyPoints points={[
                    "Comparación visual: ¿Dónde hay más fichas? (sin contar)",
                    "Correspondencia uno a uno: Emparejar elementos para ver cuál sobra.",
                    "Conteo y comparación: Contar ambos grupos y comparar los números.",
                    "Uso de la recta numérica: El número que está 'más adelante' es mayor.",
                    "Introducción de la simbología: >, <, =."
                ]} />
            </ArticleSection>

            <ArticleSection title="Actividades Propuestas">
                <ActivityBox title="El Monstruo Glotón">
                    <p className="mb-2"><strong>Materiales:</strong> Una marioneta de calcetín o un dibujo de una boca abierta, fichas o caramelos.</p>
                    <p>
                        Coloca dos montones de fichas sobre la mesa. Pide al alumno que haga que el Monstruo Glotón se coma el montón que tiene más comida.
                        Esto refuerza la idea de que la apertura se orienta hacia la cantidad mayor.
                    </p>
                </ActivityBox>

                <ActivityBox title="Guerra de Cartas">
                    <p>
                        Utilizando una baraja de cartas (sin figuras al principio), dos alumnos sacan una carta a la vez. El que tiene el número mayor se lleva ambas cartas. Gana quien consiga todas las cartas.
                    </p>
                </ActivityBox>
            </ArticleSection>

            <ArticleSection title="Errores Comunes">
                <InfoBox title="Confusión de signos">
                    Es muy común que los niños confundan la dirección del signo. No te preocupes por la escritura formal del signo hasta que entiendan perfectamente el concepto verbalmente (“3 es más que 2”).
                </InfoBox>
            </ArticleSection>
        </>
    );
}
