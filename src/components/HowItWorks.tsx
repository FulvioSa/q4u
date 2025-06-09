import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Clock, UserCheck, Play } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Come funziona Q4U</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Delegare l'attesa non è mai stato così semplice. Bastano pochi click per liberare il tuo tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Prenota</h3>
            <p className="text-gray-600">
              Scegli il servizio per cui hai bisogno di un Queuer, indica l'orario e la location.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Monitora</h3>
            <p className="text-gray-600">
              Segui in tempo reale la posizione in coda del tuo Queuer e ricevi aggiornamenti costanti.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <UserCheck className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Arriva e scambia</h3>
            <p className="text-gray-600">
              Ricevi una notifica quando è quasi il tuo turno, raggiungi il Queuer e prendi il suo posto.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/demo" className="bg-white text-blue-600 border-2 border-blue-200 px-8 py-3 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium inline-flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Guarda la demo
          </Link>
        </div>
      </div>
    </section>
  );
}