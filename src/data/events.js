// Helper to get next occurrence of a weekday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const getNextWeekday = (weekday) => {
  const today = new Date();
  const todayDay = today.getDay();
  const daysUntil = (weekday - todayDay + 7) % 7 || 7; // If today is the day, get next week
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntil);
  return nextDate.toISOString().split("T")[0];
};

// Get tomorrow's date for daily events
const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
};

// Get first Saturday of next month for monthly prayer
const getFirstSaturdayOfMonth = () => {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const dayOfWeek = nextMonth.getDay();
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  nextMonth.setDate(nextMonth.getDate() + daysUntilSaturday);
  return nextMonth.toISOString().split("T")[0];
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

export default events;

