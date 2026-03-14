import useEmblaCarousel from "embla-carousel-react";

import { useState, useEffect, useCallback } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import TestimonialCard from "./TestimonialCard";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  background: string;
  description: string;
  color: string;
}

const Testimanial = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "adna.cards website",
      category: "UX,/UI Design, Dev",
      image: "/adna-cards-hero.png",
      background: "/adna-cards-hero.png",
      description: "A complete overhaul of a financial analytics platform.",
      color: "from-indigo-500/20",
    },
    {
      id: 2,
      title: "MS Expert website",
      category: "UX/UI Design, Dev",
      image: "/ms-expert-hero.png",
      background: "/ms-expert-hero.png",
      description: "Native mobile shopping experience for a fashion brand.",
      color: "from-blue-500/20",
    },
    {
      id: 3,
      title: "SaaS Marketing Site",
      category: "Web Development",
      image: "/floor.png",
      background: "/floor.png",
      description: "High-conversion landing pages for a B2B SaaS.",
      color: "from-emerald-600/20",
    },
    {
      id: 4,
      title: "Healthcare Portal",
      category: "Product Design",
      image: "/my-photo-2.jpg",
      background: "/my-photo-2.jpg",
      description: "Patient management system with focus on accessibility.",
      color: "from-rose-600/20",
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Full Stack",
      image: "/property-listing-hero.png",
      background: "/property-listing-hero.png",
      description: "Property listing and management system.",
      color: "from-orange-600/20",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    align: "start",
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
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
    
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

  return (
    <div className="relative lg:flex flex-col items-center w-full py-28 h-full overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-20">
        <AnimatePresence>
          <motion.img
            key={selectedIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={caseStudies[selectedIndex % caseStudies.length].background}
            alt={caseStudies[selectedIndex % caseStudies.length].title}
            className="w-full h-full object-cover grayscale blur-sm"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-zinc-900/80"></div>
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

      <div className="lg:max-w-6xl my-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end lg:mb-12 px-4 lg:px-0 w-full mx-auto lg:mx-0">
          <div>
            <h3 className="text-3xl font-bold text-white lg:text-5xl">
              Recent Works
            </h3>
            <h4 className="mt-16 text-slate-100 font-bold max-w-xl text-2xl">
              {caseStudies[selectedIndex % caseStudies.length].title}
            </h4>
            <p className="mt-2 text-slate-400 max-w-xl text-lg">
              {caseStudies[selectedIndex % caseStudies.length].description}
            </p>
          </div>
          {/* Navigation Buttons desktop */}
          <div className="lg:flex gap-2 mt-6 lg:mt-0 hidden">
            <button
              onClick={scrollPrev}
              className="rounded-full p-3 bg-white/5 cursor-pointer outline-0 ring-0 border border-white/10 text-white hover:bg-white/10 hover:border-sky-300 transition-colors duration-200"
              aria-label="Previous"
            >
              <HiArrowSmallLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="rounded-full p-3 bg-white/5 cursor-pointer outline-0 ring-0 border border-white/10 text-white hover:bg-white/10 hover:border-sky-300 transition-colors duration-200"
              aria-label="Next"
            >
              <HiArrowSmallRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative w-full pl-4 lg:pl-0 mt-8">
          <div className="overflow-visible" ref={emblaMainRef}>
            <div className="flex gap-0 select-none touch-pan-x cursor-grab py-4">
              {caseStudies.map((study, index) => (
                <div
                  key={`${study.id}-${index}`}
                  className="flex-[0_0_320px] lg:flex-[0_0_380px] flex justify-center"
                >
                    <TestimonialCard
                    title={study.title}
                    image={study.image}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons mobile */}
        <div className="lg:hidden flex gap-2 mt-6 px-6">
          <button
            onClick={scrollPrev}
            className="rounded-full p-3 bg-white/5 cursor-pointer outline-0 ring-0 border border-white/10 text-white hover:bg-white/10 hover:border-sky-300 transition-colors duration-200"
            aria-label="Previous"
          >
            <HiArrowSmallLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="rounded-full p-3 bg-white/5 cursor-pointer outline-0 ring-0 border border-white/10 text-white hover:bg-white/10 hover:border-sky-300 transition-colors duration-200"
            aria-label="Next"
          >
            <HiArrowSmallRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimanial;
