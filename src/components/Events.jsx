const events = [
  { date: "2023-11-01", title: "Event 1", time: "10:00 AM" },
  { date: "2023-11-05", title: "Event 2", time: "2:00 PM" },
  { date: "2023-11-10", title: "Event 3", time: "6:00 PM" },
];

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-center">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="w-full max-w-2xl">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-300 py-4"
          >
            <div className="text-left">
              <p className="text-lg font-bold">{event.title}</p>
              <p className="text-sm text-gray-600">{event.time}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">
                {new Date(event.date).toDateString()}
              </p>
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
