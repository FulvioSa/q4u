import React from 'react';
import { MapPin, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">Q4U</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#come-funziona" className="text-gray-700 hover:text-blue-600 transition-colors">Come funziona</a>
            <a href="#prezzi" className="text-gray-700 hover:text-blue-600 transition-colors">Prezzi</a>
            <a href="#queuer" className="text-gray-700 hover:text-blue-600 transition-colors">Diventa queuer</a>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Milano</span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Prenota ora
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <a href="#come-funziona" className="block text-gray-700 hover:text-blue-600">Come funziona</a>
            <a href="#prezzi" className="block text-gray-700 hover:text-blue-600">Prezzi</a>
            <a href="#queuer" className="block text-gray-700 hover:text-blue-600">Diventa queuer</a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-full">
              Prenota ora
            </button>
          </div>
        )}
      </div>
    </header>
  );
}