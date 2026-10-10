import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import { CONTACT_ENDPOINT } from "../data/constants";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import SectionHeader from "../components/shared/SectionHeader";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const ContactPage = () => {
  usePageMeta();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (formData.name.trim().length < 2) errs.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Please enter a valid email address.";
    if (formData.message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
    if (formData.message.trim().length > 1000) errs.message = "Message must be under 1000 characters.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData._honeypot) return;

    const errs = validate();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      <WhiteContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="font-bold text-xl text-primary mb-6">
              Get In Touch
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600 text-sm">
                    Priory Hill, Dartford, DA1 2ES
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600 text-sm">01322 838191</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a
                    href="mailto:pastor@bhsdac.org.uk"
                    className="text-primary text-sm hover:underline"
                  >
                    pastor@bhsdac.org.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Service Times</p>
                  <p className="text-gray-600 text-sm">
                    Sabbath School: 10:00 AM (Saturdays)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Divine Service: 11:15 AM (Saturdays)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="font-semibold text-gray-800 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/blessedhope.sdac"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/blessedhope.sda/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://twitter.com/blessedhopesda?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors"
                  aria-label="Twitter/X"
                >
                  <FiTwitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@BHSDAC"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors"
                  aria-label="YouTube"
                >
                  <FiYoutube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5!2d0.2167!3d51.4467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPriory+Hill%2C+Dartford+DA1+2ES!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-card"
                title="Church Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-bold text-xl text-primary mb-6">
              Send Us a Message
            </h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-card p-6 text-center">
                <p className="text-green-800 font-semibold text-lg">
                  Thank you for your message!
                </p>
                <p className="text-green-600 text-sm mt-2">
                  We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "general", message: "" });
                  }}
                  className="mt-4 text-primary text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from humans, bots fill it */}
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot || ""}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${fieldErrors.name ? "border-red-400" : "border-gray-300"}`}
                    required
                  />
                  {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${fieldErrors.email ? "border-red-400" : "border-gray-300"}`}
                    required
                  />
                  {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="giving">Giving Query</option>
                    <option value="youth">Youth Programmes</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={1000}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${fieldErrors.message ? "border-red-400" : "border-gray-300"}`}
                    required
                  />
                  {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
                </div>
                {error && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-button hover:bg-accent-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </WhiteContainer>
    </div>
  );
};

export default ContactPage;
