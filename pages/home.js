import { useRouter } from 'next/router'

export default function HomePage() {
    const router = useRouter()

    // Simple redirect handler
    const handleRedirect = (path) => {
        router.push(path)
    }

    // Logout handler: remove the user and redirect to the login page
    const handleLogout = () => {
        localStorage.removeItem('user')
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-white flex flex-col relative">
            {/* Logout Button in the top right corner */}
            <button
                onClick={handleLogout}
                className="absolute top-4 right-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded shadow-md"
            >
                Logout
            </button>

            {/* HEADER */}
            <header className="bg-pink-400 text-white text-center p-4">
                <h1 className="text-2xl font-bold">Strona o Anastazji Beli</h1>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-4">
                {/* Grid container (1 col on mobile, 2 on small, 4 on large) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* CARD 1 */}
                    <button
                        onClick={() => handleRedirect('/item1')}
                        className="block w-full h-64 rounded-lg shadow overflow-hidden text-left"
                    >
                        <div className="bg-pink-200 h-3/4 flex items-center justify-center">
                            <img
                                src="/images/example1.jpg"
                                alt="Example 1"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-pink-500 h-1/4 flex items-center justify-center">
                            <p className="text-white text-center px-2">
                                Nasze Zdjecia!!!
                            </p>
                        </div>
                    </button>

                    {/* CARD 2 */}
                    <button
                        onClick={() => handleRedirect('/item2')}
                        className="block w-full h-64 rounded-lg shadow overflow-hidden text-left"
                    >
                        <div className="bg-pink-200 h-3/4 flex items-center justify-center">
                            <img
                                src="/images/example2.jpg"
                                alt="Example 2"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-pink-500 h-1/4 flex items-center justify-center">
                            <p className="text-white text-center px-2">
                                Film o anastazji????
                            </p>
                        </div>
                    </button>

                    {/* CARD 3 */}
                    <button
                        onClick={() => handleRedirect('/item3')}
                        className="block w-full h-64 rounded-lg shadow overflow-hidden text-left"
                    >
                        <div className="bg-pink-200 h-3/4 flex items-center justify-center">
                            <img
                                src="/images/example3.jpg"
                                alt="Example 3"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-pink-500 h-1/4 flex items-center justify-center">
                            <p className="text-white text-center px-2">
                                Ulubiona piosenka
                            </p>
                        </div>
                    </button>

                    {/* CARD 4 */}
                    <button
                        onClick={() => handleRedirect('/item4')}
                        className="block w-full h-64 rounded-lg shadow overflow-hidden text-left"
                    >
                        <div className="bg-pink-200 h-3/4 flex items-center justify-center">
                            <img
                                src="/images/example4.png"
                                alt="Example 4"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-pink-500 h-1/4 flex items-center justify-center">
                            <p className="text-white text-center px-2">
                                Czaty:)
                            </p>
                        </div>
                    </button>

                    {/* CARD 5 */}
                    <button
                        onClick={() => handleRedirect('/item5')}
                        className="block w-full h-64 rounded-lg shadow overflow-hidden text-left"
                    >
                        <div className="bg-pink-200 h-3/4 flex items-center justify-center">
                            <img
                                src="/images/example5.png"
                                alt="Example 5"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-pink-500 h-1/4 flex items-center justify-center">
                            <p className="text-white text-center px-2">
                                Lista cech  
                            </p>
                        </div>
                    </button>

                    {/* CARD 6 */}
                    <button
                        onClick={() => handleRedirect('/item6')}
                        className="block w-full h-64 rounded-lg shadow overflow-hidden text-left"
                    >
                        <div className="bg-pink-200 h-3/4 flex items-center justify-center">
                            <img
                                src="/images/example6.png"
                                alt="Example 6"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-pink-500 h-1/4 flex items-center justify-center">
                            <p className="text-white text-center px-2">
                                DATY!!!!
                            </p>
                        </div>
                    </button>


                 
                </div>
            </main>
        </div>
    )
}
