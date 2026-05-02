import dayjs from 'dayjs';
import React from 'react';
import { useEffect } from 'react';
import { PiCalendarDotFill } from 'react-icons/pi';
import RevealElement from '@/components/RevealElement';
import { useGlobal } from '@/contexts/GlobalContext';
import { BlockRenderer } from '../components/blocks/BlockRenderer';
import { TableOfContents } from '../components/TableOfContents';
import MainLayout from '../layouts/MainLayout';
import type { CaseStudy } from '../types';

interface CaseStudyViewProps {
    caseStudy: CaseStudy;
}

export const CaseStudyView = ({ caseStudy }: CaseStudyViewProps) => {
    const { setNavbarLight } = useGlobal();

    useEffect(() => {
        setNavbarLight(true);
    }, [setNavbarLight]);

    if (!caseStudy) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Case study not found.
            </div>
        );
    }

    return (
        <article className="px-1 pt-1 pb-16">
            {/* Header Section */}
            <header className="overflow-hidden rounded-b-md px-1 pt-[84px]">
                <div className="relative flex h-[580px] items-center overflow-hidden rounded-xl bg-[#EAF3FA] lg:h-[700px]">
                    {/* Cover Image */}
                    {caseStudy.cover_image_url && (
                        <img
                            className="absolute my-auto h-full w-full object-cover"
                            src={caseStudy.cover_image_url}
                            alt={`${caseStudy.title} Cover`}
                        />
                    )}
                    <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center bg-slate-800/90 px-2 py-2 duration-300"></div>
                    <div className="relative z-20 mx-auto h-full space-y-12 lg:w-6xl lg:space-y-28">
                        <div className="flex h-full flex-col">
                            <div className="my-auto">
                                <div className="my-auto mt-16 space-y-8 px-4 lg:mt-0 lg:w-4xl lg:px-0">
                                    <RevealElement>
                                        {/* Category */}
                                        {/* <div className="mb-4 flex">
                                            <span className="flex rounded-md bg-white/10 px-2 py-1">
                                                <p className="font-semibold text-white">
                                                    {caseStudy.category}
                                                </p>
                                            </span>
                                        </div> */}
                                        {/* Title */}
                                        <h1 className="text-4xl font-bold text-white lg:text-5xl">
                                            {caseStudy.title}
                                        </h1>
                                        {/* Exerp */}
                                        <p className="mt-4 text-white/80">
                                            {caseStudy.short_description}
                                        </p>
                                    </RevealElement>

                                    <RevealElement>
                                        <div className="mt-8 grid-cols-2 gap-8 border-t border-white/10 pt-8 lg:grid">
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <p className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                                        Client
                                                    </p>
                                                    <p className="text-lg font-medium text-white">
                                                        {caseStudy.client_name}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                                        Roles
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {caseStudy.roles.map(
                                                            (role, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="text-sm text-white/80"
                                                                >
                                                                    {role}
                                                                    {i <
                                                                    caseStudy
                                                                        .roles
                                                                        .length -
                                                                        1
                                                                        ? ' • '
                                                                        : ''}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <p className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                                        Duration
                                                    </p>
                                                    <div className="flex items-center gap-2 text-white">
                                                        <PiCalendarDotFill
                                                            size={20}
                                                            className="text-white/60"
                                                        />
                                                        <p className="text-lg font-medium">
                                                            {dayjs(
                                                                caseStudy.start_date,
                                                            ).format(
                                                                'MMM YYYY',
                                                            )}
                                                            {' — '}
                                                            {caseStudy.end_date
                                                                ? dayjs(
                                                                      caseStudy.end_date,
                                                                  ).format(
                                                                      'MMM YYYY',
                                                                  )
                                                                : 'Present'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                                        Technologies
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {caseStudy.tech_stack.map(
                                                            (tech, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="rounded-lg border border-white/5 bg-white/10 px-2 py-0.5 text-xs font-medium text-white"
                                                                >
                                                                    {tech}
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Dynamic Content Blocks */}
            <section className="content-blocks-container mx-auto px-4 pt-16 lg:max-w-6xl">
                {/* Main Layout Grid */}
                <div className="relative flex flex-col gap-12 lg:flex-row lg:items-stretch">
                    {/* Left Side: The Case Study Content */}
                    <div className="case-study-content w-full lg:w-3/5">
                        <BlockRenderer blocks={caseStudy.content_blocks} />
                    </div>

                    {/* Right Side: The Table of Contents Sidebar */}
                    <aside className="relative ml-auto w-full lg:w-1/5">
                        {/* We pass 'caseStudy' so the hook runs after data is loaded */}
                        <TableOfContents contentDependency={caseStudy} />
                    </aside>
                </div>
            </section>
        </article>
    );
};

CaseStudyView.layout = (page: React.ReactNode) => (
    <MainLayout children={page} />
);
export default CaseStudyView;
