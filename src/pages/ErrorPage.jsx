import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-8xl font-bold text-indigo-600">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mt-4">
                Oops! Page not found.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-center max-w-md">
                The page you’re looking for doesn’t exist or has been moved. Maybe try
                navigating back to the homepage.
            </p>

            <Link
                to="/"
                className="mt-6 inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-300"
            >
                Go Home
            </Link>


        </div>
    );
};

export default ErrorPage;
