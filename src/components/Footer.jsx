import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import footerImage from "../assets/Logo/PNG/BlessedHopeSymbolBlue(White).png";
import InstagramGrid from "./InstagramGrid";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-8 lg:px-10 h-auto mt-6 bg-navy text-white p-6 md:p-10">
      <div className="flex flex-col text-sm lg:text-base gap-1">
        <img src={footerImage} style={{ width: "77px" }}></img>
        <p>© Copyright BLESSED HOPE</p>
        <p>01322838191</p>
        <p>Priory Hill, Dartford, DA1 2ES</p>
        <p>pastor@bhsdac.org.uk</p>
      </div>
      <div className="flex flex-col text-base lg:text-base gap-2">
        <p className="uppercase text-white/80 text-xs tracking-wider">Quicklinks</p>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/events" className="hover:underline">Events</Link>
      </div>
      <div className="flex flex-col gap-3 self-start">
        <p className="uppercase text-white/80 text-xs tracking-wider">Connect</p>
        <div className="flex space-x-4">
        <a href="https://www.facebook.com/blessedhope.sdac" target="_blank" aria-label="Facebook">
          <FaFacebookF color="white" size={35} />
        </a>
        <a href="https://www.instagram.com/blessedhope.sda/" target="_blank" aria-label="Instagram">
          <FaInstagram color="white" size={35} />
        </a>
        <a href="https://twitter.com/blessedhopesda?lang=en" target="_blank" aria-label="Twitter/X">
          <FaTwitter color="white" size={35} />
        </a>
        <a href="https://www.youtube.com/@BHSDAC" target="_blank" aria-label="YouTube">
          <FaYoutube color="white" size={35} />
        </a>
        </div>
      </div>
      <div>
        <InstagramGrid count={4} />
      </div>
    </div>
  );
};
export default Footer;
