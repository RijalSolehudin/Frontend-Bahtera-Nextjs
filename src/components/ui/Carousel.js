'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({
    children,
    options = { loop: true, align: 'start' },
    autoplay = false,
    autoplayDelay = 4000
}) {
    const plugins = autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : [];
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api) => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="relative group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y -ml-4">
                    {React.Children.map(children, (child) => (
                        <div className="flex-[0_0_80%] min-w-0 pl-4 sm:flex-[0_0_45%] md:flex-[0_0_25%]">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-100 transition-all duration-300
          ${!canScrollPrev ? 'opacity-0 invisible' : 'opacity-0 group-hover:opacity-100 visible'}
          hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary`}
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-100 transition-all duration-300
          ${!canScrollNext ? 'opacity-0 invisible' : 'opacity-0 group-hover:opacity-100 visible'}
          hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary`}
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
        </div>
    );
}
