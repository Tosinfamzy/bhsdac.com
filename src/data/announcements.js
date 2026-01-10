import ann1 from "../assets/carousel/Website Banners (Divine Encounter).png";
import ann2 from "../assets/carousel/Website Banners (reserved seat).png";
import ann3 from "../assets/carousel/Website Banners (Welcome).png";

const announcements = [
  {
    id: "divine-encounter",
    title: "Divine Encounter",
    subtitle: "Monthly Prayer",
    footer: "Every Month",
    image: ann1,
    href: "/events",
  },
  {
    id: "midweek-service",
    title: "Midweek Service",
    subtitle: "Wednesdays @ 8pm (UK Time)",
    footer: "Join on Zoom",
    image: ann2,
    href: "https://us02web.zoom.us/j/8940993893?pwd=K3JweFJqcE1BUVQrakhXMzBTdFFrdz09",
  },
  {
    id: "morning-prayers",
    title: "Morning Prayers",
    subtitle: "Daily @ 6:00am (UK Time)",
    footer: "Join on Zoom",
    image: ann3,
    href: "https://us05web.zoom.us/j/81218110088?pwd=a3hpNi8wWE5TNDd6T1FZT0E0d2xMZz09",
  },
];

export default announcements;

