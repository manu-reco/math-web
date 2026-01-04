
export default function OwlTreeStoryPage() {
    return (
        <div className="relative">
            {/* Botón de retroceso flotante */}
            <Link
                href="/juegos"
                className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all flex items-center gap-2 font-medium"
            >
                <ArrowLeft size={20} />
                Salir
            </Link>
        </div>
    );
}
