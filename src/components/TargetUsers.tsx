import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, ShoppingBag, Camera, Building2, ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-secondary-100 opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-3 px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
            Utenti soddisfatti
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chi lo usa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Q4U è pensato per chiunque valorizzi il proprio tempo
          </p>
        </div>

        <div className="space-y-10 relative z-10">
          {users.map((user, index) => (
            <div key={index} className="group">
              <div className={`flex flex-col lg:flex-row items-center gap-8 p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 ${index % 5 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 
                                   index % 5 === 1 ? 'bg-gradient-to-br from-secondary-500 to-secondary-600' : 
                                   index % 5 === 2 ? 'bg-gradient-to-br from-accent-500 to-accent-600' : 
                                   index % 5 === 3 ? 'bg-gradient-to-br from-primary-400 to-secondary-500' : 
                                   'bg-gradient-to-br from-secondary-400 to-accent-500'} 
                    rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <user.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{user.title}</h3>
                  <p className="text-gray-600 mb-4">{user.description}</p>
                  <blockquote className={`bg-gradient-to-r ${index % 5 === 0 ? 'from-primary-50 to-gray-50 border-l-4 border-primary-500' : 
                                    index % 5 === 1 ? 'from-secondary-50 to-gray-50 border-l-4 border-secondary-500' : 
                                    index % 5 === 2 ? 'from-accent-50 to-gray-50 border-l-4 border-accent-500' : 
                                    index % 5 === 3 ? 'from-primary-50 to-secondary-50 border-l-4 border-primary-400' : 
                                    'from-secondary-50 to-accent-50 border-l-4 border-secondary-400'} 
                     p-5 rounded-lg shadow-soft mb-4`}>
                     <p className="text-gray-700 italic mb-2 relative">
                       <span className="absolute -left-2 -top-2 text-3xl opacity-20">"</span>
                       {user.quote}
                       <span className="absolute -right-2 -bottom-2 text-3xl opacity-20">"</span>
                     </p>
                     <cite className="text-sm text-gray-500 flex items-center gap-1">
                       <span className="inline-block w-8 h-0.5 bg-gray-300 mr-1"></span>
                       {user.author}
                     </cite>
                   </blockquote>
                  {user.title === "Professionisti sempre in corsa" && (
                    <Link to="/booking" className="text-primary-600 font-medium hover:text-primary-800 transition-all duration-300 inline-flex items-center group/link">
                      <span className="border-b border-transparent group-hover/link:border-primary-600 transition-all duration-300">Prenota per risparmiare tempo</span>
                      <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                  {user.title === "Anziani o persone con difficoltà motorie" && (
                    <Link to="/booking" className="text-secondary-600 font-medium hover:text-secondary-800 transition-all duration-300 inline-flex items-center group/link">
                      <span className="border-b border-transparent group-hover/link:border-secondary-600 transition-all duration-300">Servizio assistito</span>
                      <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                  {user.title === "Sneakerhead e fan di eventi" && (
                    <Link to="/booking" className="text-accent-600 font-medium hover:text-accent-800 transition-all duration-300 inline-flex items-center group/link">
                      <span className="border-b border-transparent group-hover/link:border-accent-600 transition-all duration-300">Prenota per eventi esclusivi</span>
                      <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                  {user.title === "Turisti che non vogliono perdere tempo" && (
                    <Link to="/beta-milano" className="text-primary-600 font-medium hover:text-primary-800 transition-all duration-300 inline-flex items-center group/link">
                      <span className="border-b border-transparent group-hover/link:border-primary-600 transition-all duration-300">Unisciti alla beta su Milano</span>
                      <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                  {user.title === "Agenzie, click & collect e PA" && (
                    <Link to="/booking" className="text-secondary-600 font-medium hover:text-secondary-800 transition-all duration-300 inline-flex items-center group/link">
                      <span className="border-b border-transparent group-hover/link:border-secondary-600 transition-all duration-300">Soluzioni business</span>
                      <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}