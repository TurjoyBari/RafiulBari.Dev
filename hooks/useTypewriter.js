"use client";

import { useState, useEffect } from "react";

export function useTypewriter(
  words = [],
  { typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000 } = {}
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}
