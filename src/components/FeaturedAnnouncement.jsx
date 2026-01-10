import { useEffect, useState } from "react";
import announcementsFallback from "../data/announcements";
import { fetchJson } from "../lib/fetchData";

const imageMap = Object.fromEntries(
  announcementsFallback.map((a) => [a.id, a.image])
);

const FeaturedAnnouncement = () => {
  const [items, setItems] = useState(announcementsFallback);

  useEffect(() => {
    (async () => {
      const data = await fetchJson("/data/announcements.json");
      if (Array.isArray(data) && data.length) {
        // Merge image from map if not provided
        setItems(
          data.map((d) => ({
            ...d,
            image: d.image || imageMap[d.id] || announcementsFallback[0].image,
          }))
        );
      }
    })();
  }, []);

  return (
    <section className="bg-navy py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        <header className="text-center mb-8">
          <h3 className="text-white font-bold uppercase text-h3 md:text-3xl">
            Featured Announcement
          </h3>
          <p className="text-white/80 text-small">
            Our weekly programs and events
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-card overflow-hidden shadow-card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[16/9] object-fill object-center"
              />
              <div className="p-4">
                <h4 className="text-primary font-bold text-lg md:text-xl">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
                <div className="mt-3 text-right">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block text-navy bg-accent-yellow rounded-button text-xs font-semibold px-3 py-1 hover:brightness-110"
                    aria-label={`${item.title} details`}
                  >
                    {item.footer}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnnouncement;
