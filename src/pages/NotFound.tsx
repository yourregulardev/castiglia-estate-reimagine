
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-light">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button asChild className="bg-gold hover:bg-gold-light text-navy font-medium">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
