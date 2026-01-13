import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Desktop Navigation */}
            <nav className={`w-full backdrop-blur-sm z-50`} style={{backgroundColor: '#F9F1E6'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold" style={{fontFamily: 'Outfit, sans-serif', color: 'var(--text-hero)'}}>
                            eu
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link 
                                to="/" 
                                className={`transition-colors font-medium ${
                                    isActive('/') ? 'border-b-2' : ''
                                }`}
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    color: 'var(--text-nav)',
                                    borderColor: isActive('/') ? 'var(--text-nav)' : 'transparent'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--text-nav-hover)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-nav)'}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/about" 
                                className={`transition-colors font-medium ${
                                    isActive('/about') ? 'border-b-2' : ''
                                }`}
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    color: 'var(--text-nav)',
                                    borderColor: isActive('/about') ? 'var(--text-nav)' : 'transparent'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--text-nav-hover)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-nav)'}
                            >
                                About
                            </Link>
                            <button 
                                className="transition-colors font-medium"
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    color: 'var(--text-nav)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--text-nav-hover)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-nav)'}
                                onClick={() => {
                                    if (location.pathname === '/') {
                                        // Already on home page, jump to work section
                                        document.getElementById('work')?.scrollIntoView({ behavior: 'auto' });
                                    } else {
                                        // Navigate to home page, then jump to work section
                                        navigate('/');
                                        setTimeout(() => {
                                            document.getElementById('work')?.scrollIntoView({ behavior: 'auto' });
                                        }, 100);
                                    }
                                }}
                            >
                                Work
                            </button>
                            <Link 
                                to="/art" 
                                className={`transition-colors font-medium ${
                                    isActive('/art') ? 'border-b-2' : ''
                                }`}
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    color: 'var(--text-nav)',
                                    borderColor: isActive('/art') ? 'var(--text-nav)' : 'transparent'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--text-nav-hover)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-nav)'}
                            >
                                Art
                            </Link>
                            <Link 
                                to="/contact" 
                                className={`transition-colors font-medium ${
                                    isActive('/contact') ? 'border-b-2' : ''
                                }`}
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    color: 'var(--text-nav)',
                                    borderColor: isActive('/contact') ? 'var(--text-nav)' : 'transparent'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--text-nav-hover)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-nav)'}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 -mr-2 hover:bg-black/10 rounded-lg transition-colors"
                            style={{color: 'var(--text-nav)'}}
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