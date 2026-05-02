import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug'; // Automatically adds IDs to markdown headings
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';

// Helper to convert "Technical Challenges" into "technical-challenges"
const generateSlug = (text: string) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

export const HeadingBlock = ({
    data,
}: {
    data: { text: string; level: number };
}) => {
    const Tag = `h${data.level}` as React.ElementType;
    // const Tag = `h${data.level}` as keyof JSX.IntrinsicElements;
    const slug = generateSlug(data.text);

    return (
        <Tag
            id={slug}
            className={`mt-8 mb-4 ${data.level == 2 && 'text-3xl'} ${data.level == 3 && 'text-2xl'} ${data.level == 4 && 'text-xl'} scroll-mt-24 font-bold text-slate-900 dark:text-slate-100`}
        >
            {data.text}
        </Tag>
    );
};

export const TextBlock = ({ data }: { data: { content: string } }) => {
    return (
        <div className="case-study-text-wrapper">
            <style>{`
                .case-study-text-wrapper p {
                    margin-bottom: 1.5rem; /* Equivalent to mb-6 */
                    line-height: 1.75;
                }
                .case-study-text-wrapper ul,
                .case-study-text-wrapper ol {
                    margin-bottom: 1.5rem;
                }
                .case-study-text-wrapper li {
                    margin-bottom: 0.5rem;
                }
            `}</style>

            <div className="max-w-none text-slate-700 dark:text-slate-300">
                <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                    {data.content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export const ImageBlock = ({
    data,
}: {
    data: { url: string; caption?: string };
}) => {
    return (
        <figure className="my-8">
            <img
                src={data.url}
                alt={data.caption || 'Case study visual'}
                className="w-full rounded-xl object-cover shadow-lg"
                loading="lazy"
            />
            {data.caption && (
                <figcaption className="mt-3 text-center text-sm text-gray-500">
                    {data.caption}
                </figcaption>
            )}
        </figure>
    );
};

export const CodeBlock = ({ data }: { data: { code: string; language: string } }) => {
    return (
        <div className="my-8 rounded-lg overflow-hidden shadow-xl text-sm">
            <div className="bg-gray-800 px-4 py-2 text-gray-400 text-xs flex justify-between uppercase tracking-widest">
                <span>{data.language || 'typescript'}</span>
                <button 
                    onClick={() => navigator.clipboard.writeText(data.code)}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    Copy
                </button>
            </div>
            <SyntaxHighlighter 
                language={data.language || 'typescript'} 
                style={dracula}
                customStyle={{ margin: 0, padding: '1.5rem', background: '#1e1e24' }}
            >
                {data.code}
            </SyntaxHighlighter>
        </div>
    );
};

export const GalleryBlock = ({ data }: { data: { images: { url: string; caption?: string }[] } }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        align: 'start',
        containScroll: 'trimSnaps'
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);


    if (!data.images || data.images.length === 0) return null;

    return (
        <div className="my-12 relative group/gallery">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex -ml-4">
                    {data.images.map((img, idx) => (
                        <div key={idx} className="flex-[0_0_auto] min-w-0 pl-4 relative group">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="cursor-pointer relative h-64 md:h-72 w-auto overflow-hidden bg-muted rounded-lg border border-gray-200 dark:border-gray-800">
                                        <img 
                                            src={img.url} 
                                            alt={img.caption || "Project visual"} 
                                            className="w-auto h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Maximize2 className="text-white w-10 h-10 drop-shadow-md" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-[95vw] md:max-w-5xl max-h-[95vh] p-0 overflow-hidden border-none bg-transparent shadow-none">
                                    <DialogTitle className="sr-only">{img.caption || `Image ${idx + 1}`}</DialogTitle>
                                    <div className="relative flex flex-col items-center justify-center w-full h-full">
                                        <img 
                                            src={img.url} 
                                            alt={img.caption || "Project visual fullscreen"} 
                                            className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl" 
                                        />
                                        {img.caption && (
                                            <p className="text-white text-sm mt-4 text-center bg-black/60 px-4 py-2 rounded-full backdrop-blur-md">
                                                {img.caption}
                                            </p>
                                        )}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
            
            {data.images.length > 1 && (
                <>
                    <button 
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 text-gray-800 dark:text-white p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black transition-colors opacity-0 group-hover/gallery:opacity-100 focus:opacity-100"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 text-gray-800 dark:text-white p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black transition-colors opacity-0 group-hover/gallery:opacity-100 focus:opacity-100"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Position Dots */}
                    <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                        {scrollSnaps.map((_, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => scrollTo(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    idx === selectedIndex 
                                        ? 'w-4 bg-primary' 
                                        : 'w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                                }`} 
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
