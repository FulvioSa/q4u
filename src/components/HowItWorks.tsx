import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: "Prenota un queuer",
      description: "Scegli luogo, orario e tipo di attesa",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Traccia in tempo reale",
      description: "Vedi dove si trova e quando tocca a te",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Raggiungi solo quando serve",
      description: "Zero stress, tempo guadagnato",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="come-funziona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💡 Come funziona in 3 semplici step
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Il processo è semplicissimo e completamente trasparente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center">
            🎬 Guarda la demo
            <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>
    </section>
  );
}