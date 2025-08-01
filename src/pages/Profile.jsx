import { useContext, useState } from "react";
// import { getAuth, updateProfile } from "firebase/auth";
// import { auth } from "../firebase"; // Adjust the path based on your setup
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
// import app from "../firebase.config";

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    // const auth = getAuth(app);

    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [message, setMessage] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();

        updateUserProfile({
            photoURL: photo,
            displayName: name
        })
            .then(() => {
                setMessage("Profile updated successfully!");
                window.location.reload();
            })
            .catch((error) => {
                setMessage("Error updating profile.");
                toast.error(error);
            });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-6">
                <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-blue-500 shadow"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {user?.displayName}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                >
                    Save Changes
                </button>
            </form>

            {message && (
                <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">
                    {message}
                </p>
            )}
        </div>
    );
};
// updateProfile(auth.currentUser, {
//     displayName: name,
//     photoURL: photo,
// })

export default Profile;
