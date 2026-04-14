import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const navLinks = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Features",
            path: "/features"
        },
        {
            id: 3,
            name: "Map",
            path: "/map/GoogleMapp"
        }
    ];

    const authLinks = [
        {
            id: 4,
            name: "Login",
            path: "/login"
        },
        {
            id: 5,
            name: "Register",
            path: "/register"
        },
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (

        <div className='w-full sticky top-0 z-50 shadow-lg backdrop-blur-md bg-gray-900/80'>
            <div className='max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8'>
                <Link to={"/"} className='flex items-center'>
                    <span className='text-2xl font-extrabold cursor-pointer text-white'>
                        MPPP <span className='text-amber-500'>EV Hub</span>
                    </span>
                </Link>
                <div className='hidden md:flex items-center space-x-8'>
                    {navLinks.map((item) => (
                        <Link
                            to={item.path}
                            key={item.id}
                            className='text-gray-300 text-base font-medium hover:text-amber-500 transition duration-300'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className='flex gap-4 items-center'>
                    {!isLoggedIn ? (

                        authLinks.map((item) => (
                            <Link to={item.path} key={item.id}>
                                {item.name === 'Login' && (
                                    <button className='px-4 py-2 text-base font-semibold text-amber-500 hover:text-amber-400 transition duration-300 rounded-lg'>
                                        {item.name}
                                    </button>
                                )}
                                {item.name === 'Register' && (
                                    <button className='px-4 py-2 bg-amber-600 text-base font-semibold text-white rounded-full shadow-md hover:bg-amber-500 transition duration-300'>
                                        {item.name}
                                    </button>
                                )}
                            </Link>
                        ))
                    ) : (

                        <div className='flex gap-3 items-center'>
                            <Link to="/upload">
                                <button className='px-4 py-2 text-base font-semibold text-amber-500 hover:text-amber-400 transition duration-300 rounded-lg'>
                                    Upload
                                </button>
                            </Link>
                            <Link to="/dashboard">
                                <button className='px-4 py-2 text-base font-semibold text-amber-500 hover:text-amber-400 transition duration-300 rounded-lg'>
                                    Dashboard
                                </button>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className='px-4 py-2 bg-red-600 text-base font-semibold text-white rounded-full shadow-md hover:bg-red-500 transition duration-300'
                            >
                                Logout
                            </button>
                        </div>
                    )}
                    <button className='md:hidden text-white text-2xl'>
                        ☰
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

