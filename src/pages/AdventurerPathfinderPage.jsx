import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import BlackContainer from "../components/BlackContainer";
import SectionHeader from "../components/shared/SectionHeader";
import CTAButton from "../components/shared/CTAButton";
import youthMinistries from "../data/youthMinistries";
import { FiUsers, FiCalendar } from "react-icons/fi";

import adventurerImg from "../assets/optimized/youth/adventurer.webp";
import pathfinderImg from "../assets/optimized/youth/pathfinder.webp";

const youthImages = {
  adventurer: adventurerImg,
  pathfinder: pathfinderImg,
};

const PlaceholderImage = ({ label }) => (
  <div className="w-full aspect-[16/9] bg-primary/10 rounded-card flex items-center justify-center">
    <div className="text-center p-4">
      <p className="text-primary/40 font-bold text-lg">{label}</p>
      <p className="text-primary/25 text-sm mt-1">Photo placeholder</p>
    </div>
  </div>
);

const AdventurerPathfinderPage = () => {
  usePageMeta();
  return (
    <div>
      <PageHero
        title="Adventurer & Pathfinder"
        subtitle="Building Character and Faith in Our Young People"
      />

      {/* Intro */}
      <WhiteContainer>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our youth programmes are at the heart of Blessed Hope. Through the
            Adventurer and Pathfinder clubs, we provide young people with
            opportunities to grow in faith, develop leadership skills, build
            friendships, and have fun—all in a safe and supportive environment.
          </p>
        </div>
      </WhiteContainer>

      {/* Youth Ministry Sections */}
      {youthMinistries.map((ministry, index) => {
        const Container = index % 2 === 0 ? BlackContainer : WhiteContainer;
        const isLight = index % 2 === 0;

        return (
          <Container key={ministry.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <img
                  src={youthImages[ministry.id]}
                  alt={ministry.title}
                  className="w-full aspect-[3/4] object-cover object-top rounded-card"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className={`font-bold text-h3 md:text-3xl ${isLight ? "text-white" : "text-primary"}`}>
                  {ministry.title}
                </h2>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  isLight
                    ? "bg-accent-yellow text-navy"
                    : "bg-primary/10 text-primary"
                }`}>
                  {ministry.ageRange}
                </span>
                <p className={`mt-4 leading-relaxed ${isLight ? "text-white/80" : "text-gray-700"}`}>
                  {ministry.description}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <FiCalendar className={`w-4 h-4 ${isLight ? "text-accent-yellow" : "text-primary"}`} />
                    <p className={`text-sm ${isLight ? "text-white/70" : "text-gray-600"}`}>
                      {ministry.schedule}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        );
      })}

      {/* Registration CTA */}
      <section className="bg-accent-yellow py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiUsers className="w-8 h-8 text-navy" />
          </div>
          <h2 className="font-bold text-h3 md:text-3xl text-navy uppercase">
            Register Your Child
          </h2>
          <p className="text-navy/70 mt-3 max-w-xl mx-auto">
            Interested in enrolling your child in our Adventurer or Pathfinder
            programme? Get in touch with us for more information and to register.
          </p>
          <div className="mt-6">
            <CTAButton to="/contact" variant="outline">
              Contact Us to Register
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdventurerPathfinderPage;
