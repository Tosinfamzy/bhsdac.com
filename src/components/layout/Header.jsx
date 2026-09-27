import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/PNG/BlessedHopeLogoLandscape(White).png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import navigation from "../../data/navigation";
import { SOCIAL_LINKS } from "../../data/constants";
import DropdownMenu from "./DropdownMenu";
import MobileNav from "./MobileNav";

const SOCIAL_ICONS = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  "Twitter/X": FaTwitter,
  YouTube: FaYoutube,
};

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="bg-primary sm:w-full sticky top-0 z-20">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto" aria-label="Main navigation">
        <Link to="/">
          <img
            src={Logo}
            alt="Blessed Hope Logo"
            className="h-16 w-40 sm:h-24 sm:w-56"
          />
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => {
            if (item.children) {
              return <DropdownMenu key={item.label} item={item} />;
            }
            if (item.label === "Giving") {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="ml-2 px-5 py-2 bg-accent-yellow text-navy font-semibold rounded-button text-sm hover:brightness-110 transition-all"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className="p-1 px-3 text-white hover:text-accent-yellow transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop social icons */}
        <div className="hidden lg:flex lg:space-x-4 lg:mr-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <Icon color="white" />
              </a>
            );
          })}
        </div>
      </nav>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </div>
  );
};

export default Header;
