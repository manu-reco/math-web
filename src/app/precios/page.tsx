import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Básico",
        price: "0€",
        period: "/mes",
        description: "Ideal para empezar a explorar recursos.",
        features: [
            "Acceso a Píldoras de formación",
            "5 ejercicios descargables al mes",
            "Acceso limitado al foro",
        ],
        cta: "Empezar Gratis",
        href: "/register",
        popular: false,
    },
    {
        name: "Pro Docente",
        price: "19€",
        period: "/mes",
        description: "Todo lo que necesitas para tu aula.",
        features: [
            "Acceso ilimitado a Formación Online",
            "Descargas ilimitadas de ejercicios",
            "Soporte prioritario",
            "Certificados de cursos",
            "Acceso a webinars en vivo",
        ],
        cta: "Suscribirse",
        href: "/register?plan=pro",
        popular: true,
    },
    {
        name: "Centros",
        price: "Consultar",
        period: "",
        description: "Para colegios y grupos de profesores.",
        features: [
            "Todo lo del plan Pro",
            "Licencias para múltiples profesores",
            "Formación presencial bonificada",
            "Seguimiento de progreso del equipo",
            "Facturación centralizada",
        ],
        cta: "Contactar",
        href: "/contacto",
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Planes de Precios
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Elige el plan que mejor se adapte a tus necesidades educativas. Sin permanencia, cancela cuando quieras.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${plan.popular ? "border-secondary ring-2 ring-secondary ring-opacity-50" : "border-gray-100"
                                } flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="bg-secondary text-white text-center py-2 text-sm font-bold uppercase tracking-wide">
                                    Más Popular
                                </div>
                            )}
                            <div className="p-8 grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-500 mb-6">{plan.description}</p>
                                <div className="flex items-baseline mb-8">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 ml-1">{plan.period}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-gray-50 border-t border-gray-100">
                                <Link
                                    href={plan.href}
                                    className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${plan.popular
                                            ? "bg-secondary hover:bg-secondary-hover text-white"
                                            : "bg-primary hover:bg-primary-hover text-white"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
