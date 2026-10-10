import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import CTAButton from "../components/shared/CTAButton";
import SectionHeader from "../components/shared/SectionHeader";
import events, { specialEvents } from "../data/events";
import q4Flyer from "../assets/optimized/events/q4-2026-events.webp";

// Parse "YYYY-MM-DD" as a local date so the day never shifts across timezones.
const toLocalDate = (iso) => new Date(`${iso}T00:00:00`);

const formatDates = (dates) => {
  const parsed = dates.map(toLocalDate);
  const month = parsed[0].toLocaleString("en-GB", { month: "long" });
  if (parsed.length === 1) {
    const weekday = parsed[0].toLocaleString("en-GB", { weekday: "long" });
    return `${weekday} ${parsed[0].getDate()} ${month}`;
  }
  const days = parsed.map((d) => d.getDate());
  return `${days.slice(0, -1).join(", ")} & ${days.at(-1)} ${month}`;
};

const EventsPage = () => {
  usePageMeta();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingSpecial = specialEvents.filter(
    (event) => toLocalDate(event.dates.at(-1)) >= today
  );

  return (
    <div>
      <PageHero
        title="Events"
        subtitle="Upcoming events and gatherings at Blessed Hope"
      />

      {upcomingSpecial.length > 0 && (
        <WhiteContainer>
          <SectionHeader
            title="Upcoming Special Events"
            subtitle="Mark your calendar for these special days"
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-5xl mx-auto items-start">
            <ul className="md:col-span-3">
              {upcomingSpecial.map((event) => {
                const first = toLocalDate(event.dates[0]);
                return (
                  <li
                    key={event.id}
                    className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-accent-yellow rounded-card flex flex-col items-center justify-center text-navy">
                      <span className="text-xl font-bold leading-none">{first.getDate()}</span>
                      <span className="text-xs uppercase mt-0.5">
                        {first.toLocaleString("en-GB", { month: "short" })}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary">{event.title}</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{formatDates(event.dates)}</p>
                      {event.detail && (
                        <p className="text-sm text-accent-blue font-semibold mt-0.5">{event.detail}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            <img
              src={q4Flyer}
              alt="Blessed Hope Q4 events flyer listing the special events from October to December"
              className="md:col-span-2 w-full max-w-sm mx-auto rounded-card shadow-card"
              loading="lazy"
            />
          </div>
        </WhiteContainer>
      )}

      <WhiteContainer>
        <SectionHeader title="Regular Gatherings" subtitle="Join us throughout the week" />
        <div className="max-w-3xl mx-auto">
          {events.map((event) => {
            const date = toLocalDate(event.date);
            const day = date.getDate();
            const month = date.toLocaleString("en-GB", { month: "short" });

            return (
              <div
                key={event.id}
                className="flex items-start gap-4 py-6 border-b border-gray-200 last:border-0"
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-card flex flex-col items-center justify-center text-white">
                  <span className="text-xl font-bold leading-none">{day}</span>
                  <span className="text-xs uppercase mt-0.5">{month}</span>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg text-primary">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{event.time}</p>
                  {event.recurring && (
                    <span className="inline-block mt-1 text-xs text-accent-blue font-semibold">
                      {event.recurring}
                    </span>
                  )}
                  {event.link && (
                    <div className="mt-3">
                      <CTAButton href={event.link}>Join on Zoom</CTAButton>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">
            For more information about our events, please contact us at{" "}
            <a
              href="mailto:info@bhsdac.org.uk"
              className="text-primary font-semibold hover:underline"
            >
              info@bhsdac.org.uk
            </a>
          </p>
        </div>
      </WhiteContainer>
    </div>
  );
};

export default EventsPage;
