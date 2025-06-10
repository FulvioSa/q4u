import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Clock, MapPin, Users } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-100/90 backdrop-blur-md shadow-soft z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Q4U</span>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-xl px-2 py-1 rounded-lg mr-2">Q4U</div>
                <span className="text-gray-800 font-semibold hidden sm:block">Queue For You</span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link to="/demo" className="text-base font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200 relative group">
              Come funziona
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="#services" className="text-base font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200 relative group">
              Servizi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="text-base font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200 relative group">
              Prezzi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link to="/become-queuer" className="text-base font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200 relative group">
              Per i Queuer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/booking"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-full shadow-soft text-base font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Prenota ora
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right`}
      >
        <div className="rounded-2xl shadow-elegant ring-1 ring-black ring-opacity-5 bg-gray-100 divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-xl px-2 py-1 rounded-lg mr-2">Q4U</div>
                  <span className="text-gray-800 font-semibold">Queue For You</span>
                </div>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="/demo"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Come funziona
                  </span>
                </Link>
                <a
                  href="#services"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Servizi
                  </span>
                </a>
                <a
                  href="#pricing"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Prezzi
                  </span>
                </a>
                <Link
                  to="/become-queuer"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Per i Queuer
                  </span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <Link
              to="/booking"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent rounded-full shadow-soft text-base font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Prenota ora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}