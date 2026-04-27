import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import darkLogo from "/logo-dark.svg";
import LightLogo from "/logo-light.svg";

const Hero = () => {
  const theme = localStorage.getItem("theme");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //  transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div ref={ref} className="h-[200vh]">
      {/* SCROLL SPACE */}
      <section className="sticky top-0 h-screen flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div
          className="
          flex flex-col justify-end
          px-6 sm:px-10 md:px-16 py-10
          bg-brand-white dark:bg-brand-dark
          text-brand-dark dark:text-brand-white
          w-full md:w-1/2
        "
        >
          <div className="leading-none">
            {/* LOGO */}
            <figure className="hidden md:flex flex-col items-end mb-3 overflow-hidden">
              <img
                src={theme === "dark" ? darkLogo : LightLogo}
                alt="The Urban Den logo"
                className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[120px] md:h-[120px] object-contain"
              />
              <figcaption className="hidden md:block font-heading text-center text-sm md:text-2xl leading-none tracking-wide">
                The <br />
                Urban Den
              </figcaption>
            </figure>

            {/*  TEXT MOVEMENT */}
            <motion.div style={{ y, opacity }} className="leading-none">
              <p className="text-xl sm:text-3xl md:text-5xl font-bold font-heading text-center md:text-left">
                THE
              </p>

              <p className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading text-brand-yellow text-center md:text-left ">
                URBAN
              </p>

              <p className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading text-center md:text-left">
                DEN
              </p>

              <p className="mt-4 text-[10px] sm:text-xs tracking-widest text-brand-yellow uppercase  text-center md:text-left ">
                PREMIUM PET GROOMING
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-1/2 h-[60vh] md:h-auto p-2 overflow-hidden">
          <motion.img
            src="https://images.freeimages.com/images/large-previews/bd2/siberian-husky-1464646.jpg"
            alt="Dog"
            className="w-full h-full object-cover rounded-xl shadow-lg"
            style={{ scale }}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
