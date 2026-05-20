import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all shadow-sm">
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/" className="hover:text-purple-600 font-bold">
          Home
        </Link>
        <Link to="/figures" className="hover:text-purple-600 font-bold">
          Figures
        </Link>
        <Link to="/about" className="hover:text-purple-600 font-bold">
          About
        </Link>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      <div
        className={`${open ? "flex" : "hidden"} absolute top-[55px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-2 px-5 text-sm md:hidden`}
      >
        <Link to="/" className="hover:text-purple-600 font-bold">
          Home
        </Link>
        <Link to="/figures" className="hover:text-purple-600 font-bold">
          Figures
        </Link>
        <Link to="/about" className="hover:text-purple-600 font-bold">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
