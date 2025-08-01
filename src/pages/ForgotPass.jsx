import { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgotPass = () => {
    // const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const auth = getAuth();


    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleReset = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Reset email sent. Redirecting to Gmail...");


            setTimeout(() => {
                window.location.href = "https://mail.google.com/";
            }, 2000);
        } catch (error) {

            toast.error("Failed to send reset email.", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <form
                onSubmit={handleReset}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
                    Forgot Password
                </h2>

                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPass;
