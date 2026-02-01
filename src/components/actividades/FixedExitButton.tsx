import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface FixedExitButtonProps {
    backHref: string;
}

export default function FixedExitButton({ backHref }: FixedExitButtonProps) {
    return (
        <div className="relative">
            <Link
                href={backHref}
                className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-text-secondary px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all flex items-center gap-2 font-medium"
            >
                <ArrowLeft size={20} />
                Salir
            </Link>
        </div>
    );
}