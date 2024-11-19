import React from "react";
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <a href="/" className="text-blue-500">
        Go back to Home
      </a>
    </div>
  );
};

export default PageNotFound;
