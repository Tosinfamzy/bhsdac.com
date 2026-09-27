import defaultBg from "../../assets/optimized/hero/heroImageTouched.webp";

const PageHero = ({ title, subtitle, backgroundImage = defaultBg }) => {
  return (
    <section
      className="relative h-[40vh] md:h-[50vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-label={title}
    >
      <div className="absolute inset-0 bg-overlay/60" aria-hidden="true" />
      <div className="relative w-full max-w-7xl mx-auto px-4 text-center">
        <h1 className="font-sans text-white font-extrabold tracking-tight text-h2 md:text-h1 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
