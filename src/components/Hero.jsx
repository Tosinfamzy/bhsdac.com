import backgroundImage from '../assets/hero/heroImageTouched.png';

const Hero = () => {
	return (
		<div
			className='h-[668px] flex justify-center items-center bg-cover bg-center bg-no-repeat'
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className='flex flex-col'>
				<p className='font-sans font-bold text-2xl text-yellow-400'>{`At BHSDAC, we consider everyone part of God's Family`}</p>
				<p className='font-sans text-white font-bold text-8xl text-left'>
					Welcome To
				</p>
				<p className='font-sans text-white font-bold text-8xl text-left'>
					Blessed Hope SDA CHURCH{' '}
				</p>
				<div>
					<button
						type='button'
						className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'
					>
						About us
					</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;