import img1 from "../assets/instragram/insta1.png";
import img2 from "../assets/instragram/insta2.png";
import img3 from "../assets/instragram/insta3.png";
import img4 from "../assets/instragram/insta4.png";
import img5 from "../assets/instragram/insta5.png";
import img6 from "../assets/instragram/1.jpg";

const defaultImages = [img1, img2, img3, img4, img5, img6];

// eslint-disable-next-line react/prop-types
const InstagramGrid = ({ images = defaultImages, count = 4 }) => {
  const items = images.slice(0, count);
  return (
    <div>
      <h4 className="text-white font-bold mb-3">Instagram</h4>
      <div className="grid grid-cols-2 gap-2">
        {items.map((src, idx) => (
          <a
            key={idx}
            href="https://www.instagram.com/blessedhope.sda/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src={src}
              alt={`Instagram post ${idx + 1}`}
              className="w-full h-24 object-cover rounded-card"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramGrid;

