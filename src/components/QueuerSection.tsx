import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Shield, GraduationCap, ArrowRight } from 'lucide-react';

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
    <section id="queuer" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              💼 Vuoi guadagnare aspettando?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Q4U cerca attesisti professionali su Milano. Iscriviti, ricevi il kit ufficiale 
              e inizia a guadagnare con ogni attesa.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/become-queuer" className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
              📩 Candidati ora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Marco - Top Queuer</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="flex text-yellow-400">
                      {'⭐'.repeat(5)}
                    </div>
                    <span className="text-gray-600">(4.9/5)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">127</div>
                    <div className="text-sm text-gray-600">Attese completate</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">€2,340</div>
                    <div className="text-sm text-gray-600">Guadagno mensile</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600">Soddisfazione</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">6 mesi</div>
                    <div className="text-sm text-gray-600">Su Q4U</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-700 italic text-center">
                    "Lavoro flessibile e ben pagato. Q4U mi ha cambiato la vita!"
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