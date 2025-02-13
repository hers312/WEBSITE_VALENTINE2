import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function LoginPage() {
    const router = useRouter()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    // Hard-coded credentials mapping for demonstration purposes.
    // In a production environment, you'd validate these on a server or via an API.
    const userCredentials = {
        admin: { password: 'adminPassword', role: 'admin' },
        anastazja: { password: 'anastazja123', role: 'user' },
        gosc: { password: 'gosc123', role: 'guest' },
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Check if the provided login exists in our credentials mapping
        if (userCredentials[login] && password === userCredentials[login].password) {
            // Create a user object with the role from the mapping
            const user = {
                username: login,
                role: userCredentials[login].role,
            }
            // Store the user object in localStorage so that it can be retrieved on other pages
            localStorage.setItem('user', JSON.stringify(user))
            router.push('/home')  // Navigate to the main page
        } else {
            alert('Incorrect login or password!')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-400">
            <div className="bg-white flex flex-col items-center rounded-lg shadow-xl p-6 max-w-sm w-full">
                <div className="flex flex-col items-center">
                    <div className="text-center mb-4">
                        <svg
                            className="w-16 h-16 text-red-600 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 015.656 5.656L10 17.657l-6.828-6.829a4.004 4.004 0 010-5.656z" />
                        </svg>
                    </div>
                    <div className="relative bg-gray-300 w-32 h-32 mb-4 rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                            src="/images/gf.jpg" // Ensure this image is in your public folder or update the path accordingly.
                            alt="GF Picture"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center 20%" // Adjust this value as needed to move the image down
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="login" className="block text-gray-700 mb-2">
                            Login
                        </label>
                        <input
                            id="login"
                            type="text"
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-red-200"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            placeholder="Enter your login"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-red-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition"
                    >
                        Enter the Website
                    </button>
                </form>
            </div>
        </div>
    )
}
