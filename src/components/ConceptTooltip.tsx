import React from "react";

import {
    Tooltip,
    TooltipTrigger,
    TooltipPanel,
    type TooltipPanelProps,
} from '@/components/animate-ui/components/base/tooltip';

interface ConceptTooltipProps {
    title: string;
    description?: string;
    side?: TooltipPanelProps['side'];
    sideOffset?: TooltipPanelProps['sideOffset'];
    align?: TooltipPanelProps['align'];
    alignOffset?: TooltipPanelProps['alignOffset'];
    followCursor?: boolean | 'x' | 'y';
}


export default function ConceptTooltip({ 
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
            <Tooltip followCursor={followCursor}>
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