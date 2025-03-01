import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import footerImage from "../assets/Logo/PNG/BlessedHopeSymbolBlue(White).png";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center lg:px-10 h-auto md:h-[365px] mt-6 bg-[#040C36] text-white p-4">
      <div className="flex flex-col text-sm lg:text-2xl mb-4 md:mb-0">
        <img src={footerImage} style={{ width: "77px" }}></img>
        <p>© Copyright BLESSED HOPE</p>
        <p>01322838191</p>
        <p>Priory Hill, Dartford, DA1 2ES</p>
        <p>pastor@bhsdac.org.uk</p>
      </div>
      <div className="flex flex-col text-base lg:text-2xl mb-4 md:mb-0">
        <p>Quick Links</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Events</p>
      </div>
      <div className="flex space-x-4 lg:mr-6">
        <a href="https://www.facebook.com/blessedhope.sdac" target="_blank">
          <FaFacebookF color="white" size={35} />
        </a>
        <a href="https://www.instagram.com/blessedhope.sda/" target="_blank">
          <FaInstagram color="white" size={35} />
        </a>
        <a href="https://twitter.com/blessedhopesda?lang=en" target="_blank">
          <FaTwitter color="white" size={35} />
        </a>
        <a href="https://www.youtube.com/@BHSDAC" target="_blank">
          <FaYoutube color="white" size={35} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
