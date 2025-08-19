import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white text-black">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg">The page you are looking for doesn't exist.</p>
      <Link to="/" className="mt-4 inline-block bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white px-4 py-2 rounded-md border border-black">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
