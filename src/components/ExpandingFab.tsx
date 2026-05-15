interface ExpandingFabProps {
    top: number;
    right: number;
    icon: React.ComponentType<{ size: number, className?: string }>;
    label: string;
    ariaLabel?: string;
    onClick: () => void;
}

export default function ExpandingFab({ top = 5, right = 1, icon, label, ariaLabel, onClick }: ExpandingFabProps) {
    const IconComponent = icon;

    return (
        <button
            type="button"
            onClick={() => onClick()}
            className="group fixed z-50 right-4 h-14 min-w-14 px-4 flex items-center justify-center bg-white/80 backdrop-blur-sm text-text-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden cursor-pointer"
            style={{ top: `${top}rem`, right: `${right}rem` }}
            aria-label={ariaLabel ?? label}
        >
            <IconComponent size={20} className="shrink-0" />
            <span className="max-w-0 opacity-0 whitespace-nowrap font-semibold text-sm group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                {label}
            </span>
        </button>
    )

}
