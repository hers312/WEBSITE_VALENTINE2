import React from 'react';
import { useRouter } from 'next/router';

export default function Item3() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Decorative Element on the Left */}
      <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-pink-300 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41.81 
            4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 
            5.42 22 8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z" />
        </svg>
      </div>

      {/* Decorative Element on the Right */}
      <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-pink-300 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41.81 
            4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 
            5.42 22 8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z" />
        </svg>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push('/home')}
        className="absolute top-4 left-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded shadow-md"
      >
        Back to Home
      </button>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">Item 3: YouTube Video</h1>
        {/* Responsive YouTube Video Embed */}
        <div className="max-w-4xl w-full">
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/aGSKrC7dGcY?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
