'use client';

import Link from "next/link";
import { ArrowRight, Brain, Download, GraduationCap, Mail, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
                <p className="label-caps text-secondary">
                    Entorno de Desarrollo
                </p>
                <h1 className="mt-2 heading-lg text-text">
                    Guía de Componentes & Estilos
                </h1>
                <p className="mt-2 body-md text-text-secondary">
                    Espacio reservado para visualizar, testear y asegurar la consistencia visual de los componentes de la plataforma.
                </p>
            </header>

            <div className="space-y-16">
                {/* ================= SECCIÓN: CARDS ================= */}
                <section className="space-y-6">
                    <Highlighter colorClass="text-secondary">
                        <h2 className="heading-md text-text">Componente: Card y subcomponentes</h2>
                    </Highlighter>

                    {/* Grid de Pruebas de Composición */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {/* 1. Card de Ventaja / Feature */}
                        <div className="space-y-2">
                            <span className="body-sm text-text-secondary font-mono">
                                Caso 1: Composición Básica (Feature) <br />
                                Subcomponentes: CardHeader (con icono, CardTitle y CardDescription)
                            </span>
                            <Card className="text-center transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                                <CardHeader>
                                    <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Brain size={24} aria-hidden="true" />
                                    </div>
                                    <CardTitle>
                                        Evidencia Científica
                                    </CardTitle>
                                    {/* Movido aquí: CardDescription ahora pertenece al Header */}
                                    <CardDescription className="subtitle-md mt-2">
                                        Metodología basada en los últimos avances de la didáctica matemática. Pensada para razonar y no solo memorizar.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>

                        {/* 2. Card de Curso (Estructura Avanzada Horizontal con Imagen a Sangre) */}
                        <div className="space-y-2 lg:col-span-2">
                            <span className="body-sm text-text-secondary font-mono">
                                Caso 2: Tarjeta de Curso (Estructura Avanzada) <br />
                                Subcomponentes: CardHeader (con CardAction, CardTitle y CardDescription), CardContent y CardFooter (con acciones)
                            </span>

                            <Card className="py-0 gap-0 lg:flex-row transition duration-300 hover:shadow-lg">
                                <div className="bg-linear-to-br from-primary/20 to-secondary/20 w-full lg:w-48 h-48 lg:h-auto shrink-0 flex items-center justify-center text-primary-hover">
                                    <GraduationCap size={48} aria-hidden="true" />
                                </div>

                                <div className="py-6 flex flex-col flex-1 gap-4">
                                    <CardHeader className="gap-1">
                                        <CardAction>
                                            <Badge variant="secondary">Nuevo</Badge>
                                        </CardAction>
                                        <div className="label-caps text-secondary">Online • Infantil y Primaria</div>
                                        <CardTitle>Didáctica del Sentido Numérico</CardTitle>
                                        {/* Movido aquí: Ahora el Header tiene su estructura semántica completa */}
                                        <CardDescription className="body-md mt-1">
                                            Aprende a secuenciar correctamente los contenidos de conteo y las primeras operaciones utilizando materiales manipulativos estructurales.
                                        </CardDescription>
                                    </CardHeader>

                                    {/* CardContent ahora queda libre para elementos hijos extra (ej: temario, duración, etc.) */}
                                    <CardContent>
                                        <ul className="space-y-1 text-text-secondary">
                                            <li>• 40 horas de formación acreditada</li>
                                            <li>• Materiales descargables listos para el aula</li>
                                        </ul>
                                    </CardContent>

                                    <CardFooter className="justify-between gap-4">
                                        <span className="heading-sm text-text">149€</span>
                                        <Button asChild variant="primary" size="sm">
                                            <Link href="/formacion/online">
                                                Más detalles <ArrowRight size={14} />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        </div>

                    </div>
                </section>

                {/* ================= SECCIÓN: BOTONES ================= */}
                <section className="space-y-6">
                    <Highlighter colorClass="text-primary">
                        <h2 className="heading-md text-text">Componente: Button</h2>
                    </Highlighter>


                    {/* Bloque 1: Variantes Estándar */}
                    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                        <h3 className="label-caps text-text-secondary">
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
                        <h3 className="label-caps text-text-secondary">
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
                        <h3 className="label-caps text-text-secondary">
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
                        <h3 className="label-caps text-text-secondary">
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
                                        <ArrowRight aria-hidden="true" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs text-text-secondary font-mono">Solo Icono (size=&quot;icon&quot;)</span>
                                <Button size="icon" variant="outline" aria-label="Descargar PDF">
                                    <Download />
                                </Button>
                            </div>
                        </div>
                    </div>


                    {/* Bloque 5: Animación activada/desactivada */}
                    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                        <h3 className="label-caps text-text-secondary">
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
            </div>
        </div>
    );
}