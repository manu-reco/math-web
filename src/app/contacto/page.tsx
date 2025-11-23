import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Contacta con Nosotros
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes dudas sobre nuestros cursos? ¿Quieres colaborar? Estamos aquí para ayudarte.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Información de Contacto
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg text-primary mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@mathedu.es</p>
                                    <p className="text-gray-600">soporte@mathedu.es</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-3 rounded-lg text-secondary mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Teléfono</h3>
                                    <p className="text-gray-600">+34 912 345 678</p>
                                    <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 18:00</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-teal-100 p-3 rounded-lg text-teal-600 mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Oficina</h3>
                                    <p className="text-gray-600">
                                        Calle de las Matemáticas, 42<br />
                                        28001 Madrid, España
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="font-bold text-gray-900 mb-4">Síguenos</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Envíanos un mensaje
                        </h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-primary focus:border-primary"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                                        Apellidos
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-primary focus:border-primary"
                                        placeholder="Tus apellidos"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-primary focus:border-primary"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Asunto
                                </label>
                                <select
                                    id="subject"
                                    className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-primary focus:border-primary"
                                >
                                    <option>Información general</option>
                                    <option>Soporte técnico</option>
                                    <option>Facturación</option>
                                    <option>Colaboraciones</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-primary focus:border-primary"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
