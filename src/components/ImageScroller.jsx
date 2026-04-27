import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

const ImageScroller = ({ images = [] }) => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  //  scroll velocity
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // smooth it (IMPORTANT)
  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });

  // map to speed
  const speed = useTransform(smoothVelocity, [-1000, 0, 1000], [-150, 0, 150]);

  const baseSpeed = 90;

  useAnimationFrame((_, delta) => {
    if (paused) return;

    const currentSpeed = baseSpeed + speed.get();

    let current = x.get() - (currentSpeed * delta) / 1000;

    const width = containerRef.current?.scrollWidth / 2;

    if (width && Math.abs(current) >= width) {
      current = 0;
    }

    x.set(current);
  });

  const repeated = [...images, ...images, ...images];

  return (
    <div
      className="overflow-hidden w-screen p-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex gap-6 whitespace-nowrap min-w-max"
        style={{ x }}
      >
        {repeated.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="scroll item"
            className="
              w-[180px] sm:w-[220px] md:w-[260px]
              h-[120px] sm:h-[150px] md:h-[180px]
              object-cover rounded-xl
              shadow-md
            "
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageScroller;
