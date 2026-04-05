import { ChevronDown } from "lucide-react";

interface NavDropdownMobileButtonProps {
    label: string;
    onClick: () => void;
    isOpen: boolean;
    controlsId: string;
}

export default function NavDropdownMobileButton({
    label,
    onClick,
    isOpen,
    controlsId,
}: NavDropdownMobileButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={controlsId}
            className="w-full text-left text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
        >
            {label} <ChevronDown size={16} />
        </button>
    );
}