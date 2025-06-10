import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Shield, GraduationCap, ArrowRight, Star, Award } from 'lucide-react';

export default function QueuerSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Retribuzione oraria + bonus maltempo",
      description: "Guadagna in base al tempo di attesa con incentivi extra"
    },
    {
      icon: Shield,
      title: "Kit ufficiale incluso",
      description: "Ricevi tutto il necessario per lavorare in sicurezza"
    },
    {
      icon: GraduationCap,
      title: "Formazione online e assicurazione",
      description: "Preparati al meglio con il nostro corso certificato"
    }
  ];

  return (
    <section id="queuer" className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50 opacity-80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block mb-3 px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
              Opportunità di lavoro
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vuoi guadagnare aspettando?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Q4U cerca attesisti professionali su Milano. Iscriviti, ricevi il kit ufficiale 
              e inizia a guadagnare con ogni attesa.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className={`w-12 h-12 ${index === 0 ? 'bg-gradient-to-br from-accent-500 to-accent-600' : 
                                   index === 1 ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 
                                   'bg-gradient-to-br from-secondary-500 to-secondary-600'} 
                    rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/become-queuer" className="group bg-gradient-to-r from-accent-600 to-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
              Candidati ora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-100 rounded-full opacity-50 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-100 rounded-full opacity-50 animate-pulse-slow animation-delay-1000"></div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-elegant relative z-10 border border-gray-100">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center mb-3 px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4 mr-1" />
                    Top Queuer
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Marco</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">(4.9/5)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-primary-50 p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="text-2xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">127</div>
                    <div className="text-sm text-gray-600">Attese completate</div>
                  </div>
                  <div className="bg-secondary-50 p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="text-2xl font-bold text-secondary-600 group-hover:scale-110 transition-transform duration-300">€2,340</div>
                    <div className="text-sm text-gray-600">Guadagno mensile</div>
                  </div>
                  <div className="bg-accent-50 p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="text-2xl font-bold text-accent-600 group-hover:scale-110 transition-transform duration-300">98%</div>
                    <div className="text-sm text-gray-600">Soddisfazione</div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="text-2xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">6 mesi</div>
                    <div className="text-sm text-gray-600">Su Q4U</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-gray-50 p-5 rounded-xl shadow-soft mt-4">
                  <p className="text-gray-700 italic text-center relative">
                    <span className="absolute -left-2 -top-2 text-3xl opacity-20">"</span>
                    Lavoro flessibile e ben pagato. Q4U mi ha cambiato la vita!
                    <span className="absolute -right-2 -bottom-2 text-3xl opacity-20">"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}