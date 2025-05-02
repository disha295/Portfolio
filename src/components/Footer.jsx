import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#dfdff0] px-6 py-10 text-sm text-pink-800 border-t border-pink-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
        {/* Left Side: Button + Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Button
              id="footer-product-button"
              title="Disha Vishal Shetiya"
              containerClass="bg-[#e8e8f5] text-black border border-gray-300 px-5 py-2 rounded-full shadow-sm hover:bg-[#e8e8f5] transition-all"
            />
          </Link>
          <p className="text-xs text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} Disha Vishal Shetiya. All rights
            reserved.
          </p>
        </div>

        {/* Right Side: Resume + Socials */}
        <div className="flex flex-col items-center md:items-end gap-3 text-gray-600">
          <a
            href="public/doc/DishaShetiya.pdf"
            target="_blank"
            rel="noreferrer"
            className="footer-hover-btn"
          >
            My Career in One Page↗
          </a>

          <div className="flex gap-6">
            <a
              href="mailto:dishetiya@gmail.com"
              className="hover:text-pink-800 transition hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/dishetiya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/disha295"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
