"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Lightbulb, Pencil, Info, CheckCircle2, GraduationCap, User, Download, FileSearchCorner, ArrowRight, ArrowLeft } from "lucide-react";

import {
    Tooltip,
    TooltipTrigger,
    TooltipPanel,
    type TooltipPanelProps,
} from '@/components/animate-ui/components/base/tooltip';

import {
    Popover,
    PopoverTrigger,
    PopoverPanel,
} from '@/components/animate-ui/components/base/popover';

import {
    Button,
    type ButtonProps
} from '@/components/animate-ui/components/buttons/button';

import {
    Dialog,
    DialogTrigger,
    DialogPopup,
    DialogHeader,
    DialogTitle,
    type DialogPopupProps,
} from '@/components/animate-ui/components/base/dialog';

import conceptsData from '@/data/concepts.json';
import { withBasePath } from "@/lib/assetPath";

interface ArticleHeaderProps {
    title: string;
    subtitle?: string;
    description: string;
    category: string;
    level: string;
}

export function ArticleHeader({ title, subtitle, description, category, level }: ArticleHeaderProps) {
    return (
        <header className="mb-12 border-b border-gray-100 pb-8">
            <div className="flex gap-2 text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                <span>{category}</span>
                <span className="text-gray-400">•</span>
                <span>{level}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                {title}
            </h1>
            {subtitle && (
                <h2 className="text-2xl text-text-secondary font-medium mb-6">
                    {subtitle}
                </h2>
            )}
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
                {description}
            </p>
        </header>
    );
}

export function ArticleSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                {title}
            </h3>
            <div className="text-lg leading-relaxed space-y-6">
                {children}
            </div>
        </section>
    );
}

type ArticleImagesProps = {
    images: {
        src: string;
        alt: string;
    }[];
    maxHeight?: number;
};

/**
 * Componente para mostrar una o varias imágenes con un diseño consistente y responsive.
 * @param images Array de objetos con src y alt de cada imagen
 * @param maxHeight Altura máxima de las imágenes en píxeles. Por defecto, 300px. La anchura se ajusta automáticamente para mantener la proporción. 
 */
export function ArticleImages({ images, maxHeight }: ArticleImagesProps) {
    maxHeight = maxHeight || 300;
    // Como Image de Next es especialito, hay que darle un width y height cualquiera y luego sobrescribirlo con CSS
    return (
        <div className="flex flex-row flex-wrap gap-4 my-6 items-center justify-center">
            {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={300} height={300}
                        className="h-auto w-auto max-w-full rounded-md shadow-md"
                        style={{ maxHeight: `${maxHeight}px` }}
                    />
                </div>
            ))}
        </div>
    );
}

export function ActivityBox({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
        <div className="my-8 bg-secondary/5 border-l-4 border-secondary rounded-r-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-secondary shrink-0">
                    <Pencil size={24} />
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-3">
                        {title || "Actividad Propuesta"}
                    </h4>
                    <div className="text-text-secondary space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TipBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-8 bg-amber-50 border border-amber-100 rounded-xl p-6 flex gap-4">
            <Lightbulb className="text-secondary shrink-0" size={24} />
            <div className="italic">
                {children}
            </div>
        </div>
    );
}

export function InfoBox({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="my-8 bg-blue-50 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Info size={20} />
                {title}
            </h4>
            <div className="text-blue-800/80">
                {children}
            </div>
        </div>
    );
}

export function KeyPoints({ points }: { points: (string | React.ReactNode)[] }) {
    return (
        <ul className="grid gap-3 my-6">
            {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-text/85">{point}</span>
                </li>
            ))}
        </ul>
    );
}

type DialogColor = 'primary' | 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'gray';
type DialogSpeaker = 'teacher' | 'student';

interface DialogBubbleProps {
    speaker?: DialogSpeaker;
    color?: DialogColor;
    children: React.ReactNode;
}

