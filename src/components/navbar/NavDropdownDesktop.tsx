import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdownDesktopButton from "./NavDropdownDesktopButton";
import type { DropdownItem } from "./NavDropdown.types";

interface NavDropdownDesktopProps {
    label: string;
    items: DropdownItem[];
    isOpen: boolean;
    onToggle: () => void;
    onItemClick: () => void;
}

export default function NavDropdownDesktop({
    label,
    items,
    isOpen,
    onToggle,
    onItemClick,
}: NavDropdownDesktopProps) {
    const panelId = `${label.toLowerCase().replace(/\s+/g, "-")}-desktop-menu`;

    return (
        <div className="relative group" data-nav-dropdown-root="true">
            <NavDropdownDesktopButton
                label={label}
                onClick={onToggle}
                isOpen={isOpen}
                controlsId={panelId}
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