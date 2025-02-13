import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Item2() {
    const router = useRouter();
    const netflixUrl =
        'https://www.netflix.com/watch/81659034?trackId=255824129&tctx=0%2C0%2Cee0d5117-df59-4402-9134-e4f357982435-40594106%2Cee0d5117-df59-4402-9134-e4f357982435-40594106%7C2%2Cunknown%2C%2C%2CtitlesResults%2C%2CVideo%3A81659034%2CminiDpPlayButton';

    const handleClick = () => {
        window.open(netflixUrl, '_blank');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 relative">
            {/* Decorative Element on the Left */}
            <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-pink-300 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>

            {/* Back Button in top left using pink colors */}
            <button
                onClick={() => router.push('/home')}
                className="absolute top-4 left-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded shadow-md"
            >
                Back to Home
            </button>

            <h1 className="text-3xl font-bold mb-6">Item 2: Netflix Preview</h1>
            <div className="relative max-w-4xl w-full cursor-pointer" onClick={handleClick}>
                {/* Ensure your preview image (preview.jpg) is in the /public/images folder */}
                <Image
                    src="/images/preview.jpg"
                    alt="Netflix Movie Preview"
                    width={640}
                    height={360}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 opacity-75" viewBox="0 0 84 84">
                        <circle cx="42" cy="42" r="42" fill="#ec4899" opacity="0.5" />
                        <polygon points="33,28 33,56 57,42" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
