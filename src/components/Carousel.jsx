import { useState, useEffect } from "react";
import slide1 from "../assets/optimized/carousel/welcome.webp";
import slide2 from "../assets/optimized/carousel/welcome-blessed-hope.webp";
import slide3 from "../assets/optimized/carousel/reserved-seat.webp";
import slide4 from "../assets/optimized/carousel/divine-encounter.webp";

const slides = [slide1, slide2, slide3, slide4];

function CarouselComponent() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-6xl rounded-card overflow-hidden shadow-elevated aspect-[16/9] sm:aspect-[21/9] xl:aspect-[1513/668] bg-navy">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default CarouselComponent;
