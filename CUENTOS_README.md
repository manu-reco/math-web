# Sistema de Cuentos Interactivos

Sistema modular y reutilizable para crear cuentos didácticos interactivos con animaciones, transiciones y elementos arrastrables.

## 📁 Estructura de Archivos

```
src/
├── types/
│   └── story.ts                      # Tipos TypeScript para el sistema
├── lib/
│   └── validateStory.ts              # Validación de datos con Zod
├── components/
│   └── story/
│       ├── StoryPlayer.tsx           # Motor principal del cuento
│       ├── Page.tsx                  # Contenedor de página
│       ├── Actor.tsx                 # Componente de actor reutilizable
│       ├── TimelineAction.tsx        # Ejecutor de acciones
│       └── DragTarget.tsx            # Zonas de arrastre
├── data/
│   └── cuentos/
│       └── [nombre].story.json       # Datos del cuento
└── app/
    └── juegos/
        └── cuentos/
            └── [nombre]/
                └── page.tsx          # Página del cuento
```

## 🎯 Características

- ✅ **Precarga de assets** - Todas las imágenes se precargan antes de mostrar el cuento
- ✅ **Validación de datos** - Usa Zod para validar la estructura JSON
- ✅ **Animaciones fluidas** - Integración con Framer Motion (motion/react)
- ✅ **Elementos arrastrables** - Soporte nativo para drag & drop
- ✅ **Transiciones suaves** - Los actores persisten entre páginas sin re-renders
- ✅ **Múltiples métodos de avance** - Espacio, click, drag complete, auto
- ✅ **Componentes reutilizables** - Cada cuento usa los mismos componentes base
- ✅ **Control de velocidad** - Duración personalizable de animaciones
- ✅ **Control de profundidad (zIndex)** - Los actores mantienen su orden visual durante animaciones
- ✅ **TypeScript completo** - Tipado estricto en todo el sistema

## 📝 Estructura de un Cuento (JSON)

### Campos globales del cuento

- **background** (string, opcional): Fondo global para todas las páginas (si una página no define `background`).
- **backgroundColor** (string, opcional): Color de fondo global (si una página no define `backgroundColor`).


```json
{
  "title": "Nombre del Cuento",
  "author": "Autor (opcional)",
  "narrator": "Narrador (opcional)",
  "background": "/ruta/a/imagen.png",
  "backgroundColor": "#e0f2fe",
  "pages": [
    {
      "id": "page-1",
      "background": "/ruta/a/imagen.png",
      "backgroundColor": "#e0f2fe",
      "actors": [
        {
          "id": "actor-1",
          "type": "image",
          "src": "ruta/imagen.png",
          "x": 50,
          "y": 80,
          "width": 100,
          "height": 100,
          "interactive": true,
          "draggable": false,
          "scale": 1.0,
          "rotation": 0,
          "zIndex": 10
        }
      ],
      "onEnter": [
        {
          "actor": "actor-1",
          "action": "appear"
        }
      ],
      "advanceOn": "spaceOrClick",
      "dragTargets": [],
      "autoAdvanceDelay": 3000
    }
  ]
}
```

## 🎭 Tipos de Actores

### Image Actor
```json
{
  "id": "buho",
  "type": "image",
  "src": "icons/buho-rojo.png",
  "x": 50,
  "y": 80,
  "width": 100,
  "height": 100
}
```

### Text Actor
```json
{
  "id": "titulo",
  "type": "text",
  "text": "Había una vez...",
  "x": 50,
  "y": 20
}
```

## 🎬 Acciones Disponibles

### Appear (Aparecer)
```json
{
  "actor": "buho",
  "action": "appear",
  "delay": 500
}
```

### Disappear (Desaparecer)
```json
{
  "actor": "buho",
  "action": "disappear"
}
```

### Move (Mover)
```json
{
  "actor": "buho",
  "action": "move",
  "to": { "x": 70, "y": 30 },
  "duration": 2000,
  "delay": 200,
  "easing": "easeInOut"
}
```
**Nota**: La duración por defecto es 1500ms (1.5 segundos) para que sea apropiado para niños. Puedes ajustar este valor según tus necesidades.

