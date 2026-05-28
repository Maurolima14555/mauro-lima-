'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FF</span>
            </div>
            <span className="text-white font-bold text-xl">
              Faceless<span className="text-gradient">Forge</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Planos</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">Entrar</Link>
            <Link href="/register" className="bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:opacity-90">
              Comecar Gratis
            </Link>
          </div>
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-300 hover:text-white">Recursos</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white">Planos</Link>
              <Link href="/login" className="text-gray-300 hover:text-white">Entrar</Link>
              <Link href="/register" className="bg-gradient-primary text-white px-6 py-2 rounded-full font-medium text-center">Comecar Gratis</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
