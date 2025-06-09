import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Star, TrendingUp, Gift, Users } from 'lucide-react';

export default function ValueProposition() {
  const features = [
    {
      icon: Clock,
      title: "Attesa a tempo",
      description: "Puoi prenotare \"fino al tuo arrivo\" o orari fissi",
      benefit: "Flessibilità assoluta",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Tracker & ETA",
      description: "GPS + stima coda in tempo reale",
      benefit: "Arrivi solo quando serve",
      color: "purple"
    },
    {
      icon: Star,
      title: "Reputazione visibile",
      description: "Score, badge, recensioni",
      benefit: "Fiducia e qualità garantita",
      color: "orange"
    },
    {
      icon: TrendingUp,
      title: "Prezzo dinamico",
      description: "Tariffe variabili con urgenze e maltempo",
      benefit: "Più margini, meno rischi",
      color: "green"
    },
    {
      icon: Gift,
      title: "Comfort kit extra",
      description: "Sedute pieghevoli, mantelle, power bank",
      benefit: "Esperienza premium",
      color: "pink"
    },
    {
      icon: Users,
      title: "Queuer verificati",
      description: "Background check e assicurazione",
      benefit: "Sicurezza garantita",
      color: "indigo"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
    purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
    orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200",
    green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
    pink: "from-pink-500 to-pink-600 bg-pink-50 text-pink-600 border-pink-200",
    indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔥 Perché sceglierci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ogni dettaglio è pensato per offrirti la migliore esperienza possibile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color].split(' ');
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${colors[0]} ${colors[1]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">⏱ {feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors[2]} ${colors[3]} ${colors[4]} border mb-4`}>
                    {feature.benefit}
                  </div>
                  {feature.title === "Attesa a tempo" && (
                    <Link to="/booking" className={`text-sm font-medium ${colors[3]} hover:underline inline-flex items-center`}>
                      Prenota ora
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  )}
                  {feature.title === "Tracker & ETA" && (
                    <Link to="/tracking" className={`text-sm font-medium ${colors[3]} hover:underline inline-flex items-center`}>
                      Traccia in tempo reale
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  )}
                  {feature.title === "Comfort kit extra" && (
                    <Link to="/booking" className={`text-sm font-medium ${colors[3]} hover:underline inline-flex items-center`}>
                      Aggiungi al tuo ordine
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  )}
                  {feature.title === "Queuer verificati" && (
                    <Link to="/become-queuer" className={`text-sm font-medium ${colors[3]} hover:underline inline-flex items-center`}>
                      Diventa Queuer
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}