
import { Lightbulb, Pencil, Info, CheckCircle2, GraduationCap, User } from "lucide-react";

import {
    Tooltip,
    TooltipTrigger,
    TooltipPanel,
    type TooltipPanelProps,
} from '@/components/animate-ui/components/base/tooltip';
import React from "react";

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
                <span className="text-gray-300">•</span>
                <span>{level}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {title}
            </h1>
            {subtitle && (
                <h2 className="text-2xl text-gray-600 font-medium mb-6">
                    {subtitle}
                </h2>
            )}
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                {description}
            </p>
        </header>
    );
}

export function ArticleSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                {title}
            </h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                {children}
            </div>
        </section>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {title || "Actividad Propuesta"}
                    </h4>
                    <div className="text-gray-700 space-y-4">
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
            <Lightbulb className="text-amber-500 shrink-0" size={24} />
            <div className="text-gray-800 italic">
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
                    <span className="text-gray-700">{point}</span>
                </li>
            ))}
        </ul>
    );
}

type DialogColor = 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'gray';
type DialogSpeaker = 'teacher' | 'student';

interface DialogBubbleProps {
    speaker?: DialogSpeaker;
    color?: DialogColor;
    children: React.ReactNode;
}

const colorClasses: Record<DialogColor, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-900' },
    green: { bg: 'bg-green-50', text: 'text-green-900' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-900' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-900' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-900' },
    gray: { bg: 'bg-gray-50', text: 'text-gray-900' },
};

export function DialogBubble({ speaker = 'teacher', color, children }: DialogBubbleProps) {
    const isTeacher = speaker === 'teacher';
    
    // Si no se especifica color, usar purple para teacher y green para student
    const defaultColor = isTeacher ? 'purple' : 'pink';
    const finalColor = color || defaultColor;
    const colors = colorClasses[finalColor];
    
    // Iconos según el speaker
    const Icon = isTeacher ? GraduationCap : User;
    
    return (
        <div className={`my-4 flex items-start gap-3 ${isTeacher ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Icono del speaker */}
            <div className={`
                shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                ${colors.bg} ${colors.text} border-2 ${colors.bg.replace('bg-', 'border-')}
            `}>
                <Icon size={20} />
            </div>
            
            {/* Burbuja de diálogo */}
            <div 
                className={`
                    max-w-[90%] md:max-w-[85%] 
                    ${colors.bg} ${colors.text}
                    rounded-2xl px-5 py-4 
                    shadow-sm border border-opacity-20
                    ${isTeacher ? 'rounded-tl-sm' : 'rounded-tr-sm'}
                `}
            >
                {children}
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
