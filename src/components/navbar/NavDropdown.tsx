import Link from "next/link";
import NavDropdownButton from "./NavDropdownButton";

export interface DropdownItem {
    label: string;
    href: string;
}

interface NavDropdownProps {
    label: string;
    items: DropdownItem[];
    isOpen: boolean;
    onToggle: () => void;
    onItemClick: () => void;
    variant?: "desktop" | "mobile";
}

export default function NavDropdown({
    label,
    items,
    isOpen,
    onToggle,
    onItemClick,
    variant = "desktop"
}: NavDropdownProps) {
    if (variant === "mobile") {
        return (
            <div className="space-y-1">
                <NavDropdownButton 
                    label={label}
                    onClick={onToggle}
                    variant="mobile"
                />
                {isOpen && (
                    <div className="pl-4 space-y-1">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                onClick={onItemClick}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative group">
            <NavDropdownButton 
                label={label}
                onClick={onToggle}
                variant="desktop"
            />
            {isOpen && (
                <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={onItemClick}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
