import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
    return (
        <div>
            <header>
                {/* <Navbar></Navbar> */}
            </header>
            <Toaster position="top-right" reverseOrder={false} />
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;