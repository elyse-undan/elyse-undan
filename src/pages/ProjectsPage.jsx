import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home page and scroll to work section
        navigate('/', { replace: true });
        setTimeout(() => {
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, [navigate]);

    return null; // Don't render anything since we're redirecting
};