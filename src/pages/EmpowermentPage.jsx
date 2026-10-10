import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import BlackContainer from "../components/BlackContainer";
import SectionHeader from "../components/shared/SectionHeader";
import CTAButton from "../components/shared/CTAButton";
import VideoEmbed from "../components/shared/VideoEmbed";
import empowermentPillars from "../data/empowerment";

const EmpowermentPage = () => {
  usePageMeta();
  return (
    <div>
      <PageHero
        title="Empowerment"
        subtitle="Equipping Our Community for Life"
      />

      {/* Intro */}
      <WhiteContainer>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our Empowerment ministry provides practical resources, workshops,
            and support to help our community thrive. Through programmes focused
            on financial literacy, immigration guidance, and health & wellness,
            we aim to equip individuals and families with the tools they need to
            navigate life's challenges with confidence.
          </p>
        </div>
      </WhiteContainer>

      {/* Three Pillars */}
      <BlackContainer>
        <SectionHeader
          title="Our Focus Areas"
          subtitle="Three pillars of empowerment"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {empowermentPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white/5 border border-white/10 rounded-card p-6 text-center"
              >
                <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-bold text-xl text-white">{pillar.title}</h3>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  {pillar.description}
                </p>
                {pillar.youtubePlaylistId && (
                  <div className="mt-4">
                    <VideoEmbed
                      playlistId={pillar.youtubePlaylistId}
                      title={pillar.title}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </BlackContainer>

      {/* Coming Soon / Workshops */}
      <WhiteContainer>
        <SectionHeader
          title="Upcoming Workshops"
          subtitle="Stay tuned for our 2026 empowerment sessions"
        />
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-50 rounded-card p-10">
            <p className="text-gray-400 text-lg font-semibold">Coming Soon</p>
            <p className="text-gray-300 text-sm mt-2">
              Workshop dates and details will be announced here. Check back soon
              or follow us on social media for updates.
            </p>
          </div>
        </div>
      </WhiteContainer>

      {/* CTA */}
      <section className="bg-accent-yellow py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-bold text-h3 md:text-3xl text-navy uppercase">
            Need Support?
          </h2>
          <p className="text-navy/70 mt-3 max-w-xl mx-auto">
            If you need guidance in any of our focus areas, don't hesitate to
            reach out. We're here to help.
          </p>
          <div className="mt-6">
            <CTAButton to="/contact" variant="outline">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpowermentPage;
