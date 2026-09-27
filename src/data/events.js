// Format as "YYYY-MM-DD" in local time. toISOString() uses UTC, which shifts
// local-midnight dates back a day during BST.
const toISODate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

// Helper to get next occurrence of a weekday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const getNextWeekday = (weekday) => {
  const today = new Date();
  const todayDay = today.getDay();
  const daysUntil = (weekday - todayDay + 7) % 7 || 7; // If today is the day, get next week
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntil);
  return toISODate(nextDate);
};

// Get tomorrow's date for daily events
const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return toISODate(tomorrow);
};

// Get first Saturday of next month for monthly prayer
const getFirstSaturdayOfMonth = () => {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const dayOfWeek = nextMonth.getDay();
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  nextMonth.setDate(nextMonth.getDate() + daysUntilSaturday);
  return toISODate(nextMonth);
};

const events = [
  {
    id: "evt-1",
    date: getFirstSaturdayOfMonth(),
    title: "Monthly Prayer",
    time: "10:00 AM",
    recurring: "First Saturday of each month",
  },
  {
    id: "evt-2",
    date: getNextWeekday(3), // Wednesday
    title: "Midweek Service",
    time: "8:00 PM (UK Time)",
    link: "https://us02web.zoom.us/j/8940993893?pwd=K3JweFJqcE1BUVQrakhXMzBTdFFrdz09",
    recurring: "Every Wednesday",
  },
  {
    id: "evt-3",
    date: getTomorrow(),
    title: "Morning Prayers",
    time: "6:00 AM (UK Time)",
    link: "https://us05web.zoom.us/j/81218110088?pwd=a3hpNi8wWE5TNDd6T1FZT0E0d2xMZz09",
    recurring: "Daily",
  },
];

// One-off dated events from the quarterly programme flyer.
// `dates` lists every day the event runs; it drops off the page after the last one.
export const specialEvents = [
  { id: "q4-all-night-prayers", dates: ["2026-10-03"], title: "All Night Prayers" },
  { id: "q4-family-ministry-day", dates: ["2026-10-17"], title: "Family Ministry Day" },
  { id: "q4-health-ministry-day", dates: ["2026-10-24"], title: "Health Ministry Day" },
  { id: "q4-special-midweek-oct", dates: ["2026-10-28"], title: "Special Midweek Wednesday" },
  { id: "q4-harvest-thanksgiving", dates: ["2026-10-31"], title: "2026 Harvest Thanksgiving" },
  {
    id: "q4-revival-week",
    dates: ["2026-11-07", "2026-11-11", "2026-11-14"],
    title: "Revival Week",
    detail: "Theme: The Word",
  },
  { id: "q4-bible-study", dates: ["2026-11-28"], title: "Bible Study" },
  { id: "q4-divine-encounter", dates: ["2026-12-05"], title: "Divine Encounter" },
  { id: "q4-holy-communion", dates: ["2026-12-12"], title: "Holy Communion" },
  { id: "q4-special-midweek-dec", dates: ["2026-12-16"], title: "Special Midweek Wednesday" },
  { id: "q4-music-day", dates: ["2026-12-19"], title: "Music Day" },
  { id: "q4-cross-over-service", dates: ["2026-12-31"], title: "Cross Over Service" },
];

export default events;

