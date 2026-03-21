import clsx from "clsx";
import { BarChart3, BrainCircuit, Calculator, CheckCircle2, Circle, Ruler, Shapes } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Option {
    id: number;
    icon?: string;
    label: string;
    color?: string;
    description?: string;
}

interface OptionsCardProps {
    title: string;
    themeColor?: "primary" | "secondary" | "accent";
    extraInfo?: string;
}

const ThemeMap = {
    primary: {
        bg: "bg-primary/20",
        text: "text-primary",
        border: "border-primary/50",
        hover: "hover:border-primary/50"
    },
    secondary: {
        bg: "bg-secondary/20",
        text: "text-secondary",
        border: "border-secondary/50",
        hover: "hover:border-secondary/50"
    },
    accent: {
        bg: "bg-accent/20",
        text: "text-accent",
        border: "border-accent/50",
        hover: "hover:border-accent/50"
    }
};

export default function OptionsCard({ title, themeColor = "primary", extraInfo }: OptionsCardProps) {
    const color = themeColor || "primary";

    const allOptions: Option[] = [
        { id: 1, icon: 'Calculator', label: 'Aritmética', color: "bg-blue-100 text-blue-600", description: "Domina los números y las operaciones básicas." },
        { id: 2, icon: 'Shapes', label: 'Geometría', color: "bg-green-100 text-green-600", description: "Explora formas, espacios y dimensiones." },
        { id: 3, icon: 'BrainCircuit', label: 'Problemas', color: "bg-purple-100 text-purple-600", description: "Desarrolla el pensamiento lógico y la resolución de problemas." },
        { id: 4, icon: 'Ruler', label: 'Medidas', color: "bg-orange-100 text-orange-600", description: "Aprende a medir el mundo que te rodea." },
    ];

    const IconMap: Record<string, React.ComponentType<{ size: number }>> = {
        Calculator,
        Shapes,
        BrainCircuit,
        Ruler,
        BarChart3,
    };

    const [selectedId, setSelectedId] = useState<number | null>(null);
    const isOptionSelected = selectedId !== null;
    const theme = ThemeMap[themeColor];

    // Si se selecciona una opción, se muestra solo esa; si se vuelve a clicar, se muestran todas
    const handleOptionClick = (id: number): void => {
        setSelectedId(prevId => (prevId === id ? null : id));
    };

    // Filtramos las opciones basándonos en el estado
    const visibleOptions = selectedId
        ? allOptions.filter((option) => option.id === selectedId)
        : allOptions;

    return (
        <motion.div layout className="bg-white min-h-56 rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
            <motion.h2 layout className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className={clsx("flex items-center justify-center w-8 h-8 rounded-full text-sm", theme.bg, theme.text)}>1</span>
                {isOptionSelected ? `Has elegido:` : `Elige ${title}`}
            </motion.h2>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div key="selection" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    {extraInfo && (
                        <motion.p layout className={clsx(`text-sm text-${color} font-medium mb-4`)}>
                            {extraInfo}
                        </motion.p>
                    )}
                    <motion.div layout className="space-y-3">
                        {visibleOptions.map((option) => {
                            const Icon = IconMap[option.icon as string] || Circle;
                            const IconComponent = Icon || Circle; // Fallback si no se encuentra el icono en IconMap
                            const isThisSelected = selectedId === option.id;

                            return (
                                <motion.button
                                    layout
                                    key={option.id}
                                    onClick={() => handleOptionClick(option.id)}
                                    className={clsx(
                                        "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group",
                                        theme.hover,
                                        isThisSelected ? theme.border : `bg-white border-gray-100 hover:bg-gray-50`
                                    )}                                >
                                    <div className={clsx(
                                        "p-2 rounded-lg transition-colors", option.color
                                    )}>
                                        <IconComponent size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={clsx("font-bold", isThisSelected ? theme.text : "")}>{option.label}</h3>
                                        <p className="text-sm text-text-secondary">{option.description}</p>
                                    </div>
                                    {isThisSelected && <CheckCircle2 className={clsx(`text-${color}`)} size={24} />}
                                    
                                </motion.button>
                            );
                        })}
                        {isOptionSelected && <p className="text-sm text-text-secondary mt-1">Pulsa para volver y cambiar la selección.</p>}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
