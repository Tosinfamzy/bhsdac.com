import bg from "../assets/hero/heroImageTouched.jpg";

const PrayerCta = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
      aria-label="Prayer and Testimonies CTA"
    >
      <div className="absolute inset-0 bg-overlay/40" aria-hidden="true" />
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="bg-primary text-white rounded-card shadow-elevated max-w-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="text-accent-yellow text-5xl leading-none" aria-hidden>
              “
            </div>
            <div>
              <h3 className="font-bold text-h3 md:text-3xl">
                Let’s pray together and you can share your testimonies with us!
              </h3>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-block text-navy bg-accent-yellow rounded-button px-5 py-2 font-semibold text-sm hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                >
                  Prayers & Testimonies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerCta;

