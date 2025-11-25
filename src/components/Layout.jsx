import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F9EFBB] from-25% to-white text-black">
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};