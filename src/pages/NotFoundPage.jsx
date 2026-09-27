import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

const NotFoundPage = () => {
  usePageMeta("Page Not Found");
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page not found</p>
      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block text-navy bg-accent-yellow font-semibold rounded-button text-sm px-6 py-3 hover:brightness-110"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
