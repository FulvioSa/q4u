import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BetaMilano() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zone: '',
    useCase: '',
    frequency: '',
    hearAbout: '',
    newsletter: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to a server here
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  const milanZones = [
    "Centro",
    "Porta Nuova",
    "Brera",
    "Navigli",
    "Isola",
    "Porta Romana",
    "Città Studi",
    "Porta Venezia",
    "San Siro",
    "Bicocca"
  ];

  const useCases = [
    "Uffici pubblici (anagrafe, questura, ecc.)",
    "Servizi sanitari (ospedali, ASL, ecc.)",
    "Eventi e concerti",
    "Negozi e release di prodotti",
    "Ristoranti senza prenotazione",
    "Musei e attrazioni turistiche",
    "Altro"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla home
            </Link>
          </div>

          {formSubmitted ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-12 text-white text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
                  <CheckCircle className="w-12 h-12 text-purple-600" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Grazie per esserti iscritto alla beta!</h1>
                <p className="text-lg opacity-90">Sei ufficialmente in lista d'attesa per Q4U Milano</p>
              </div>

              <div className="p-8">
                <div className="mb-8 text-center">
                  <p className="text-gray-700 mb-6">
                    Abbiamo ricevuto la tua richiesta di partecipazione alla beta di Q4U a Milano. 
                    Ti contatteremo presto con maggiori informazioni e per darti accesso prioritario 
                    quando lanceremo il servizio nella tua zona.
                  </p>
                  <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    Posizione in lista: #{Math.floor(100 + Math.random() * 300)}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h2 className="flex items-center text-lg font-bold text-gray-900 mb-3">
                      <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                      Lancio a Milano
                    </h2>
                    <p className="text-gray-700 mb-3">
                      Stiamo per lanciare Q4U a Milano, partendo dalle zone centrali e più frequentate.
                      Gli utenti beta avranno accesso prioritario e sconti esclusivi.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <h3 className="font-medium text-gray-900 mb-2">Zone iniziali di copertura:</h3>
                      <div className="flex flex-wrap gap-2">
                        {milanZones.slice(0, 5).map(zone => (
                          <span key={zone} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">{zone}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h2 className="flex items-center text-lg font-bold text-gray-900 mb-3">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Timeline prevista
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-xs font-medium">1</div>
                        <div>
                          <p className="font-medium text-gray-900">Giugno 2024</p>
                          <p className="text-sm text-gray-600">Invio inviti beta ai primi 100 utenti</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-xs font-medium">2</div>
                        <div>
                          <p className="font-medium text-gray-900">Luglio 2024</p>
                          <p className="text-sm text-gray-600">Espansione beta a 500 utenti</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-xs font-medium">3</div>
                        <div>
                          <p className="font-medium text-gray-900">Settembre 2024</p>
                          <p className="text-sm text-gray-600">Lancio ufficiale a Milano</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h2 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                    <Users className="w-5 h-5 mr-2 text-gray-700" />
                    Vantaggi esclusivi per i beta tester
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 text-green-500 mr-2">✓</div>
                      <p className="text-gray-700">Credito gratuito di €20 da utilizzare per le prime attese</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 text-green-500 mr-2">✓</div>
                      <p className="text-gray-700">Sconto del 30% sull'abbonamento Premium per 6 mesi</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 text-green-500 mr-2">✓</div>
                      <p className="text-gray-700">Accesso prioritario alle nuove funzionalità</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 text-green-500 mr-2">✓</div>
                      <p className="text-gray-700">Inviti da condividere con amici e familiari</p>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/" className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors text-center">
                    Torna alla home
                  </Link>
                  <a href="mailto:beta@q4u.it" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all text-center inline-flex items-center justify-center">
                    Contatta il team beta
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-8 text-white">
                <h1 className="text-2xl font-bold mb-2">Unisciti alla beta di Q4U Milano</h1>
                <p className="opacity-90">Sii tra i primi a provare il nostro servizio di code management nella tua città</p>
              </div>

              <div className="p-6">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Perché partecipare alla beta?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Accesso anticipato</h3>
                      <p className="text-sm text-gray-600">Sarai tra i primi a utilizzare Q4U a Milano, con accesso prioritario a tutte le funzionalità</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Vantaggi esclusivi</h3>
                      <p className="text-sm text-gray-600">Ricevi crediti gratuiti, sconti e offerte speciali riservate ai beta tester</p>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Influenza lo sviluppo</h3>
                      <p className="text-sm text-gray-600">Il tuo feedback ci aiuterà a migliorare il servizio prima del lancio ufficiale</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Informazioni personali</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="zone" className="block text-sm font-medium text-gray-700 mb-1">Zona di Milano *</label>
                        <select
                          id="zone"
                          name="zone"
                          value={formData.zone}
                          onChange={handleChange}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                          required
                        >
                          <option value="">Seleziona una zona</option>
                          {milanZones.map(zone => (
                            <option key={zone} value={zone}>{zone}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Il tuo interesse per Q4U</h2>
                    
                    <div className="mb-4">
                      <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1">Per quali servizi useresti principalmente Q4U? *</label>
                      <select
                        id="useCase"
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        required
                      >
                        <option value="">Seleziona un caso d'uso</option>
                        {useCases.map(useCase => (
                          <option key={useCase} value={useCase}>{useCase}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">Con che frequenza pensi di utilizzare il servizio? *</label>
                      <select
                        id="frequency"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        required
                      >
                        <option value="">Seleziona una frequenza</option>
                        <option value="Più volte a settimana">Più volte a settimana</option>
                        <option value="Una volta a settimana">Una volta a settimana</option>
                        <option value="Alcune volte al mese">Alcune volte al mese</option>
                        <option value="Una volta al mese">Una volta al mese</option>
                        <option value="Occasionalmente">Occasionalmente</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">Come hai sentito parlare di Q4U?</label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Seleziona un'opzione</option>
                        <option value="Social media">Social media</option>
                        <option value="Amici o familiari">Amici o familiari</option>
                        <option value="Articoli online">Articoli online</option>
                        <option value="Eventi">Eventi</option>
                        <option value="Pubblicità">Pubblicità</option>
                        <option value="Altro">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Desidero ricevere aggiornamenti su Q4U, incluse novità sul lancio, offerte speciali e consigli per risparmiare tempo.
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all inline-flex items-center justify-center"
                    >
                      Iscriviti alla beta
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}