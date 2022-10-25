import React, { useContext, useState } from 'react';
import logo from '../../../assest/LOGO.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';


const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    let arr = [true, false, false, false, false, false];
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    };

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .then(error => console.error(error));
    };

    return (
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
                        <Link to='/' onClick={() => selected(0)} className={`${style[0] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Home</Link>

                        <Link to='/categories' onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Category</Link>

                        <Link to='/coures' onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Coures</Link>

                        <Link to='/blog' onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Blog</Link>


                    </div>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div className="flex justify-center items-center relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <Link>
                                {user?.photoURL ?
                                    <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={user.photoURL} alt="" /> :
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </>
                                }
                            </Link>
                            {user?.uid ?
                                <>
                                    <button onClick={handleSignOut}>
                                        <Link onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Sign out</Link>
                                    </button>
                                </>
                                :
                                <>
                                    <Link to='/login' onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Login</Link>

                                    <Link to='/register' onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Register</Link>
                                </>
                            }
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
                            <Link to='/' onClick={() => selected(0)} className={`${style[0] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Home</Link>

                            <Link to='/categories' onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Category</Link>

                            <Link to='/coures' onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Coures</Link>

                            <Link to='/blog' onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;