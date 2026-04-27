import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Header = ({ dark, toggleTheme }) => {
  return (
    <header className="p-4 relative">
      <div className=" mx-auto px-4 py-4 flex justify-between items-center rounded-2xl border border-brand-light/10 dark:border-gray-500 bg-brand-white dark:bg-zinc-950 dark:backdrop-blur-md shadow-sm">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={dark ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="Urban Den Logo"
            className="w-8 h-8"
            loading="lazy"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg tracking-wide text-brand-dark dark:text-brand-white">
              The Urban Den
            </span>
            <span className="font-body text-[10px] tracking-widest text-brand-light uppercase">
              Premium Pet Grooming
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <Navbar />
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
