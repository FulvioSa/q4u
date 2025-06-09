import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Non perdere più tempo in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">coda</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Delega la tua attesa a un Queuer e dedicati a ciò che conta davvero. Servizio disponibile a Milano.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/booking" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-center">
                Prenota la tua prima attesa
              </Link>
              <Link to="/beta-milano" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium text-center">
                Unisciti alla beta su Milano
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Risparmia fino a 3 ore</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Servizio a Milano</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Queuer verificati</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Attesa in corso</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Attivo</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <img src="/avatar-1.jpg" alt="Queuer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">Marco S.</p>
                      <p className="text-sm text-gray-500">Il tuo Queuer</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">Posizione in coda</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">Tempo stimato</span>
                      <span className="font-medium">~35 min</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">Ufficio Anagrafe</span>
                      <span className="text-sm font-medium">Via Larga, 12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Codice prenotazione</span>
                      <span className="text-sm font-medium">Q4U-7845</span>
                    </div>
                  </div>
                  
                  <Link to="/tracking" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-md transition-shadow text-center block">
                    Traccia in tempo reale
                  </Link>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                -40%
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}