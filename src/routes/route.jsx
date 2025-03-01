import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout"; // Import the Layout component

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactForm />
      </Layout>
    ),
  },
]);
