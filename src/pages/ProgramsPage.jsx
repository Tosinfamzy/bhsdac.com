import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import BlackContainer from "../components/BlackContainer";
import SectionHeader from "../components/shared/SectionHeader";
import CTAButton from "../components/shared/CTAButton";
import programs from "../data/programs";
import { FiClock, FiMapPin, FiVideo } from "react-icons/fi";

// Program creative images (optimized WebP)
import sabbathImg from "../assets/optimized/programs/Generic DesignsWorship with Us.jpg.webp";
import midweekImg from "../assets/optimized/programs/Generic DesignsMid-Week Service.jpg.webp";
import prayerImg from "../assets/optimized/programs/Generic DesignsMorning Prayer.jpg.webp";

const programImages = {
  "sabbath-celebration": sabbathImg,
  "digging-deep": midweekImg,
  "prayer-line": prayerImg,
};

const ProgramCard = ({ program, index }) => {
  const Container = index % 2 === 0 ? WhiteContainer : BlackContainer;
  const isLight = index % 2 !== 0;

  return (
    <Container>
      <div id={program.id} className="scroll-mt-24">
        <SectionHeader
          title={program.title}
          subtitle={program.subtitle}
          light={isLight}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <p className={`text-body leading-relaxed ${isLight ? "text-white/90" : "text-gray-700"}`}>
              {program.description}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <FiClock className={`w-5 h-5 ${isLight ? "text-accent-yellow" : "text-primary"}`} />
                <div>
                  {program.times.map((t, i) => (
                    <p key={i} className={`text-sm ${isLight ? "text-white/80" : "text-gray-600"}`}>
                      <span className="font-semibold">{t.label}:</span> {t.time}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className={`w-5 h-5 ${isLight ? "text-accent-yellow" : "text-primary"}`} />
                <p className={`text-sm ${isLight ? "text-white/80" : "text-gray-600"}`}>
                  {program.location}
                </p>
              </div>
              <p className={`text-sm font-semibold ${isLight ? "text-accent-yellow" : "text-accent-blue"}`}>
                {program.schedule}
              </p>
            </div>
            {program.zoomLink && (
              <div className="mt-6">
                <CTAButton href={program.zoomLink} variant={isLight ? "secondary" : "primary"}>
                  <span className="flex items-center gap-2">
                    <FiVideo className="w-4 h-4" />
                    Join on Zoom
                  </span>
                </CTAButton>
              </div>
            )}
          </div>
          <div className="rounded-card overflow-hidden">
            <img
              src={programImages[program.id]}
              alt={program.title}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const ProgramsPage = () => {
  usePageMeta("Programs", "Weekly worship programs including Sabbath Celebration, Midweek Bible Study, and Daily Morning Prayers.");
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <div>
      <PageHero
        title="Our Programs"
        subtitle="Join us throughout the week for worship, study, and prayer"
      />

      {/* Quick nav strip */}
      <WhiteContainer>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {programs.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className="group border border-gray-200 rounded-card p-4 hover:border-primary hover:shadow-card transition-all text-center"
            >
              <h3 className="font-bold text-primary group-hover:text-accent-blue transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-accent-yellow font-semibold mt-1">
                {program.schedule}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {program.times.map((t) => t.time).join(" | ")}
              </p>
            </a>
          ))}
        </div>
      </WhiteContainer>

      {/* Program sections */}
      {programs.map((program, index) => (
        <ProgramCard key={program.id} program={program} index={index} />
      ))}
    </div>
  );
};

export default ProgramsPage;
