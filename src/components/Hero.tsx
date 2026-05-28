import Link from 'next/link';

export function Hero() {
    return (
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300 text-sm">Plataforma 100% Automatizada com IA</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Crie Videos Faceless
          <br />
          <span className="text-gradient">para YouTube</span>
          <br />
          com Inteligencia Artificial
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Gere roteiros, narracoes e videos completos automaticamente.
              </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/register" className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90">
                  Comecar Gratuitamente
          </Link>
                <Link href="#demo" className="glass text-white px-8 py-4 rounded-full font-semibold text-lg">
                  Ver Demo
          </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
      {[{ value: '10K+', label: 'Videos Criados' }, { value: '2K+', label: 'Criadores' }, { value: '98%', label: 'Sucesso' }].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
        </div>
            </div>
          </section>
        );
}
