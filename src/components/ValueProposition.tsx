import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Star, TrendingUp, Gift, Users, ArrowRight } from 'lucide-react';

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
    blue: "from-primary-500 to-primary-600 bg-primary-50 text-primary-600 border-primary-200",
    purple: "from-secondary-500 to-secondary-600 bg-secondary-50 text-secondary-600 border-secondary-200",
    orange: "from-accent-500 to-accent-600 bg-accent-50 text-accent-600 border-accent-200",
    green: "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600 border-emerald-200",
    pink: "from-pink-500 to-pink-600 bg-pink-50 text-pink-600 border-pink-200",
    indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Caratteristiche uniche
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perché sceglierci
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
                <div className="bg-gray-50 rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-elegant transform hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-r ${colors[0]} ${colors[1]} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors[2]} ${colors[3]} ${colors[4]} border mb-4 shadow-sm`}>
                    {feature.benefit}
                  </div>
                  {feature.title === "Attesa a tempo" && (
                    <Link to="/booking" className={`text-sm font-medium ${colors[3]} hover:text-primary-700 transition-colors duration-300 inline-flex items-center group/link`}>
                      Prenota ora
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                  {feature.title === "Tracker & ETA" && (
                    <Link to="/tracking" className={`text-sm font-medium ${colors[3]} hover:text-primary-700 transition-colors duration-300 inline-flex items-center group/link`}>
                      Traccia in tempo reale
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                  {feature.title === "Comfort kit extra" && (
                    <Link to="/booking" className={`text-sm font-medium ${colors[3]} hover:text-primary-700 transition-colors duration-300 inline-flex items-center group/link`}>
                      Aggiungi al tuo ordine
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                  {feature.title === "Queuer verificati" && (
                    <Link to="/become-queuer" className={`text-sm font-medium ${colors[3]} hover:text-primary-700 transition-colors duration-300 inline-flex items-center group/link`}>
                      Diventa Queuer
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
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