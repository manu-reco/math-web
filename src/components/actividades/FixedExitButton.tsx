import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import Link from "next/link";

interface FixedExitButtonProps {
    backHref: string;
}

export default function FixedExitButton({ backHref }: FixedExitButtonProps) {
    return (
        <div className="relative">
            <Button asChild variant="white" className="fixed top-20 left-4 z-50 text-text font-medium shadow-lg hover:shadow-xl">
                <Link
                    href={backHref}
                >
                    <ArrowLeft size={20} />
                    Salir
                </Link>
            </Button>
        </div>
    );
}