import { PlayCircle, Lock, Clock, FileText } from "lucide-react";
import Link from "next/link";

const modules = [
    {
        id: 1,
        title: "Módulo 1: Fundamentos de la Didáctica Matemática",
        lessons: [
            { id: 101, title: "Introducción al pensamiento lógico", duration: "15 min", type: "video", locked: false },
            { id: 102, title: "El papel del juego en el aprendizaje", duration: "20 min", type: "video", locked: false },
            { id: 103, title: "Errores comunes en Infantil", duration: "10 min", type: "text", locked: true },
        ],
    },
    {
        id: 2,
        title: "Módulo 2: Aritmética y Cálculo Mental",
        lessons: [
            { id: 201, title: "Estrategias de conteo", duration: "25 min", type: "video", locked: true },
            { id: 202, title: "La recta numérica", duration: "18 min", type: "video", locked: true },
            { id: 203, title: "Materiales manipulativos", duration: "30 min", type: "video", locked: true },
        ],
    },
    {
        id: 3,
        title: "Módulo 3: Geometría Visual",
        lessons: [
            { id: 301, title: "Formas y figuras en el entorno", duration: "22 min", type: "video", locked: true },
            { id: 302, title: "Simetría y patrones", duration: "15 min", type: "text", locked: true },
        ],
    },
];

export default function OnlineTrainingPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Formación Online
                        </h1>
                        <p className="text-text-secondary">
                            Aprende a tu ritmo con nuestros cursos especializados.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-sm text-text-secondary">
                        <span className="font-bold text-primary">Progreso:</span> 2 / 25 Lecciones completadas
                    </div>
                </div>

                <div className="space-y-8">
                    {modules.map((module) => (
                        <div key={module.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                <h2 className="text-lg font-bold">
                                    {module.title}
                                </h2>
                                <span className="text-xs font-medium bg-blue-100 text-primary px-2 py-1 rounded-full">
                                    {module.lessons.length} Lecciones
                                </span>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {module.lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className={`px-6 py-4 flex items-center justify-between transition-colors ${lesson.locked ? "opacity-75 bg-gray-50/50" : "hover:bg-primary/10 cursor-pointer"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`p-2 rounded-full ${lesson.locked
                                                        ? "bg-muted text-muted-foreground"
                                                        : "bg-blue-100 text-primary"
                                                    }`}
                                            >
                                                {lesson.locked ? (
                                                    <Lock size={20} />
                                                ) : (
                                                    <PlayCircle size={20} />
                                                )}
                                            </div>
                                            <div>
                                                <h3 className={`font-medium ${lesson.locked ? "text-muted-foreground" : ""}`}>
                                                    {lesson.title}
                                                </h3>
                                                <div className={`flex items-center gap-3 text-xs ${lesson.locked ? "text-muted-foreground" : "text-text-secondary"} mt-1`}>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={12} /> {lesson.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1 capitalize">
                                                        <FileText size={12} /> {lesson.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {lesson.locked ? (
                                                <Link
                                                    href="/precios"
                                                    className="text-xs font-bold text-secondary hover:text-secondary-hover uppercase tracking-wide"
                                                >
                                                    Desbloquear
                                                </Link>
                                            ) : (
                                                <button className="text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wide">
                                                    Ver ahora
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
