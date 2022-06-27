import { motion } from 'framer-motion';

import Image from './Image';

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 5,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

function Loader({ setLoading }) {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        {/* <ImageBlock variants={item} id="image-3" /> */}
        {/* <ImageBlock variants={item} id="image-4" /> */}
        {/* <ImageBlock variants={item} id="image-5" /> */}
      </motion.div>
    </motion.div>
  );
}

export function ImageBlock({
  posX, posY, variants, id,
}) {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={`${process.env.PUBLIC_URL}/images/${id}.webp`}
        fallback={`${process.env.PUBLIC_URL}/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
}
export default Loader;
