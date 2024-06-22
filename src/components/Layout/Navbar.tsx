import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { navLinks } from "../../constants";
import Button from "../ui/Button";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 transition-all duration-300 delay-100">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="inline-flex p-2 text-black transition-all duration-200 delay-150 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className={`${mobileMenu ? "hidden" : "block"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`${mobileMenu ? "block" : "hidden"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                to={link.url}
                key={link.title}
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <Button variant="secondary"> Cart</Button>
        </nav>
        {/* xs to lg */}
        {mobileMenu && <MobileNav />}
      </div>
    </header>
  );
};

export default Navbar;
