"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Xmark from "@gravity-ui/icons/Xmark";
import { getVideoEmbedInfo } from "@/utils/video";
import { videoModalBackdrop, videoModalContent } from "@/utils/animations";

const LOADING_FALLBACK_MS = 2500;

const IntroVideoPlayer = memo(function IntroVideoPlayer({
  type,
  embedUrl,
  title,
  onReady,
  videoRef,
}) {
  const readyRef = useRef(false);

  const handleReady = useCallback(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    onReady();
  }, [onReady]);

  useEffect(() => {
    readyRef.current = false;
  }, [embedUrl]);

  if ((type === "youtube" || type === "vimeo") && embedUrl) {
    return (
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        className="intro-video-iframe"
        onLoad={handleReady}
      />
    );
  }

  if (type === "file" && embedUrl) {
    return (
      <video
        ref={videoRef}
        src={embedUrl}
        controls
        autoPlay
        muted
        playsInline
        preload="auto"
        className="intro-video-iframe"
        onLoadedData={handleReady}
      />
    );
  }

  return (
    <div className="intro-video-skeleton">
      <p className="text-sm text-text-secondary">Video unavailable.</p>
    </div>
  );
});

function IntroVideoModal({ isOpen, onClose, videoUrl, title = "Intro Video" }) {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const fallbackTimerRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const wasOpenRef = useRef(false);

  onCloseRef.current = onClose;

  const video = useMemo(() => getVideoEmbedInfo(videoUrl), [videoUrl]);
  const hasPlayer = Boolean(
    video.embedUrl && (video.type === "youtube" || video.type === "vimeo" || video.type === "file")
  );

  const markVideoReady = useCallback(() => {
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const justOpened = isOpen && !wasOpenRef.current;

    if (justOpened) {
      setLoading(true);
      fallbackTimerRef.current = window.setTimeout(() => {
        setLoading(false);
        fallbackTimerRef.current = null;
      }, LOADING_FALLBACK_MS);
    }

    if (!isOpen && wasOpenRef.current) {
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setLoading(true);
    }

    wasOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close video modal backdrop"
            variants={videoModalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="intro-video-backdrop absolute inset-0"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            variants={videoModalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="intro-video-modal relative z-10 w-[95%] max-w-[1000px]"
            data-lenis-prevent
          >
            <motion.button
              type="button"
              onClick={onClose}
              aria-label="Close intro video"
              className="intro-video-close"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Xmark width={18} height={18} />
            </motion.button>

            <div className="intro-video-player">
              <IntroVideoPlayer
                type={video.type}
                embedUrl={video.embedUrl}
                title={title}
                onReady={markVideoReady}
                videoRef={videoRef}
              />

              {loading && hasPlayer && (
                <div className="intro-video-skeleton" aria-label="Loading video" aria-busy="true">
                  <div className="skeleton absolute inset-0 rounded-2xl" />
                  <motion.span
                    aria-hidden="true"
                    className="relative z-10 h-14 w-14 rounded-full border border-[#BFA181]/30 bg-[#BFA181]/10"
                    animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default memo(IntroVideoModal);
