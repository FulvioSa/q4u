import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Tracking() {
  const [progress, setProgress] = useState(20);
  const [timeRemaining, setTimeRemaining] = useState(25);
  const [updates, setUpdates] = useState([
    { time: '10:15', message: 'Sono in coda, ci sono circa 15 persone davanti a noi.' },
    { time: '10:30', message: 'La coda sta avanzando regolarmente, siamo a buon punto.' },
  ]);

  // Simulazione dell'avanzamento della coda
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });

      setTimeRemaining(prev => {
        const newTime = prev - 1;
        if (newTime <= 0) return 0;
        return newTime;
      });
    }, 5000);

    // Aggiungi un aggiornamento dopo 10 secondi
    const updateTimeout = setTimeout(() => {
      setUpdates(prev => [
        ...prev,
        { time: '10:45', message: 'Siamo quasi arrivati, mancano solo 5 persone.' }
      ]);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(updateTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/booking-success" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna al riepilogo
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Tracciamento in tempo reale</h1>
              <p>Il tuo queuer è in attesa per te</p>
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-lg">Marco - Queuer</div>
                  <div className="text-sm text-gray-600">⭐ 4.9 • 127 attese</div>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> Tempo stimato:
                    </span>
                    <span className="font-bold text-blue-600">{timeRemaining} min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-gray-500">
                    <span>Inizio coda</span>
                    <span>Posizione attuale: {Math.floor(15 * progress / 100)}/15</span>
                    <span>Fine coda</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Posizione attuale</h3>
                      <p className="text-gray-600">Ufficio Postale - Via Esempio 123, Milano</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    {/* Qui andrebbe una mappa */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Mappa di localizzazione
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Aggiornamenti</h3>
                  <div className="space-y-3">
                    {updates.map((update, index) => (
                      <div key={index} className="flex space-x-3">
                        <div className="text-sm text-gray-500 w-12 flex-shrink-0">{update.time}</div>
                        <div className="flex-1 bg-blue-50 p-3 rounded-lg text-blue-800 text-sm">
                          {update.message}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Scrivi un messaggio a Marco..." 
                      className="flex-1 border border-gray-300 rounded-l-full py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-r-full hover:shadow-lg transition-all">
                      Invia
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
            <h3 className="font-semibold mb-2">Promemoria</h3>
            <p className="text-sm">
              Riceverai una notifica quando sarà quasi il tuo turno. Assicurati di essere pronto a raggiungere il punto di incontro quando Marco ti avviserà.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}