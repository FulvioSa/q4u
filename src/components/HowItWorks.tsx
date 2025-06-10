import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Clock, UserCheck, Play, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="py-20 bg-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-primary-100 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-3 px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Processo semplice
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Come funziona Q4U</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Delegare l'attesa non è mai stato così semplice. Bastano pochi click per liberare il tuo tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-md transition-all duration-300 border border-primary-100">
              <Smartphone className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="inline-block px-4 py-1 bg-gray-50 text-primary-700 rounded-full text-sm font-medium mb-3 shadow-sm">
              Passo 1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Prenota</h3>
            <p className="text-gray-600">
              Scegli il servizio per cui hai bisogno di un Queuer, indica l'orario e la location.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-md transition-all duration-300 border border-secondary-100">
              <Clock className="w-8 h-8 text-secondary-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="inline-block px-4 py-1 bg-gray-50 text-secondary-700 rounded-full text-sm font-medium mb-3 shadow-sm">
              Passo 2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Monitora</h3>
            <p className="text-gray-600">
              Segui in tempo reale la posizione in coda del tuo Queuer e ricevi aggiornamenti costanti.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-md transition-all duration-300 border border-accent-100">
              <UserCheck className="w-8 h-8 text-accent-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="inline-block px-4 py-1 bg-gray-50 text-accent-700 rounded-full text-sm font-medium mb-3 shadow-sm">
              Passo 3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Arriva e scambia</h3>
            <p className="text-gray-600">
              Ricevi una notifica quando è quasi il tuo turno, raggiungi il Queuer e prendi il suo posto.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center relative z-10">
          <Link to="/demo" className="bg-gray-50 text-primary-600 border-2 border-primary-200 px-8 py-3.5 rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 font-medium inline-flex items-center shadow-soft hover:shadow-md group">
            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Guarda la demo
            <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}