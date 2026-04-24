import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Home, Sparkles } from "lucide-react";

const quickLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/formacion/online", label: "Formación Online", icon: BookOpen },
    { href: "/formacion/pildoras", label: "Píldoras", icon: Sparkles },
    { href: "/actividades", label: "Actividades", icon: Compass },
];

export default function NotFound() {
    return (
        <section className="relative isolate overflow-hidden bg-linear-to-b from-primary/10 via-white to-secondary/10 py-14 md:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-secondary/25 blur-3xl"
            />

            <div className="container-custom relative">
                <div className="mx-auto p-6 backdrop-blur-sm sm:p-10">
                    <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
                        <div className="space-y-5">
                            <div className="h-28 md:h-32 flex items-center gap-4 sm:gap-6">
                                <p className="text-9xl md:text-[10rem] font-black tracking-tight text-primary">404</p>
                                <div className="relative h-full aspect-square shrink-0 bg-transparent">
                                    <Image
                                        src="/logo-buho-circulo-color.svg"
                                        alt="Buho de MathEdu"
                                        fill
                                        sizes="(max-width: 640px) 64px, 96px"
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h1 className="text-balance text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl">
                                    ¡Ups! Parece que esta página no existe.
                                </h1>
                                <p className="text-lg text-text-secondary">
                                    No te preocupes, te acompañamos a encontrar el camino de vuelta. ¿Dónde te gustaría volver?
                                </p>
                            </div>
                        </div>

                        <div className="w-full max-w-md rounded-2xl border border-primary/15 bg-white p-4 shadow-lg shadow-primary/5">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                                Navegación rápida
                            </p>
                            <nav aria-label="Secciones principales" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {quickLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="group inline-flex min-h-11 items-center justify-between gap-2 rounded-lg border border-transparent bg-muted px-3 py-2 text-sm font-medium text-text transition hover:border-primary/30 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            <span className="inline-flex items-center gap-2">
                                                <Icon size={15} aria-hidden="true" />
                                                {link.label}
                                            </span>
                                            <ArrowRight
                                                size={14}
                                                aria-hidden="true"
                                                className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                                            />
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
