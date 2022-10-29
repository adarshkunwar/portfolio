import React from "react";

const NoPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex-col items-center">
        <div className="text-4xl">Error</div>
        <div className="text-8xl text-red-500">404</div>
      </div>
    </div>
  );
};

export default NoPage;
