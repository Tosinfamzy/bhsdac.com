import { useState } from "react";
import Logo from "../assets/Logo/PNG/BlessedHopeLogoLandscape(White).png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="bg-[#2B41BB] sm:w-full">
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Blessed Hope Logo" className="h-24 w-56" />
        <div className="flex lg:hidden">
          <div
            className="space-y-2 pr-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/about">About Us</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/portfolio">Events</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex lg:space-x-4">
          <a href="" className="p-1 px-3 text-white">
            Home
          </a>
          <a href="" className="p-1 px-3 text-white">
            About Us
          </a>
          <a href="" className="p-1 px-3 text-white">
            Events
          </a>
          <a href="" className="p-1 px-3 text-white">
            Contact
          </a>
          <a href="" className="p-1 px-3 text-white">
            Convention
          </a>
        </div>
        <div className="hidden lg:flex lg:space-x-4 lg:mr-6">
          <a href="https://www.facebook.com/blessedhope.sdac" target="_blank">
            <FaFacebookF color="white" />
          </a>
          <a href="https://www.instagram.com/blessedhope.sda/" target="_blank">
            <FaInstagram color="white" />
          </a>
          <a href="https://twitter.com/blessedhopesda?lang=en" target="_blank">
            <FaTwitter color="white" />
          </a>
          <a href="https://www.youtube.com/@BHSDAC" target="_blank">
            <FaYoutube color="white" />
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Header;
