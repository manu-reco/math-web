export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">MathEdu</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Formación de matemáticas para el futuro.
                        </p>
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <a href="/nosotros" className="hover:text-white transition-colors">
                            Sobre nosotros
                        </a>
                        <a href="/contacto" className="hover:text-white transition-colors">
                            Contacto
                        </a>
                        <a href="/privacidad" className="hover:text-white transition-colors">
                            Política de Privacidad
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} MathEdu. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
