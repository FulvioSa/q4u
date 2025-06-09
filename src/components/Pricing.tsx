import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Singola attesa",
      price: "9,90€",
      description: "Perfetto per provare il servizio",
      features: [
        "1 attesa inclusa",
        "Tracking in tempo reale",
        "Notifiche push",
        "Supporto chat"
      ],
      icon: Zap,
      color: "blue",
      popular: false
    },
    {
      name: "Premium",
      price: "29€/mese",
      description: "120 minuti di attesa inclusi",
      features: [
        "120 min di attesa inclusi",
        "Queuer prioritari",
        "Comfort kit gratuito",
        "Supporto prioritario",
        "Prenotazione fino a 7 giorni",
        "Cancellazione gratuita"
      ],
      icon: Crown,
      color: "purple",
      popular: true
    },
    {
      name: "Comfort Kit",
      price: "4,90€",
      description: "Extra per ogni attesa",
      features: [
        "Sedia pieghevole",
        "Mantella antipioggia",
        "Power bank portatile",
        "Ombrello Q4U"
      ],
      icon: Check,
      color: "orange",
      popular: false
    }
  ];

  return (
    <section id="prezzi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💳 Prezzi e abbonamenti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Scegli la soluzione che fa per te
          </p>
          <div className="inline-flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 text-yellow-800">
            ⚡ I prezzi sono dinamici: urgenze e maltempo generano un piccolo sovrapprezzo
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg border ${plan.popular ? 'border-purple-200 ring-2 ring-purple-500' : 'border-gray-100'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Più popolare
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  plan.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  'bg-gradient-to-br from-orange-500 to-orange-600'
                }`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.color === 'blue' ? 'bg-blue-100' :
                      plan.color === 'purple' ? 'bg-purple-100' :
                      'bg-orange-100'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.color === 'blue' ? 'text-blue-600' :
                        plan.color === 'purple' ? 'text-purple-600' :
                        'text-orange-600'
                      }`} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/booking" 
                className={`block text-center w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.popular ? 'Inizia ora' : 'Scegli piano'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}