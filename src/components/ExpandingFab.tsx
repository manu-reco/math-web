interface ExpandingFabProps {
    icon: React.ComponentType<{ size: number, className?: string }>;
    label: string;
    onClick: () => void;
}

export default function ExpandingFab({ icon, label, onClick }: ExpandingFabProps) {
    const IconComponent = icon;
    
    return (
        <button
            type="button"
            onClick={() => onClick()}
            className="group fixed top-20 right-4 z-50 h-14 min-w-14 px-4 flex items-center justify-center bg-white/80 backdrop-blur-sm text-text-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden cursor-pointer"
            aria-label="Abrir instrucciones"
        >
            <IconComponent size={20} className="shrink-0" />
            <span className="max-w-0 opacity-0 whitespace-nowrap font-semibold text-sm group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                {label}
            </span>
        </button>
    )

}
