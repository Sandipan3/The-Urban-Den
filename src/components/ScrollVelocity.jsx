import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useScroll,
  useVelocity,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const ScrollVelocity = ({ items = [] }) => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  //  scroll tracking
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // map velocity to speed
  const speed = useTransform(velocity, [-1000, 0, 1000], [-200, 50, 200]);

  useAnimationFrame((_, delta) => {
    const currentSpeed = speed.get();

    let current = x.get() - (currentSpeed * delta) / 1000;

    const width = containerRef.current?.scrollWidth / 2;

    if (width && Math.abs(current) >= width) {
      current = 0;
    }

    x.set(current);
  });

  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-screen p-4">
      <motion.div
        ref={containerRef}
        className="flex gap-8 whitespace-nowrap min-w-max text-3xl md:text-5xl font-heading"
        style={{ x }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            {item}
            <span className="text-brand-yellow">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;
