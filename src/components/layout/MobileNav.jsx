import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiChevronDown, FiX } from "react-icons/fi";
import navigation from "../../data/navigation";
import { SOCIAL_LINKS } from "../../data/constants";

const SOCIAL_ICONS = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  "Twitter/X": FaTwitter,
  YouTube: FaYoutube,
};

const MobileNav = ({ isOpen, onClose }) => {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const location = useLocation();
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={drawerRef}
      className="fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex justify-end p-4">
        <button ref={closeButtonRef} onClick={onClose} aria-label="Close menu">
          <FiX className="w-8 h-8 text-gray-700" />
        </button>
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
        {navigation.map((item) => {
          if (item.children) {
            const isExpanded = expandedGroup === item.label;
            return (
              <div key={item.label} className="w-full max-w-xs">
                <button
                  onClick={() =>
                    setExpandedGroup(isExpanded ? null : item.label)
                  }
                  className="w-full flex items-center justify-between py-4 border-b border-gray-200 text-lg font-semibold text-primary uppercase"
                >
                  {item.label}
                  <FiChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="pl-4 py-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block py-2 text-base text-gray-600 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full max-w-xs py-4 border-b border-gray-200 text-lg font-semibold uppercase ${
                item.label === "Giving"
                  ? "text-accent-yellow"
                  : "text-primary"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex justify-center gap-6 p-6">
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
              <Icon className="text-primary" size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
