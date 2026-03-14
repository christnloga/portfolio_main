import type { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';
const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen bg-zinc-950 font-sans text-white antialiased">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
