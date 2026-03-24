import clsx from "clsx";
import { BarChart3, BrainCircuit, Calculator, CheckCircle2, Circle, GraduationCap, Ruler, Shapes } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export interface OptionsCardOption {
    id: string;
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
    options: OptionsCardOption[];
    selectedId: string | null;
    onSelectionChange: (selectedId: string | null) => void;
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

/**
 * Selection card component used in the Pildoras page to choose between Saberes and Niveles. It displays a list of options, each with an icon, label, description, and color. When an option is selected, it shows only that option and changes the title to indicate the selection. Clicking the selected option again will reset the selection and show all options.
 * @param title - The title of the card, shown when no option is selected.
 * @param number - An optional number or string to display in a colored circle next to the title.
 * @param themeColor - The color theme for the card, which affects the colors of the title, borders, and hover states. It can be "primary", "secondary", or "accent".
 * @param extraInfo - Additional information text shown below the title when no option is selected.
 * @param options - An array of options to display, each with an id and label, and optionally an icon, color, and description.
 * @param selectedId - The id of the currently selected option, or null if no option is selected.
 * @param onSelectionChange - A callback function that is called when an option is clicked, with the id of the selected option or null if the selection is cleared.
 */
export default function OptionsCard({
    title,
    number = "",
    themeColor = "primary",
    extraInfo,
    options,
    selectedId,
    onSelectionChange,
}: OptionsCardProps) {

    const IconMap: Record<string, React.ComponentType<{ size: number }>> = {
        Calculator,
        Shapes,
        BrainCircuit,
        Ruler,
        BarChart3,
        GraduationCap,
    };

    const isOptionSelected = selectedId !== null;
    const theme = ThemeMap[themeColor];

    // Si se selecciona una opción, se muestra solo esa; si se vuelve a clicar, se muestran todas
    const handleOptionClick = (id: string): void => {
        onSelectionChange(selectedId === id ? null : id);
    };

    // Filtramos las opciones basándonos en el estado
    const visibleOptions = selectedId
        ? options.filter((option) => option.id === selectedId)
        : options;

    return (
        <motion.div
            layout
            className="bg-white min-h-56 rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden"
            transition={{ layout: { duration: 0.25 }, duration: 0.2 }}
        >
            <motion.h2 layout className="text-2xl font-bold mb-6 flex items-center gap-2">
                <motion.span layout className={clsx("flex items-center justify-center w-8 h-8 rounded-full text-sm", theme.bg, theme.text)}>{number}</motion.span>
                {isOptionSelected ? `Has elegido:` : title}
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
