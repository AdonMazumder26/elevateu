import React, { useEffect, useState } from 'react';
import servicesData from '../data/services.json'; // update path accordingly
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(servicesData);
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Our Career Counseling Services
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
