import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ClothingLibraryPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add smooth scrolling behavior
    useEffect(() => {
        // Enable smooth scrolling for the entire document
        document.documentElement.style.scrollBehavior = 'smooth';
        
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <>
            {/* Floating Sidebar */}
            <div className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-[60] transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-64'}`}>
                {/* Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-black/70 hover:bg-black/90 text-white p-3 rounded-l-lg transition-all duration-300"
                >
                    <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${sidebarOpen ? 'rotate-0' : 'rotate-180'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Sidebar Content */}
                <div className="bg-white/60 backdrop-blur-sm border-l border-gray-200 shadow-xl p-6 w-64 h-auto">
                    <h4 className="font-semibold mb-6 text-gray-800" style={{ fontFamily: 'Outfit' }}>
                        Project Sections
                    </h4>
                    <div className="space-y-4">
                        <button onClick={() => scrollToSection('overview')} className="block text-gray-700 hover:text-black transition-colors text-left" style={{ fontFamily: 'Jeju Myeongjo' }}>
                            Overview
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-white">

            {/* Blue Header Section */}
            <div className="bg-blue-300 px-4 py-16 lg:py-24" style={{backgroundColor: '#81D4FA'}}>
                <div className="container mx-auto max-w-6xl">
                    {/* Back Arrow */}
                    <Link to="/work" className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-black mb-8 hover:bg-black hover:text-white transition-colors group">
                        <svg 
                            className="w-6 h-6 text-black group-hover:text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                        Clothing Library
                    </h1>
                    <p className="text-xl lg:text-2xl text-black/80 mb-6" style={{ fontFamily: 'Jeju Myeongjo' }}>
                        Sustainable wardrobe management and outfit planning system
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="https://github.com/elyse-undan/clothing-library" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                            style={{ fontFamily: 'Outfit' }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View GitHub Repo
                        </a>
                        <a 
                            href="https://clothinglibrary-cc94fce6e5b5.herokuapp.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
                            style={{ fontFamily: 'Outfit' }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                            </svg>
                            Visit Live Site
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-6xl px-4 py-16">
                {/* Overview Section */}
                <section id="overview" className="py-8 mb-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Team Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    TEAM
                                </h4>
                                <div className="space-y-2">
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Elyse Undan
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Bhargav Garre Venkata
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Emma Ylagan
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Pranav Goteti
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Vikranth Nara
                                    </p>
                                </div>
                            </div>

                            {/* Duration Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    DURATION
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    September 2024-Present
                                </p>
                            </div>

                            {/* What I Did Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    WHAT I DID
                                </h4>
                                <p className="text-gray-800 leading-relaxed" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Designed and developed a comprehensive clothing management system to help users organize, track, and optimize their wardrobe with sustainable fashion practices.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    SKILLS
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Wardrobe Management / Outfit Planning / Sustainable Fashion Tracking / App Development
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </>
    );
};