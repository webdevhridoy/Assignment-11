import React, { useContext, useState } from 'react';
import logo from '../../../assest/LOGO.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import toast from 'react-hot-toast';
import userImage from '../../../assest/user profile.jpg';


const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const [dropDown, setDropDown] = useState(true);
    const [text] = useState("");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Log out successfully!');
            })
            .then(error => console.error(error));
    };
    return (
        <div>
            <div>
                <div class="bg-green-500">
                    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div class="relative flex items-center justify-between">
                            <a
                                href="/"
                                aria-label="Company"
                                title="Company"
                                class="inline-flex items-center"
                            >
                                <svg
                                    class="w-8 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    stroke="currentColor"
                                    fill="none"
                                >
                                    <rect x="3" y="1" width="7" height="12" />
                                    <rect x="3" y="17" width="7" height="6" />
                                    <rect x="14" y="1" width="7" height="6" />
                                    <rect x="14" y="11" width="7" height="12" />
                                </svg>
                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                    Company
                                </span>
                            </a>
                            <ul class="flex items-center hidden space-x-8 lg:flex">
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Our product"
                                        title="Our product"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Product
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Our product"
                                        title="Our product"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Product pricing"
                                        title="Product pricing"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="About us"
                                        title="About us"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Sign up
                                    </a>
                                </li>
                            </ul>
                            <div class="lg:hidden">
                                <button
                                    aria-label="Open Menu"
                                    title="Open Menu"
                                    class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                        />
                                    </svg>
                                </button>
                                {isMenuOpen && (
                                    <div class="absolute top-0 left-0 w-full">
                                        <div class="p-5 bg-white border rounded shadow-sm">
                                            <div class="flex items-center justify-between mb-4">
                                                <div>
                                                    <a
                                                        href="/"
                                                        aria-label="Company"
                                                        title="Company"
                                                        class="inline-flex items-center"
                                                    >
                                                        <svg
                                                            class="w-8 text-deep-purple-accent-400"
                                                            viewBox="0 0 24 24"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeMiterlimit="10"
                                                            stroke="currentColor"
                                                            fill="none"
                                                        >
                                                            <rect x="3" y="1" width="7" height="12" />
                                                            <rect x="3" y="17" width="7" height="6" />
                                                            <rect x="14" y="1" width="7" height="6" />
                                                            <rect x="14" y="11" width="7" height="12" />
                                                        </svg>
                                                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                            Company
                                                        </span>
                                                    </a>
                                                </div>
                                                <div>
                                                    <button
                                                        aria-label="Close Menu"
                                                        title="Close Menu"
                                                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                            <path
                                                                fill="currentColor"
                                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul class="space-y-4">
                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="Our product"
                                                            title="Our product"
                                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            Product
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="Our product"
                                                            title="Our product"
                                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            Features
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="Product pricing"
                                                            title="Product pricing"
                                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            Pricing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="About us"
                                                            title="About us"
                                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            About us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            class="inline-flex bg-white items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                            aria-label="Sign up"
                                                            title="Sign up"
                                                        >
                                                            Sign up
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="2xl:container 2xl:mx-auto">
                <div className="bg-green-500 rounded shadow-lg py-5 px-7">
                    <nav className="flex justify-between items-center">
                        <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                            <Link to='/'>
                                <img src={logo} className="mr-3 h-6 sm:h-9" alt='' />
                            </Link>
                        </div>
                        {/* For medium and plus sized devices */}
                        <div className="hidden md:flex flex-auto space-x-2">
                            <Link to='/' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white'>Home</Link>

                            <Link to='/categories' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white'>Category</Link>


                            <Link to='/coures' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white' >Coures</Link>

                            <Link to='/blog' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white'>Blog</Link>

                            <Link to='/faq' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white'>Faq</Link>


                        </div>
                        <div className=" flex space-x-5 justify-center items-center pl-2">
                            <div className="flex justify-center items-center relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                                <Link>
                                    {user?.photoURL ?
                                        <>
                                            <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={user.photoURL} alt="" title={user?.displayName} />
                                        </>
                                        :
                                        <>
                                            <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={userImage} alt="" title={user?.displayName} />
                                        </>
                                    }
                                </Link>
                                {user?.uid ?
                                    <>
                                        <button onClick={handleSignOut}>
                                            <Link className={` [2] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Sign out</Link>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white mx-1'>Login</Link>

                                        <Link to='/register' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white mx-1'>Register</Link>
                                    </>
                                }
                                <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                                    <span className="relative">
                                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-6 rounded-full shadow-inner peer-checked: bg-green-400"></div>
                                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </nav>
                    {/* for smaller devcies */}
                    <div className="block md:hidden w-full mt-5 ">
                        <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-green-600 rounded flex justify-between items-center w-full">
                            <div className="flex space-x-2">
                                <span id="s1" className={`${text.length !== 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Our Menus"}</p>
                            </div>
                            <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className=" relative">
                            <div id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                                <Link to='/' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white mx-1'>Home</Link>

                                <Link to='/categories' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white mx-1'>Category</Link>

                                <Link to='/coures' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white mx-1'>Coures</Link>

                                <Link to='/blog' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white mx-1'>Blog</Link>

                                <Link to='/faq' className='text-gray-600 border border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded bg-white mx-1'>Faq</Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;