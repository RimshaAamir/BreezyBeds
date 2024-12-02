import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterBottomDivider: React.FC = () => {
  return (
    <div className="border-t border-gray-300 mt-8 pt-4 flex flex-wrap justify-between items-center text-violet-400 text-sm">
      {/* Left Section: Links */}
      <div className="flex flex-wrap space-x-2 mb-2 md:mb-0">
        <span>© 2024 Airbnb, Inc.</span>
        <span>·</span>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <span>·</span>
        <a href="#" className="hover:underline">
          Sitemap
        </a>
        <span>·</span>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <span>·</span>
        <a href="#" className="hover:underline">
          Your Privacy Choices
        </a>
      </div>

      {/* Right Section: Social Media and Links */}
      <div className="flex items-center space-x-4">
        {/* Language and Currency */}
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 0 20" />
            </svg>
            <span>English (US)</span>
          </span>
          <span>·</span>
          <span>lei RON</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/RimshaAamir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rimsha-aamir-345620260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:rimshaamir03@gmail.com"
            className="hover:text-black"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomDivider;
