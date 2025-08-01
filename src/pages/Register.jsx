import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Register = () => {
    const navigate = useNavigate();

    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const photoURL = e.target.photoURL.value.trim();
        const password = e.target.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {

                        navigate('/');
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            })
            .catch((err) => {
                console.log(err)
            })




        // Password validations
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUpper) return toast.error('Password must contain an uppercase letter');
        if (!hasLower) return toast.error('Password must contain a lowercase letter');
        if (!isLongEnough) return toast.error('Password must be at least 6 characters long');

        // Handle registration logic here
        // toast.success('Registered successfully (simulation)');
    };


    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleRegister = () => {
        // Simulate Google login error
        // toast.error('Google login failed (not implemented)');
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                setTimeout(() => {
                    navigate('/');
                }, 3000);
                toast.success("Successfully logged in", { duration: 3000 });

            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                        Create an Account
                    </h2>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="photoURL" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                id="photoURL"
                                required
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://your-photo.com"
                            />
                        </div>

                        <div className='relative'>
                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                required
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                            />
                            <button onClick={() => setShowPassword(!showPassword)} className='btn bg-transparent btn-xs  absolute right-2 top-8'>{showPassword ? <FaEyeSlash /> : < FaEye />}</button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            Register
                        </button>
                    </form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
                        <span className="mx-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
                        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
                    </div>

                    <button
                        onClick={handleGoogleRegister}
                        className="w-full flex items-center opacity-85 hover:opacity-100  justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-2 rounded-lg hover:shadow-xl transition"
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </button>

                    <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link to="/auth/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
