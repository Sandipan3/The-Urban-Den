import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ dark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-brand-gray text-brand-text hover:bg-brand-yellow/20 transition"
    >
      <span className="transition-transform duration-300">
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
