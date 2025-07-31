// import React, { useState } from 'react';

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    // const [showFullDesc, setShowFullDesc] = useState(false);

    // const toggleDescription = () => {
    //     setShowFullDesc(!showFullDesc);
    // };

    return (
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
            <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {service.serviceName}
                </h3>

                {/* Description with toggle */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {
                        `${service.description.substring(0, 100)}...`
                    }
                    <Link to={`/services/${service.id}`} className="ml-2 btn btn-accent text-white text-sm">Read More</Link>
                </p>

                <div className="text-sm text-gray-700 dark:text-gray-200">
                    <span className="font-medium">Category:</span> {service.serviceCategory}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-200">
                    <span className="font-medium">Duration:</span> {service.duration}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-200">
                    <span className="font-medium">Counselor:</span> {service.counselor}
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-primary font-semibold">{service.pricing}</span>
                    <span className="text-yellow-500 font-medium">⭐ {service.rating}</span>
                </div>
            </div>
        </div>
    );
};

// {
//     showFullDesc
//         ? service.description
//         : 
// }
// <button
//     onClick={toggleDescription}
//     
// >
//     {showFullDesc ? 'Read Less' : 'Read More'}
// </button>

export default ServiceCard;
