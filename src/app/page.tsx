import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, CheckCircle, GraduationCap, MessageSquare, Presentation, School, ToolCase, Users } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardOverline, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { DoubleUnderline } from "@/components/UnderlinedWords";
import GameCard from "@/components/actividades/GameCard";
import { games } from "@/data/actividades";
import * as motion from "motion/react-client"
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Inicio",
  description: "Formación de matemáticas para docentes de Infantil y Primaria con cursos, recursos y actividades prácticas.",
  path: "/",
});

// 1. Variantes para el contenedor principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Tiempo de espera entre cada hijo
      delayChildren: 0.2,    // Retraso inicial antes de arrancar
    },
  },
}

// 2. Variante para cada elemento individual (fade-in + translateY)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const, // Cubic bezier para un acabado suave
    },
  },
}

export const sectionAnimationProps = {
  variants: containerVariants,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  transition: { duration: 0.8 },
}

interface FeatureCardProps {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, iconClassName, title, description }: FeatureCardProps) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="text-center">
        <CardHeader>
          <div className={cn(
            "mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full",
            iconClassName
          )}>
            {icon}
          </div>
          <CardTitle>
            {title}
          </CardTitle>
          <CardDescription className="mt-2">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
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
    <motion.div className="h-full" variants={itemVariants}>
      <Card className="h-full flex flex-col justify-between shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full",
              isPrimary ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
            )}
          >
            {icon}
          </div>
          <CardTitle className="heading-md">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="subtitle-sm text-text-secondary">
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
    </motion.div>
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
        <motion.section
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          {...sectionAnimationProps}
        >
          <div
            className="space-y-8"
          >
            <motion.div
              className="space-y-5"
              variants={itemVariants}

            >
              <h1 className="display-xl text-primary">
                Matemáticas con <DoubleUnderline colorClass="text-secondary"><span className="text-secondary">sentido</span></DoubleUnderline>, razonamiento y emoción
              </h1>
              <p className="max-w-2xl subtitle-lg text-text-secondary font-normal leading-8">
                Descubre recursos y metodologías basadas en la evidencia científica para familias y docentes. Vuelve a disfrutar enseñando y consigue que tus estudiantes razonen y usen las matemáticas para su vida diaria.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              variants={itemVariants}
            >
              <Button asChild size="lg">
                <Link href="/formacion/online">
                  <span className="flex items-center gap-2">
                    Explora nuestros cursos
                    <ArrowRight />
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="/formacion/pildoras"
                >
                  Descubre las actividades gratuitas
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative group"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="mt-14 md:mt-20"
          {...sectionAnimationProps}
        >
          <h2 className="sr-only">Nuestras ventajas metodológicas</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Brain size={28} aria-hidden="true" />}
              iconClassName="bg-primary/10 text-primary"
              title="Evidencia científica"
              description="Metodología basada en estudios sobre didáctica y neurociencia. Pensada para razonar y comprender."
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
        </motion.section>

        {/* Info & Core Path Section */}
        <motion.section
          className="mt-14 md:mt-20"
          {...sectionAnimationProps}
        >
          <div
            className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <motion.div
              className="space-y-4"
              variants={itemVariants}
            >
              <p className="label-caps text-text-secondary">
                Qué encontrarás
              </p>
              <h2 className="heading-md text-text">
                Una ruta clara para enseñar matemáticas con más confianza.
              </h2>
              <div className="max-w-2xl space-y-2 body-md text-text-secondary">
                <p>Encontrarás artículos, actividades, recursos descargables y formación para cada etapa educativa, siguiendo una secuenciación coherente en cada ámbito matemático.</p>
                <p>Te ayudamos a llegar a lo que quieres que tu alumnado aprenda, con sentido.</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="p-4">
                  <div className="flex items-center gap-3 body-sm-bold text-text">
                    <CheckCircle size={18} className="text-primary" aria-hidden="true" />
                    Recursos descargables y digitales
                  </div>
                  <p className="mt-2 body-sm text-text-secondary">Material listo para usar en el aula o en casa.</p>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 body-sm-bold text-text">
                    <Users size={18} className="text-tertiary" aria-hidden="true" />
                    Comunidad docente
                  </div>
                  <p className="mt-2 body-sm text-text-secondary">Acompañamiento y experiencias compartidas.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-primary p-6 text-primary-foreground shadow-primary/20">
                <CardHeader className="px-0">
                  <CardOverline className="text-primary-foreground/80">
                    Empieza aquí
                  </CardOverline>
                  <CardTitle>
                    <h3 className="heading-sm text-primary-foreground">
                      Explora nuestros artículos y actividades
                    </h3>
                  </CardTitle>
                  <CardDescription className="body-md text-primary-foreground/90">
                    Un vistazo rápido a nuestra secuenciación de contenidos, con artículos, actividades y recursos descargables para tu aula.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <Button asChild variant="white" size="lg" width="full" className="mt-6 group">
                    <Link
                      href="/formacion/pildoras/aritmetica/primeros-pasos"
                    >
                      Ver píldoras de formación
                      <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Courses Catalog Section */}
        <motion.section
          className="mt-14 px-4 py-16 md:px-8 lg:px-10"
          {...sectionAnimationProps}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="mb-4 heading-md text-text">
              Nuestra Formación
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="h-full">
              <CourseCard
                icon={<GraduationCap size={28} aria-hidden="true" />}
                title="Para docentes"
                description="Cursos online con lecciones paso a paso, material audiovisual y recursos descargables. Con o sin seguimiento. Te ayudamos a descubrir nuevas estrategias para un aprendizaje más eficiente, y te ofrecemos actividades que puedes implementar inmediatamente en tu aula."
                buttonText="Echa un vistazo a nuestra oferta"
                buttonIcon={<ArrowRight size={18} aria-hidden="true" />}
                href="/formacion/online"
                variant="primary"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <CourseCard
                icon={<School size={28} aria-hidden="true" />}
                title="Para centros"
                description="Formaciones presenciales u online destinada a equipos docentes que sientan la necesidad de transformar la metodología en sus aulas. Puede incluir visitas al colegio, sesiones especiales en el aula y asesoramiento al profesorado."
                buttonText="Consulta con nosotros"
                buttonIcon={<MessageSquare size={18} aria-hidden="true" />}
                href="/contacto"
                variant="secondary"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mt-14 px-4 py-16 md:px-8 lg:px-10"
          {...sectionAnimationProps}
        >
          <div className="lg:col-span-12 mt-2xl" >
            <motion.h2 className="mb-6 heading-md text-center text-text" variants={itemVariants}>
              Actividades interactivas
            </motion.h2>
            <motion.p className="body-md text-center text-text-secondary mb-12" variants={itemVariants}>
              Explora algunas de nuestras actividades interactivas para trabajar matemáticas en Infantil y Primaria de forma divertida y guiada, con fundamento pedagógico.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <GameCard game={games[0]} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <GameCard game={games[1]} />
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* Para añadir nueva sección: nueva tarjeta que diga: 
      Esta página está viva: en esta web iremos incrementando las propuestas con actividades, material y formaciones cada dos semanas.
      Regístrate para estar al día de las últimas novedades */}
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-primary-foreground py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="heading-md mb-6 text-primary-foreground">
                ¿Listo para transformar tus clases?
              </h2>
              <p className="subtitle-lg mb-8 text-gray-400">
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
            <Card className="md:w-1/3 bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-primary-foreground">
                  <h3 className="heading-sm">Empieza hoy mismo</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-md text-gray-400">Crea tu cuenta gratuita y accede a las primeras lecciones.</p>
                <Button asChild variant="secondary" size="lg" width="full">
                  <Link
                    href="/register"
                  >
                    Registrarme Gratis
                  </Link>
                </Button>
                <p className="body-sm text-center text-gray-500">
                  No se requiere tarjeta de crédito.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}