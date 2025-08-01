// src/components/Login.jsx
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Optional: for Google icon
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Login = () => {

    const { logIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();


        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate('/');
                console.log(location);
                toast.success("Successfully logged in", { duration: 3000 });
            })
            .catch((err) => {
                console.log(err);
            })

        // Example error validation
        if (!email || !password) {
            return toast.error('Email and Password are required');
        }

        if (!email.includes('@')) {
            return toast.error('Please enter a valid email address');
        }

        // Simulate login failure
        // toast.error('Login failed. Incorrect email or password.');
    };

    const provider = new GoogleAuthProvider();
    const auth = getAuth();


    const handleGoogleLogin = () => {
        // handle Google login logic here
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate('/');
                toast.success("Successfully logged in", { duration: 3000 });

            })
            .catch(err => {
                console.log(err);
            })
    };


    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                        Login to Your Account
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                required
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="text-right mt-1">
                            <Link to='/auth/forgotPass' className="text-sm text-blue-600 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
                        <span className="mx-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
                        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center opacity-85 hover:opacity-100 justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-2 rounded-lg hover:shadow-xl transition"
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </button>

                    {/* Register Link */}
                    <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-blue-600 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
