import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.div
      key={dark ? "dark" : "light"}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-brand-white text-brand-dark dark:bg-brand-dark dark:text-brand-white"
    >
      <Header dark={dark} toggleTheme={toggleTheme} />

      <main className="min-h-[200px] text-center">
        <Outlet key={location.pathname} />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Layout;
