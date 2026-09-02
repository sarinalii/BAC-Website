import { Link } from "react-router";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-6xl mb-4 text-gray-900">404</h1>
        <h2 className="text-3xl mb-4 text-gray-700">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-teal-600 hover:bg-teal-700">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
