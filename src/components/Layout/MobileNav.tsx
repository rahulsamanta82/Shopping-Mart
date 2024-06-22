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
    </nav>
  );
};

export default MobileNav;
