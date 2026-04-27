import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-dark dark:bg-zinc-950 text-brand-white p-4 ">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        {/* Brand */}
        <div>
          <h2 className="font-heading text-xl tracking-wide">The Urban Den</h2>
          <p className="mt-2 text-sm text-brand-light">
            Premium care, curated products, and a better lifestyle for your
            pets.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Explore */}
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-brand-white">Explore</span>
            <Link to="/" className="hover:text-brand-yellow transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-brand-yellow transition">
              Products
            </Link>
            <Link to="/about" className="hover:text-brand-yellow transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-brand-yellow transition">
              Contact
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-brand-white">Contact</span>
            <p className="text-brand-light">support@urbanden.com</p>
            <p className="text-brand-light">+91 90000 00000</p>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      {/* Bottom */}
      <div className=" text-center text-xs py-4 text-brand-light">
        © {new Date().getFullYear()} The Urban Den. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