### Play Sound (Reproducir Sonido)
```json
{
  "actor": "cualquiera",
  "action": "playSound",
  "sound": "/sounds/chirp.mp3"
}
```

## 📄 Estructura de una Página

### Propiedades de Página

- **id** (string): Identificador único
- **background** (string, opcional): Ruta a imagen de fondo
- **backgroundColor** (string, opcional): Color de fondo CSS
- **actors** (array): Lista de actores o acciones
- **onEnter** (array, opcional): Acciones al entrar a la página
- **onExit** (array, opcional): Acciones al salir de la página
- **advanceOn** (string): Condición de avance
  - `"spaceOrClick"` - Espacio o click para avanzar
  - `"dragComplete"` - Avanza cuando se complete el drag
  - `"auto"` - Avanza automáticamente
  - `"animation"` - Avanza cuando termina la animación
- **dragTargets** (array, opcional): Zonas de arrastre
- **autoAdvanceDelay** (number, opcional): Milisegundos para auto-advance

## 🎮 Métodos de Avance

### 1. Space or Click
El método más común. El usuario pulsa espacio o hace click en cualquier parte de la pantalla.

```json
{
  "advanceOn": "spaceOrClick"
}
```

### 2. Drag Complete
La página avanza cuando el usuario completa una acción de arrastre.

```json
{
  "advanceOn": "dragComplete",
  "dragTargets": [
    {
      "id": "rama",
      "x": 70,
      "y": 30,
      "width": 20,
      "height": 20,
      "acceptsActors": ["buho"]
    }
  ]
}
```

### 3. Auto
La página avanza automáticamente después de un tiempo.

```json
{
  "advanceOn": "auto",
  "autoAdvanceDelay": 3000
}
```

## 🎨 Sistema de Coordenadas

Las posiciones usan **porcentajes (0-100)** para ser responsivas:

- `x: 0` = Izquierda
- `x: 50` = Centro horizontal
- `x: 100` = Derecha
- `y: 0` = Arriba
- `y: 50` = Centro vertical
- `y: 100` = Abajo

**Importante**: El punto de referencia es el centro del elemento (transform: translate(-50%, -50%))

## 🎮 Comportamiento entre Páginas

**Importante**: Los actores **NO se re-renderizan** al cambiar de página. Se mantienen en su posición actual a menos que se les dé una orden explícita.

### Ejemplo: Transición suave

```json
{
  "pages": [
    {
      "id": "page-1",
      "actors": [...],
      "onEnter": [
        { "actor": "buho", "action": "appear" },
        { "actor": "arbol", "action": "appear" }
      ]
    },
    {
      "id": "page-2",
      "actors": [
        {
          "actor": "buho",
          "action": "move",
          "to": { "x": 70, "y": 30 },
          "duration": 2000
        }
      ]
    }
  ]
}
```

### Para hacer que un actor desaparezca

Si quieres que un actor desaparezca al cambiar de página:

```json
{
  "id": "page-2",
  "onEnter": [
    {
      "actor": "personaje-temporal",
      "action": "disappear"
    }
  ]
}
```

## 🚀 Cómo Crear un Nuevo Cuento

### 1. Crear el archivo JSON

Crear `src/data/cuentos/mi-cuento.story.json`:

```json
{
  "title": "Mi Cuento",
  "pages": [
    {
      "id": "page-1",
      "backgroundColor": "#e0f2fe",
      "actors": [
        {
          "id": "personaje",
          "type": "image",
          "src": "cuentos/personaje.png",
          "x": 50,
          "y": 50,
          "width": 150,
          "height": 150
        }
      ],
      "onEnter": [
        {
          "actor": "personaje",
          "action": "appear"
        }
      ],
      "advanceOn": "spaceOrClick"
    }
  ]
}
```

### 2. Crear la página Next.js

