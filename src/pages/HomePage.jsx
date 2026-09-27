import usePageMeta from "../hooks/usePageMeta";
import WhiteContainer from "../components/WhiteContainer";
import BlackContainer from "../components/BlackContainer";
import Hero from "../components/Hero";
import backgroundImage from "../assets/optimized/hero/heroImageTouched.webp";
import CardImage from "../components/CardImage";
import elderwale from "../assets/optimized/pastoral/elderwale.webp";
import elderFikayo from "../assets/optimized/pastoral/elderfikayo.webp";
import elderKenny from "../assets/optimized/pastoral/elderkenny.webp";
import elderWilson from "../assets/optimized/pastoral/elderwilson.webp";
import elderBisi from "../assets/optimized/pastoral/elderBisi.webp";
import elderOlatunde from "../assets/optimized/pastoral/elderolatunde.webp";
import pastor from "../assets/optimized/pastoral/pastor.webp";
import LatestYoutubeVideo from "../components/LatestYoutubeVideo";
import CarouselComponent from "../components/Carousel";
import FeaturedAnnouncement from "../components/FeaturedAnnouncement";
import PrayerCta from "../components/PrayerCta";
import SectionHeader from "../components/shared/SectionHeader";
import CTAButton from "../components/shared/CTAButton";
import programs from "../data/programs";
import { FiUsers, FiHeart, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const ministryHighlights = [
  {
    title: "Community Outreach",
    description: "Serving our neighbours with love through care home visits, feeding programmes, and community support.",
    icon: FiHeart,
    path: "/community-outreach",
    color: "bg-accent-blue",
  },
  {
    title: "Empowerment",
    description: "Equipping our community with practical resources in finance, immigration, and health.",
    icon: FiUsers,
    path: "/empowerment",
    color: "bg-primary",
  },
  {
    title: "Adventurer & Pathfinder",
    description: "Building character and faith in our young people through exciting programmes and activities.",
    icon: FiStar,
    path: "/adventurer-pathfinder",
    color: "bg-accent-blue",
  },
];

function HomePage() {
  usePageMeta("Welcome", "Blessed Hope Seventh-day Adventist Church in Dartford. Join us for worship every Saturday.");
  return (
    <div className="w-full">
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

      {/* Programs Preview */}
      <WhiteContainer>
        <SectionHeader
          title="Our Programs"
          subtitle="Join us throughout the week for worship, study, and prayer"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.id}
              to={`/programs#${program.id}`}
              className="group bg-white border border-gray-100 rounded-card shadow-card p-6 hover:shadow-elevated transition-shadow"
            >
              <h3 className="font-bold text-lg text-primary group-hover:text-accent-blue transition-colors">
                {program.title}
              </h3>
              <p className="text-accent-yellow font-semibold text-sm mt-1">
                {program.schedule}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {program.times.map((t) => `${t.label}: ${t.time}`).join(" | ")}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <CTAButton to="/programs" variant="outline">
            View All Programs
          </CTAButton>
        </div>
      </WhiteContainer>

      {/* Ministry Highlights */}
      <BlackContainer>
        <SectionHeader
          title="Our Ministries"
          subtitle="Making an impact in our community and beyond"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ministryHighlights.map((ministry) => {
            const Icon = ministry.icon;
            return (
              <Link
                key={ministry.path}
                to={ministry.path}
                className="group bg-white/5 border border-white/10 rounded-card p-6 hover:bg-white/10 transition-colors"
              >
                <div className={`w-12 h-12 ${ministry.color} rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-accent-yellow transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  {ministry.description}
                </p>
              </Link>
            );
          })}
        </div>
      </BlackContainer>

      {/* Latest Video */}
      <WhiteContainer className="mt-4">
        <SectionHeader
          title="Latest From Our Channel"
          subtitle="Watch our most recent service"
        />
        <div className="flex justify-center items-center text-primary">
          <LatestYoutubeVideo />
        </div>
        <div className="text-center mt-6">
          <CTAButton to="/media" variant="outline">
            Watch More
          </CTAButton>
        </div>
      </WhiteContainer>

      {/* Giving CTA */}
      <section className="bg-accent-yellow py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-sans font-bold text-h3 md:text-3xl text-navy uppercase">
            Support the Mission
          </h2>
          <p className="text-navy/80 mt-2 max-w-xl mx-auto">
            Your generous giving enables us to spread the gospel, serve our
            community, and grow God's kingdom.
          </p>
          <div className="mt-6">
            <Link
              to="/giving"
              className="inline-block bg-navy text-white font-semibold rounded-button text-sm px-8 py-3 hover:bg-primary transition-colors"
            >
              Give Now
            </Link>
          </div>
        </div>
      </section>

      <PrayerCta />

      {/* Pastoral Team */}
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
      <WhiteContainer className="overscroll-x-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overscroll-x-none">
          <CardImage image={pastor} name="Pastor Ayodeji Adesina" title="(Lay Pastor)" />
          <CardImage image={elderKenny} name="Elder Kehinde Jegede" title="(First Elder)" />
          <CardImage image={elderWilson} name="Elder Wilson Chimezie" />
          <CardImage image={elderOlatunde} name="Elder Temitope Olatunde" />
          <CardImage image={elderwale} name="Elder Wale Oladipo" />
          <CardImage image={elderFikayo} name="Elder Fikayo Aremu" />
          <CardImage image={elderBisi} name="Elder Bisi Oyewole" />
        </div>
      </WhiteContainer>
    </div>
  );
}

export default HomePage;
