import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-4xl font-bold text-primary">Something went wrong</h1>
          <p className="text-gray-600 mt-4">
            We're sorry, an unexpected error occurred.
          </p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="mt-6 inline-block text-navy bg-accent-yellow font-semibold rounded-button text-sm px-6 py-3 hover:brightness-110"
          >
            Go Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
