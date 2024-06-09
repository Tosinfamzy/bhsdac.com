import Logo from '../assets/Logo/PNG/BlessedHopeLogoLandscape(White).png';


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
				{/* <div className='flex space-x-4 '>
					<a href=''><facebookLogo /></a>
					<a href=''><instaLogo /></a>
					<a href=''><twitterLogo /></a>
					<a href=''><youtubeLogo /></a>
				</div> */}
			</nav>
		</div>
	);
};
export default Header;
