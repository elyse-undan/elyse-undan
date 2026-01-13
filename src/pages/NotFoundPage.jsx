import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{backgroundColor: '#F9F1E6'}}>
            <h1 className="text-6xl font-bold mb-4" style={{fontFamily: 'Kabel, sans-serif', color: 'var(--text-hero)'}}>
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-6" style={{fontFamily: 'Kabel, sans-serif', color: 'var(--text-hero)'}}>
                Page Not Found
            </h2>
            <p className="text-center mb-8 max-w-md" style={{color: 'var(--text-body)'}}>
                The page you're looking for doesn't exist. Let's get you back to where you need to be.
            </p>
            <Link 
                to="/"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-black hover:bg-gray-800"
                style={{
                    fontFamily: 'Kabel, sans-serif',
                    color: '#F9F1E6'
                }}
            >
                Go Home
            </Link>
        </div>
    );
};