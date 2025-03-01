import conventionImage from "../assets/convention/Lifted (Convention).png";

const Convention = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <img
        src={conventionImage}
        alt="Convention 2023"
        className="w-full max-w-2xl mb-8"
      />
      <div className="text-center">
        <p className="font-sans text-gray-800 font-bold md:text-8xl text-4xl">
          Convention 2023
        </p>
        <p className="font-sans text-gray-800 font-bold md:text-4xl text-2xl">
          Join us for an inspiring event!
        </p>
      </div>
    </div>
  );
};

export default Convention;
