import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#F9EFBB] from-25% to-white">
            <h1 className="text-6xl font-bold text-black mb-4" style={{fontFamily: 'Blonden, sans-serif'}}>
                404
            </h1>
            <h2 className="text-2xl font-semibold text-black mb-6">
                Page Not Found
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
                The page you're looking for doesn't exist. Let's get you back to where you need to be.
            </p>
            <Link 
                to="/"
                className="bg-black text-white px-6 py-3 rounded font-medium transition-colors duration-200 hover:bg-gray-800"
            >
                Go Home
            </Link>
        </div>
    );
};