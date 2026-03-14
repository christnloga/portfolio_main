import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type InfiniteCarouselProps = {
  items: React.ReactNode[];
  speed?: number; // desktop duration
};

export default function InfiniteCarousel({
  items,
  speed = 25,
}: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [width, setWidth] = useState(0);

  // Measure content width dynamically
  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setWidth(contentRef.current!.scrollWidth);
    });

    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden max-w-[100vw] w-full"
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-0 z-10
        bg-linear-to-r from-white via-transparent to-white
        dark:from-zinc-800 dark:to-zinc-800"
      />

      <motion.div
        className="flex will-change-transform touch-pan-x"
        animate={shouldReduceMotion ? undefined : { x: [0, -width] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div ref={contentRef} className="flex">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                px-3 sm:px-4 md:px-6
                shrink-0
                whitespace-nowrap
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* Duplicate */}
        <div className="flex">
          {items.map((item, i) => (
            <div
              key={`dup-${i}`}
              className="
                px-3 sm:px-4 md:px-6
                shrink-0
                whitespace-nowrap
              "
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
