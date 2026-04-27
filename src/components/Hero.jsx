import darkLogo from "/logo-dark.svg";
import LightLogo from "/logo-light.svg";

const Hero = () => {
  const theme = localStorage.getItem("theme");

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div
        className="
        flex flex-col justify-end
        px-6 sm:px-10 md:px-16 py-10
        bg-brand-white dark:bg-brand-dark
        text-brand-dark dark:text-brand-white
        w-full md:w-1/2"
      >
        <div className="leading-none">
          {/* LOGO */}
          <figure className="hidden md:flex flex-col items-end mb-3">
            <img
              src={theme === "dark" ? darkLogo : LightLogo}
              alt="The Urban Den logo"
              className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[120px] md:h-[120px] object-contain"
            />
            <figcaption className="text-[10px] sm:text-xs text-brand-light text-right">
              The Urban Den
            </figcaption>
          </figure>

          <p className="block text-xl sm:text-3xl md:text-5xl font-bold font-heading sm:text-left">
            THE
          </p>

          <p className="block text-5xl sm:text-6xl md:text-9xl font-bold font-heading sm:text-left text-brand-yellow">
            URBAN
          </p>

          <p className="block text-5xl sm:text-6xl md:text-9xl font-bold font-heading sm:text-left ">
            DEN
          </p>

          <p className="mt-4 text-[10px] sm:text-xs tracking-widest text-brand-yellow uppercase sm:text-left">
            PREMIUM PET GROOMING
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full md:w-1/2 h-[60vh] md:h-auto p-2">
        <img
          src="https://images.freeimages.com/images/large-previews/bd2/siberian-husky-1464646.jpg?fmt=avif&h=350"
          alt="Dog"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
