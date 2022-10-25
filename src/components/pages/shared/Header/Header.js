import React, { useContext, useState } from 'react';
import logo from '../../../assest/LOGO.png';
// import { XMarkIcon, Bars4Icon } from '@heroicons/react/24/solid';
// import LinkNav from './LinkNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';


const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    // const [open, setOpen] = useState(false);

    // const routes = [
    //     { id: 1, name: 'Home', path: './home' },
    //     { id: 1, name: 'Products', path: './products' },
    //     { id: 1, name: 'Orders', path: './orders' },
    //     { id: 1, name: 'Contact', path: './contact' },
    //     { id: 1, name: 'About', path: './about' }
    // ];

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .then(error => console.error(error));
    };

    return (
        <div>

            {/* <nav className='bg-purple-200 w-full' >
                <div onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden">
                    {
                        open ? <XMarkIcon /> : <Bars4Icon />
                    }
                </div>
                <ul className={` bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'} `}>
                    {
                        routes.map((route, index) => <LinkNav
                            key={index}
                            route={route}
                        ></LinkNav>)
                    }
                </ul>
            </nav> */}

            <header>
                <nav className="bg-white border-green-200 px-4 lg:px-6 py-2.5 dark:bg-green-500">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="https://flowbite.com" className="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </Link>
                        <div className="flex items-center align-middle lg:order-2">
                            {user?.photoURL ?
                                <>
                                    <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                                </>

                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            }
                            {user?.uid ?

                                <>
                                    <Link onClick={handleSignOut} className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ml-2'>Sign out</Link>
                                </>
                                :
                                <>
                                    <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ml-2">Log in</Link>

                                    <Link to="/register" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Register</Link>
                                </>
                            }

                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-green-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                                <Link to='/' className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>

                                <Link href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">About</Link>

                                <Link to='/categories' className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Courses</Link>

                                {/* <Link to='/coures' className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Coures</Link> */}


                                <Link href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Contact</Link>


                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;