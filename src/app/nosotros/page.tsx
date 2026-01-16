import { Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-primary to-primary-hover text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Somos un equipo apasionado por transformar la enseñanza de las matemáticas en España.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Nuestra Misión
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Creemos que las matemáticas no tienen por qué ser aburridas o difíciles. Nuestro objetivo es empoderar a los profesores de Educación Infantil y Primaria con las herramientas, la formación y la confianza necesarias para inspirar a sus alumnos.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Combinamos metodologías innovadoras con recursos prácticos que se pueden aplicar directamente en el aula, fomentando el pensamiento lógico y la resolución de problemas desde una edad temprana.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-6 rounded-xl text-center">
                                <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900">Innovación</h3>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-xl text-center">
                                <Heart className="w-10 h-10 text-secondary mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900">Pasión</h3>
                            </div>
                            <div className="bg-teal-50 p-6 rounded-xl text-center col-span-2">
                                <Users className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900">Comunidad</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="bg-gray-50 py-20">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">
                        Nuestro Equipo
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-bold text-gray-900">Miembro del Equipo</h3>
                                <p className="text-primary font-medium mb-2">Cargo / Especialidad</p>
                                <p className="text-gray-500 text-sm">
                                    Breve descripción de la experiencia y pasión por las matemáticas.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
