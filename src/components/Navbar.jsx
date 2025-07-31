
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

export default function Navbar() {

    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    // const photoURL = user?.photoURL;
    // console.log(photoURL);
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="text-2xl font-bold text-indigo-600">
                Elevate<span className="text-gray-800 dark:text-white">U</span>
            </div>

            {/* Navigation Links */}
            {
                user ? (
                    <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
                        <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
                        <li><Link to="/quiz" className="hover:text-indigo-600">Quiz</Link></li>
                        <li><Link to="/success" className="hover:text-indigo-600">Success</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
                        <li><Link to="/profile" className="hover:text-indigo-600">Profile</Link></li>
                        <li><Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link></li>


                    </ul>
                )
                    :
                    (<ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
                        <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
                        <li><Link to="/quiz" className="hover:text-indigo-600">Quiz</Link></li>
                        <li><Link to="/success" className="hover:text-indigo-600">Success</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
                    </ul>)

            }

            {/* Right side: Theme toggle + CTA */}
            <div className="flex items-center gap-4">
                {/* <ThemeToggle /> */}
                {
                    user && user?.photoURL && <div className='flex gap-3'>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition" onClick={logOut}>Log out</button>
                        <img className='w-10 h-10 rounded-full' title={user?.displayName} src={user?.photoURL}></img>
                    </div>
                }
                {
                    !user && location.pathname !== '/auth/login' && (
                        <Link
                            to="auth/login"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                        >
                            Log in
                        </Link>
                    )
                }
                {
                    !user && location.pathname === '/auth/login' && (
                        <Link
                            to="/"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                        >
                            Home
                        </Link>
                    )
                }
            </div>
        </nav>
    );
}

