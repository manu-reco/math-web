
import {
    ArticleHeader,
    ArticleSection,
    KeyPoints,
    DialogBubble,
    ConceptPopover,
    ArticleImages,
} from "@/components/pildoras/ArticleComponents";

import { findArticleById } from "@/data/pildorasData";

export default function ActividadesConceptosBasicosContent() {
    const article = findArticleById("descubriendo-recta");

    return (
        <>
            <ArticleHeader
                title={article?.title || "Descubriendo la Recta Numérica"}
                subtitle={article?.subtitle || "Fomentando el descubrimiento en lugar de la instrucción directa"}
                description="Aprender a construir la recta numérica es fundamental para el desarrollo del sentido numérico en los niños y niñas. Hoy lo enseñamos de manera sencilla, utilizando una conversación guiada en el aula y material manipulativo."
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="Actividades que entrenan: ">
                <KeyPoints points={[
                    <ConceptPopover
                        key="concepto-de-cantidad"
                        conceptId="concepto-de-cantidad"
                    />,
                    <ConceptPopover
                        key="conteo"
                        conceptId="conteo"
                    />,
                    <ConceptPopover
                        key="cardinalidad"
                        conceptId="cardinalidad"
                    />,
                    <ConceptPopover
                        key="subitizacion"
                        conceptId="subitizacion"
                    />,
                    <ConceptPopover
                        key="composicion-y-descomposicion"
                        conceptId="composicion-y-descomposicion"
                    />,
                    <ConceptPopover
                        key="correspondencia-uno-a-uno"
                        conceptId="correspondencia-uno-a-uno"
                    />,
                    <ConceptPopover
                        key="construccion-recta-numerica"
                        conceptId="construccion-recta-numerica"
                    />,
                ]} />
            </ArticleSection>

            <ArticleSection title="Ejemplo: Plantillas">
                <ArticleImages images={[
                    { src: "/recta-numerica/0-buhos-rojos.png", alt: "Plantilla de 5 casillas; debajo 5 búhos de color rojo" }
                ]} />

                <p>Hay una plantilla grande en la pared para ir dirigiendo. Vamos a adoptar la dinámica de comprobar <strong>primero todos juntos la plantilla de la pared</strong>, y <strong>después cada uno su propia plantilla</strong>.</p>

                <DialogBubble speaker="teacher">
                    <p>“Vamos a contar los cuadraditos de la plantilla (Todos juntos mirando a la plantilla de la pared). Lo vamos a hacer <strong>siempre empezando por la izquierda y no nos saltamos ninguno</strong>. Uno, dos, tres, cuatro y cinco. Ahora cada uno de vosotros va a contar los cuadritos de su plantilla. ¿Cuántos hay? ¿Todos tenéis cinco? Vamos a contar otra vez para asegurarnos.”</p>
                </DialogBubble>

                <p>¿Qué hacer si alguno de los niños/as dice otro número que no es 5?</p>

                <DialogBubble speaker="teacher">
                    <p>“¿Tienes cuatro/seis? Vamos a asegurarnos.” </p>
                </DialogBubble>

                <p>Nos acercamos a él o ella y le ayudamos a que ponga el dedito encima de cada cuadrado de izquierda a derecha y muy despacio. <strong>No penalizamos el error</strong>, es decir, no le decimos que se ha equivocado, sino que <strong>nos hemos asegurado y hemos visto que son 5</strong>.</p>

                <p>Durante todo el proceso les recordamos continuamente que siempre colocaremos los objetos de esta manera, es decir, seguidos sin dejar ningún cuadrito vacío y empezando por la izquierda (tendrán en la <strong>parte superior izquierda de la pared</strong> una <strong>mano izquierda</strong> en un color y en la <strong>parte superior derecha de la pared</strong> una <strong>mano derecha</strong> de otro color diferente, para que las puedan distinguir sin la necesidad de leer la palabra).</p>

                <ArticleImages images={[
                    { src: "/izquierda-derecha/mano-izquierda.png", alt: "Silueta de mano izquierda en cartulina de color azul, con la palabra 'izquierda'" },
                    { src: "/izquierda-derecha/mano-derecha.png", alt: "Silueta de mano derecha en cartulina de color rojo, con la palabra 'derecha'" }
                ]} />

                <p>Esto les va a ayudar a construir la recta numérica.</p>

                <p>También tendremos cuidado de <strong>dar refuerzo positivo</strong> en cada paso que esté terminado, con gestos de aprobación y con expresiones del tipo: “Muy bien”, “Estupendo”, “Genial”, “¡Qué fácil!”, “¡Oleee!, “¡Fantástico!”, etc.</p>

                <p>Cuando ocurre un error, <strong>evitamos gestos o palabras de desaprobación</strong> y nos limitamos a  ayudarles a revisarlo.</p>

                <p>De esta forma, intentamos que <strong>todos los niños/as, sin excepción, sientan que pueden hacerlo bien y se animen a seguir.</strong></p>

                <DialogBubble speaker="teacher">
                    <p>“¿Todos tenemos 5?” </p>
                </DialogBubble>

                <p>Cuando la respuesta unánime es “Sí”, podemos continuar.</p>

                <DialogBubble speaker="teacher">
                    <p>“Ahora <strong>vamos a colocar un búho en el primer cuadrito</strong>. ¿Cuántos búhos hay dentro de la plantilla?”. </p>
                </DialogBubble>

                <DialogBubble speaker="student">
                    <p><strong>“¡Uno!”</strong> </p>
                </DialogBubble>

                <ArticleImages images={[
                    { src: "/recta-numerica/1-buho-rojo.png", alt: "Plantilla de 5 casillas, con 1 búho rojo dentro del primer cuadrito y 4 fuera de la plantilla" }
                ]} />

                <p>Revisamos que todos hayan colocado el búho en el primer cuadrito y recordamos que siempre empezamos por la izquierda.</p>

                <DialogBubble speaker="teacher">
                    <p>“¡Muy bien! Ahora <strong>vamos a colocar otro búho en el siguiente cuadrito</strong>”. ¿Cuántos búhos hay dentro de la plantilla?”. </p>
                </DialogBubble>

                <DialogBubble speaker="student">
                    <p><strong>“¡Dos!”</strong>. </p>
                </DialogBubble>

                <ArticleImages images={[
                    { src: "/recta-numerica/2-buhos-rojos.png", alt: "Plantilla de 5 casillas, con 2 búhos rojos dentro de los dos primeros cuadritos y 3 fuera de la plantilla" }
                ]} />


                <p>Revisamos que todos hayan colocado el búho en el segundo cuadrito y no hayan dejado ningún cuadrito en blanco.</p>

                <DialogBubble speaker="teacher">
                    <p>“¡Estupendo! Ahora vamos a colocar otro búho en el siguiente cuadrito”. ¿Cuántos búhos hay dentro de la plantilla?”. </p>
                </DialogBubble>

                <DialogBubble speaker="student">
                    <p><strong>“¡Tres!”</strong>. </p>
                </DialogBubble>

                <ArticleImages images={[
                    { src: "/recta-numerica/3-buhos-rojos.png", alt: "Plantilla de 5 casillas, con 3 búhos rojos dentro de los tres primeros cuadritos y 2 fuera de la plantilla" }
                ]} />

                <p>Revisamos que todos hayan colocado el tercer búho seguido del segundo, sin dejar ningún cuadrito en blanco. </p>

                <DialogBubble speaker="teacher">
                    <p>“¡Fantástico! Ahora vamos a colocar otro búho en el siguiente cuadrito”. ¿Cuántos búhos hay dentro de la plantilla?”. </p>
                </DialogBubble>

                <DialogBubble speaker="student">
                    <p><strong>“¡Cuatro!”</strong>. </p>
                </DialogBubble>

                <ArticleImages images={[
                    { src: "/recta-numerica/4-buhos-rojos.png", alt: "Plantilla de 5 casillas, con 4 búhos rojos dentro de los cuatro primeros cuadritos y 1 fuera de la plantilla" }
                ]} />
                

                <DialogBubble speaker="teacher">
                    <p>“¡Esto es muy fácil! Y ahora vamos a colocar otro búho en el siguiente cuadrito”. ¿Cuántos búhos hay dentro de la plantilla?”. </p>
                </DialogBubble>

                <DialogBubble speaker="student">
                    <p><strong>“¡Cinco!”</strong>. </p>
                </DialogBubble>

                <ArticleImages images={[
                    { src: "/recta-numerica/5-buhos-rojos.png", alt: "Plantilla de 5 casillas, con 5 búhos rojos dentro de los cinco cuadritos" }
                ]} />

                <DialogBubble speaker="teacher">
                    <p>“Vamos a <strong>contar los búhos de la pared todos juntos</strong>. Uno, dos, tres, cuatro y cinco. Y ahora <strong>contamos cada uno en su plantilla</strong> señalando con el dedo a cada búho. Uno, dos tres, cuatro y cinco.”</p>
                </DialogBubble>

            </ArticleSection>
        </>
    );
}
