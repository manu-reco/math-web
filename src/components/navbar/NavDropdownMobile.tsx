import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdownMobileButton from "./NavDropdownMobileButton";
import type { DropdownItem } from "./NavDropdown.types";

interface NavDropdownMobileProps {
    label: string;
    items: DropdownItem[];
    isOpen: boolean;
    onToggle: () => void;
    onItemClick: () => void;
}

export default function NavDropdownMobile({
    label,
    items,
    isOpen,
    onToggle,
    onItemClick,
}: NavDropdownMobileProps) {
    const panelId = `${label.toLowerCase().replace(/\s+/g, "-")}-mobile-menu`;

    return (
        <div className="space-y-1" data-nav-dropdown-root="true">
            <NavDropdownMobileButton
                label={label}
                onClick={onToggle}
                isOpen={isOpen}
                controlsId={panelId}
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