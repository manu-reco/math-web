# Cómo Crear un Nuevo Artículo en Píldoras

Guía para crear un nuevo artículo educativo en la sección de **Formación > Píldoras** de la plataforma.

## 📋 Pasos

### 1. Decidir la Ubicación del Artículo

- **Saber**: Aritmética, Geometría, Problemas, Medidas, o Probabilidad y Estadística
- **Nivel**: Primeros Pasos (Infantil y Primer Ciclo), Segundo Ciclo, o Tercer Ciclo
- **Capítulo**: Agrupación temática (ej: "Conceptos básicos", "Conteo")

### 2. Agregar los datos básicos a "pildorasData.ts"

Añade el nuevo artículo dentro de un capítulo nuevo o ya existente en la constante COURSE_CONTENT de [`src/lib/pildorasData.ts`](src/lib/pildorasData.ts). Así, ya aparecerá en la lista de artículos del saber y nivel seleccionado.

```typescript
export const COURSE_CONTENT: Record<string, Article[]> = {
    "aritmetica-primeros-pasos": [
        {
            id: "conceptos-basicos",
            title: "1. Conceptos básicos",
            articles: [
                // ... artículos existentes
                {
                    id: "mi-nuevo-concepto",  // ← slug único
                    title: "Título del Concepto",
                    description: "Breve descripción que aparecerá en la lista.",
                },
            ],
        },
    ],
};
```

**Claves válidas para COURSE_CONTENT:**
Formato: `{saber-id}-{nivel-id}`
- `aritmetica-primeros-pasos`
- `aritmetica-segundo-ciclo`
- `geometria-tercer-ciclo`
- etc.

### 3. Crear el Componente del Artículo

Crea un nuevo archivo en [`src/components/content/`](src/components/content/):

**Importar los componentes deseados de**: [`@/components/pildoras/ArticleComponents`](src/components/pildoras/ArticleComponents.tsx)
**Usar siempre ArticleHeader y ArticleSection, el resto son opcionales, estéticos**
**Usar <Image> de Next para imágenes**. Se pueden encerrar en un div con className="flex justify-center my-6" para mantenerlas centradas.

**Ejemplo:** `src/components/content/MiNuevoArticuloContent.tsx`

```tsx
import {
    ArticleHeader,
    ArticleSection,
    TipBox,
    KeyPoints,
    DialogBubble,
    ConceptPopover
} from "@/components/pildoras/ArticleComponents";

export default function MiNuevoArticuloContent() {
    return (
        <>
            <ArticleHeader
                title="Título Principal del Artículo"
                subtitle="Subtítulo (opcional)"
                description="Descripción introductoria del artículo que explica de qué trata."
                category="Aritmética"  // Debe coincidir con el Saber
                level="Primeros Pasos"  // Debe coincidir con el Nivel
            />

            <ArticleSection title="Sección de Teoría">
                <p>
                    Contenido de la sección. Se pueden usar párrafos normales,
                    <strong> texto en negrita </strong>, y cualquier otro elemento HTML.
                </p>
                
                <TipBox>
                    Un consejo o nota importante para los educadores.
                </TipBox>

                <KeyPoints points={[
                    <ConceptPopover
                        key="concepto-de-cantidad"
                        conceptId="concepto-de-cantidad"
                    />,
                    <ConceptPopover
                        key="otro-concepto"
                        conceptId="otro-concepto"
                    />,
                ]} />
            </ArticleSection>

            <ArticleSection title="Actividades Propuestas">
                <DialogBubble speaker="teacher">
                    <p>“Diálogo del <strong>del profesor</strong>”</p> 
                </DialogBubble>
                
                <DialogBubble speaker="student">
                    <p>“Diálogo del <strong>estudiante</strong>”</p>
                </DialogBubble>
            </ArticleSection>
        </>
    );
}
```

### 4. Registrar el Componente

Edita [`src/app/formacion/pildoras/[saber]/[nivel]/[articulo]/page.tsx`](src/app/formacion/pildoras/[saber]/[nivel]/[articulo]/page.tsx):

```typescript
// 1. Importar tu componente
import MiNuevoArticuloContent from "@/components/content/MiNuevoArticuloContent";

// 2. Agregarlo al registro
const CONTENT_REGISTRY: Record<string, React.ComponentType> = {
    "mayor-menor": MayorMenorContent,
    "conteo-recitativo": ConteoRecitativoContent,
    "mi-nuevo-articulo": MiNuevoArticuloContent,  // ← Agregar aquí
    // ... otros componentes
};
```

### 5. (Opcional) Agregar Definiciones al Glosario

Si introduces conceptos técnicos nuevos, agrégalos a [`src/data/concepts.json`](src/data/concepts.json):

```json
{
    "mi-concepto": {
        "name": "Nombre del Concepto",
        "definition": "Definición precisa del concepto técnico."
    }
}
```

Estos conceptos pueden ser usados en los artículos usando el componente `<ConceptPopover>`, que mostrará la definición registrada.

## 🎨 Componentes Disponibles

Los componentes están definidos en [`src/components/pildoras/ArticleComponents.tsx`](src/components/pildoras/ArticleComponents.tsx):

### Estructura del Artículo

- **`ArticleHeader`**: Encabezado del artículo con título, subtítulo, descripción, categoría y nivel.
- **`ArticleSection`**: Sección con título y contenido.

### Cajas de Contenido

- **`ActivityBox`**: Actividades prácticas para el aula (con icono de lápiz).
- **`TipBox`**: Consejos o trucos útiles (fondo amarillo, icono de bombilla).
- **`InfoBox`**: Información adicional o aclaraciones (fondo azul, icono de información).

### Elementos de Texto

- **`KeyPoints`**: Lista de puntos clave con checkmarks verdes.
- **`DialogBubble`**: Burbujas de diálogo para conversaciones entre maestro y estudiante. Añade un `—` al comienzo para marcar que es un diálogo. 
  - Props: `speaker="teacher"` o `speaker="student"` para mostrar diferentes iconos y ajustar la dirección del flex
  - Props: `color="orange"`, `"primary"`, `"blue"`, `"green"`, `"purple"`, `"pink"`, `"gray"`. Por defecto, "orange" para teacher y "primary" para student

### Componentes Especiales

- **`ConceptPopover`**: Resalta conceptos técnicos con popover de definición (se activa con hover o click).
  - Usa las definiciones de `concepts.json`
- *`ConceptTooltip`*: Misma función, pero provocaba errores en formato móvil. No usar por ahora.

## 🔗 Estructura de URLs

Los artículos se acceden mediante esta estructura:

```
/formacion/pildoras/[saber]/[nivel]/[articulo]
```

**Ejemplo:**
```
/formacion/pildoras/aritmetica/primeros-pasos/mayor-menor
```

## ✅ Checklist Final

Antes de considerar terminado tu artículo, verifica:

- [ ] El artículo está agregado en `pildorasData.ts` con su `id`, `title` y `description`
- [ ] El componente de contenido está creado en `src/components/content/`
- [ ] El componente está registrado en `CONTENT_REGISTRY`
- [ ] El artículo tiene `ArticleHeader` con información correcta
- [ ] El contenido está organizado en `ArticleSection`s
- [ ] Has probado la URL en el navegador

## 📝 Ejemplos Completos

- [`src/components/content/DescubriendoRectaContent.tsx`](src/components/content/DescubriendoRectaContent.tsx)
- [`src/components/content/MayorMenorContent.tsx`](src/components/content/MayorMenorContent.tsx)

