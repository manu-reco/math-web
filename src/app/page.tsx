import Link from "next/link";
import { ArrowRight, BookOpen, Brain, CheckCircle, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Domina las Matemáticas para Infantil y Primaria
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10">
              Formación especializada para profesores. Recursos, estrategias y ejercicios para inspirar a tus alumnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/formacion/online"
                className="bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Ver Cursos <ArrowRight size={20} />
              </Link>
              <Link
                href="/formacion/pildoras"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center"
              >
                Prueba Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para enseñar mejor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuestra plataforma está diseñada por y para profesores, con el objetivo de hacer las matemáticas accesibles y divertidas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-primary">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Formación Continua
              </h3>
              <p className="text-gray-600">
                Cursos actualizados sobre didáctica de las matemáticas, desde conceptos básicos hasta estrategias avanzadas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-secondary">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Recursos Prácticos
              </h3>
              <p className="text-gray-600">
                Accede a cientos de ejercicios, juegos y materiales listos para imprimir o usar en el aula.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-teal-600">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comunidad Docente
              </h3>
              <p className="text-gray-600">
                Conecta con otros profesores, comparte experiencias y resuelve dudas en nuestros foros exclusivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para transformar tus clases?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Únete a más de 1000 profesores que ya están mejorando la enseñanza de las matemáticas en España.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>Acceso ilimitado a todos los cursos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>Nuevos materiales cada semana</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>Certificado de finalización</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Empieza hoy mismo</h3>
              <p className="text-gray-400 mb-6">Crea tu cuenta gratuita y accede a las primeras lecciones.</p>
              <Link
                href="/register"
                className="block w-full bg-secondary hover:bg-secondary-hover text-white text-center py-3 rounded-lg font-bold transition-colors mb-4"
              >
                Registrarme Gratis
              </Link>
              <p className="text-xs text-center text-gray-500">
                No se requiere tarjeta de crédito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
