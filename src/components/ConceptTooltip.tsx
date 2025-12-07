// Nota: Este tooltip es rápido pero básico. Tiene una debilidad: si el contenido es muy largo, puede desbordar la pantalla.
// TODO: usar Floating UI u otra librería para tooltips más robustos que se ajusten automáticamente a los bordes.

import React from 'react';

interface ConceptTooltipProps {
    term: string;
    definition: string; // Usar React.ReactNode para meter negritas/iconos dentro
}

export const ConceptTooltip = ({ term, definition }: ConceptTooltipProps) => {
    return (
        <span className="group relative inline-block cursor-help border-b border-dotted border-gray-400 hover:border-blue-500 transition-colors">
            {/* Término visible */}
            <span 
                className='font-semibold'
                aria-describedby={`tooltip-${term}`}>{term}</span>

            {/* Contenedor del Tooltip */}
            <div
                role="tooltip"
                id={`tooltip-${term}`}
                className="
                    invisible opacity-0 group-hover:visible group-hover:opacity-100
                    absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-[200px] -translate-x-1/2
                    border rounded-lg bg-slate-50 px-3 py-2 text-center text-sm text-gray-900 shadow-lg
                    transition-all duration-200 ease-in-out

                    /* Flechita (triángulo CSS) */
                    after:absolute after:top-full after:left-1/2 after:-ml-1
                    after:border-4 after:border-transparent after:border-t-slate-900
                "
            >
                {definition}
            </div>
        </span>
    );
};