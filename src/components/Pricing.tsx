import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Crown, ArrowRight, Sparkles } from 'lucide-react';

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
    <section id="prezzi" className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-primary-50 opacity-40"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-100 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full opacity-30 animate-pulse-slow animation-delay-1000"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-3 px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Piani flessibili
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prezzi e abbonamenti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Scegli la soluzione che fa per te
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-secondary-50 to-secondary-100 border border-secondary-200 rounded-full px-5 py-2.5 text-secondary-700 shadow-soft">
            <Sparkles className="w-4 h-4 mr-2 text-secondary-500" />
            I prezzi sono dinamici: urgenze e maltempo generano un piccolo sovrapprezzo
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-100 rounded-2xl p-8 ${plan.popular ? 'shadow-elegant border border-secondary-200' : 'shadow-soft border border-gray-100'} hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                    <Crown className="w-4 h-4 inline-block mr-1" />
                    Più popolare
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 ${
                  plan.color === 'blue' ? 'bg-gradient-to-br from-primary-500 to-primary-600 group-hover:scale-105' :
                  plan.color === 'purple' ? 'bg-gradient-to-br from-secondary-500 to-secondary-600 group-hover:scale-105' :
                  'bg-gradient-to-br from-accent-500 to-accent-600 group-hover:scale-105'
                }`}>
                  <plan.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${plan.color === 'blue' ? 'from-primary-600 to-primary-700' : plan.color === 'purple' ? 'from-secondary-600 to-secondary-700' : 'from-accent-600 to-accent-700'} mb-3">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-sm ${
                      plan.color === 'blue' ? 'bg-primary-100' :
                      plan.color === 'purple' ? 'bg-secondary-100' :
                      'bg-accent-100'
                    }`}>
                      <Check className={`w-4 h-4 ${
                        plan.color === 'blue' ? 'text-primary-600' :
                        plan.color === 'purple' ? 'text-secondary-600' :
                        'text-accent-600'
                      }`} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/booking" 
                className={`block text-center w-full py-3.5 px-6 rounded-full font-semibold transition-all duration-300 group/btn ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-secondary-600 to-primary-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                    : plan.color === 'blue' ? 'bg-gray-50 border-2 border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300' :
                      plan.color === 'purple' ? 'bg-gray-50 border-2 border-secondary-200 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-300' :
                      'bg-gray-50 border-2 border-accent-200 text-accent-700 hover:bg-accent-50 hover:border-accent-300'
                }`}
              >
                <span className="inline-flex items-center">
                  {plan.popular ? 'Inizia ora' : 'Scegli piano'}
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}