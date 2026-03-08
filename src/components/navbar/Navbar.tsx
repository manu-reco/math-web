"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
import NavDropdown, { DropdownItem } from "./NavDropdown";

const formacionItems: DropdownItem[] = [
    { label: "Formación Online", href: "/formacion/online" },
    { label: "Formación Presencial", href: "/formacion/presencial" },
    { label: "Píldoras de formación (Gratis)", href: "/formacion/pildoras" },
];

const informacionItems: DropdownItem[] = [
    { label: "Plan de precios", href: "/precios" },
    { label: "Sobre nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const closeAll = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    // Cerrar menú móvil / dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // ¿Se hizo clic fuera del nav?
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                closeAll();
            }
        };

        // Solo añadir el listener si está abierto algún dropdown o el menú móvil
        if (activeDropdown || isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeDropdown, isOpen]);

    return (
        <nav ref={navRef} className="bg-white shadow-md sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
                            <Image
                                src="/logo buho circulo color.svg"
                                alt="MathEdu Logo"
                                width={50}
                                height={50}
                                priority
                            />
                            MathEdu
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {/* Formación Dropdown */}
                        <NavDropdown
                            label="Formación"
                            items={formacionItems}
                            isOpen={activeDropdown === "formacion"}
                            onToggle={() => toggleDropdown("formacion")}
                            onItemClick={() => setActiveDropdown(null)}
                            variant="desktop"
                        />

                        {/* Actividades */}
                        <Link
                            href="/actividades"
                            className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium box-border border-2 border-transparent rounded-xl hover:border-primary focus:outline-none transition-all ease-in-out duration-100"
                        >
                            Actividades
                        </Link>

                        {/* Información Dropdown */}
                        <NavDropdown
                            label="Información"
                            items={informacionItems}
                            isOpen={activeDropdown === "informacion"}
                            onToggle={() => toggleDropdown("informacion")}
                            onItemClick={() => setActiveDropdown(null)}
                            variant="desktop"
                        />
                    </div>

                    {/* Login Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/login"
                            className="bg-secondary hover:bg-secondary-hover text-text px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
                        >
                            <User size={18} />
                            Iniciar Sesión
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavDropdown
                            label="Formación"
                            items={formacionItems}
                            isOpen={activeDropdown === "mobile-formacion"}
                            onToggle={() => toggleDropdown("mobile-formacion")}
                            onItemClick={() => {
                                closeAll();
                            }}
                            variant="mobile"
                        />

                        <Link
                            href="/actividades"
                            className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => {
                                closeAll();
                            }}
                        >
                            Actividades
                        </Link>

                        <NavDropdown
                            label="Información"
                            items={informacionItems}
                            isOpen={activeDropdown === "mobile-informacion"}
                            onToggle={() => toggleDropdown("mobile-informacion")}
                            onItemClick={() => {
                                closeAll();
                            }}
                            variant="mobile"
                        />

                        <Link
                            href="/login"
                            className="block w-full text-center bg-secondary hover:bg-secondary-hover text-white px-4 py-3 rounded-md text-base font-medium mt-4"
                            onClick={() => {
                                closeAll();
                            }}
                        >
                            Iniciar Sesión
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
