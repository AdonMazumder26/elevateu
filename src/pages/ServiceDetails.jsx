import { Link, useParams } from 'react-router-dom';
import serviceData from '../data/services.json';
import FeedbackSection from '../components/FeedbackSection';

const ServiceDetails = () => {
    const { id } = useParams();
    const service = serviceData.find(item => item.id === id);

    if (!service) {
        return <p className="text-center mt-10 text-red-500">Service not found.</p>;
    }

    const {
        image,
        serviceName,
        serviceCategory,
        description,
        pricing,
        duration,
        counselor,
        rating,
    } = service;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
            <img
                src={image}
                alt={serviceName}
                className="w-full h-[400px] object-cover rounded-lg"
            />

            <div className="mt-6 space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">{serviceName}</h1>
                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full capitalize">
                    {serviceCategory}
                </span>

                <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Pricing</p>
                        <p className="text-lg font-semibold text-gray-800">{pricing}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="text-lg font-semibold text-gray-800">{duration}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Counselor</p>
                        <p className="text-lg font-semibold text-gray-800">{counselor}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Rating</p>
                        <p className="text-lg font-semibold text-yellow-500">{rating} ★</p>
                    </div>

                </div>
                <FeedbackSection></FeedbackSection>
                <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <Link to='/' className='btn w-full btn-primary'>Return to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
