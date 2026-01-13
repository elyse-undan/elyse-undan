import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ARGalleryPage = () => {
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

            {/* Green Header Section */}
            <div className="bg-green-300 px-4 py-16 lg:py-24" style={{backgroundColor: '#81C784'}}>
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
                        AR Gallery App
                    </h1>
                    <p className="text-xl lg:text-2xl text-black/80 mb-6" style={{ fontFamily: 'Jeju Myeongjo' }}>
                        Site-specific AR art installation for Le Yeux Du Monde gallery
                    </p>
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
                                </div>
                            </div>

                            {/* Duration Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    DURATION
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Fall 2024
                                </p>
                            </div>

                            {/* What I Did Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    WHAT I DID
                                </h4>
                                <p className="text-gray-800 leading-relaxed" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Designed a site-specific AR app as a playable art installation. Explored Unity and 3 SDKs to craft an AR user experience with 5 sculpted 3D models.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-black" style={{ fontFamily: 'Outfit' }}>
                                    SKILLS
                                </h4>
                                <p className="text-gray-800" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                    Unity / AR Development / 3D Modeling / Mobile App Development
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