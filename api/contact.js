// Contact form handler: validates the submission and emails it to the church via Resend.
// Env: RESEND_API_KEY (required), CONTACT_TO / CONTACT_FROM (optional overrides).

const TO = process.env.CONTACT_TO || "bhsdacpastors@aol.co.uk";
const FROM = process.env.CONTACT_FROM || "Blessed Hope Website <website@bhsdac.com>";

const SUBJECTS = {
  general: "General Enquiry",
  prayer: "Prayer Request",
  volunteer: "Volunteer",
  giving: "Giving Query",
  youth: "Youth Programmes",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name = "", email = "", subject = "general", message = "", _honeypot } = req.body || {};

  // Bots fill the hidden field; pretend success so they don't retry.
  if (_honeypot) return res.status(200).json({ ok: true });

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanMessage = String(message).trim();

  if (cleanName.length < 2 || cleanName.length > 100) {
    return res.status(400).json({ error: "Please enter your name." });
  }
  if (!EMAIL_RE.test(cleanEmail) || cleanEmail.length > 254) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (cleanMessage.length < 10 || cleanMessage.length > 1000) {
    return res.status(400).json({ error: "Message must be between 10 and 1000 characters." });
  }

  const topic = SUBJECTS[subject] || SUBJECTS.general;

  if (!process.env.RESEND_API_KEY) {
    console.error("contact: RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email is not configured." });
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: cleanEmail,
      subject: `[Website] ${topic} from ${cleanName}`,
      text: `${cleanMessage}\n\n---\nFrom: ${cleanName} <${cleanEmail}>\nTopic: ${topic}\nSent via the contact form on bhsdac.com — reply to this email to respond.`,
    }),
  });

  if (!resendRes.ok) {
    console.error("contact: Resend error", resendRes.status, await resendRes.text());
    return res.status(502).json({ error: "Could not send message." });
  }

  return res.status(200).json({ ok: true });
}
