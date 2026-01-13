import { Home } from '../components/sections/Home';
import { Projects } from '../components/sections/Projects';

export const HomePage = () => {
    return (
        <div className="pt-16"> {/* Account for fixed navigation */}
            <Home />
            <Projects />
        </div>
    );
};