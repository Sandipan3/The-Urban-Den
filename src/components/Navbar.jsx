import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const containerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center font-body text-sm tracking-widest uppercase">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="
              relative py-1
              text-brand-yellow transition-opacity duration-300
            
              after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full 
     
              after:bg-brand-dark dark:after:bg-brand-white 
            
              after:scale-x-0 after:origin-right 
              after:transition-transform after:duration-500 after:ease-out
              hover:after:scale-x-100 hover:after:origin-left
            "
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        className="md:hidden text-brand-dark dark:text-brand-white p-2"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Portal for Mobile Menu */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-[9999] flex justify-end">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                />

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ x: "100%" }}
                  className="
                    relative h-full w-72 
                    bg-brand-white/90 dark:bg-brand-dark/95 
                    backdrop-blur-2xl 
                    border-l border-brand-light/20 
                    shadow-2xl p-8 flex flex-col
                  "
                >
                  <button
                    className="self-end p-2 text-brand-yellow"
                    onClick={() => setOpen(false)}
                  >
                    <X size={26} />
                  </button>

                  <div className="mt-12 flex flex-col gap-8">
                    {navLinks.map((link) => (
                      <motion.div key={link.to} variants={itemVariants}>
                        <Link
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className="
                            relative inline-block text-3xl font-heading tracking-tight text-brand-yellow
                        
                            after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full 
                            after:bg-brand-dark dark:after:bg-brand-white 
                            after:scale-x-0 after:origin-left after:transition-transform after:duration-500
                            hover:after:scale-x-100
                          "
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto pb-4">
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-brand-light">
                      The Urban Den
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </nav>
  );
};

export default Navbar;
