import { Link } from "react-router-dom";

const variants = {
  primary:
    "text-navy bg-accent-yellow hover:brightness-110 focus:ring-yellow-300",
  secondary:
    "text-white border-2 border-white hover:bg-white/10 focus:ring-white/30",
  outline:
    "text-primary border-2 border-primary hover:bg-primary/5 focus:ring-primary/30",
};

const CTAButton = ({ to, href, children, variant = "primary", className = "" }) => {
  const base = `inline-block font-semibold rounded-button text-sm px-6 py-3 focus:outline-none focus:ring-4 transition-all ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to || "/"} className={base}>
      {children}
    </Link>
  );
};

export default CTAButton;
