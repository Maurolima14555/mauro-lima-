import Link from 'next/link';

export function Footer() {
    return (
          <footer className="border-t border-white/10 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FF</span>
                  </div>
                  <span className="text-white font-bold text-xl">
                    Faceless<span className="text-gradient">Forge</span>
                  </span>
                </Link>
                <div className="flex space-x-6">
                  <Link href="#features" className="text-gray-400 hover:text-white text-sm">Recursos</Link>
                  <Link href="#pricing" className="text-gray-400 hover:text-white text-sm">Planos</Link>
                  <Link href="/about" className="text-gray-400 hover:text-white text-sm">Sobre</Link>
                  <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacidade</Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Termos</Link>
                </div>
              </div>
              <div className="border-t border-white/10 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                  2024 FacelessForge. Todos os direitos reservados. Feito com amor no Brasil.
                </p>
              </div>
            </div>
          </footer>
        );
}
