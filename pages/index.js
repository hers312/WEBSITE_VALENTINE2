import { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  
  // Simple local state for the login
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  
  // Hard-coded credentials for demonstration
  // In real apps, you’d verify on the server or via an API
  const correctLogin = 'myLogin'
  const correctPassword = 'myPassword'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login === correctLogin && password === correctPassword) {
      router.push('/home')  // Navigate to the main page
    } else {
      alert('Incorrect login or password!')
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-400">
      {/* Container for the card */}
      <div className="bg-white flex flex-col items-center rounded-lg shadow-xl p-6 max-w-sm w-full">
        {/* The heart area with a placeholder for the girlfriend's picture. 
            Adjust or replace with an <img> tag for your girlfriend's image 
            instead of the heart, or place the heart above the image. */}
        <div className="flex flex-col items-center">
          {/* Heart shape */}
          <div className="text-center mb-4">
            <svg
              className="w-16 h-16 text-red-600 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 015.656 5.656L10 17.657l-6.828-6.829a4.004 4.004 0 010-5.656z" />
            </svg>
          </div>
          {/* Replace this with an actual <img> if you want the girlfriend’s image */}
          <div className="bg-gray-300 w-32 h-32 mb-4 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-sm">GF Picture</span>
          </div>
        </div>
        
        {/* Login form */}
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
