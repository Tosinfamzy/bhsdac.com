import './App.css';
import BlackContainer from './components/BlackContainer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
	return (
		<>
			<Header />
			<Hero />
			{/* <BlackContainer>
				<div className='flex justify-center items-center h-96'>
					<p className='text-white text-4xl font-bold'>About Us</p>
				</div>
			</BlackContainer> */}
		</>
	);
}

export default App;
