import Logo from '../assets/Logo/PNG/BlessedHopeLogoLandscape(White).png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";


const Header = () => {
	return (
		<div className='bg-[#2B41BB]'>
			<nav className='flex items-center justify-between'>
				<img src={Logo} alt='Blessed Hope Logo' className='h-24 w-56' />
				<div className='flex space-x-4'>
					<a href='' className='p-1 px-3 text-white'>
						Home
					</a>
					<a href='' className='p-1 px-3 text-white'>
						About Us
					</a>
					<a href='' className='p-1 px-3 text-white'>
						Events
					</a>
					<a href='' className='p-1 px-3 text-white'>
						Contact
					</a>
					<a href='' className='p-1 px-3 text-white'>
						Convention
					</a>
				</div>
				<div className='flex space-x-4 mr-6'>
					<a href=''><FaFacebookF color='white'/></a>
					<a href=''><FaInstagram color='white'/></a>
					<a href=''><FaTwitter color='white'/></a>
					<a href=''><FaYoutube color='white'/></a>
				</div> 
			</nav>
		</div>
	);
};
export default Header;
