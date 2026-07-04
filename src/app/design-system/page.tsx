'use client';

import Link from "next/link";
import { ArrowRight, Download, Mail, Plus } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { Highlighter } from "@/components/UnderlinedWords"

// Validamos si estamos en producción para "ocultar" la página por completo en el futuro
// import { notFound } from "next/navigation";
// const IS_PROD = process.env.NODE_ENV === "production";

export default function DesignSystemPage() {
    // Descomenta esta línea si quieres que sea 100% secreta en la web real:
    // if (IS_PROD) notFound();

    return (
        <div className="min-h-screen bg-background p-8 md:p-16">
            {/* Cabecera del Sistema de Diseño */}
            <header className="mb-12 border-b border-border pb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Entorno de Desarrollo
                </p>
                <h1 className="mt-2 text-4xl font-black tracking-tight text-text">
                    Guía de Componentes & Estilos
                </h1>
                <p className="mt-2 text-text-secondary">
                    Espacio reservado para visualizar, testear y asegurar la consistencia visual de los componentes de la plataforma.
                </p>
            </header>

            <div className="space-y-16">
                {/* ================= SECCIÓN: BOTONES ================= */}
                <section className="space-y-6">
                    <Highlighter colorClass="text-primary">
                        <h2 className="text-2xl font-bold text-text">Componente: Button</h2>
                    </Highlighter>
                    

                    {/* Bloque 1: Variantes Estándar */}
                    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                            1. Variantes de Estilo (Tamaño MD por defecto)
                        </h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">variant=&quot;primary&quot;</span>
                                <Button variant="primary">Guardar cambios</Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">variant=&quot;secondary&quot;</span>
                                <Button variant="secondary">Confirmar inscripción</Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">variant=&quot;outline&quot;</span>
                                <Button variant="outline">Ver píldoras gratis</Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">variant=&quot;destructive&quot;</span>
                                <Button variant="destructive">Eliminar cuenta</Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">variant=&quot;ghost&quot;</span>
                                <Button variant="ghost">Cancelar</Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">variant=&quot;link&quot;</span>
                                <Button variant="link">Ver más información</Button>
                            </div>

                            <div className="flex flex-col gap-1.5 bg-gray-900 rounded-lg p-4">
                                <span className="text-xs text-gray-400 font-mono">variant=&quot;white&quot;</span>
                                <Button variant="white">Regístrate ya</Button>
                            </div>

                        </div>
                    </div>

                    {/* Bloque 2: Tamaños */}
                    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                            2. Escala de Tamaños
                        </h3>
                        <div className="flex flex-wrap gap-6 items-end">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">size=&quot;sm&quot;</span>
                                <Button size="sm" variant="outline">
                                    <Plus size={14} /> Añadir recurso
                                </Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">size=&quot;md&quot; (Por defecto)</span>
                                <Button size="md">
                                    Enviar mensaje <Mail size={16} />
                                </Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">size=&quot;lg&quot; (Hero / Landing)</span>
                                <Button size="lg" variant="primary">
                                    Explora nuestros cursos <ArrowRight size={18} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Bloque 3: Ancho */}
                    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                            3. Ancho (width)
                        </h3>
                        <div className="flex flex-wrap gap-6 items-end">
                            <div className="flex flex-col rounded-2xl border border-border bg-card p-6 text-center items-center shadow-sm w-1/4">
                                <span className="text-xs text-text-secondary font-mono">width=&quot;auto&quot; (Por defecto)</span>
                                <Button width="auto" variant="primary">
                                    Ancho automático
                                </Button>
                            </div>
                            <div className="flex flex-col rounded-2xl border border-border bg-card p-6 text-center items-center shadow-sm w-1/4">
                                <span className="text-xs text-text-secondary font-mono">width=&quot;fit&quot;</span>
                                <Button width="fit" variant="primary">
                                    Ancho ajustado a contenido
                                </Button>
                            </div>
                            <div className="flex flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-sm w-1/3">
                                <span className="text-xs text-text-secondary font-mono">width=&quot;full&quot;</span>
                                <Button width="full" variant="primary">
                                    Ancho al 100% del contenedor
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Bloque 4: Estados y Polimorfismo Semántico */}
                    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                            4. Estados Especiales y Enlaces Nativos
                        </h3>
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">disabled</span>
                                <Button disabled>Procesando pago...</Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">asChild + Next Link</span>
                                <Button asChild variant="secondary">
                                    <Link href="/">
                                        Ir al Inicio
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">asChild + Next Link + Icon</span>
                                <Button asChild variant="primary">
                                    <Link href="/formacion/online">
                                        Explora nuestros cursos
                                        <ArrowRight size={18} aria-hidden="true" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">Solo Icono (size=&quot;icon&quot;)</span>
                                <Button size="icon" variant="outline" aria-label="Descargar PDF">
                                    <Download size={18} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    
                    {/* Bloque 5: Animación activada/desactivada */}
                    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                            5. Animación activada/desactivada
                        </h3>
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">animate=true (Por defecto)</span>
                                <Button animate={true} variant="primary">
                                    Guardar cambios
                                </Button>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">animate=false</span>
                                <Button animate={false} variant="primary">
                                    Guardar cambios
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NOTA: Próximamente añadiremos aquí la sección de Cards */}
                <section className="rounded-xl border border-dashed border-border p-8 text-center bg-muted/30">
                    <p className="text-sm font-medium text-text-secondary">
                        Próximo módulo del catálogo: Estructuras Compuestas (`Card`, `CardTitle`, `IconBadge`).
                    </p>
                </section>
            </div>
        </div>
    );
}