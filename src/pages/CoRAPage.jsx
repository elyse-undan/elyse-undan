import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CoRAPage = () => {
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
                        <button onClick={() => scrollToSection('presentation')} className="block text-gray-700 hover:text-black transition-colors text-left" style={{ fontFamily: 'Jeju Myeongjo' }}>
                            Presentation
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-white">

            {/* Orange Header Section */}
            <div className="bg-orange-300 px-4 py-16 lg:py-24" style={{backgroundColor: '#FFC86D'}}>
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
                        CoRA Extension
                    </h1>
                    <p className="text-xl lg:text-2xl text-black/80 mb-6" style={{ fontFamily: 'Jeju Myeongjo' }}>
                        AI-powered course and professor insights for UVA students
                    </p>
                    <a 
                        href="https://github.com/njdelapaz/cora-extension" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        style={{ fontFamily: 'Outfit' }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-6xl px-4 py-16">
                {/* Overview Section - First */}
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
                                        Olivia Sun
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Kayla Kim
                                    </p><p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Nathan Dela-Paz
                                    </p>
                                </div>
                            </div>

                            {/* Duration Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    DURATION
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Nov 2025 (12 hour Hackathon)
                                </p>
                            </div>

                            {/* What I Did Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    WHAT I DID
                                </h4>
                                <p className="text-gray-800 leading-relaxed" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Developed a browser extension that provides AI summaries on each course and associated professor in the UVA SIS enrollment site. Integrated difficulty ratings and referenced links for transparency.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    SKILLS
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Browser Extension Development / AI Integration / Web Scraping / JavaScript / User Experience Design
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Presentation Section - Second */}
                <section id="presentation" className="py-8 mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-black text-center" style={{ fontFamily: 'Outfit' }}>
                        Project Presentation
                    </h3>
                    <div className="w-full flex justify-center">
                        <div className="relative w-full max-w-5xl bg-gray-100 rounded-xl overflow-hidden shadow-2xl" style={{paddingBottom: '56.25%'}}>
                            <iframe 
                                src="https://www.canva.com/design/DAG4ywAOLO8/lfHQYO0yrjUqM5p1Y593hQ/view?embed"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen={true}
                                title="CoRA Extension Presentation"
                            />
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </>
    );
};