import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import BlackContainer from "../components/BlackContainer";
import SectionHeader from "../components/shared/SectionHeader";
import CTAButton from "../components/shared/CTAButton";
import outreachActivities from "../data/outreach";

// Optimized sabbath photos for gallery (swap for outreach-specific photos later)
import gallery1 from "../assets/optimized/sabbath/IMG_0417_edited.webp";
import gallery2 from "../assets/optimized/sabbath/IMG_0439_edited.webp";
import gallery3 from "../assets/optimized/sabbath/IMG_0466_edited.webp";
import gallery4 from "../assets/optimized/sabbath/IMG_0482_edited.webp";
import gallery5 from "../assets/optimized/sabbath/IMG_0121_edited.webp";
import gallery6 from "../assets/optimized/sabbath/IMG_0152_edited.webp";
import gallery7 from "../assets/optimized/sabbath/IMG_0174_edited.webp";
import gallery8 from "../assets/optimized/sabbath/IMG_0199_edited.webp";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];


const CommunityOutreachPage = () => {
  usePageMeta("Community Outreach", "Serving our neighbours through care home visits, Christmas gift giving, and community support programmes.");
  return (
    <div>
      <PageHero
        title="Community Outreach"
        subtitle="Serving Our Neighbours with Love"
      />

      {/* Mission Statement */}
      <WhiteContainer>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Blessed Hope, we believe faith is lived out through service. Our
            community outreach programmes are designed to meet practical needs,
            build relationships, and share God's love with those around us. We
            are committed to making a tangible difference in the lives of our
            neighbours.
          </p>
        </div>
      </WhiteContainer>

      {/* Activities Grid */}
      <BlackContainer>
        <SectionHeader
          title="Our Activities"
          subtitle="How we serve our community"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outreachActivities.map((activity) => (
            <article
              key={activity.id}
              className="bg-white rounded-card overflow-hidden shadow-card"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full aspect-[4/3] object-cover object-top"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg text-primary">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </BlackContainer>

      {/* Photo Gallery Placeholder */}
      <WhiteContainer>
        <SectionHeader
          title="Gallery"
          subtitle="Moments from our outreach activities"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="aspect-square rounded-card overflow-hidden">
              <img
                src={src}
                alt={`Church activity ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </WhiteContainer>

      {/* Get Involved CTA */}
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-bold text-h3 md:text-3xl text-white uppercase">
            Want to Serve With Us?
          </h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            Whether you can give your time, skills, or resources, there is a
            place for you in our outreach ministry. Get in touch to find out how
            you can make a difference.
          </p>
          <div className="mt-6">
            <CTAButton to="/contact">Get Involved</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityOutreachPage;
