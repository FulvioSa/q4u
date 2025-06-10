import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BookingSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-100 rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Prenotazione confermata!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Il tuo queuer è stato assegnato e ti aspetta al punto di incontro.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="text-left">
                  <div className="font-semibold">Marco - Queuer</div>
                  <div className="text-sm text-gray-600">⭐ 4.9 • 127 attese</div>
                </div>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Codice prenotazione:</span>
                  <span className="font-bold">Q4U-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stato:</span>
                  <span className="text-green-600 font-medium">In attesa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posizione in coda:</span>
                  <span className="font-medium">3/15</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 my-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-1/5"></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tempo stimato:</span>
                  <span className="font-medium text-blue-600">25 min</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tracking" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Traccia in tempo reale
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/" className="bg-white text-gray-700 px-6 py-3 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                <Home className="w-5 h-5 mr-2" />
                Torna alla home
              </Link>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-blue-800 mb-2">Cosa succede ora?</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mr-2 text-center">1</span>
                <span>Marco è già in coda e ti aggiornerà sull'avanzamento</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mr-2 text-center">2</span>
                <span>Riceverai una notifica quando sarà quasi il tuo turno</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mr-2 text-center">3</span>
                <span>Raggiungi il punto di incontro e completa la tua commissione</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}