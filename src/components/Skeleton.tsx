import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
    <div className="h-80 bg-gray-300 animate-pulse"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-300 rounded-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 w-1/2 mt-2 animate-pulse"></div>
      <div className="flex items-center justify-between mt-4">
        <div className="h-4 w-1/4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="flex gap-2">
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
    </div>
  );
}
