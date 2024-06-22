import { navLinks } from "../../constants";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="pt-4 pb-6 fade-in transition-all duration-300 delay-100 ease-in-out bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
      <div className="flow-root">
        <div className="flex flex-col px-6 -my-2 space-y-1">
          {navLinks.map((link) => (
            <Link to={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="px-6 mt-6">
        <a
          href="#"
          title=""
          className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
          role="button"
        >
          Get started now
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
