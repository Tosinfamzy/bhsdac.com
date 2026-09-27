const navigation = [
  { label: "Home", path: "/" },
  {
    label: "Worship",
    children: [
      { label: "Programs", path: "/programs" },
      { label: "Events", path: "/events" },
      { label: "Annual Convention", path: "/convention" },
    ],
  },
  { label: "Media", path: "/media" },
  {
    label: "Ministries",
    children: [
      { label: "Community Outreach", path: "/community-outreach" },
      { label: "Empowerment", path: "/empowerment" },
      { label: "Adventurer & Pathfinder", path: "/adventurer-pathfinder" },
    ],
  },
  { label: "Giving", path: "/giving" },
  { label: "Contact", path: "/contact" },
];

export default navigation;
