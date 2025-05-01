import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { Link, useLocation } from "react-router-dom";

import Button from "./Button";

const navItems = [
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo / Home Button */}
          <div className="flex items-center gap-7">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button
                id="product-button"
                title="Disha Vishal Shetiya"
                containerClass="md:flex hidden items-center justify-center gap-1"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden md:flex gap-6">
              {navItems.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className={`nav-hover-btn ${
                    location.pathname === path
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
