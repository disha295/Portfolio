import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#dfdff0] px-4 sm:px-6 py-8 sm:py-10 text-sm text-pink-800 border-t border-pink-800">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 items-start text-left">
        {/* Left */}
        <div className="flex flex-col items-start gap-3">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Button
              id="footer-product-button"
              title="Disha Vishal Shetiya"
              containerClass="bg-[#e8e8f5] text-black border border-gray-300 py-2 px-4 rounded-full shadow-sm hover:bg-[#e8e8f5] transition-all text-[0.75rem] sm:text-sm"
            />
          </Link>
          <p className="text-xs text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} Disha Vishal Shetiya. All rights
            reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start sm:items-end gap-2 text-gray-600">
          <a
            href="/doc/DishaShetiya.pdf"
            target="_blank"
            rel="noreferrer"
            className="footer-hover-btn text-sm sm:text-base"
          >
            My Career in One Page↗
          </a>

          <div className="flex gap-5 pt-1">
            <a
              href="mailto:dishetiya@gmail.com"
              className="hover:text-pink-800 transition hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dishetiya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/disha295"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
