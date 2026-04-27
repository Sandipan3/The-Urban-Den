import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ dark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-md bg-brand-white text-brand-dark dark:bg-zinc-950 dark:text-brand-white hover:bg-brand-yellow/20 transition-colors duration-300"
    >
      <span className="flex items-center justify-center transition-transform duration-300">
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
