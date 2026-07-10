import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Componente contenedor principal para tarjetas (Cards). 
 * Utiliza una etiqueta semántica `article` y actúa como un contenedor flex vertical. 
 * Viene sin paddings internos por defecto para maximizar su reutilización con todo tipo de contenidos (imágenes completas, listas, etc.).
 * * @param className Clases adicionales de Tailwind para personalizar el contenedor (ej. efectos hover, anchos fijos o animaciones).
 * @param props Todas las propiedades estándar de una etiqueta HTML `article`.
 */
export function Card({ className, ...props }: React.ComponentProps<"article">) {
    return (
        <article
            className={cn(
                "flex flex-col rounded-2xl border border-border bg-card shadow-sm overflow-hidden",
                className
            )}
            {...props}
        />
    );
}

/**
 * Contenedor para la cabecera de la tarjeta. Ideal para agrupar iconos, títulos y descripciones cortas.
 * Aplica un espaciado interno (padding) superior y lateral consistente y organiza sus elementos en columna con un espacio reducido entre ellos.
 * * @param className Clases adicionales de Tailwind para ajustar espaciados o alineaciones (ej. `text-center`).
 * @param props Todas las propiedades estándar de una etiqueta HTML `div`.
 */
export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("p-6 pb-3 flex flex-col space-y-1.5", className)} {...props} />;
}

interface CardTitleProps extends React.ComponentProps<"h3"> {
    /**
     * Nivel jerárquico del encabezado HTML para garantizar una correcta estructura SEO y de accesibilidad.
     * Modifica el tamaño visual del texto automáticamente según el nivel elegido.
     * @default 3
     */
    level?: 2 | 3 | 4 | 5;
}

/**
 * Componente para el título principal de la tarjeta. 
 * Permite desacoplar el tamaño visual del elemento de su peso semántico en el árbol HTML a través de la propiedad `level`.
 * * @param level Nivel de la etiqueta de encabezado (`h2`, `h3`, `h4`, `h5`). Por defecto es 3.
 * @param className Clases adicionales de Tailwind para alterar el color, peso o estilos del texto.
 * @param props Todas las propiedades estándar de un encabezado HTML (mapeado dinámicamente según el `level`).
 */
export function CardTitle({ className, level = 3, ...props }: CardTitleProps) {
    const Tag = `h${level}` as const;

    const titleSizes = {
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
    };

    return (
        <Tag
            className={cn(
                "font-bold text-text tracking-tight",
                titleSizes[level],
                className
            )}
            {...props}
        />
    );
}

/**
 * Componente para texto secundario, subtítulos o descripciones dentro de la tarjeta.
 * Aplica por defecto un color atenuado (text-text-secondary) y una altura de línea optimizada para la lectura de párrafos.
 * * @param className Clases de Tailwind para modificar el tamaño de fuente, márgenes o alineación del texto.
 * @param props Todas las propiedades estándar de una etiqueta HTML `p`.
 */
export function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            className={cn("text-sm leading-relaxed text-text-secondary", className)}
            {...props}
        />
    );
}

/**
 * Contenedor principal para el cuerpo de la tarjeta. 
 * Cuenta con la propiedad `flex-1` para estirarse automáticamente y ocupar todo el espacio vertical disponible, 
 * lo que garantiza que si hay varias tarjetas en un grid, sus pies de página (`CardFooter`) queden perfectamente alineados abajo.
 * * @param className Clases adicionales para controlar el flujo interno (ej. `grid`, `space-y-4` o paddings personalizados).
 * @param props Todas las propiedades estándar de una etiqueta HTML `div`.
 */
export function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("p-6 pt-0 flex-1", className)} {...props} />;
}

/**
 * Contenedor para la parte inferior de la tarjeta. Diseñado específicamente para albergar botones de acción,
 * enlaces de compra, etiquetas o metadatos. Se posiciona automáticamente al final de la tarjeta gracias a `mt-auto`.
 * * @param className Clases de Tailwind para alterar la distribución de los botones (ej. `justify-between`, `gap-4`).
 * @param props Todas las propiedades estándar de una etiqueta HTML `div`.
 */
export function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("p-6 pt-0 mt-auto flex items-center", className)} {...props} />;
}