import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg">The page you are looking for doesn't exist.</p>
      <Link to="/" className="mt-4 text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
