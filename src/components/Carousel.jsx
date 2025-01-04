import { Carousel } from "flowbite-react";
import CorouselImage1 from "../assets/carousel/Website Banners (Welcome).png";
import CorouselImage2 from "../assets/carousel/Website Banners (Welcome to blessed hope).png";
import CorouselImage3 from "../assets/carousel/Website Banners (reserved seat).png";
import CorouselImage4 from "../assets/carousel/Website Banners (Divine Encounter).png";

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-96">
      <Carousel indicators={false} controls={false}>
        <img
          src={CorouselImage1}
          alt="..."
          className="h-full w-full object-fit"
        />
        <img
          src={CorouselImage2}
          alt="..."
          className="h-full w-full object-fit"
        />
        <img
          src={CorouselImage3}
          alt="..."
          className="h-full w-full object-fit"
        />
        <img
          src={CorouselImage4}
          alt="..."
          className="h-full w-full object-fit"
        />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
