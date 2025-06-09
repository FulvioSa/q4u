import React from 'react';
import { Briefcase, Heart, ShoppingBag, Camera, Building2 } from 'lucide-react';

export default function TargetUsers() {
  const users = [
    {
      icon: Briefcase,
      title: "Professionisti sempre in corsa",
      description: "Manager, consulenti, imprenditori che non possono permettersi di perdere tempo",
      quote: "In posta per mia madre senza muovermi di casa – geniale.",
      author: "Marco R., Consulente"
    },
    {
      icon: Heart,
      title: "Anziani o persone con difficoltà motorie",
      description: "Servizio dedicato a chi ha bisogni speciali per l'attesa",
      quote: "Finalmente posso sbrigare le commissioni senza fare fatica.",
      author: "Maria G., 74 anni"
    },
    {
      icon: ShoppingBag,
      title: "Sneakerhead e fan di eventi",
      description: "Appassionati di drop esclusivi e eventi limitati",
      quote: "In coda per il lancio iPhone mentre ero al lavoro.",
      author: "Luca M., Sneaker Collector"
    },
    {
      icon: Camera,
      title: "Turisti che non vogliono perdere tempo",
      description: "Visitatori che vogliono ottimizzare il loro soggiorno",
      quote: "Più tempo per visitare Milano, meno code agli uffici!",
      author: "Sophie L., Turista"
    },
    {
      icon: Building2,
      title: "Agenzie, click & collect e PA",
      description: "Soluzioni B2B per ottimizzare i servizi al cittadino",
      quote: "I nostri clienti non aspettano più. Q4U ha rivoluzionato il nostro servizio.",
      author: "Agenzia Pratiche Milano"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧑‍🤝‍🧑 Chi lo usa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Q4U è pensato per chiunque valorizzi il proprio tempo
          </p>
        </div>

        <div className="space-y-8">
          {users.map((user, index) => (
            <div key={index} className="group">
              <div className={`flex flex-col lg:flex-row items-center gap-8 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <user.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{user.title}</h3>
                  <p className="text-gray-600 mb-4">{user.description}</p>
                  <blockquote className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 italic mb-2">"{user.quote}"</p>
                    <cite className="text-sm text-gray-500">— {user.author}</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}