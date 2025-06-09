import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">Q4U</span>
              </div>
            </div>
            <p className="text-gray-400">
              Il primo servizio on-demand in Italia che ti libera dalle code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servizi</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/#come-funziona" className="hover:text-white transition-colors">Come funziona</Link></li>
              <li><Link to="/#prezzi" className="hover:text-white transition-colors">Prezzi</Link></li>
              <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">Prenota</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Per i Queuer</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/become-queuer" className="hover:text-white transition-colors">Candidati</Link></li>
              <li><Link to="/become-queuer" className="hover:text-white transition-colors">Formazione</Link></li>
              <li><Link to="/become-queuer" className="hover:text-white transition-colors">Guadagni</Link></li>
              <li><Link to="/beta-milano" className="hover:text-white transition-colors">Beta Milano</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contatti</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Milano, Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@q4u.it</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+39 02 1234 5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Q4U. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Termini di Servizio</Link>
              <Link to="/" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}