import React from 'react';
import { useRouter } from 'next/router';

export default function Item6() {
    const router = useRouter();

    // Sample dates to display
    const dates = [
        "11-12-2006 Urodziny Anastazji!!",
        "12-12-2024 Zostalem chlopakiem Anastazji",
        "26-11-2024 Pierwsze spotkanie",

    ];

    return (
        <div className="relative min-h-screen bg-gray-50">
            {/* Decorative Element on the Right */}
            <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-pink-300 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
            4.5 2.09C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z" />
                </svg>
            </div>

            {/* Decorative Element on the Left */}
            <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-pink-300 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
            4.5 2.09C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z" />
                </svg>
            </div>

            {/* Main container */}
            <div className="max-w-2xl mx-auto p-8">
                {/* Back to Home Button */}
                <button
                    onClick={() => router.push('/home')}
                    className="absolute top-4 left-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded shadow-md"
                >
                    Back to Home
                </button>

                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-pink-700">Important Dates</h1>
                </header>

                {/* List of Dates */}
                <ul className="space-y-4">
                    {dates.map((date, index) => (
                        <li
                            key={index}
                            className="p-4 bg-white border border-gray-200 rounded shadow-sm text-center text-lg text-gray-800"
                        >
                            {date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
