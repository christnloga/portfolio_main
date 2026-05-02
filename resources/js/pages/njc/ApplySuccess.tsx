import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { home } from '@/routes';
import { landing } from '@/routes/page/njc';

const ApplySuccess = () => {
    const { props } = usePage();
    const locale = (props as any).locale || 'fr';
    return (
        <div className="min-h-screen px-4 font-sans sm:px-6 lg:px-8 flex items-center justify-center">
            <Head title="Application Received - NJC 2026" />

            <div className="mx-auto max-w-2xl text-center pt-20 pb-16">
                <div className="mb-8 flex justify-center animate-fade-in-up">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00A6F4]/20">
                        <svg
                            className="h-10 w-10 text-[#00A6F4]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 animate-fade-in-up animate-delay-100">
                    Application Received
                </h1>
                
                <p className="text-lg text-slate-400 mb-8 animate-fade-in-up animate-delay-200">
                    Thank you for applying to the Now Just Create (NJC) 2026 Batch. Your submission has been securely documented. Our review board will evaluate your craft and mindset, and we will be in touch via email.
                </p>

                <div className="flex justify-center flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                    <Link
                        href={home.url()}
                        className="inline-flex items-center justify-center rounded-lg bg-[#243B4A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#314f63]"
                    >
                        Return Home
                    </Link>
                    <Link
                        href={landing.url()}
                        className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                    >
                        Back to NJC Setup
                    </Link>
                </div>
            </div>
        </div>
    );
};

ApplySuccess.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default ApplySuccess;
