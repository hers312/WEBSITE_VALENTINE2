import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Set your deployment start time (adjust this to your actual deployment date/time)
const deploymentStartTime = new Date('2025-02-13T00:00:00');

export default function Item4() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([]);

    // Load the user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // If no user is logged in, redirect to the login page
            router.push('/');
        }
    }, [router]);

    // Redirect guest users away from this page
    useEffect(() => {
        if (user && user.role === 'guest') {
            router.push('/home');
        }
    }, [user, router]);

    // Load messages from localStorage (for demonstration purposes)
    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        setMessages(storedMessages);
    }, []);

    // Save messages to localStorage whenever they update
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages));
    }, [messages]);

    // Check if current time is within the 48-hour window after deployment
    const isWithin48Hours = () => {
        const now = Date.now();
        const windowEnd = deploymentStartTime.getTime() + 48 * 60 * 60 * 1000;
        return now < windowEnd;
    };

    const handleAddMessage = () => {
        if (!messageText.trim()) return;
        const newMessage = {
            id: Date.now(),
            text: messageText,
            timestamp: Date.now(),
            postedBy: user.username,
        };
        setMessages([...messages, newMessage]);
        setMessageText('');
    };

    const handleEditMessage = (id) => {
        const msg = messages.find((msg) => msg.id === id);
        const newText = prompt("Edit message:", msg.text);
        if (newText !== null) {
            setMessages(messages.map((m) => m.id === id ? { ...m, text: newText } : m));
        }
    };

    const handleDeleteMessage = (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            setMessages(messages.filter((m) => m.id !== id));
        }
    };

    // Wait for user to load before rendering the page
    if (!user) return null;

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
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                        4.42 3 7.5 3c1.74 0 3.41.81 
                        4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 
                        5.42 22 8.5c0 3.78-3.4 6.86-8.55 
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

                <h1 className="text-3xl font-bold mb-6 text-center">Messages</h1>

                {isWithin48Hours() ? (
                    <div>
                        {/* Only admin and regular users can add messages */}
                        {(user.role === 'admin' || user.role === 'user') && (
                            <div className="mb-6">
                                <textarea
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    placeholder="Write your message here..."
                                />
                                <button
                                    onClick={handleAddMessage}
                                    className="mt-3 w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
                                >
                                    Submit Message
                                </button>
                            </div>
                        )}

                        <div className="space-y-4">
                            {messages
                                .filter(msg => msg.timestamp < deploymentStartTime.getTime() + 48 * 60 * 60 * 1000)
                                .map((msg) => (
                                    <div key={msg.id} className="border p-4 rounded shadow-sm bg-white">
                                        <p className="text-lg">{msg.text}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Posted by: {msg.postedBy} at {new Date(msg.timestamp).toLocaleString()}
                                        </p>
                                        {/* Only admin users can edit or delete messages */}
                                        {user.role === 'admin' && (
                                            <div className="mt-2 flex space-x-2">
                                                <button
                                                    onClick={() => handleEditMessage(msg.id)}
                                                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteMessage(msg.id)}
                                                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">The message posting window has closed.</p>
                )}
            </div>
        </div>
    );
}
