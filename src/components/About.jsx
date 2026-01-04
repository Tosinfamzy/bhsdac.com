import { motion } from "framer-motion";
import heroImage from "../assets/hero/heroImageTouched.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Blessed Hope SDA Church"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Welcome to Blessed Hope SDA Church
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-700">
            Join us for worship every Saturday @ our Worship Centre, Priory Hill,
            Dartford, DA1 2ES.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-8"
        >
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
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-start"
            >
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-lg text-gray-800">
                Text Messages – start each Sabbath (Saturday) morning with our
                inspiring text message that will empower you to face each week with
                confidence;
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex items-start"
            >
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-lg text-gray-800">
                E-nspiration – be encouraged from time to time via email messages;
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex items-start"
            >
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-lg text-gray-800">
                Prayer Bulletins - These are a list of powerful prayer points sent
                out to all members each week on Wednesdays.
              </span>
            </motion.li>
          </ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-lg text-gray-800 leading-relaxed"
          >
            To subscribe for these services, please send your mobile number and
            email address to info@bhsdac.org.uk (for more details on getting in
            touch with us, go to "Contact Us"). You may also register your friends
            and family for these services.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
