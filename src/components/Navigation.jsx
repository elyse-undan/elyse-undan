import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 w-full bg-[#F9EFBB]/90 backdrop-blur-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold text-black" style={{fontFamily: 'Blonden, sans-serif'}}>
                            elyse.undan
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link 
                                to="/" 
                                className={`text-black hover:text-gray-600 transition-colors ${
                                    isActive('/') ? 'border-b-2 border-black' : ''
                                }`}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/about" 
                                className={`text-black hover:text-gray-600 transition-colors ${
                                    isActive('/about') ? 'border-b-2 border-black' : ''
                                }`}
                            >
                                About
                            </Link>
                            <Link 
                                to="/work" 
                                className={`text-black hover:text-gray-600 transition-colors ${
                                    isActive('/work') ? 'border-b-2 border-black' : ''
                                }`}
                            >
                                Work
                            </Link>
                            <Link 
                                to="/art" 
                                className={`text-black hover:text-gray-600 transition-colors ${
                                    isActive('/art') ? 'border-b-2 border-black' : ''
                                }`}
                            >
                                Art
                            </Link>
                            <Link 
                                to="/contact" 
                                className={`text-black hover:text-gray-600 transition-colors ${
                                    isActive('/contact') ? 'border-b-2 border-black' : ''
                                }`}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden text-black p-2 -mr-2 hover:bg-black/10 rounded-lg transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} isRouter={true} />
        </>
    );
};