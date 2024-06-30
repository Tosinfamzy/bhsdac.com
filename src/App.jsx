import "./App.css";
import WhiteContainer from "./components/WhiteContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import bannerImg from "./assets/banner.png";
import backgroundImage from "../src/assets/hero/heroImageTouched.png";
import innerImg from "../src/assets/Inner.png";
import CardImage from "./components/CardImage";
import elderwale from "./assets/pastoral/elderwale.jpg";
import elderFikayo from "./assets/pastoral/elderfikayo.jpg";
import elderKenny from "./assets/pastoral/elderkenny.jpg";
import elderBolaji from "./assets/pastoral/elderbolaji.jpg";
import elderBisi from "./assets/pastoral/elderBisi.jpg";
import elderOlatunde from "./assets/pastoral/elderolatunde.jpg";
import pastor from "./assets/pastoral/pastor.jpg";
import Footer from "./components/Footer";
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
      <div
        className="h-[668px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex h-[200px] bg-indigo-950 items-center justify-between">
          <img src={innerImg} alt="innerImage" />
        </div>
      </div>
      <div className="my-6 ">
        <h3 className="font-sans font-bold text-3xl text-center uppercase">
          Pastoral Team
        </h3>
        <p className="text-center">
          BHSDAC is blessed with committed Saints, with different skills and
          spiritual gifts,
        </p>
        <p className="text-center">
          working together to enlarge the Kingdom of God.
        </p>
      </div>
      <WhiteContainer>
        <div className="grid grid-cols-4 gap-4">
          <CardImage image={pastor} name="Pastor Ayodeji Adesina" />
          <CardImage
            className=""
            image={elderKenny}
            name="Elder Kehinde Jegede"
          />
          <CardImage
            className=""
            image={elderBolaji}
            name="Elder Bolaji Aborisade"
          />
          <CardImage
            className=""
            image={elderOlatunde}
            name="Elder Temitope Olatunde"
          />
          <CardImage className="" image={elderwale} name="Elder Wale Oladipo" />
          <CardImage
            className=""
            image={elderFikayo}
            name="Elder Fikayo Aremu"
          />
          <CardImage className="" image={elderBisi} name="Elder Bisi" />
        </div>
      </WhiteContainer>
      <Footer />
    </>
  );
}

export default App;
