import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-[#2e3353]">
      <nav className=" px-20 flex justify-between items-center">
        <div className="py-5 text-orange-500 font-bold text-4xl">
          <Link to="/">
            <span className="text-white">Nasim</span>Droid
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : "hover:text-orange-500 ease-in duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : "hover:text-orange-500 ease-in duration-200"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : "hover:text-orange-500 ease-in duration-200"
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : "hover:text-orange-500 ease-in duration-200"
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : "hover:text-orange-500 ease-in duration-200"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : "hover:text-orange-500 ease-in duration-200"
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <button className="bg-orange-500 px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                Download app
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Screen */}
        <div className="lg:hidden cursor-pointer ml-10 z-50">
          <button title={!isMenuOpen ? 'Open Menu' : 'Close Menu'}
          aria-label={!isMenuOpen ? 'Open Menu' : 'Close Menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {
                !isMenuOpen ? <Bars3BottomRightIcon className="h-6 w-6 text-white" /> : <XMarkIcon className="h-6 w-6 text-white" />
            }
            
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800 h-96 opacity-90 absolute inset-0">
            <ul className=" grid place-items-center py-20">
              <li className="font-semibold mt-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "hover:text-orange-500 ease-in duration-200"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "hover:text-orange-500 ease-in duration-200"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "hover:text-orange-500 ease-in duration-200"
                  }
                >
                  Books
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "hover:text-orange-500 ease-in duration-200"
                  }
                >
                  Features
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "hover:text-orange-500 ease-in duration-200"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "hover:text-orange-500 ease-in duration-200"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
              <button className="bg-orange-500 px-4 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200 mt-3">
                Download app
              </button>
            </li>
            </ul>
          </div>
          
        )}
        
      </nav>
    </div>
  );
};

export default Header;
