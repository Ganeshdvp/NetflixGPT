import React from "react";

export const Shimmer = () => {
  return (
  <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center space-y-6 p-4 animate-pulse">
  
  {/* Main Hero / Video Block */}
  <div className="w-full max-w-4xl h-80 sm:h-96 md:h-[500px] rounded-lg bg-gray-800"></div>

  {/* Title placeholder */}
  <div className="w-3/4 sm:w-2/3 h-6 rounded bg-gray-800"></div>

  {/* Subtitle / info placeholder */}
  <div className="w-1/2 sm:w-1/3 h-4 rounded bg-gray-800"></div>

  {/* Optional short line for extra info */}
  <div className="w-1/4 h-4 rounded bg-gray-800"></div>

</div>
  );
};
