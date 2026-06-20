import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, CheckCircle, Presentation, ToolCase, Users } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { DoubleUnderline } from "@/components/UnderlinedWords";
import { cn } from "@/lib/utils"

export const metadata: Metadata = buildPageMetadata({
    title: "Inicio",
    description:
        "Formacion de matematicas para docentes de Infantil y Primaria con cursos, recursos y actividades practicas.",
    path: "/",
});

interface featureCardProps {
    icon: React.ReactNode;
    iconClassName?: string;
    title: string;
    description: string;
}

function FeatureCard({ icon, iconClassName, title, description }: featureCardProps) {
    return (
        <div className="text-center rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className={cn("mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary", iconClassName)}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-text">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
        </div>
    );
}

export default function NewLandingPage() {
    return (
        <div className="relative isolate overflow-hidden">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-128 bg-linear-to-b from-primary/12 via-white to-white" />
            <div aria-hidden="true" className="absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />

            <div className="container-custom py-10 md:py-16 lg:py-20">
                <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <h1 className="text-[60px] tracking-[-0.02em] font-bold text-[#00685e] leading-tight">Matemáticas con <DoubleUnderline colorClass="text-[#8e4e14]"><span className="text-[#8e4e14]">sentido</span></DoubleUnderline>, razonamiento y emoción</h1>
                            <p className="max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
                                Descubre recursos y metodologías basadas en la evidencia científica para familias y docentes. Aprender matemáticas puede ser una experiencia lúdica y estructurada.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/formacion/online"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Explora nuestros cursos
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                            <Link
                                href="/formacion/pildoras"
                                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition hover:border-primary/35 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Descubre las lecciones gratuitas
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <div aria-hidden="true" className="absolute -inset-4 rounded-4xl bg-secondary/10 transform -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
                        <div aria-hidden="true" className="absolute -inset-2 rounded-4xl bg-primary/10 transform rotate-2 transition-transform duration-500 group-hover:rotate-1" />
                        <figure className="relative overflow-hidden rounded-4xl border-4 border-white bg-white shadow-2xl shadow-primary/10">
                            <Image
                                alt="Ilustración de la experiencia de aprendizaje"
                                width={960}
                                height={720}
                                priority
                                className="h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX6CJrtSFGVD7JmDGrWNyZ8jIDYMKLAZ9_03XSCcFqRXHNvJyWw9c2Hojpar8aTfLWuVlt0aWym-KF0LLGMis30OTKRfB48DRaa4DRFuhKaXgyZmSi50o7WsLAyJwOg_SLNgDamGN50mIrIZWsAGYu7vjbLe0OI4sDxazonw2iKsf0z-W5A8DAzuO39daESD-hOslJnk35CKQR_TvQhZqFqWPZsPjSLw7GDNiDrd6aoiNkYinlkAq375btUQR2TBKt0eLvYB7yLq0"
                            />
                        </figure>
                    </div>
                </section>

                <section className="mt-14 md:mt-20">
                    <div className="grid gap-6 md:grid-cols-3">
                        <FeatureCard
                            icon={<Brain size={28} aria-hidden="true" />}
                            iconClassName="bg-primary/10 text-primary"
                            title="Evidencia científica"
                            description="Metodología basada en estudios sobre didáctica y neurociencia. Pensada para razonar y comprender, no solo memorizar."
                        />
                        <FeatureCard
                            icon={<Presentation size={28} aria-hidden="true" />}
                            iconClassName="bg-secondary/10 text-secondary"
                            title="Práctica viable"
                            description="Materiales y dinámicas probadas en el aula. Llévate ideas listas para usar, adaptables a tu contexto."
                        />
                        <FeatureCard
                            icon={<ToolCase size={28} aria-hidden="true" />}
                            iconClassName="bg-blue-500/10 text-blue-500"
                            title="Aprendizaje lúdico"
                            description="El juego estructurado como motor principal para la comprensión profunda."
                        />
                    </div>
                </section>

                <section className="mt-14 md:mt-20">
                    <div className="grid gap-8 rounded-4xl border border-primary/10 bg-linear-to-br from-white to-muted p-6 shadow-lg md:p-10 lg:grid-cols-[1.15fr_0.85fr]">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                                Qué encontrarás
                            </p>
                            <h2 className="text-3xl font-black tracking-tight text-text sm:text-4xl">
                                Una ruta clara para enseñar matemáticas con más confianza.
                            </h2>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                                Esta landing resume el enfoque de trabajo: ideas claras, materiales visuales y actividades que se pueden poner en marcha sin fricción.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
                                    <div className="flex items-center gap-3 text-sm font-semibold text-text">
                                        <CheckCircle size={18} className="text-primary" aria-hidden="true" />
                                        Recursos descargables
                                    </div>
                                    <p className="mt-2 text-sm text-text-secondary">Material listo para usar en el aula o en casa.</p>
                                </div>
                                <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
                                    <div className="flex items-center gap-3 text-sm font-semibold text-text">
                                        <Users size={18} className="text-secondary" aria-hidden="true" />
                                        Comunidad docente
                                    </div>
                                    <p className="mt-2 text-sm text-text-secondary">Acompañamiento y experiencias compartidas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/20">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
                                Empieza aquí
                            </p>
                            <h3 className="mt-3 text-2xl font-black">Explora las actividades más útiles</h3>
                            <p className="mt-4 text-sm leading-7 text-primary-foreground/90">
                                Accede a propuestas prácticas, secuencias didácticas y contenidos pensados para acompañar el aprendizaje con sentido.
                            </p>
                            <Link
                                href="/actividades"
                                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Ver actividades
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}