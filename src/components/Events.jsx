import events from "../data/events";

const Events = () => {
  const items = events;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-center">
      <h1 className="text-3xl font-bold mb-4 text-primary">Upcoming Events</h1>
      <div className="w-full max-w-2xl">
        {items.map((event) => (
          <div
            key={event.id}
            className="flex justify-between items-center border-b border-gray-200 py-4"
          >
            <div className="text-left">
              <p className="text-lg font-bold text-primary">{event.title}</p>
              <p className="text-sm text-gray-600">{event.time}</p>
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-navy bg-accent-yellow rounded-button text-xs font-semibold px-3 py-1 hover:brightness-110"
                >
                  Join on Zoom
                </a>
              )}
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">
                {new Date(event.date).toDateString()}
              </p>
              {event.recurring && (
                <p className="text-xs text-gray-500">{event.recurring}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg mt-8">
        For more information about our events, please contact us at
        info@bhsdac.org.uk.
      </p>
    </div>
  );
};

export default Events;
