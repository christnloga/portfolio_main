import type { PropsWithChildren } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollTop from '@/components/ScrollTop';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-screen flex-col bg-[#081118] font-sans text-white">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
            <ScrollTop />
        </div>
    );
};

export default MainLayout;
