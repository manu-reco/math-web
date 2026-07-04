import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/animate-ui/components/buttons/button";

interface StoryErrorScreenProps {
    errorMessage: string;
    backHref: string;
}

export default function StoryErrorScreen({ errorMessage, backHref }: StoryErrorScreenProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Error al cargar el cuento</h1>
                <p className="mb-6">
                    {errorMessage}
                </p>
                <Button asChild size="lg">
                    <Link
                        href={backHref}
                    >
                        <ArrowLeft size={20} />
                        Volver a Actividades
                    </Link>
                </Button>
            </div>
        </div>

    )
}