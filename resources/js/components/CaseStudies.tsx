import { router } from '@inertiajs/react';
import { useQuery } from '@tanstack/react-query';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';

import { index as getCaseStudies } from '@/actions/App/Http/Controllers/Api/CaseStudyController';
import { show as showCaseStudy } from '@/actions/App/Http/Controllers/CaseStudyController';
import type { CaseStudy as DbCaseStudy } from '@/types';
import CaseStudyCard from './CaseStudyCard';

interface LocalCaseStudy {
    is_published: boolean;
    id: string | number;
    title: string;
    category: string;
    image: string;
    background: string;
    description: string;
    color: string;
}

const CaseStudies = () => {
    const {
        data: caseStudies = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['case-studies'],
        queryFn: async () => {
            const route = getCaseStudies();
            const response = await fetch(route.url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            // Map DB data to component expected format if necessary
            return data.map((study: DbCaseStudy) => ({
                id: study.slug, // using slug as unique key
                title: study.title,
                category: study.category || 'Design & Dev',
                image: study.cover_image_url || '/placeholder.png',
                background: study.cover_image_url || '/placeholder.png',
                description: study.short_description,
                color: 'from-sky-500/20', // Default color for now
            })) as LocalCaseStudy[];
        },
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
        align: 'start',
        containScroll: false,
        dragFree: true,
        loop: false,
    });

    const onSelect = useCallback(() => {
        if (!emblaMainApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi]);

    useEffect(() => {
        if (!emblaMainApi) return;

        // Avoid calling setState synchronously during render by using setTimeout
        // or relying purely on Embla events.
        emblaMainApi.on('select', onSelect).on('reInit', onSelect);

        // Initial call after component mounts
        setTimeout(() => {
            onSelect();
        }, 0);
    }, [emblaMainApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaMainApi) emblaMainApi.scrollTo(index);
        },
        [emblaMainApi],
    );

    const scrollPrev = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollPrev();
    }, [emblaMainApi]);

    const scrollNext = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollNext();
    }, [emblaMainApi]);

    if (isLoading) {
        return (
            <div className="relative flex h-full w-full items-center justify-center py-28 lg:flex">
                <div className="animate-pulse text-sky-500">
                    Loading Case Studies...
                </div>
            </div>
        );
    }

    if (isError || !caseStudies.length) {
        return null; // Or show a fallback
    }

    return (
        <div className="relative h-full w-full flex-col items-center overflow-hidden py-28 lg:flex">
            {/* Background Image */}
            {/* <div className="absolute inset-0 -z-20">
                <AnimatePresence>
                    <motion.img
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={
                            caseStudies[selectedIndex % caseStudies.length]
                                .background
                        }
                        alt={
                            caseStudies[selectedIndex % caseStudies.length]
                                .title
                        }
                        className="h-full w-full object-cover blur-sm grayscale"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[#0C1821]"></div>
            </div> */}
            {/* Dynamic Background Overlay */}
            {/* <div className="absolute inset-0 -z-10 transition-colors duration-700 ease-in-out">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 bg-linear-to-b ${caseStudies[selectedIndex % caseStudies.length].color} to-zinc-900 opacity-60`}
                    />
                </AnimatePresence>
            </div> */}
            {/* <div className="absolute inset-0 -z-10 bg-[#0C1821]/10"></div> */}

            <div className="my-auto lg:max-w-6xl">
                <div className="flex w-full items-end justify-between px-4 lg:mx-0 lg:mb-12 lg:px-0">
                    <div className="space-y-10 lg:space-y-20">
                        <div className="space-y-4">
                            <div className="flex">
                                <span className="flex rounded-md border border-slate-500/20 bg-[#0A1D26] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                    Portfolio
                                </span>
                            </div>
                            <h2 className="text-3xl font-medium text-white lg:text-5xl/snug">
                                Latest Works
                            </h2>
                        </div>
                        {/* <div className="border-l-4 border-[#00A6F4] px-4">
                            <h4 className="max-w-xl text-lg font-bold text-[#00A6F4]">
                                {
                                    caseStudies[
                                        selectedIndex % caseStudies.length
                                    ].title
                                }
                            </h4>
                            <p className="mt-2 max-w-xl text-slate-400">
                                {
                                    caseStudies[
                                        selectedIndex % caseStudies.length
                                    ].description
                                }
                            </p>
                        </div> */}
                    </div>
                    {/* Navigation Buttons desktop */}
                    <div className="mt-6 flex gap-2 lg:mt-0">
                        <button
                            onClick={scrollPrev}
                            className="flex size-12 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-sky-400/20 bg-sky-500/10 p-3 text-[#00A6F4] ring-0 outline-0 transition-colors duration-200 hover:border-[#00A6F4] hover:bg-[#00A6F4]/10 active:opacity-80"
                            aria-label="Previous"
                        >
                            <HiArrowSmallLeft size={24} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="flex size-12 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-sky-400/20 bg-sky-500/10 p-3 text-[#00A6F4] ring-0 outline-0 transition-colors duration-200 hover:border-[#00A6F4] hover:bg-[#00A6F4]/10 active:opacity-80"
                            aria-label="Next"
                        >
                            <HiArrowSmallRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative mt-8 w-full pl-4 lg:pl-0">
                    <div className="overflow-visible" ref={emblaMainRef}>
                        <div className="flex cursor-grab touch-pan-x gap-0 py-4 select-none">
                            {caseStudies
                                .filter((i) => i.is_published != false)
                                .map((study: LocalCaseStudy, index: number) => (
                                    <div
                                        key={`${study.id}-${index}`}
                                        className="flex flex-[0_0_320px] justify-center lg:flex-[0_0_380px]"
                                    >
                                        <CaseStudyCard
                                            title={study.title}
                                            image={study.image}
                                            category={study.category}
                                            slug={study.id.toString()}
                                            selected={index === selectedIndex}
                                            onClick={() => {
                                                if (index === selectedIndex) {
                                                    router.get(
                                                        showCaseStudy({
                                                            caseStudy:
                                                                study.id.toString(),
                                                        }).url,
                                                    );
                                                } else {
                                                    scrollTo(index);
                                                }
                                            }}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons mobile */}
                {/* <div className="mt-6 flex gap-2 px-6 lg:hidden">
                    <button
                        onClick={scrollPrev}
                        className="cursor-pointer rounded-full border border-white/10 bg-[#00A6F4]/5 p-3 text-white ring-0 outline-0 transition-colors duration-200 hover:border-[#00A6F4] hover:bg-[#00A6F4]/10"
                        aria-label="Previous"
                    >
                        <HiArrowSmallLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="cursor-pointer rounded-full border border-white/10 bg-[#00A6F4]/5 p-3 text-white ring-0 outline-0 transition-colors duration-200 hover:border-[#00A6F4] hover:bg-[#00A6F4]/10"
                        aria-label="Next"
                    >
                        <HiArrowSmallRight size={24} />
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default CaseStudies;
