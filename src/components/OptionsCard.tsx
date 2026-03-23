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
    number?: string | number;
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

export default function OptionsCard({ title, number = "", themeColor = "primary", extraInfo }: OptionsCardProps) {

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
        <motion.div
            layout
            className="bg-white min-h-56 rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden"
            transition={{ layout: { duration: 0.25 }, duration: 0.2 }}
        >
            <motion.h2 layout className="text-2xl font-bold mb-6 flex items-center gap-2">
                <motion.span layout className={clsx("flex items-center justify-center w-8 h-8 rounded-full text-sm", theme.bg, theme.text)}>{number}</motion.span>
                {isOptionSelected ? `Has elegido:` : `Elige ${title}`}
            </motion.h2>

            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={isOptionSelected ? "summary" : "selection"}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.24 }}
                >
                    {extraInfo && !isOptionSelected && (
                        <motion.p
                            layout
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className={clsx("text-sm font-medium mb-4", theme.text)}
                        >
                            {extraInfo}
                        </motion.p>
                    )}

                    <motion.div layout className="space-y-3">
                        {visibleOptions.map((option) => {
                            const Icon = IconMap[option.icon as string] || Circle;
                            const IconComponent = Icon || Circle;
                            const isThisSelected = selectedId === option.id;

                            return (
                                <motion.button
                                    layout
                                    key={option.id}
                                    onClick={() => handleOptionClick(option.id)}
                                    className={clsx(
                                        "w-full text-left bg-white",
                                        isThisSelected ? theme.border : "border-gray-100 hover:bg-gray-50"
                                    )}
                                    transition={{ layout: { duration: 0.2 }, duration: 0.18 }}
                                >
                                    <motion.div
                                        layout
                                        className={clsx(
                                            "w-full text-left my-1 p-4 rounded-xl border-2 flex items-center gap-4 group",
                                            theme.hover,
                                            isThisSelected ? theme.border : "border-gray-100 hover:bg-gray-50"
                                        )}
                                    >
                                        <div className={clsx("p-2 rounded-lg transition-colors", option.color)}>
                                            <IconComponent size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <motion.h3 layout className="font-bold">{option.label}</motion.h3>
                                            <motion.p layout className="text-sm text-text-secondary">{option.description}</motion.p>
                                        </div>
                                        <CheckCircle2 className={clsx(isThisSelected ? theme.text : "text-transparent")} size={24} />
                                    </motion.div>

                                    {isOptionSelected && (
                                        <motion.p
                                            layout
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-sm text-text-secondary mt-1 overflow-hidden"
                                        >
                                            Pulsa para volver y cambiar la selección.
                                        </motion.p>
                                    )}
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
