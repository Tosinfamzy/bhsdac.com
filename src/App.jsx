import "./App.css";
import WhiteContainer from "./components/WhiteContainer";
import BlackContainer from "./components/BlackContainer";
import Hero from "./components/Hero";
import backgroundImage from "../src/assets/hero/heroImageTouched.jpg";
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
import FeaturedAnnouncement from "./components/FeaturedAnnouncement";
import PrayerCta from "./components/PrayerCta";
// import ContactForm from "./components/ContactForm"; // Remove this import

function App() {
  return (
    <div className="w-screen">
      <Hero />
      <WhiteContainer>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-sans font-bold text-h3 md:text-3xl text-primary mt-8 md:mb-2">
            JOIN US FOR WORSHIP EVERY SATURDAY
          </p>
          <p className="font-sans font-bold text-h3 md:text-3xl text-accent-yellow mb-6">
            CENTER PRIORY HILL, DARTFORD, DA1 2ES
          </p>
        </div>
      </WhiteContainer>
      <BlackContainer className="py-10">
        <CarouselComponent />
      </BlackContainer>
      <FeaturedAnnouncement />
      <div
        className="h-[668px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex h-[200px] bg-indigo-950 items-center justify-between">
          <img src={innerImg} alt="innerImage" />
        </div>
      </div>
      <div className="my-9 text-primary">
        <h3 className="font-sans font-bold text-h3 md:text-3xl text-center uppercase">
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
      <WhiteContainer className={`overscroll-x-none`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overscroll-x-none">
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
      <WhiteContainer className="mt-4">
        <div className="flex justify-center items-center text-primary">
          <LatestYoutubeVideo />
        </div>
      </WhiteContainer>
      <PrayerCta />
      {/* <WhiteContainer>
        <ContactForm /> Remove this line
      </WhiteContainer> */}
      <Footer />
    </div>
  );
}

export default App;
