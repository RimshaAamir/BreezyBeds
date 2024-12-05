"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterBottomDivider: React.FC = () => {
  return (
    <div className="border-t border-gray-300 mt-8 pt-4 flex flex-wrap justify-between items-center text-gray-600 text-sm">
      {/* Left Section: Links */}
      <div className="flex flex-wrap space-x-2 mb-2 md:mb-0">
        <span>© 2024 Airbnb, Inc.</span>
        <span>·</span>
        <a href="#" className="hover:underline hover:text-black">
          Terms
        </a>
        <span>·</span>
        <a href="#" className="hover:underline hover:text-black">
          Sitemap
        </a>
        <span>·</span>
        <a href="#" className="hover:underline hover:text-black">
          Privacy
        </a>
        <span>·</span>
        <a href="#" className="hover:underline hover:text-black">
          Your Privacy Choices
        </a>
      </div>

      {/* Right Section: Social Media and Links */}
      <div className="flex items-center space-x-4">
        {/* Language and Currency */}
        <div className="flex items-center space-x-2">
          <span>English (US)</span>
          <span>·</span>
          <span>lei RON</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="mailto:example@example.com" className="hover:text-black">
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomDivider;
