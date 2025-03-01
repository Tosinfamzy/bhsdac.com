const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">
        Welcome to Blessed Hope SDA Church
      </h1>
      <p className="text-xl mb-6 text-gray-700">
        Join us for worship every Saturday @ our Worship Centre, Priory Hill,
        Dartford, DA1 2ES.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-4xl">
        <p className="text-lg mb-4 text-gray-800">
          At BHSDAC, we consider everyone part of God’s family, so from your
          very first visit, you are considered a member of the family. We hope
          that from being a visiting friend, you may progress to becoming a
          participating member.
        </p>
        <p className="text-lg mb-4 text-gray-800">
          If you are new to Christian principles, we can arrange formal Bible
          study sessions for you which will culminate in baptism by immersion.
          If you are interested in studying the Word of God or if you desire to
          be baptised in the Biblical way (baptism by immersion), please go to
          “Contact Us” and get in touch with us. We are always happy to make new
          brothers or sisters!
        </p>
        <p className="text-lg mb-4 text-gray-800">
          Also, communication strengthens family bonds, so we have regular
          motivating messages that we send out to our members and friends:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 text-gray-800">
          <li>
            Text Messages – start each Sabbath (Saturday) morning with our
            inspiring text message that will empower you to face each week with
            confidence;
          </li>
          <li>
            E-nspiration – be encouraged from time to time via email messages;
          </li>
          <li>
            Prayer Bulletins - These are a list of powerful prayer points sent
            out to all members each week on Wednesdays.
          </li>
        </ul>
        <p className="text-lg mb-4 text-gray-800">
          To subscribe for these services, please send your mobile number and
          email address to info@bhsdac.org.uk (for more details on getting in
          touch with us, go to “Contact Us”). You may also register your friends
          and family for these services.
        </p>
      </div>
    </div>
  );
};

export default About;
