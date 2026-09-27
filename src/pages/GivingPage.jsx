import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import BlackContainer from "../components/BlackContainer";
import SectionHeader from "../components/shared/SectionHeader";
import CTAButton from "../components/shared/CTAButton";
import { givingFaqs, scripture } from "../data/giving";
import bankAccountImg from "../assets/optimized/bank_account.webp";
import { FiChevronDown, FiHeart } from "react-icons/fi";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-primary">{question}</span>
        <FiChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="text-gray-600 text-sm pb-4 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

const GivingPage = () => {
  usePageMeta("Giving", "Support the mission of Blessed Hope SDA Church through tithes, offerings, and donations by card or bank transfer.");
  return (
    <div>
      <PageHero
        title="Giving"
        subtitle="Support the Mission of Blessed Hope"
      />

      {/* Scripture */}
      <section className="bg-accent-yellow py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-navy text-lg md:text-xl italic font-medium">
            "{scripture.text}"
          </p>
          <p className="text-navy/70 font-semibold mt-3">
            — {scripture.reference}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <WhiteContainer>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <FiHeart className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-bold text-h3 md:text-3xl text-primary">
            Your Generosity Makes a Difference
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Your tithes and offerings support our church's mission to spread the
            gospel, care for our community, and nurture spiritual growth. Every
            contribution, no matter the size, helps advance God's work through
            Blessed Hope SDA Church.
          </p>
        </div>
      </WhiteContainer>

      {/* Giving Options */}
      <BlackContainer>
        <SectionHeader
          title="Ways to Give"
          subtitle="Choose the method that works best for you"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card payment (SumUp) */}
          <div className="bg-white/5 border border-white/10 rounded-card p-6">
            <h3 className="font-bold text-xl text-white mb-3">Give Online by Card</h3>
            <p className="text-white/70 text-sm mb-6">
              Make a donation, send an offering, or pay your tithe securely by debit or credit card.
            </p>
            <div className="text-center mt-4">
              <CTAButton href="https://pay.sumup.com/b2c/QOBBHVPK">
                Give Online
              </CTAButton>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="bg-white/5 border border-white/10 rounded-card p-6">
            <h3 className="font-bold text-xl text-white mb-3">Bank Transfer</h3>
            <p className="text-white/70 text-sm mb-6">
              You can give directly via bank transfer. Please use your name as the payment reference.
            </p>

            {/* Tithes & Offerings */}
            <p className="text-accent-yellow text-xs font-bold uppercase tracking-wider mb-3">
              Tithes & Offerings
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/50 text-xs uppercase tracking-wider">Account Name</p>
                <p className="text-white font-semibold mt-1">Blessed Hope SDA Church</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Sort Code</p>
                  <p className="text-white font-semibold mt-1">40-02-34</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Account Number</p>
                  <p className="text-white font-semibold mt-1">21411640</p>
                </div>
              </div>
            </div>

            {/* Special Projects */}
            <p className="text-accent-yellow text-xs font-bold uppercase tracking-wider mb-3">
              Special Projects
            </p>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/50 text-xs uppercase tracking-wider">Account Name</p>
                <p className="text-white font-semibold mt-1">Blessed Hope SDA Church</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Sort Code</p>
                  <p className="text-white font-semibold mt-1">40-02-34</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Account Number</p>
                  <p className="text-white font-semibold mt-1">72264617</p>
                </div>
              </div>
            </div>
            <p className="text-white/50 text-xs mt-4">
              Convention T-shirts, books, and other special project contributions.
            </p>
          </div>
        </div>
      </BlackContainer>

      {/* Bank Account Details Image */}
      <WhiteContainer>
        <SectionHeader title="Account Details" />
        <div className="max-w-2xl mx-auto">
          <img
            src={bankAccountImg}
            alt="Blessed Hope SDA Church Bank Account Details"
            className="w-full rounded-card shadow-card"
          />
        </div>
      </WhiteContainer>

      {/* FAQ */}
      <WhiteContainer>
        <SectionHeader title="Frequently Asked Questions" />
        <div className="max-w-2xl mx-auto">
          {givingFaqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </WhiteContainer>

      {/* Contact CTA */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-bold text-xl text-white">
            Questions about giving?
          </h2>
          <p className="text-white/70 mt-2">
            We're here to help. Reach out to us anytime.
          </p>
          <div className="mt-6">
            <CTAButton to="/contact" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GivingPage;
