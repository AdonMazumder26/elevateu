import React, { useContext } from "react";
import services from "../data/services.json";
import { AuthContext } from "../provider/AuthProvider";
// update path as needed

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-6">
                <img
                    src={user?.photoURL || "https://i.ibb.co/tPLG01G/default-avatar.png"}
                    alt="User"
                    className="w-16 h-16 rounded-full border-2 border-indigo-500"
                />
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        Welcome, {user?.displayName || "Guest"}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">Here's your dashboard overview</p>
                </div>
            </div>

            {/* Services Summary */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map(service => (
                    <div
                        key={service.id}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
                    >
                        <img
                            src={service.image}
                            alt={service.serviceName}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                {service.serviceName}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {service.description}
                            </p>
                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                                <p><strong>Coach:</strong> {service.counselor}</p>
                                <p><strong>Duration:</strong> {service.duration}</p>
                            </div>
                            <div className="mt-2 flex justify-between items-center">
                                <span className="text-green-600 font-semibold dark:text-green-400">
                                    {service.pricing}
                                </span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded dark:bg-yellow-800 dark:text-yellow-200">
                                    ⭐ {service.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
