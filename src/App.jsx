import "./App.css";
import WhiteContainer from "./components/WhiteContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
import LatestYoutubeVideo from "./components/LatestYoutubeVideo";
import CarouselComponent from "./components/Carousel";
import BlackContainer from "./components/BlackContainer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="w-screen">
      <Header />
      <Hero />
      <WhiteContainer>
        <div className="flex flex-col justify-center items-center">
          <p className="font-sans font-bold text-2xl text-blessed-blue mt-8 md:mb-2 pl-4 md:pl-0">
            JOIN US FOR WORSHIP EVERY SATURDAY
          </p>
          <p className="font-sans font-bold text-2xl text-yellow-400 mb-6 pl-4 md:pl-0">
            CENTER PRIORY HILL, DARTFORD, DA1 2ES
          </p>
        </div>
      </WhiteContainer>
      <BlackContainer className="h-[500px]">
        <div className="">
          <CarouselComponent />
        </div>
      </BlackContainer>
      <div
        className="h-[668px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex h-[200px] bg-indigo-950 items-center justify-between">
          <img src={innerImg} alt="innerImage" />
        </div>
      </div>
      <div className="my-9" style={{ color: "#273375" }}>
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
      <WhiteContainer className={`px-5, overscroll-x-none`}>
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-4 overscroll-x-none">
          <CardImage
            image={pastor}
            name="Pastor Ayodeji Adesina"
            title={"(Lay Pastor)"}
          />
          <CardImage
            className=""
            image={elderKenny}
            name="Elder Kehinde Jegede"
            title={"(First Elder)"}
          />
          <CardImage
            className=""
            image={elderBolaji}
            name="Elder Bolaji Aborisade"
            title={"(Elder)"}
          />
          <CardImage
            className=""
            image={elderOlatunde}
            name="Elder Temitope Olatunde"
            title={"(Elder)"}
          />
          <CardImage
            className=""
            image={elderwale}
            name="Elder Wale Oladipo"
            title={"(Elder)"}
          />
          <CardImage
            className=""
            image={elderFikayo}
            name="Elder Fikayo Aremu"
            title={"(Elder)"}
          />
          <CardImage
            className=""
            image={elderBisi}
            name="Elder Bisi Oyewole"
            title={"(Elder)"}
          />
        </div>
      </WhiteContainer>
      <WhiteContainer
        className="flex justify-center items-center mt-4"
        style={{ color: "#273375" }}
      >
        <LatestYoutubeVideo />
      </WhiteContainer>
      <WhiteContainer>
        <ContactForm />
      </WhiteContainer>
      <Footer />
    </div>
  );
}

export default App;
