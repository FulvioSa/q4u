import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg shadow-soft">
                <span className="text-white font-bold text-xl">Q4U</span>
              </div>
              <span className="text-white font-semibold">Queue For You</span>
            </div>
            <p className="text-gray-300">
              Il primo servizio on-demand in Italia che ti libera dalle code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-300">Servizi</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/#come-funziona" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Come funziona
              </Link></li>
              <li><Link to="/#prezzi" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Prezzi
              </Link></li>
              <li><Link to="/demo" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Demo
              </Link></li>
              <li><Link to="/booking" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Prenota
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-300">Per i Queuer</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/become-queuer" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Candidati
              </Link></li>
              <li><Link to="/become-queuer" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Formazione
              </Link></li>
              <li><Link to="/become-queuer" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Guadagni
              </Link></li>
              <li><Link to="/beta-milano" className="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                Beta Milano
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-300">Contatti</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2 group">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="group-hover:text-primary-300 transition-colors duration-300">Milano, Italia</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="group-hover:text-primary-300 transition-colors duration-300">info@q4u.it</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="group-hover:text-primary-300 transition-colors duration-300">+39 02 1234 5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-primary-400">Q4U</span>. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link to="/" className="hover:text-primary-300 transition-colors duration-300">Privacy Policy</Link>
              <Link to="/" className="hover:text-primary-300 transition-colors duration-300">Termini di Servizio</Link>
              <Link to="/" className="hover:text-primary-300 transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}