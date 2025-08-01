import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../pages/ServiceDetails";
import { ServiceLoader } from "../LoaderFunctions.jsx/ServiceLoader";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ForgotPass from "../pages/ForgotPass";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: (
                    <PrivateRoutes>
                        <Profile></Profile>
                    </PrivateRoutes>
                )
            },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoutes>
                        <Dashboard></Dashboard>
                    </PrivateRoutes>
                )
            }
        ],


    },
    {
        path: '/services/:id',
        element: (
            <PrivateRoutes>
                <ServiceDetails></ServiceDetails>
            </PrivateRoutes>
        ),
        loader: ServiceLoader,
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/forgotPass',
                element: <ForgotPass></ForgotPass>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;