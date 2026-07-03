"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeft from "@gravity-ui/icons/ChevronLeft";
import ChevronRight from "@gravity-ui/icons/ChevronRight";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
};

export default function ProjectImageSlider({ images, projectName }) {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);

  const total = images.length;

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= total || index === currentIndex) return;
      const nextDirection = index > currentIndex ? 1 : -1;
      setSlide([index, nextDirection]);
    },
    [currentIndex, total]
  );

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % total);
  }, [currentIndex, goTo, total]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + total) % total);
  }, [currentIndex, goTo, total]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % total;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [currentIndex, images, total]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };

  const handleTouchMove = (e) => {
    touchDelta.current = touchStartX.current - e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDelta.current) > 50) {
      if (touchDelta.current > 0) goNext();
      else goPrev();
    }
  };

  if (!images?.length) return null;

  return (
    <div className="project-slider space-y-4 p-5 sm:p-6">
      <div
        className="project-slider-frame relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative aspect-[16/10] w-full bg-bg-secondary">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`${projectName} screenshot ${currentIndex + 1} of ${total}`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/50 via-transparent to-transparent"
          />

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            className="project-slider-nav project-slider-nav--prev"
          >
            <ChevronLeft width={20} height={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className="project-slider-nav project-slider-nav--next"
          >
            <ChevronRight width={20} height={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {currentIndex + 1} / {total}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to screenshot ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`project-slider-dot ${index === currentIndex ? "project-slider-dot--active" : ""}`}
          />
        ))}
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-1">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`View screenshot ${index + 1}`}
            className={`project-slider-thumb shrink-0 ${index === currentIndex ? "project-slider-thumb--active" : ""}`}
          >
            <Image
              src={src}
              alt=""
              width={120}
              height={72}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
