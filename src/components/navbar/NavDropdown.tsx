import Link from "next/link";
import NavDropdownButton from "./NavDropdownButton";
import { motion, AnimatePresence } from "framer-motion";

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
    const panelId = `${label.toLowerCase().replace(/\s+/g, "-")}-${variant}-menu`;

    if (variant === "mobile") {
        return (
            <div className="space-y-1" data-nav-dropdown-root="true">
                <NavDropdownButton
                    label={label}
                    onClick={onToggle}
                    isOpen={isOpen}
                    controlsId={panelId}
                    variant="mobile"
                />
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id={panelId}
                            className="pl-4 space-y-1 overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="relative group" data-nav-dropdown-root="true">
            <NavDropdownButton
                label={label}
                onClick={onToggle}
                isOpen={isOpen}
                controlsId={panelId}
                variant="desktop"
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
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
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
