import "./App.css";
import WhiteContainer from "./components/WhiteContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import bannerImg from "./assets/banner.png";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhiteContainer>
        <div className="flex flex-col justify-center items-center">
          <p className="font-sans font-bold text-2xl text-blessed-blue mt-8 mb-2">
            JOIN US FOR WORSHIP EVERY SATURDAY
          </p>
          <p className="font-sans font-bold text-2xl text-yellow-400 mb-6">
            CENTER PRIORY HILL, DARTFORD, DA1 2ES
          </p>

          {/* TODO: This should be a component */}
          <img src={bannerImg} alt="bannerImage" />
        </div>
      </WhiteContainer>
    </>
  );
}

export default App;
