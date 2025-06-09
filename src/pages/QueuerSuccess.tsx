import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function QueuerSuccess() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-12 text-white text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-purple-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Candidatura inviata con successo!</h1>
              <p className="text-lg opacity-90">Grazie per aver scelto di diventare un Queuer</p>
            </div>

            <div className="p-8">
              <div className="mb-8 text-center">
                <p className="text-gray-700 mb-6">
                  Abbiamo ricevuto la tua candidatura e la stiamo esaminando. 
                  Riceverai un'email di conferma all'indirizzo che hai fornito con i dettagli sui prossimi passi.
                </p>
                <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Codice candidatura: QUE-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Prossimi passi</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 mr-3">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Verifica dei dati</h3>
                      <p className="text-gray-600 text-sm">Controlleremo le informazioni che hai fornito</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 mr-3">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Colloquio telefonico</h3>
                      <p className="text-gray-600 text-sm">Ti contatteremo per un breve colloquio conoscitivo</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 mr-3">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Formazione</h3>
                      <p className="text-gray-600 text-sm">Parteciperai a una breve sessione di formazione</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 mr-3">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Inizio attività</h3>
                      <p className="text-gray-600 text-sm">Inizierai a ricevere richieste di attesa e a guadagnare</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Sessione informativa</h2>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Calendar className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Webinar di orientamento</h3>
                    <p className="text-gray-600 mb-2">Partecipa al nostro prossimo webinar per conoscere meglio Q4U e fare domande al team</p>
                    <div className="flex items-center text-sm text-gray-700 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-3">Giovedì, 15 Giugno 2023</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>18:00 - 19:00</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Registrati al webinar
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors text-center">
                  Torna alla home
                </Link>
                <a href="mailto:support@q4u.it" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all text-center inline-flex items-center justify-center">
                  Contatta il supporto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}