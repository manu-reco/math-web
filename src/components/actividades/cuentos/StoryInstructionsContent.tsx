import { ArticleSection, TipBox } from "@/components/pildoras/ArticleComponents";
import ActivityControlsText from "../ActivityControlsText";

export default function StoryInstructionsContent() {
    return (
        <>
            <ArticleSection title="¿En qué consiste esta actividad?">
                <p className="mb-3">
                    Utiliza este recurso para acompañar la lectura en voz alta de un cuento que les ayudará a desarrollar su sentido numérico y su comprensión de la cantidad a través de la narración. Es perfecto para usar con la pizarra digital en grupos grandes, pero también se puede utilizar en tablets u ordenadores para trabajar individualmente o en grupos pequeños.
                </p>
            </ArticleSection>

            <ArticleSection title="¿Cómo utilizar esta actividad en el aula?">
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Lee en voz alta el cuento que puedes descargar desde aquí y sigue las indicaciones para preguntar a la clase o pasar de página</li>
                    <li>A medida que vayas leyendo, avanza las páginas para hacer aparecer diferentes objetos, personajes o efectos</li>
                    <li>Pasa a la siguiente página tocando la pantalla o presionando el Espacio, o ir hacia delante o hacia detrás con las flechas</li>
                    <li>Al completar todas las páginas, podrás avanzar al siguiente capítulo o elegir el capítulo que deseas leer</li>
                </ul>
            </ArticleSection>

            <TipBox>
                    Utiliza las escenas para <strong>fomentar la participación del alumnado</strong>, haciendo que te den las respuestas antes de avanzar
            </TipBox>

            <ActivityControlsText />
        </>
    );
}
