import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Header = ({ dark, toggleTheme }) => {
  return (
    <header className="bg-brand-gray border-b border-black/10 relative">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={dark ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="Urban Den Logo"
            className="w-8 h-8"
            loading="lazy"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg tracking-wide text-brand-text">
              The Urban Den
            </span>
            <span className="font-body text-[10px] tracking-widest text-brand-text-secondary uppercase">
              Premium Pet Care
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
