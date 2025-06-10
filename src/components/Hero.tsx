import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, User, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Non perdere più tempo in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 animate-gradient-x">coda</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Delega la tua attesa a un Queuer e dedicati a ciò che conta davvero. Servizio disponibile a Milano.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/booking" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3.5 rounded-full shadow-soft hover:shadow-elegant transform hover:-translate-y-1 transition-all duration-300 font-medium text-center group">
                <span className="flex items-center justify-center">
                  Prenota la tua prima attesa
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link to="/beta-milano" className="border border-gray-200 bg-white text-gray-700 px-8 py-3.5 rounded-full hover:border-primary-300 hover:text-primary-600 transition-colors duration-300 font-medium text-center shadow-soft hover:shadow-md">
                Unisciti alla beta su Milano
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-xl shadow-soft group hover:shadow-md transition-all duration-300 hover:bg-primary-50">
                <div className="p-2 rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-200 transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-primary-700 transition-colors duration-300">Risparmia fino a 3 ore</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-xl shadow-soft group hover:shadow-md transition-all duration-300 hover:bg-primary-50">
                <div className="p-2 rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-200 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-primary-700 transition-colors duration-300">Servizio a Milano</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-xl shadow-soft group hover:shadow-md transition-all duration-300 hover:bg-primary-50">
                <div className="p-2 rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-200 transition-colors duration-300">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-primary-700 transition-colors duration-300">Queuer verificati</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-6 md:p-8 shadow-elegant">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-soft">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg text-gray-800">Attesa in corso</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" /> Attivo
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full overflow-hidden p-0.5">
                      <div className="bg-gray-50 rounded-full w-full h-full flex items-center justify-center">
                        <span className="text-primary-600 font-bold">MS</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Marco S.</p>
                      <p className="text-sm text-gray-500">Il tuo Queuer</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">Posizione in coda</span>
                      <span className="font-medium text-primary-700">12</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">Tempo stimato</span>
                      <span className="font-medium text-primary-700">~35 min</span>
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
                  
                  <Link to="/tracking" className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl hover:shadow-md transition-all duration-300 text-center block group">
                    <span className="flex items-center justify-center">
                      Traccia in tempo reale
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-elegant transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                -40%
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}