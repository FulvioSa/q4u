import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, ChevronRight, Clock, MapPin, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  const demoSteps = [
    {
      title: "Prenotazione dell'attesa",
      description: "L'utente seleziona il tipo di attesa, la location e l'orario desiderato.",
      image: "/src/assets/demo/booking.svg"
    },
    {
      title: "Conferma e pagamento",
      description: "L'utente conferma i dettagli e procede al pagamento sicuro.",
      image: "/src/assets/demo/payment.svg"
    },
    {
      title: "Assegnazione Queuer",
      description: "Il sistema assegna un Queuer disponibile nella zona richiesta.",
      image: "/src/assets/demo/assignment.svg"
    },
    {
      title: "Inizio dell'attesa",
      description: "Il Queuer si reca sul posto e inizia l'attesa per conto dell'utente.",
      image: "/src/assets/demo/waiting.svg"
    },
    {
      title: "Monitoraggio in tempo reale",
      description: "L'utente può seguire la posizione in coda e ricevere aggiornamenti dal Queuer.",
      image: "/src/assets/demo/tracking.svg"
    },
    {
      title: "Notifica di arrivo",
      description: "Quando manca poco al proprio turno, l'utente riceve una notifica per recarsi sul posto.",
      image: "/src/assets/demo/notification.svg"
    },
    {
      title: "Scambio con il Queuer",
      description: "L'utente arriva e prende il posto del Queuer, senza aver atteso in coda.",
      image: "/src/assets/demo/handover.svg"
    },
    {
      title: "Completamento del servizio",
      description: "L'utente completa il servizio e può lasciare una recensione sull'esperienza.",
      image: "/src/assets/demo/complete.svg"
    }
  ];

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(current => (current + 1) % demoSteps.length);
            return 0;
          }
          return prev + 1;
        });
        setElapsedTime(prev => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying, demoSteps.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
    setProgress(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla home
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Demo interattiva</h1>
              <p>Scopri come funziona Q4U in pochi semplici passi</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-gray-100 rounded-xl aspect-video relative overflow-hidden">
                    {/* Placeholder for demo animation/image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={demoSteps[currentStep].image} 
                        alt={demoSteps[currentStep].title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Demo controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center justify-between text-white">
                        <button 
                          onClick={togglePlayPause}
                          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                        
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-white/30 rounded-full h-1 mb-1">
                            <div 
                              className="bg-white h-1 rounded-full transition-all duration-300" 
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>{formatTime(elapsedTime)}</span>
                            <span>Step {currentStep + 1} di {demoSteps.length}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{demoSteps[currentStep].title}</h2>
                    <p className="text-gray-700">{demoSteps[currentStep].description}</p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vantaggi principali</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-purple-50 rounded-xl p-4">
                        <Clock className="w-8 h-8 text-purple-600 mb-2" />
                        <h4 className="font-medium text-gray-900 mb-1">Risparmio di tempo</h4>
                        <p className="text-sm text-gray-600">Risparmia fino a 3 ore per ogni attesa, dedicandoti a ciò che conta davvero</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                        <h4 className="font-medium text-gray-900 mb-1">Copertura capillare</h4>
                        <p className="text-sm text-gray-600">Servizio disponibile in diverse zone della città, con espansione continua</p>
                      </div>
                      <div className="bg-indigo-50 rounded-xl p-4">
                        <User className="w-8 h-8 text-indigo-600 mb-2" />
                        <h4 className="font-medium text-gray-900 mb-1">Queuer verificati</h4>
                        <p className="text-sm text-gray-600">Tutti i nostri Queuer sono selezionati, formati e costantemente valutati</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Passi della demo</h3>
                    <div className="space-y-3">
                      {demoSteps.map((step, index) => (
                        <button
                          key={index}
                          onClick={() => goToStep(index)}
                          className={`w-full text-left p-3 rounded-lg flex items-center transition-all ${currentStep === index ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${currentStep === index ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {index + 1}
                          </div>
                          <span className="font-medium">{step.title}</span>
                          {currentStep === index && (
                            <ChevronRight className="w-5 h-5 ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-3">Pronto a provare Q4U?</h3>
                    <p className="mb-4 text-white/90">Inizia subito a risparmiare tempo prezioso con il nostro servizio di code management</p>
                    <Link 
                      to="/booking"
                      className="block w-full bg-white text-purple-700 text-center py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Prenota la tua prima attesa
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Domande frequenti</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">Come funziona esattamente il servizio?</h3>
                  <p className="text-gray-700">Q4U ti permette di delegare l'attesa in coda a un nostro Queuer. Prenoti tramite l'app, un Queuer si mette in coda per te e ti avvisa quando sta per arrivare il tuo turno, così puoi arrivare giusto in tempo.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">Quanto costa il servizio?</h3>
                  <p className="text-gray-700">Il costo varia in base alla durata stimata dell'attesa e al tipo di servizio. Abbiamo piani a partire da €9,90 per attese singole e abbonamenti per chi usa frequentemente il servizio.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">In quali città è disponibile Q4U?</h3>
                  <p className="text-gray-700">Attualmente siamo operativi a Milano, con piani di espansione a Roma e Torino nei prossimi mesi. Seguici sui social per rimanere aggiornato sulle nuove aperture.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">Come vengono selezionati i Queuer?</h3>
                  <p className="text-gray-700">Tutti i nostri Queuer passano attraverso un rigoroso processo di selezione che include verifica dell'identità, colloquio e formazione. Monitoriamo costantemente le loro performance attraverso le recensioni degli utenti.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Posso annullare una prenotazione?</h3>
                  <p className="text-gray-700">Sì, puoi annullare una prenotazione fino a 1 ora prima dell'orario previsto con rimborso completo. Per cancellazioni con meno preavviso, si applica una penale del 50%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}