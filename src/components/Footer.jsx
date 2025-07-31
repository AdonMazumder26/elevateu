import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 pb-6 px-6 mt-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">Elevate<span className="text-gray-900 dark:text-white">U</span></h2>
                    <p className="text-sm">
                        Guiding you to the right career path with expert insights and personalized tools.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-500">About</Link></li>
                        <li><Link to="/services" className="hover:text-indigo-500">Services</Link></li>
                        <li><Link to="/quiz" className="hover:text-indigo-500">Career Test</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-indigo-500">Blog</a></li>
                        <li><a href="#" className="hover:text-indigo-500">FAQs</a></li>
                        <li><a href="#" className="hover:text-indigo-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-indigo-500">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="hover:text-indigo-500"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-indigo-500"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-indigo-500"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-indigo-500"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
                &copy; {new Date().getFullYear()} ElevateU. All rights reserved.
            </div>
        </footer>
    );
}
