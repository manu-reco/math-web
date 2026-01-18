import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

/*
  RECOMENDACIÓN DE SISTEMA DE AUTH:
  Para una aplicación moderna en Next.js, recomiendo usar una de las siguientes opciones:
  
  1. Clerk (https://clerk.com/): Muy fácil de integrar con Next.js, maneja sesiones, perfiles, 2FA, etc.
  2. NextAuth.js (Auth.js): La solución nativa. Flexible, permite usar cualquier proveedor (Google, GitHub, Email).
  3. Supabase Auth: Si usas Supabase como backend, su auth es excelente y gratuito hasta cierto punto.
  4. Firebase Auth: Clásico, robusto, pero a veces más complejo de integrar con SSR en Next.js.
*/

export default function LoginPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold">
                        Iniciar Sesión
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary">
                        ¿No tienes cuenta?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-primary hover:text-primary-hover transition-colors"
                        >
                            Regístrate gratis
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Correo electrónico
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Correo electrónico"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Contraseña"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm"
                            >
                                Recordarme
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-primary hover:text-primary-hover"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <ArrowRight className="h-5 w-5 text-blue-300 group-hover:text-blue-200" />
                            </span>
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
