import { Variants } from "framer-motion";

export const variant: Variants = {
  initial: { height: 0, transformOrigin: "top" },
  animate: {
    height: 194, //메뉴늘어나면 높이 늘려야함..
    transition: {
      ease: "linear",
      duration: 0.3,
    },
  },
  exit: {
    height: 0,
    transition: {
      ease: "linear",
      duration: 0.3,
    },
  },
};

export const contentsVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: 0.2,
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      delay: 0.2,
      duration: 0.1,
    },
  },
};

export const Slide = {
  variant,
  contentsVariant,
};
