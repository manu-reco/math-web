import { ChevronDown } from "lucide-react";

interface NavDropdownButtonProps {
    label: string;
    onClick: () => void;
    isOpen: boolean;
    controlsId: string;
    variant?: "desktop" | "mobile";
}

export default function NavDropdownButton({ 
    label, 
    onClick, 
    isOpen,
    controlsId,
    variant = "desktop" 
}: NavDropdownButtonProps) {
    if (variant === "mobile") {
        return (
            <button
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={controlsId}
                className="w-full text-left text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
            >
                {label} <ChevronDown size={16} />
            </button>
        );
    }

    return (
        <button
            className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium flex items-center gap-1 box-border border-2 border-transparent rounded-md hover:border-primary focus:outline-none transition-all ease-in-out duration-100"
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={controlsId}
        >
            {label} <ChevronDown size={16} />
        </button>
    );
}
