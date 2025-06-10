import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Upload, Info } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BecomeQueuer() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    birthDate: '',
    availability: [],
    experience: '',
    motivation: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAvailabilityChange = (day) => {
    setFormData(prev => {
      const newAvailability = prev.availability.includes(day)
        ? prev.availability.filter(d => d !== day)
        : [...prev.availability, day];
      return { ...prev, availability: newAvailability };
    });
  };

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

  const days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
  
  const isStepValid = () => {
    if (step === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone;
    } else if (step === 2) {
      return formData.city && formData.birthDate && formData.availability.length > 0;
    } else if (step === 3) {
      return formData.experience && formData.motivation && formData.termsAccepted;
    }
    return true;
  };

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
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Diventa Queuer</h1>
              <p className="mb-4">Unisciti al team e inizia a guadagnare</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Step {step} di 4</span>
                <span className="text-sm">{step === 1 ? 'Informazioni personali' : step === 2 ? 'Disponibilità' : step === 3 ? 'Esperienza' : 'Conferma'}</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Informazioni personali</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Cognome *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
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

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Disponibilità e zona</h2>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Città *</label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      required
                    >
                      <option value="">Seleziona una città</option>
                      <option value="Milano">Milano</option>
                      <option value="Roma" disabled>Roma (prossimamente)</option>
                      <option value="Torino" disabled>Torino (prossimamente)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">Data di nascita *</label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilità settimanale *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {days.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => handleAvailabilityChange(day)}
                          className={`p-3 rounded-lg border text-center transition-all ${formData.availability.includes(day) ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 hover:border-purple-300'}`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Seleziona i giorni in cui sei disponibile a lavorare</p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Esperienza e motivazione</h2>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Esperienza lavorativa precedente *</label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={3}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Descrivi brevemente le tue esperienze lavorative precedenti</p>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Perché vuoi diventare un Queuer? *</label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={3}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Accetto i <Link to="/terms" className="text-purple-600 hover:text-purple-800">Termini di Servizio</Link> e confermo di avere almeno 18 anni. Comprendo che Q4U effettuerà una verifica dei miei dati personali. *
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Info className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-sm text-blue-700">
                      Dopo l'invio della candidatura, verrai contattato entro 48 ore per un colloquio telefonico e per completare la procedura di verifica.
                    </p>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Riepilogo e invio candidatura</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Informazioni personali</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-600">Nome:</span>
                          <p className="font-medium">{formData.firstName}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Cognome:</span>
                          <p className="font-medium">{formData.lastName}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Email:</span>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Telefono:</span>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Città:</span>
                          <p className="font-medium">{formData.city}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Data di nascita:</span>
                          <p className="font-medium">{formData.birthDate}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Disponibilità</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.availability.map(day => (
                          <span key={day} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">{day}</span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Documenti d'identità</span>
                        <button className="flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium">
                          <Upload className="w-4 h-4 mr-1" />
                          Carica documenti
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Potrai caricare i documenti anche dopo l'invio della candidatura</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <span className="font-medium">Nota:</span> Dopo l'invio della candidatura, riceverai una email di conferma con i passaggi successivi per completare il processo di selezione.
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
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all"
                    disabled={!isStepValid()}
                  >
                    Continua
                  </button>
                ) : (
                  <Link to="/queuer-success"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all inline-flex items-center"
                  >
                    Invia candidatura
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