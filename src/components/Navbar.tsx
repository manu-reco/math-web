"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            MathEdu
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {/* Formación Dropdown */}
                        <div className="relative group">
                            <button
                                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 focus:outline-none"
                                onClick={() => toggleDropdown("formacion")}
                                onMouseEnter={() => setActiveDropdown("formacion")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                Formmmmmmmmmma <ChevronDown size={16} />
                            </button>
                            {activeDropdown === "formacion" && (
                                <div
                                    className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    onMouseEnter={() => setActiveDropdown("formacion")}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="py-1">
                                        <Link
                                            href="/formacion/online"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Formación Online
                                        </Link>
                                        <Link
                                            href="/formacion/presencial"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Formación Presencial
                                        </Link>
                                        <Link
                                            href="/formacion/pildoras"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Píldoras de formación (Gratis)
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Juegos */}
                        <Link
                            href="/juegos"
                            className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Juegos
                        </Link>

                        {/* Información Dropdown */}
                        <div className="relative group">
                            <button
                                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 focus:outline-none"
                                onClick={() => toggleDropdown("informacion")}
                                onMouseEnter={() => setActiveDropdown("informacion")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                Información <ChevronDown size={16} />
                            </button>
                            {activeDropdown === "informacion" && (
                                <div
                                    className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    onMouseEnter={() => setActiveDropdown("informacion")}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="py-1">
                                        <Link
                                            href="/precios"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Plan de precios
                                        </Link>
                                        <Link
                                            href="/nosotros"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Sobre nosotros
                                        </Link>
                                        <Link
                                            href="/contacto"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Contacto
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/login"
                            className="bg-secondary hover:bg-secondary-hover text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
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
                        <div className="space-y-1">
                            <button
                                onClick={() => toggleDropdown("mobile-formacion")}
                                className="w-full text-left text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
                            >
                                Formación <ChevronDown size={16} />
                            </button>
                            {activeDropdown === "mobile-formacion" && (
                                <div className="pl-4 space-y-1">
                                    <Link
                                        href="/formacion/online"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                    >
                                        Online
                                    </Link>
                                    <Link
                                        href="/formacion/presencial"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                    >
                                        Presencial
                                    </Link>
                                    <Link
                                        href="/formacion/pildoras"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                    >
                                        Píldoras
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/juegos"
                            className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Juegos
                        </Link>

                        <div className="space-y-1">
                            <button
                                onClick={() => toggleDropdown("mobile-informacion")}
                                className="w-full text-left text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
                            >
                                Información <ChevronDown size={16} />
                            </button>
                            {activeDropdown === "mobile-informacion" && (
                                <div className="pl-4 space-y-1">
                                    <Link
                                        href="/precios"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                    >
                                        Precios
                                    </Link>
                                    <Link
                                        href="/nosotros"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                    >
                                        Sobre nosotros
                                    </Link>
                                    <Link
                                        href="/contacto"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                    >
                                        Contacto
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/login"
                            className="block w-full text-center bg-secondary hover:bg-secondary-hover text-white px-4 py-3 rounded-md text-base font-medium mt-4"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
