export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const floatingAnimation = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatingAnimationSlow = {
  animate: {
    y: [-12, 12, -12],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatingAnimationFast = {
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -5,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const hoverScale = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const hoverGlow = {
  rest: { boxShadow: "0 0 0 rgba(191, 161, 129, 0)" },
  hover: {
    boxShadow: "0 0 16px rgba(191, 161, 129, 0.12)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const videoModalBackdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const videoModalContent = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, delay: 0.1 },
  },
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.25 },
  },
};

export const drawerSlide = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const pageEntrance = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const navbarShrink = {
  top: {
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
    backgroundColor: "rgba(7, 11, 20, 0.6)",
  },
  scrolled: {
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    backgroundColor: "rgba(7, 11, 20, 0.85)",
  },
};

export const progressBar = (value) => ({
  hidden: { width: 0 },
  visible: {
    width: `${value}%`,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
});

export const typewriterCursor = {
  animate: {
    opacity: [1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const scrollRevealViewport = {
  once: true,
  amount: 0.2,
  margin: "-50px",
};

export const EASE = {
  smooth: [0.22, 1, 0.36, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  sharp: [0.4, 0, 0.2, 1],
};
