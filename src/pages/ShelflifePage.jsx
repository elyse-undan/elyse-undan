import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShelflifePage = () => {
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
                            Project Image
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-white">

            {/* Pink Header Section */}
            <div className="bg-pink-300 px-4 py-16 lg:py-24" style={{backgroundColor: '#FF8A80'}}>
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
                        Shelflife
                    </h1>
                    <p className="text-xl lg:text-2xl text-black/80 mb-6" style={{ fontFamily: 'Jeju Myeongjo' }}>
                        Intelligent inventory management for reducing food waste
                    </p>
                    <a 
                        href="https://www.figma.com/design/izCI4xl0zeMHA9yrhjwPRV/ShelfLife?node-id=515-1931&t=C7OYp3fGnD1pePOA-1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        style={{ fontFamily: 'Outfit' }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                        </svg>
                        View Figma Design
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
                                        Mahati Vedula
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Miky Asmare
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Saraa Kumar
                                    </p>
                                    <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Nick Castrillo
                                    </p>
                                </div>
                            </div>

                            {/* Duration Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    DURATION
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    August 2025-December 2025
                                </p>
                            </div>

                            {/* What I Did Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    WHAT I DID
                                </h4>
                                <p className="text-gray-800 leading-relaxed" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Designed and developed an intelligent inventory management system with automated alerts, barcode scanning, and analytics dashboard for reducing food waste.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    SKILLS
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Inventory Management / Barcode Scanning / Analytics Dashboard / Mobile App Development
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Video Section */}
                <section id="presentation" className="py-8 mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-black text-center" style={{ fontFamily: 'Outfit' }}>
                        Project Demo
                    </h3>
                    <div className="w-full flex justify-center">
                        <div className="relative w-full max-w-4xl bg-pink-100 rounded-xl overflow-hidden shadow-2xl" style={{backgroundColor: '#FFE0DD', paddingBottom: '56.25%'}}>
                            <iframe 
                                src="https://www.youtube.com/embed/ItDeAu0VdJo"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen={true}
                                title="Shelflife Project Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            />
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </>
    );
};