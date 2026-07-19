import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, CheckCircle, GraduationCap, MessageSquare, Presentation, School, ToolCase, Users } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { DoubleUnderline } from "@/components/UnderlinedWords";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Inicio",
  description: "Formación de matemáticas para docentes de Infantil y Primaria con cursos, recursos y actividades prácticas.",
  path: "/",
});

interface FeatureCardProps {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, iconClassName, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className={cn(
          "mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full text-primary",
          iconClassName
        )}>
          {icon}
        </div>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription className="leading-7 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
}

function CourseCard({ icon, title, description, buttonText, buttonIcon, href, variant = 'primary' }: CourseCardProps) {
  const isPrimary = variant === 'primary';

  return (
    <Card className="shadow-md transition-transform duration-300 hover:-translate-y-1">
      <CardHeader>
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full text-3xl",
            isPrimary ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
          )}
        >
          {icon}
        </div>
        <CardTitle className="text-2xl">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="leading-relaxed text-text-secondary">
          {description}
          </p>
      </CardContent>

      <CardFooter className="py-4">
        <Button
          asChild
          variant={isPrimary ? 'primary' : 'secondary'}
          size="md"
          width="full"
        >
          <Link href={href}>
            {buttonText}
            <span className="text-sm flex items-center">{buttonIcon}</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Ornaments */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-128 bg-linear-to-b from-primary/12 via-background to-background" />
      <div aria-hidden="true" className="absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container-custom py-10 md:py-16 lg:py-20">
        {/* Hero Section */}
        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-[60px] font-bold tracking-[-0.02em] leading-tight text-primary">
                Matemáticas con <DoubleUnderline colorClass="text-secondary"><span className="text-secondary">sentido</span></DoubleUnderline>, razonamiento y emoción
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
                Descubre recursos y metodologías basadas en la evidencia científica para familias y docentes. Vuelve a disfrutar enseñando y consigue que tus estudiantes razonen y usen las matemáticas para su vida diaria.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link
                  href="/formacion/online"
                >
                  Explora nuestros cursos
                  <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="/formacion/pildoras"
                >
                  Descubre las lecciones gratuitas
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div aria-hidden="true" className="absolute -inset-4 rounded-4xl bg-secondary/10 transform -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
            <div aria-hidden="true" className="absolute -inset-2 rounded-4xl bg-primary/10 transform rotate-2 transition-transform duration-500 group-hover:rotate-1" />
            <figure className="relative overflow-hidden rounded-4xl border-4 border-card bg-card shadow-2xl shadow-primary/10">
              <Image
                alt="Ilustración de la experiencia de aprendizaje"
                width={960}
                height={720}
                priority
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX6CJrtSFGVD7JmDGrWNyZ8jIDYMKLAZ9_03XSCcFqRXHNvJyWw9c2Hojpar8aTfLWuVlt0aWym-KF0LLGMis30OTKRfB48DRaa4DRFuhKaXgyZmSi50o7WsLAyJwOg_SLNgDamGN50mIrIZWsAGYu7vjbLe0OI4sDxazonw2iKsf0z-W5A8DAzuO39daESD-hOslJnk35CKQR_TvQhZqFqWPZsPjSLw7GDNiDrd6aoiNkYinlkAq375btUQR2TBKt0eLvYB7yLq0"
              />
            </figure>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-14 md:mt-20">
          <h2 className="sr-only">Nuestras ventajas metodológicas</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Brain size={28} aria-hidden="true" />}
              iconClassName="bg-primary/10 text-primary"
              title="Evidencia científica"
              description="Metodología basada en estudios sobre didáctica y neurociencia. Pensada para razonar y comprender, no solo memorizar."
            />
            <FeatureCard
              icon={<Presentation size={28} aria-hidden="true" />}
              iconClassName="bg-secondary/10 text-secondary"
              title="Práctica viable"
              description="Materiales y dinámicas probadas en el aula. Llévate ideas listas para usar, adaptables a tu contexto."
            />
            <FeatureCard
              icon={<ToolCase size={28} aria-hidden="true" />}
              iconClassName="bg-tertiary/10 text-tertiary"
              title="Aprendizaje lúdico"
              description="El juego estructurado como motor principal para la comprensión profunda."
            />
          </div>
        </section>

        {/* Info & Core Path Section */}
        <section className="mt-14 md:mt-20">
          <div className="grid gap-8 rounded-4xl border border-primary/10 bg-linear-to-br from-card to-muted p-6 shadow-lg md:p-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                Qué encontrarás
              </p>
              <h2 className="text-3xl font-black tracking-tight text-text sm:text-4xl">
                Una ruta clara para enseñar matemáticas con más confianza.
              </h2>
              <div className="max-w-2xl space-y-2 text-base leading-7 text-text-secondary sm:text-lg">
                <p>Encontrarás artículos, actividades, recursos descargables y cursos para cada etapa educativa y área de las matemáticas que necesites.</p>
                <p>Todo pensado para transformar primero al docente y luego al estudiante. Para llegar a lo que quieres enseñar, pero con sentido.</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-3 text-sm font-semibold text-text">
                    <CheckCircle size={18} className="text-primary" aria-hidden="true" />
                    Recursos descargables y digitales
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">Material listo para usar en el aula o en casa.</p>
                </div>
                <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-3 text-sm font-semibold text-text">
                    <Users size={18} className="text-tertiary" aria-hidden="true" />
                    Comunidad docente
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">Acompañamiento y experiencias compartidas.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
                Empieza aquí
              </p>
              <h2 className="mt-3 text-2xl font-black">Explora nuestros artículos y actividades</h2> {/* Ajustado a H2 por semántica */}
              <p className="mt-4 text-sm leading-7 text-primary-foreground/90">
                Un vistazo rápido a nuestra secuenciación de contenidos, con artículos, actividades y recursos descargables para tu aula.
              </p>
              <Button asChild variant="white" size="lg" width="full" className="mt-6 group">
                <Link
                  href="/formacion/pildoras/aritmetica/primeros-pasos"
                >
                  Ver píldoras de formación
                  <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Catalog Section */}
        <section className="mt-14 px-4 py-16 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text md:text-4xl">
              Nuestros Cursos
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary">
              Formación especializada diseñada para transformar la forma de enseñar y dar alternativas mucho más efectivas a tus estudiantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CourseCard
              icon={<GraduationCap size={28} aria-hidden="true" />}
              title="Para docentes"
              description="Cursos online con lecciones paso a paso, material audiovisual, recursos descargables y seguimiento. Perfectos para abrir tu mente, perfeccionar sobre un tema y llevar propuestas directamente a tu aula."
              buttonText="Visita nuestro catálogo"
              buttonIcon={<ArrowRight size={18} aria-hidden="true" />}
              href="/formacion/online"
              variant="primary"
            />

            <CourseCard
              icon={<School size={28} aria-hidden="true" />}
              title="Para centros"
              description="Cursos presenciales para unir al equipo docente de tu centro y transformar la enseñanza en todos los niveles. Con visitas al colegio, sesiones especiales en el aula y asesoramiento al profesorado."
              buttonText="Consulta con nosotros"
              buttonIcon={<MessageSquare size={18} aria-hidden="true" />}
              href="/contacto"
              variant="secondary"
            />
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-primary-foreground py-20">
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
              <Button asChild variant="secondary" size="lg" width="full">
                <Link
                  href="/register"
                >
                  Registrarme Gratis
                </Link>
              </Button>
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