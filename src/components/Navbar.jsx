import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const containerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      ease: "easeOut",
      duration: 0.3,
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
    <div className="relative">
      {/* Desktop */}
      <div className="hidden md:flex gap-8 items-center font-body text-sm tracking-wide">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="relative text-brand-text 
            after:absolute after:left-1/2 after:-translate-x-1/2 
            after:-bottom-1 after:h-[2px] after:w-full 
            after:bg-brand-yellow 
            after:scale-x-0 after:origin-center 
            after:transition-transform after:duration-300 
            hover:after:scale-x-100 hover:text-brand-yellow"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Toggle */}
      <button
        className="md:hidden text-brand-text"
        onClick={() => setOpen(true)}
      >
        <Menu size={22} />
      </button>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <>
            {/* Drawer */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ x: "100%", opacity: 0 }}
              className="fixed top-0 right-0 h-full w-64 bg-brand-black-800 text-white z-[60] p-6 flex flex-col"
            >
              {/* Close */}
              <button className="self-end mb-6" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>

              {/* Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <motion.div key={link.to} variants={itemVariants}>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="text-lg font-body tracking-wide hover:text-brand-yellow transition"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backdrop (slightly darker) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
