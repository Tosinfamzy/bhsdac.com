import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";

const AboutPage = () => {
  usePageMeta();
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="About Us"
        subtitle="Welcome to Blessed Hope SDA Church"
      />

      <WhiteContainer>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-xl text-gray-700">
              Join us for worship every Saturday @ our Worship Centre, Priory Hill,
              Dartford, DA1 2ES.
            </p>
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-lg text-gray-800 leading-relaxed">
              At BHSDAC, we consider everyone part of God's family, so from your
              very first visit, you are considered a member of the family. We hope
              that from being a visiting friend, you may progress to becoming a
              participating member.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              If you are new to Christian principles, we can arrange formal Bible
              study sessions for you which will culminate in baptism by immersion.
              If you are interested in studying the Word of God or if you desire to
              be baptised in the Biblical way (baptism by immersion), please go to
              "Contact Us" and get in touch with us. We are always happy to make new
              brothers or sisters!
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Also, communication strengthens family bonds, so we have regular
              motivating messages that we send out to our members and friends:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start animate-fade-in-left" style={{ animationDelay: "0.7s" }}>
                <span className="text-primary mr-2">•</span>
                <span className="text-lg text-gray-800">
                  Text Messages – start each Sabbath (Saturday) morning with our
                  inspiring text message that will empower you to face each week with
                  confidence;
                </span>
              </li>
              <li className="flex items-start animate-fade-in-left" style={{ animationDelay: "0.9s" }}>
                <span className="text-primary mr-2">•</span>
                <span className="text-lg text-gray-800">
                  E-nspiration – be encouraged from time to time via email messages;
                </span>
              </li>
              <li className="flex items-start animate-fade-in-left" style={{ animationDelay: "1.1s" }}>
                <span className="text-primary mr-2">•</span>
                <span className="text-lg text-gray-800">
                  Prayer Bulletins - These are a list of powerful prayer points sent
                  out to all members each week on Wednesdays.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-800 leading-relaxed animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
              To subscribe for these services, please send your mobile number and
              email address to info@bhsdac.org.uk (for more details on getting in
              touch with us, go to "Contact Us"). You may also register your friends
              and family for these services.
            </p>
          </div>
        </div>
      </WhiteContainer>
    </div>
  );
};

export default AboutPage;
