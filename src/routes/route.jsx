import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactForm from "../components/ContactForm"; // Import the ContactForm component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactForm />, // Add the new route for ContactForm
  },
]);
