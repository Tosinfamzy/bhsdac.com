import { Link } from "react-router-dom";
import backgroundImage from "../assets/hero/heroImageTouched.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-[60vh] lg:min-h-[668px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-label="Welcome section"
    >
      <div className="absolute inset-0 bg-overlay/60" aria-hidden="true" />
      <div className="relative w-full max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col max-w-3xl">
          <p className="font-sans font-bold md:text-lg text-sm text-accent-yellow">
            {`At BHSDAC, we consider everyone part of God's Family`}
          </p>
          <h1 className="font-sans text-white font-extrabold tracking-tight leading-tight text-h2 md:text-h1">
            Welcome To
          </h1>
          <h2 className="font-sans text-white font-extrabold tracking-tight leading-tight text-h2 md:text-h1">
            Blessed Hope SDA Church
          </h2>
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-block text-navy bg-accent-yellow hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-button text-sm px-6 py-3 dark:focus:ring-yellow-900"
              aria-label="Learn more about us"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
