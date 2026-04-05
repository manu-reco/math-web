import { ChevronDown } from "lucide-react";

interface NavDropdownDesktopButtonProps {
    label: string;
    onClick: () => void;
    isOpen: boolean;
    controlsId: string;
}

export default function NavDropdownDesktopButton({
    label,
    onClick,
    isOpen,
    controlsId,
}: NavDropdownDesktopButtonProps) {
    return (
        <button
            type="button"
            className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium flex items-center gap-1 box-border border-2 border-transparent rounded-md hover:border-primary focus:outline-none transition-all ease-in-out duration-100"
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={controlsId}
        >
            {label} <ChevronDown size={16} />
        </button>
    );
}