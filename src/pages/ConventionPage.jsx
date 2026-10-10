import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import CTAButton from "../components/shared/CTAButton";
import conventionBanner from "../assets/optimized/convention/Beyond Comprehension Landscape.webp";

const ConventionPage = () => {
  usePageMeta();
  return (
    <div>
      <PageHero
        title="Annual Convention"
        subtitle="Our annual gathering for worship, fellowship, and spiritual renewal"
      />

      <WhiteContainer>
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={conventionBanner}
            alt="Convention 2026 - Beyond Comprehension"
            className="w-full rounded-card shadow-card mb-8"
          />
          <h2 className="font-sans text-primary font-bold text-h2 md:text-h1">
            Convention 2026
          </h2>
          <p className="text-gray-700 text-xl mt-4">
            Beyond Comprehension
          </p>

          {/* Details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-primary/5 rounded-card p-4">
              <p className="text-xs text-primary/50 uppercase tracking-wider">Date</p>
              <p className="text-primary font-bold mt-1">Coming Soon</p>
            </div>
            <div className="bg-primary/5 rounded-card p-4">
              <p className="text-xs text-primary/50 uppercase tracking-wider">Venue</p>
              <p className="text-primary font-bold mt-1">TBA</p>
            </div>
            <div className="bg-primary/5 rounded-card p-4">
              <p className="text-xs text-primary/50 uppercase tracking-wider">Theme</p>
              <p className="text-primary font-bold mt-1">Beyond Comprehension</p>
            </div>
          </div>

          <div className="mt-8">
            <CTAButton to="/contact">Contact Us for Details</CTAButton>
          </div>
        </div>
      </WhiteContainer>
    </div>
  );
};

export default ConventionPage;
