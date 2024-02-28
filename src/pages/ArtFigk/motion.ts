import { Variants } from 'framer-motion'

const Container: Variants = {
    start: {},
    end: {
        transition: { duration: 0.1, delayChildren: 0.1, staggerChildren: 0.1 },
    },
}
const list: Variants = {
    start: {
        opacity: 1,
    },
    end: {
        opacity: 1,
        transition: {
            ease: 'easeIn',
            duration: 0.3,
        },
    },
}

export const MotionVariants = {
    Container,
    list,
}
