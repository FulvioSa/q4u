import React from 'react';
import { ArrowRight, Smartphone, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                🎯 Il tempo è{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  prezioso
                </span>.{' '}
                <br />
                Noi aspettiamo al tuo posto.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Q4U è il primo servizio on-demand in Italia che ti libera dalle code. 
                Professionisti selezionati si mettono in fila per te: in negozio, in ASL, 
                per il drop delle sneakers o al concerto del momento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                👉 Prenota la tua prima attesa
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                📱 Unisciti alla beta su Milano
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-bold text-2xl text-gray-900">300+</div>
                <div className="text-sm text-gray-600">Attese gestite</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="font-bold text-2xl text-gray-900">1.5h</div>
                <div className="text-sm text-gray-600">Tempo risparmiato</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <div className="font-bold text-2xl text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Rating medio</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 shadow-xl transform -rotate-3">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">Attesa in corso</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posizione in coda:</span>
                      <span className="font-bold">3/15</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tempo stimato:</span>
                      <span className="font-bold text-blue-600">12 min</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <div className="font-semibold">Marco - Queuer</div>
                      <div className="text-sm text-gray-600">⭐ 4.9 • 127 attese</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}