import { Carousel } from "flowbite-react";
import CorouselImage1 from "../assets/carousel/Website Banners (Welcome).png";
import CorouselImage2 from "../assets/carousel/Website Banners (Welcome to blessed hope).png";
import CorouselImage3 from "../assets/carousel/Website Banners (reserved seat).png";
import CorouselImage4 from "../assets/carousel/Website Banners (Divine Encounter).png";

const slides = [CorouselImage1, CorouselImage2, CorouselImage3, CorouselImage4];

function CarouselComponent() {
  return (
    <div className="mx-auto w-full max-w-6xl rounded-card overflow-hidden shadow-elevated aspect-[16/9] sm:aspect-[21/9] xl:aspect-[1513/668] bg-navy">
      <Carousel indicators={false} controls={false}>
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="carousel"
            className="h-full w-full object-contain object-center bg-navy"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
