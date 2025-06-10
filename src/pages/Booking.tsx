import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft, Check, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [comfortKit, setComfortKit] = useState(false);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const bookingTypes = [
    { id: 'ufficio', name: 'Ufficio pubblico', icon: '🏢' },
    { id: 'negozio', name: 'Negozio/Evento', icon: '🛍️' },
    { id: 'sanita', name: 'Sanità', icon: '🏥' },
    { id: 'altro', name: 'Altro', icon: '📋' },
  ];

  const locations = [
    'Milano Centro',
    'Milano Nord',
    'Milano Sud',
    'Milano Est',
    'Milano Ovest',
  ];

  const durations = [
    { value: '30', label: '30 minuti', price: '4,90€' },
    { value: '60', label: '1 ora', price: '9,90€' },
    { value: '120', label: '2 ore', price: '18,90€' },
    { value: '180', label: '3 ore', price: '27,90€' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla home
            </Link>
          </div>

          <div className="bg-gray-100 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress bar */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-900">Prenota un queuer</h2>
                <span className="text-sm text-gray-500">Step {step} di 4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cosa vuoi prenotare?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {bookingTypes.map((type) => (
                      <button
                        key={type.id}
                        className={`p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${bookingType === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                        onClick={() => setBookingType(type.id)}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="font-medium">{type.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dove e quando?</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Zona</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {locations.map((loc) => (
                          <button
                            key={loc}
                            className={`p-3 rounded-lg border text-center hover:border-blue-500 transition-all ${location === loc ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                            onClick={() => setLocation(loc)}
                          >
                            <div className="font-medium">{loc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Data</label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                          <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Orario</label>
                        <div className="relative">
                          <input
                            type="time"
                            id="time"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                          />
                          <Clock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Durata e opzioni</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Durata stimata dell'attesa</label>
                    <div className="grid grid-cols-2 gap-3">
                      {durations.map((dur) => (
                        <button
                          key={dur.value}
                          className={`p-3 rounded-lg border text-left hover:border-blue-500 transition-all ${duration === dur.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                          onClick={() => setDuration(dur.value)}
                        >
                          <div className="font-medium">{dur.label}</div>
                          <div className="text-sm text-gray-500">{dur.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all cursor-pointer"
                      onClick={() => setComfortKit(!comfortKit)}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">Comfort Kit</h4>
                        <p className="text-sm text-gray-500">Sedia pieghevole, mantella antipioggia, power bank</p>
                        <p className="text-sm font-medium text-blue-600 mt-1">+4,90€</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${comfortKit ? 'bg-blue-600' : 'border-2 border-gray-300'}`}>
                        {comfortKit && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Riepilogo e conferma</h3>
                  
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tipo di prenotazione:</span>
                      <span className="font-medium">{bookingTypes.find(t => t.id === bookingType)?.name || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zona:</span>
                      <span className="font-medium">{location || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data e ora:</span>
                      <span className="font-medium">{date ? new Date(date).toLocaleDateString('it-IT') : '-'} {time || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durata:</span>
                      <span className="font-medium">{durations.find(d => d.value === duration)?.label || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Comfort Kit:</span>
                      <span className="font-medium">{comfortKit ? 'Sì' : 'No'}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Totale:</span>
                        <span className="text-blue-600">
                          {duration ? 
                            `${parseFloat(durations.find(d => d.value === duration)?.price.replace(',', '.') || '0') + (comfortKit ? 4.9 : 0)}0€`.replace('.', ',') : 
                            '-'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <span className="font-medium">Nota:</span> Il prezzo finale potrebbe variare in base alle condizioni meteo e all'urgenza della richiesta.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Indietro
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
                    disabled={step === 1 && !bookingType || step === 2 && (!location || !date || !time) || step === 3 && !duration}
                  >
                    Continua
                  </button>
                ) : (
                  <Link to="/booking-success"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all inline-flex items-center"
                  >
                    Conferma prenotazione
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}