const colorClasses: Record<DialogColor, { bg: string; text: string }> = {
    primary: { bg: 'bg-primary/10', text: 'text-primary' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-900' },
    green: { bg: 'bg-green-50', text: 'text-green-900' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-900' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-900' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-900' },
    gray: { bg: 'bg-gray-50', text: 'text-text' },
};

export function DialogBubble({ speaker = 'teacher', color, children }: DialogBubbleProps) {
    const isTeacher = speaker === 'teacher';

    // Si no se especifica color, usar orange para teacher y primary para student
    const defaultColor = isTeacher ? 'orange' : 'primary';
    const finalColor = color || defaultColor;
    const colors = colorClasses[finalColor];

    // Iconos según el speaker
    const Icon = isTeacher ? GraduationCap : User;

    return (
        <div className={`my-4 flex items-start gap-3 ${isTeacher ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Icono del speaker */}
            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${colors.bg} ${colors.text} border-2 ${colors.bg.replace('bg-', 'border-')}`}>
                <Icon size={20} />
            </div>

            {/* Burbuja de diálogo */}
            <div
                className={`max-w-[90%] md:max-w-[85%] ${colors.bg} ${colors.text} rounded-2xl px-5 py-4 shadow-sm border border-opacity-20 ${isTeacher ? 'rounded-tl-sm' : 'rounded-tr-sm'}`}
            >
                <span className="flex gap-1.5">{"—"}{children}</span>
            </div>
        </div>
    );
}

interface ConceptTooltipProps {
    title: string;
    description?: string;
    side?: TooltipPanelProps['side'];
    sideOffset?: TooltipPanelProps['sideOffset'];
    align?: TooltipPanelProps['align'];
    alignOffset?: TooltipPanelProps['alignOffset'];
    followCursor?: boolean | 'x' | 'y';
}


export function ConceptTooltip({
    title,
    description,
    side = 'top',
    sideOffset = 8,
    align = 'center',
    alignOffset = 0,
    followCursor = false
}: ConceptTooltipProps) {

    return (
        <>
            <Tooltip followCursor={followCursor} delay={100}>
                <TooltipTrigger render={<span className='font-semibold border-b border-dotted border-gray-400 hover:border-blue-500 transition-colors select-none'
                    aria-describedby={`tooltip-${title}`}>{title}</span>
                } />
                <TooltipPanel
                    side={side}
                    sideOffset={sideOffset}
                    align={align}
                    alignOffset={alignOffset}
                    className="max-w-[200px] text-wrap wrap-break-word text-center"
                >
                    <p>{description}</p>
                </TooltipPanel>
            </Tooltip>
        </>
    );
}

/**
 * Componente para mostrar un concepto con un popover que se activa al hacer hover o click
 * @param conceptId ID del concepto definido en concepts.json
 * @param text Texto opcional para mostrar en lugar del nombre del concepto
 * @param definition Definición opcional para mostrar en lugar de la definición del concepto
 */
interface ConceptPopoverProps {
    conceptId: string;
    text?: string;
    definition?: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    sideOffset?: number;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
}

/**
 * Componente para mostrar un concepto con un popover que se activa al hacer hover o click
 * @param conceptId ID del concepto definido en concepts.json
 * @param text Texto opcional para mostrar en lugar del nombre del concepto
 * @param definition Definición opcional para mostrar en lugar de la definición del concepto
 */
export function ConceptPopover({
    conceptId,
    text,
    definition,
    side = 'top',
    sideOffset = 8,
    align = 'center',
    alignOffset = 0,
}: ConceptPopoverProps) {
    const concept = conceptsData[conceptId as keyof typeof conceptsData];

    if (!concept) {
        console.warn(`Concepto "${conceptId}" no encontrado en concepts.json`);
        return <span className='font-semibold'>{conceptId}</span>;
    }

    return (
        <>
            <Popover>
                <PopoverTrigger
                    render={
                        <span className='font-semibold border-b border-dotted border-gray-400 hover:border-blue-500 transition-colors select-none cursor-help' aria-describedby={`popover-${conceptId}`}>
                            {text ?? concept.name}
                        </span>
                    }
                    openOnHover={true}
                    delay={100}
                    closeDelay={50}
                    nativeButton={false}
                />
                <PopoverPanel
                    side={side}
                    sideOffset={sideOffset}
                    align={align}
                    alignOffset={alignOffset}
                    className="max-w-[200px] text-sm text-wrap wrap-break-word text-center"
                >
                    <p>{definition ?? concept.definition}</p>
                </PopoverPanel>
            </Popover>
        </>
    );
}

interface DownloadButtonProps {
    filePath: string;
    label?: string;
    variant?: ButtonProps['variant'];
    size?: ButtonProps['size'];
}

/**
 * Componente de botón para descargar un archivo
 * @param filePath Ruta del archivo a descargar
 * @param label Texto del botón
 */
export function DownloadButton({ filePath, label = "Descargar recurso", variant = "outline", size = "lg" }: DownloadButtonProps) {
    const resourceUrl = withBasePath(filePath);

    return (
        <a href={resourceUrl} download>
            <Button
                variant={variant} size={size}
                className="inline-flex items-center gap-3 px-6 py-7 border-2 border-primary text-lg text-primary rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 group"
            >
                <Download size={20} className="group-hover:animate-bounce" />
                {label}
            </Button>
        </a>
    );
}

interface PdfButtonProps {
    filePath: string;
    label?: string;
}

/**
 * Grupo de botones para visualizar un archivo PDF en un diálogo modal o descargarlo directamente 
 * @param filePath Ruta del archivo PDF
 * @param label Texto del botón de visualización
 */
export function PdfButton({ filePath, label = "Ver recurso" }: PdfButtonProps) {
    const resourceUrl = withBasePath(filePath);

    return (
        <>
            <Dialog>
                <div className="inline-flex bg-primary/5 text-primary rounded-xl duration-200 h-12 hover:scale-105 hover:shadow-lg transition" role="group">
                    {/* Visualizar */}
                    <DialogTrigger
                        render={
                            <button
                                type="button"
                                className="inline-flex items-center text-body border-r border-2 border-primary hover:bg-primary hover:text-white focus:ring-2 font-medium leading-5 rounded-l-xl text-base px-3 gap-2 h-full focus:outline-none transition"
                            >
                                <FileSearchCorner size={20} />
                                {label}
                            </button>
                        }
                    />
                    {/* Descargar */}
                    <a href={resourceUrl} download className="inline-flex items-center justify-center border-2 border-l-0 border-primary hover:bg-primary hover:text-white focus:ring-2 focus:border-l-2 font-medium leading-5 rounded-r-xl text-sm w-12 h-full focus:outline-none transition">
                        <Download size={20} />
                    </a>
                </div>

                {/* Dialog / Modal */}
                <PdfDialog filePath={resourceUrl} />
            </Dialog>
        </>
    );

    interface PdfDialogProps {
        filePath: string;
        from?: DialogPopupProps['from'];
        showCloseButton?: boolean;
    }

    function PdfDialog({ filePath, from = "top", showCloseButton = true }: PdfDialogProps) {
        const [status, setStatus] = useState<'loading' | 'available' | 'missing'>('loading');

        useEffect(() => {
            let isActive = true;
            setStatus('loading');

            fetch(filePath, { method: 'HEAD' })
                .then((response) => {
                    if (!isActive) return;
                    setStatus(response.ok ? 'available' : 'missing');
                })
                .catch(() => {
                    if (!isActive) return;
                    setStatus('missing');
                });

            return () => {
                isActive = false;
            };
        }, [filePath]);

        return (
            <DialogPopup
                from={from}
                showCloseButton={showCloseButton}
                className="bg-white w-[90vw] max-w-[90vw] sm:max-w-[90vw] h-[95vh] rounded-xl shadow-xl flex flex-col overflow-hidden"
            >
                <DialogHeader className="shrink-0">
                    <DialogTitle>Ver recurso</DialogTitle>
                </DialogHeader>
                {status === 'loading' && (
                    <div className="flex-1 w-full min-h-0 flex items-center justify-center text-text-secondary">
                        <span>Cargando recurso…</span>
                    </div>
                )}

                {status === 'missing' && (
                    <div className="flex-1 w-full min-h-0 flex flex-col items-center justify-center text-center gap-3 px-6">
                        <div className="text-lg font-semibold text-text">No se pudo cargar el recurso</div>
                        <p className="text-text-secondary">
                            Revisa que el archivo exista o que la ruta sea correcta.
                        </p>
                        <p className="text-sm text-text-secondary break-all">{filePath}</p>
                    </div>
                )}

                {status === 'available' && (
                    <iframe
                        src={filePath}
                        className="flex-1 w-full min-h-0"
                        title="PDF Viewer"
                    />
                )}
            </DialogPopup>
        );
    }
}

interface ArticleNavigationButtonProps {
    href: string;
    direction?: 'next' | 'previous';
    label?: string;
    size?: ButtonProps['size'];
}

/**
 * Botón para navegar entre artículos
 * @param href Enlace al artículo de destino
 * @param direction Dirección de navegación: "next" o "previous"
 * @param label Texto del botón
 */
export function ArticleNavigationButton({ href, direction = "next", label, size = "lg" }: ArticleNavigationButtonProps) {
    const isPrevious = direction === "previous";
    const buttonLabel = label ?? (isPrevious ? "Artículo anterior" : "Siguiente artículo");

    return (
        <Link href={href}>
            <Button
                variant="default" size={size}
                className="inline-flex items-center gap-3 px-6 py-7 border-2 border-primary text-lg text-primary-foreground rounded-xl transition-colors duration-200 group"
            >
                {isPrevious ? (
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                ) : null}
                {buttonLabel}
                {!isPrevious ? (
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                ) : null}
            </Button>
        </Link>
    );
}
