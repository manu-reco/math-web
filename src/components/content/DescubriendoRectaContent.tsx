import {
    ArticleHeader,
    ArticleSection,
    KeyPoints,
    DialogTeacherBubble,
    DialogStudentBubble,
    ConceptPopover,
    ArticleImages,
    TipBox
} from "@/components/pildoras/ArticleComponents";

import { findArticleById } from "@/data/pildorasData";

export default function DescubriendoRectaContent() {
    const article = findArticleById("descubriendo-recta");

    return (
        <>
            <ArticleHeader
                title={article?.title || "Descubriendo la Recta Numérica"}
                subtitle={article?.subtitle || "Ejemplo de actividad que favorece la construcción de la recta numérica manipulativa."}
                description="En el artículo anterior, hemos visto que aprender a construir la recta numérica es fundamental para el desarrollo del sentido numérico en los niños y niñas. Hoy lo trabajamos de manera sencilla, utilizando una conversación guiada en el aula y material manipulativo."
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="Presentación de la actividad">
                <p>Empezamos con objetos reales o juguetitos de un tamaño parecido a un policubo de 2 cm cúbicos. Comienza el docente mostrando a los niños/as en la mesa grande varios objetos (en este caso serán patitos de goma, pero pueden ser fichas, policubos, etc.).</p>

                <p>El docente debe fomentar la participación de los niños/as a través de preguntas:</p>

                <DialogTeacherBubble>
                    <p>(Toma un objeto en una mano): “¿Cuántos patitos tengo en esta mano?”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“UNO”.</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>(Toma otro objeto en la otra mano): “¿Cuántos patitos tengo en esta mano?”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“UNO”.</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>(Junta los dos en una mano): “¿Cuántos patitos tengo en esta mano?”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“DOS”.</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>(Toma otro objeto en la otra mano): “¿Cuántos patitos tengo en esta mano?”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“UNO”.</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>(Junta los tres en la misma mano): “¿Cuántos patitos tengo en esta mano?”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“TRES”.</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>“¿Cuándo tenemos dos? Cuando tenemos uno y uno. ¿Cuándo tenemos dos? Cuando tenemos…”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“UNO Y UNO”.</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>“¿Cuándo tenemos dos? Cuando tenemos uno más uno. ¿Cuándo tenemos dos? Cuando tenemos…”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“UNO MÁS UNO.”</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>“¿Cuándo tenemos tres? Cuando tenemos uno y uno y uno. ¿Cuándo tenemos tres? Cuando tenemos…”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“UNO Y UNO Y UNO.”</p>
                </DialogStudentBubble>

                <DialogTeacherBubble>
                    <p>“¿Cuándo tenemos tres? Cuando tenemos uno, más uno, más uno. ¿Cuándo tenemos tres? Cuando tenemos…”</p>
                </DialogTeacherBubble>

                <DialogStudentBubble>
                    <p>“UNO, MÁS UNO, MÁS UNO.”</p>
                </DialogStudentBubble>

                <p>Repetimos la actividad con <strong>diferentes objetos</strong> para que entiendan desde el principio que <strong>el número solo se refiere a la cantidad</strong>, independientemente de los objetos, los colores, las formas, etc.</p>
            </ArticleSection>

            <ArticleSection title="Juegos Propuestos">
                <p>Los alumnos/as estarán dispuestos en equipos de cuatro. Elegimos uno de los materiales para jugar.</p>

                <ul className="list-disc list-inside my-4 space-y-1">
                    <li><strong>Cantidad:</strong> Seis por niño/a, aproximadamente.</li>
                    <li><strong>Disposición:</strong> Colocamos los objetos dentro de una cesta en medio de la mesa para que todos los puedan alcanzar.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Primera actividad</h3>
                <p>La actividad inicial será sencilla: dar instrucciones para que cada niño/a tome de la cesta el número de objetos que el docente diga en alto y los coloque en su mesita.</p>
                <p>El docente da las instrucciones despacio: <span className="font-bold">“DOS”</span>. Los niños/as toman dos objetos y los colocan en su mesa. Cuando hemos comprobado que está correcto, devuelven los objetos a la cesta y volvemos a empezar.</p>
                <p>Repetimos varias veces de forma aleatoria: <span className="font-bold">“UNO”, “TRES”, “UNO”, “DOS”...</span> Cuando ya se han familiarizado, se aumenta la velocidad.</p>
                <p>A continuación, se hará exactamente igual, pero <strong>mostrando tarjetas con los dígitos escritos</strong>, sin nombrarlos en alto.</p>

                {/* <ArticleImages images={[
                    { src: "/ruta-a-tu-imagen/tarjetas-digitos.png", alt: "Muestra de las tarjetas con los dígitos escritos 1, 2 y 3" }
                ]} /> 
                */}

                <h3 className="text-xl font-semibold mt-6 mb-2">Segunda actividad</h3>

                <h4 className="text-lg font-medium mt-4 mb-1">1ª fase</h4>
                <p>En una mesa auxiliar habrá una lámina plastificada (tamaño A3 o mayor) con círculos dibujados, en cada uno de los cuales quepan fácilmente tres objetos. Los niños/as estarán de pie y actuarán por turnos, en el orden que se establezca. Nos aseguramos de que en la cesta haya un número de objetos que sea <strong>múltiplo de tres</strong>.</p>

                <ArticleImages images={[
                    { src: "recta-numerica/patitos-circulos-fuera.jpeg", alt: "Patitos de goma dentro de un bol, y debajo una hoja de tamaño A3 con círculos dibujados, vacíos." }
                ]} />

                <p>Cuando el docente nombre una cantidad (por ejemplo, <span className="font-bold">“DOS”</span>), el niño/a que empiece tendrá que coger esa cantidad de objetos de la cesta y colocarlos en uno de los círculos de la lámina.</p>
                <p>Esperamos a que todos los grupos lo hayan hecho y pasamos al segundo miembro de cada grupo. El docente nombra otro número (siempre entre 1, 2 o 3), el alumno/a coge esa cantidad de objetos y los lleva hasta la lámina, colocándolos en otro círculo distinto. Seguimos con los demás miembros del grupo hasta que la cesta quede vacía.</p>

                <ArticleImages images={[
                    { src: "recta-numerica/patitos-circulos-dentro.jpeg", alt: "Una hoja de tamaño A3, con círculos dibujados, y uno, dos o tres patitos de goma dentro de cada uno." }
                ]} />


                <h4 className="text-lg font-medium mt-4 mb-1">2ª fase</h4>
                <p>Cuando todos los niños/as han llevado objetos y están todos en la lámina colocados dentro de los círculos, comenzamos la actividad a la inversa.</p>
                <p>Los alumnos/as, de uno en uno y en el orden establecido, deberán llevar los objetos a la cesta, pero en este caso será <strong>siempre de tres en tres</strong>, cuando el docente dé la instrucción.</p>
                <p>De este modo, podrán tomar tres de un mismo círculo, o combinando de dos o tres círculos, respetando todas las posibilidades. Ejemplos:</p>

                <ul className="list-disc list-inside my-2 pl-4 space-y-1">
                    <li>En un círculo hay dos y en otro hay uno. Podemos tomar los tres a la vez.</li>
                    <li>En un círculo que tiene dos se puede tomar solo uno para completar con si solo es uno el que necesito.</li>
                </ul>

                <p>La única condición es que se trasladen exactamente tres a la cesta en cada movimiento. La actividad termina cuando ya no quedan objetos en las láminas. Si al principio el número de objetos de cada cesta es múltiplo de tres, no sobrará ninguno.</p>

                <p>Al igual que antes, es bueno usar <strong>diferentes objetos</strong> para que demostrar que da igual el tipo de objeto que se use, que el número siempre se refiere a la cantidad.</p>

                <ArticleImages images={[
                    { src: "recta-numerica/plastilina-circulos-fuera.jpeg", alt: "Bolitas de plastilina dentro de un bol, y debajo una hoja de papel con círculos dibujados, vacíos." },
                    { src: "recta-numerica/plastilina-circulos-dentro.jpeg", alt: "Una hoja de papel, con círculos dibujados, y dos o tres bolitas de plastilina dentro de cada uno." },
                    { src: "recta-numerica/fichas-circulos-fuera.jpeg", alt: "Un grupo de fichas de damas arriba,  y debajo una hoja de papel con círculos dibujados, vacíos." },
                    { src: "recta-numerica/fichas-circulos-dentro.jpeg", alt: "Una hoja de papel, con círculos dibujados, y dos o tres fichas de damas dentro de cada uno." },
                    { src: "recta-numerica/parchis-circulos-fuera.jpeg", alt: "Una cajita con muchas fichas de parchís arriba,  y debajo una hoja de papel con círculos dibujados, vacíos." },
                    { src: "recta-numerica/parchis-circulos-dentro.jpeg", alt: "Una cajita con pocas fichas de parchís arriba, y debajo una hoja de papel con círculos dibujados, y dos o tres fichas de parchís dentro de cada uno." }
                ]} />

                <p>En un segundo nivel, se repite el juego <strong>cambiando las instrucciones orales por tarjetas con los dígitos 1, 2 y 3</strong>, mostrándolos en lugar de nombrarlos.</p>

                <TipBox>Esta actividad se puede llevar a cabo en espacios más amplios, como el patio o un aula de usos múltiples, con el fin de hacer intervenir más sentidos y también para que puedan moverse con más comodidad.</TipBox>
            </ArticleSection>

            <ArticleSection title="Introducción de Plantillas">
                <p>Cuando el alumnado ya se ha familiarizado con este juego, lo repetiremos con <strong>plantillas en sustitución de los círculos</strong>. En este caso, en la lámina habrá plantillas de uno, dos y tres cuadrados, con un tamaño suficiente para poder poner los objetos en orden.</p>
            </ArticleSection>

            <ArticleSection title="Contenidos que se entrenan">
                <KeyPoints points={[
                    <ConceptPopover key="sentido-numerico" conceptId="sentido-numerico" />,
                    <ConceptPopover key="conteo" conceptId="conteo" />,
                    <ConceptPopover key="subitizacion" conceptId="subitizacion" />,
                    <ConceptPopover key="composicion-y-descomposicion" conceptId="composicion-y-descomposicion" />,
                    <ConceptPopover key="relacion-suma-resta" conceptId="relacion-suma-resta" />,
                    <ConceptPopover key="construccion-recta-numerica" conceptId="construccion-recta-numerica" />
                ]} />
            </ArticleSection>
        </>
    );
}