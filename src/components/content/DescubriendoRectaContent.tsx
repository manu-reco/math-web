
import {
    ArticleHeader,
    ArticleSection,
    KeyPoints,
    ConceptTooltip
} from "@/components/pildoras/ArticleComponents";

import { COURSE_CONTENT } from "@/lib/pildorasData";


export default function ActividadesConceptosBasicosContent() {
    return (
        <>
            <ArticleHeader
                title={COURSE_CONTENT["aritmetica-primeros-pasos"][2]["concepts"][0].title}
                subtitle="Fomentando el descubrimiento en lugar de la instrucción directa"
                description={COURSE_CONTENT["aritmetica-primeros-pasos"][2]["concepts"][0].description}
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="Actividades que entrenan: ">
                <KeyPoints points={[
                    <ConceptTooltip
                        key={"Concepto de cantidad"}
                        title="Concepto de cantidad"
                        description="Entender la cantidad que representa un número."
                    />,
                    <ConceptTooltip
                        key={"Conteo"}
                        title="Conteo"
                        description="Ser capaz de contar objetos de manera ordenada y precisa."
                    />,
                    <ConceptTooltip
                        key={"Cardinalidad"}
                        title="Cardinalidad"
                        description="Comprender que el último número contado representa la cantidad total de objetos."
                    />,
                    <ConceptTooltip
                        key={"Subitización"}
                        title="Subitización"
                        description="La capacidad de reconocer la cantidad de objetos en un conjunto sin necesidad de contarlos uno a uno."
                    />,
                    <ConceptTooltip
                        key={"Composición y descomposición"}
                        title="Composición y descomposición"
                        description="Entender cómo los números se pueden descomponer en partes y recomponer."
                    />,
                    <ConceptTooltip
                        key={"Correspondencia uno a uno"}
                        title="Correspondencia uno a uno"
                        description="Emparejar cada objeto de un conjunto con un objeto de otro conjunto."
                    />,
                    <ConceptTooltip
                        key={"Construcción de la recta numérica"}
                        title="Construcción de la recta numérica"
                        description="Comprender la representación visual de los números en una línea continua."
                    />,
                ]} />
            </ArticleSection>

            <ArticleSection title="Ejemplo: Plantillas">
                <p>Cada niño tiene una plantilla y 5 búhos.</p>
                <p>Hay una plantilla grande en la pared para ir dirigiendo.</p>
                <p>- “Vamos a contar los cuadraditos de la plantilla (Todos juntos mirando a la plantilla de la pared). Lo vamos a hacer siempre empezando por la izquierda y no nos saltamos ninguno. Uno, dos, tres, cuatro y cinco. Ahora cada uno de vosotros va a contar los cuadritos de su plantilla. ¿Cuántos hay? ¿Todos tenéis cinco? Vamos a contar otra vez para asegurarnos.”</p>
                <p>¿Qué hacer si alguno de los niños/as dice otro número que no es 5?</p>
                <p>- “¿Tienes cuatro/seis? Vamos a asegurarnos.” Nos acercamos a él o ella y le ayudamos a que ponga el dedito encima de cada cuadrado de izquierda a derecha y muy despacio. No penalizamos el error, es decir, no le decimos que se ha equivocado, sino que nos hemos asegurado y hemos visto que son 5.</p>
                <p>Durante todo el proceso les recordamos continuamente que siempre colocaremos los objetos de esta manera, es decir, seguidos sin dejar ningún cuadrito vacío y empezando por la izquierda (tendrán en la parte superior izquierda de la pared una mano izquierda en un color y en la parte superior derecha de la pared una mano derecha de otro color diferente, para que las puedan distinguir sin la necesidad de leer la palabra).</p>
                <p>Esto les va a ayudar a construir la recta numérica.</p>
                <p>También tendremos cuidado de dar refuerzo positivo en cada paso que esté terminado, con gestos de aprobación y con expresiones del tipo: “Muy bien”, “Estupendo”, “Genial”, “¡Qué fácil!”, “¡Oleee!, “¡Fantástico!”, etc.</p>
                Cuando ocurre un error, evitamos gestos o palabras de desaprobación y nos limitamos a  ayudarles a revisarlo.
                <p>De esta forma, intentamos que todos los niños/as, sin excepción, sientan que pueden hacerlo bien y se animen a seguir.</p>
                <p>- “¿Todos tenemos 5?” </p>
                <p>Cuando la respuesta unánime es “Sí”, podemos continuar.</p>
                <p>- “Ahora vamos a colocar un búho en el primer cuadrito. ¿Cuántos búhos hay dentro de la plantilla?” </p>
                <p>- “Uno”. </p>
                <p>Revisamos que todos hayan colocado el búho en el primer cuadrito y recordamos que siempre empezamos por la izquierda.</p>
                <p>- “¡Muy bien! Ahora vamos a colocar otro búho en el siguiente cuadrito”. ¿Cuántos búhos hay dentro de la plantilla?”. “Dos”. </p>
                <p>Revisamos que todos hayan colocado el búho en el segundo cuadrito y no han dejado ningún cuadrito en blanco.</p>
                <p>- “¡Estupendo! Ahora vamos a colocar otro búho en el siguiente cuadrito”. ¿Cuántos búhos hay dentro de la plantilla?”. “Tres”.</p>
                <p>- “¡Fantástico! Ahora vamos a colocar otro búho en el siguiente cuadrito”. ¿Cuántos búhos hay dentro de la plantilla?”. “Cuatro”. </p>
                <p>- “¡Esto es muy fácil! Y ahora vamos a colocar otro búho en el siguiente cuadrito”. ¿Cuántos búhos hay dentro de la plantilla?”. “Cinco”. </p>
                <p>- “Vamos a contar los búhos de la pared todos juntos. Uno, dos, tres, cuatro y cinco. Y ahora contamos cada uno en su plantilla señalando con el dedo a cada búho. Uno, dos tres, cuatro y cinco.”</p>
            </ArticleSection>
        </>
    );
}
