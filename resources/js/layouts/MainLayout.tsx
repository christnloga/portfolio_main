import type { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';
const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen bg-[#081118] font-sans text-white">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
