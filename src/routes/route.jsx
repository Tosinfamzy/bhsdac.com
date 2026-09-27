import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ProgramsPage = lazy(() => import("../pages/ProgramsPage"));
const MediaPage = lazy(() => import("../pages/MediaPage"));
const CommunityOutreachPage = lazy(() => import("../pages/CommunityOutreachPage"));
const EmpowermentPage = lazy(() => import("../pages/EmpowermentPage"));
const AdventurerPathfinderPage = lazy(() => import("../pages/AdventurerPathfinderPage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const GivingPage = lazy(() => import("../pages/GivingPage"));
const ConventionPage = lazy(() => import("../pages/ConventionPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const Loader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const page = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: page(HomePage) },
      { path: "/about", element: page(AboutPage) },
      { path: "/programs", element: page(ProgramsPage) },
      { path: "/media", element: page(MediaPage) },
      { path: "/community-outreach", element: page(CommunityOutreachPage) },
      { path: "/empowerment", element: page(EmpowermentPage) },
      { path: "/adventurer-pathfinder", element: page(AdventurerPathfinderPage) },
      { path: "/events", element: page(EventsPage) },
      { path: "/giving", element: page(GivingPage) },
      { path: "/convention", element: page(ConventionPage) },
      { path: "/contact", element: page(ContactPage) },
      { path: "*", element: page(NotFoundPage) },
    ],
  },
]);
