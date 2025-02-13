import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Item1Page() {
    const router = useRouter();
    const fileInputRef = useRef(null);

    // Load the user from localStorage
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // Redirect to login if no user is found
            router.push('/');
        }
    }, [router]);

    // Default gallery images (from your /images folder)
    const defaultImageCount = 40;
    const defaultImages = Array.from({ length: defaultImageCount }, (_, i) => `/images/gallery${i + 1}.jpg`);
    // Store all images in state (default + any added)
    const [images, setImages] = useState(defaultImages);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);

    // File upload: handle file selection
    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImages((prevImages) => [...prevImages, event.target.result]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    // Drag and drop: prevent default behavior and process files
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e) => {
        e.preventDefault();
        if (user && (user.role === 'admin' || user.role === 'user')) {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                Array.from(files).forEach((file) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        setImages((prevImages) => [...prevImages, event.target.result]);
                    };
                    reader.readAsDataURL(file);
                });
            }
        }
    };

    // Modal controls
    const openModal = (index) => {
        setSelectedImageIndex(index);
    };
    const closeModal = () => {
        setSelectedImageIndex(null);
    };
    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };
    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };
    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        const threshold = 50;
        if (diff > threshold) {
            nextImage();
        } else if (diff < -threshold) {
            prevImage();
        }
        setTouchStartX(null);
    };

    // Delete an image (admin only) with confirmation
    const handleDeleteImage = (index) => {
        if (user && user.role === 'admin') {
            if (window.confirm('Are you sure you want to delete this image?')) {
                setImages((prevImages) => prevImages.filter((_, i) => i !== index));
            }
        }
    };

    return (
        <div className="min-h-screen bg-white relative" onDragOver={handleDragOver} onDrop={handleDrop}>
            {/* Back to Home Button (top left) */}
            <button
                onClick={() => router.push('/home')}
                className="absolute top-4 left-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded shadow-md"
            >
                Back to Home
            </button>

            {/* Add Image Button (top right) for admin and user roles */}
            {user && (user.role === 'admin' || user.role === 'user') && (
                <button
                    onClick={() => fileInputRef.current.click()}
                    className="absolute top-4 right-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded shadow-md"
                >
                    Add Image
                </button>
            )}

            {/* Hidden file input for image upload */}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                multiple
                onChange={handleFileChange}
            />

            {/* Header */}
            <header className="bg-pink-400 text-white text-center p-4">
                <h1 className="text-3xl font-bold">Gallery</h1>
            </header>

            {/* Gallery Grid */}
            <main className="p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative bg-pink-200 rounded-lg shadow overflow-hidden cursor-pointer">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="h-48 w-full object-contain"
                                onClick={() => openModal(index)}
                            />
                            {/* Delete button shown only for admin */}
                            {user && user.role === 'admin' && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteImage(index);
                                    }}
                                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            {/* Full-Screen Image Modal */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="relative max-h-screen max-w-full">
                        {/* Close Modal Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl z-10"
                        >
                            &times;
                        </button>
                        {/* Previous Image Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
                        >
                            &#8249;
                        </button>
                        {/* Full-Size Image */}
                        <img
                            src={images[selectedImageIndex]}
                            alt={`Gallery image ${selectedImageIndex + 1}`}
                            className="max-h-screen w-auto mx-auto object-contain"
                        />
                        {/* Next Image Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
