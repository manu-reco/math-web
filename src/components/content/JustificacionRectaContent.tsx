import {
    ArticleHeader,
    ArticleSection,
    InfoBox
} from "@/components/pildoras/ArticleComponents";

import { findArticleById } from "@/data/pildorasData";

export default function JustificacionRectaContent() {
    const article = findArticleById("justificacion-recta");
    return (
        <>
            <ArticleHeader
                title={article?.title || "¿Por qué construir la recta numérica?"}
                subtitle={article?.subtitle || "Una herramienta sencilla que puede transformar el aprendizaje matemático"}
                description="La recta numérica es una herramienta fundamental para el desarrollo del sentido numérico en los niños y niñas. En esta sección, exploraremos por qué es importante construir la recta numérica desde una edad temprana y cómo esta construcción contribuye al aprendizaje de conceptos matemáticos esenciales."
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="Números y espacio: una misma ruta en el cerebro">
                <p>Cuando pensamos en matemáticas escolares, es fácil que se nos pasen por la cabeza imágenes como cuadernos llenos de números, símbolos y operaciones. Sin embargo, los niños ya poseen una <strong>capacidad innata extraordinaria</strong> que existe antes de que aprendan a sumar, restar o resolver problemas con “Datos”, “Operaciones” y “Resultado”; e incluso antes de que los niños aprendan a escribir el número 1 o 2: <strong>son capaces de percibir cantidades y relacionarlas con el espacio que les rodea.</strong></p>

                <p>Durante décadas hemos enseñado los números como símbolos que debían memorizarse y manipularse siguiendo reglas. Sin embargo, la investigación actual en neurociencia cognitiva nos invita a mirar el aprendizaje matemático desde otra perspectiva.</p>

                <p>En la siguiente entrevista a <strong>Stanislas Dehaene</strong>, uno de los mayores especialistas mundiales en el estudio del cerebro y las matemáticas, explica que los números y el espacio están profundamente conectados en nuestra mente.</p>

                <InfoBox title="Cómo funciona nuestro cerebro | Stanislas Dehaene, neurocientífico">
                    <div className="leading-relaxed space-y-6">
                        <p>“<strong>En el cerebro, los números y el espacio van de la mano</strong>. En el lóbulo parietal tenemos una estructura que interpreta tanto el número de objetos como el espacio que tenemos a nuestro alrededor y los combina.</p>
                        <p><strong>Cuando pensamos en un número, no podemos evitar ubicarlo en el espacio</strong>. Si pensáis en un <strong>número pequeño</strong>, lo veréis <strong>a la izquierda</strong>. Si pensáis en un <strong>número grande</strong>, lo veréis <strong>a la derecha</strong>. Veréis una especie de línea mental. 
                        </p>
                        <p><strong>Los docentes que se basan en esta idea obtienen mejores resultados</strong> que los que no lo hacen.</p>
                        <p>Podemos concretar los números y todas las operaciones matemáticas ubicándolos mentalmente en una línea. Sumar es ir avanzando a lo largo de la línea. <strong>Si sumo 5+2, me desplazo dos casillas más adelante</strong> en esta línea numérica. <strong>Si resto 7–2, reculo dos casillas</strong>. Así logro entender que 5+2 y que 7–2 son <strong>operaciones simétricas</strong>. </p>
                        <p>Teniendo en cuenta la forma en que nuestro cerebro combina los números y el espacio, podemos llegar a enseñar de una manera mucho más eficaz. Y no hace falta que sea un concepto matemático muy abstracto o complicado. Hay muchos estudios que demuestran como <strong>los puzles</strong>, al menos para los niños, pero también <strong>juegos más sencillos, como el parchís</strong>, en el que <strong>vamos avanzando casillas</strong> según la tirada de los dados, hacen que <strong>los niños se aficionen a las matemáticas</strong> y que tengan <strong>más facilidad</strong> para entenderlas en comparación con otros niños.</p>
                        <p>Yo abogo por un <strong>aprendizaje</strong> que sea menos formal, pero <strong>que tenga en cuenta las intuiciones espontáneas</strong> que albergamos en algunas partes de nuestro cerebro.”</p>
                    </div>
                </InfoBox>

                <p>Os dejamos la entrevista completa a continuación. Puedes reproducirla desde este momento al darle al play. Aunque si tienes tiempo, merece la pena verla completa.</p>

                <div className="mt-4 w-full overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
                    <div className="aspect-video w-full">
                        <iframe
                            src="https://www.youtube.com/embed/j9EImcqgnE4?si=HcdKFuBsDC8rKfRS&amp;start=3559"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </ArticleSection>
        </>
    );

}