Crear `src/app/juegos/cuentos/mi-cuento/page.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StoryPlayer from "@/components/story/StoryPlayer";
import storyData from "@/data/cuentos/mi-cuento.story.json";
import { validateStoryData } from "@/lib/validateStory";
import type { StoryData } from "@/types/story";

export default function MiCuentoPage() {
    const [gameCompleted, setGameCompleted] = useState(false);

    let validatedStory: StoryData;
    try {
        validatedStory = validateStoryData(storyData) as StoryData;
    } catch (error) {
        console.error('Error validating story:', error);
        return <div>Error al cargar el cuento</div>;
    }

    if (gameCompleted) {
      return (
        <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center">
          <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold mb-4">
              ¡Cuento completado!
            </h1>
            <p className="text-text-secondary mb-8">
              Has terminado de leer &quot;{validatedStory.title}&quot;
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setGameCompleted(false)}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Leer de nuevo
              </button>
              <Link
                href="/juegos"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-text-secondary px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <ArrowLeft size={20} />
                Volver a Juegos
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        <Link
          href="/juegos"
          className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-text-secondary px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all flex items-center gap-2 font-medium"
        >
          <ArrowLeft size={20} />
          Salir
        </Link>

        <StoryPlayer
          story={validatedStory}
          onComplete={() => setGameCompleted(true)}
        />
      </div>
    );
}
```

### 3. Añadir a la lista de juegos

Editar `src/data/juegos.ts`:

```typescript
{
    id: "mi-cuento",
    title: "Mi Cuento",
    image: "/cuentos/mi-cuento-preview.png",
    area: "Aritmética",
    description: "Descripción del cuento",
    skills: ["Habilidades que trabaja"],
    isAvailable: true,
    path: "/juegos/cuentos/mi-cuento"
}
```

## 🎯 Ejemplo Completo: Búhos en el Árbol

El cuento de ejemplo muestra:
- ✅ Dos páginas con transición suave
- ✅ Un búho que aparece en la primera página
- ✅ El búho se mueve al árbol en la segunda página
- ✅ Avance con espacio o click

Ver archivo completo en: `src/data/cuentos/owl-tree.story.json`


## 🔧 Personalización Avanzada

### Múltiples acciones en secuencia

```json
{
  "onEnter": [
    {
      "actor": "personaje1",
      "action": "appear",
      "delay": 0
    },
    {
      "actor": "personaje2",
      "action": "appear",
      "delay": 500
    },
    {
      "actor": "personaje3",
      "action": "appear",
      "delay": 1000
    }
  ]
}
```

### Rotación, escala y profundidad (zIndex)

```json
{
  "id": "estrella",
  "type": "image",
  "src": "estrella.png",
  "x": 50,
  "y": 20,
  "width": 80,
  "height": 80,
  "scale": 1.5,
  "rotation": 45,
  "zIndex": 20
}
```

**Importante sobre zIndex**: 
- Los actores con mayor zIndex aparecen delante de los que tienen menor zIndex
- Por defecto, todos los actores tienen zIndex: 10
- Durante drag & drop, el actor se coloca temporalmente en zIndex: 100
- El zIndex se mantiene durante las animaciones de movimiento

## 🐛 Debugging

Si hay errores en el JSON, la validación de Zod los mostrará en la consola con detalles específicos:

```
Invalid story data: pages.0.actors.0.x: Expected number, received string
```

## 📚 Próximas Mejoras

Ideas para futuras versiones:

- [ ] Soporte para audio narrado automático
- [ ] Efectos de partículas
- [ ] Animaciones de entrada/salida personalizadas
- [ ] Sistema de variables y condicionales
- [ ] Minijuegos integrados en las páginas
- [ ] Guardado de progreso
- [ ] Modo de edición visual

## 🤝 Contribuir

Para añadir nuevas características al sistema:

1. Actualizar tipos en `src/types/story.ts`
2. Actualizar validación en `src/lib/validateStory.ts`
3. Implementar en componentes correspondientes
4. Actualizar esta documentación

---

**Creado con ❤️ para enseñar matemáticas de forma divertida**
