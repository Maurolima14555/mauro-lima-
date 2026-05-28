import Link from 'next/link';

const plans = [
  { id: 'FREE', name: 'Gratis', price: 0, features: ['3 videos por mes', 'Duracao maxima de 5 min', 'Qualidade 720p', 'Marca dagua FacelessForge'] },
  { id: 'STARTER', name: 'Starter', price: 97, popular: true, features: ['15 videos por mes', 'Duracao maxima de 15 min', 'Qualidade 1080p', 'Sem marca dagua', '5 YouTube Shorts', 'Suporte prioritario'] },
  { id: 'PRO', name: 'Pro', price: 197, features: ['50 videos por mes', 'Duracao maxima de 30 min', 'Qualidade 4K', 'Sem marca dagua', 'Shorts ilimitados', 'Traducao para 10 idiomas', 'API Access', 'Suporte 24/7'] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-medium uppercase tracking-wider text-sm">Planos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Escolha seu <span className="text-gradient">plano ideal</span>
          </h2>
          <p className="text-gray-400 text-xl">Comece gratuitamente. Sem cartao de credito necessario.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-primary border-2 border-purple-500' : 'glass'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">MAIS POPULAR</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price === 0 ? 'Gratis' : `R$ ${plan.price}`}</span>
                {plan.price > 0 && <span className="text-gray-300 ml-1">/mes</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register" className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${plan.popular ? 'bg-white text-purple-700 hover:bg-gray-100' : 'bg-gradient-primary text-white hover:opacity-90'}`}>
                {plan.price === 0 ? 'Comecar Gratis' : 'Assinar Agora'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                }
