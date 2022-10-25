import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Checkout = () => {
    const checkout = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(checkout);
    const { course_name, price, } = checkout;
    return (
        <div>
            <div className='flex justify-center items-center md:mt-0 mt-20 md:h-screen'>
                <div className="flex flex-col md:w-2/3 mx-auto p-6 space-y-4 divide-y  divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="text-2xl font-semibold">Complete your enrollment</h2>
                    <ul className="flex flex-col pt-4 space-y-2">
                        <li className="flex items-start justify-between">
                            <h3><strong>Course:</strong> {course_name}</h3>
                            <div className="text-right ml-2">
                                <span className="block">${price}</span>
                            </div>
                        </li>
                    </ul>
                    <div className="pt-4 space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${price}</span>
                        </div>
                    </div>
                    <div className="pt-4 space-y-2">
                        <p rel="noopener noreferrer" className="underline dark:text-green-400 text-base">Customer Information</p>
                        <div className="flex justify-between">
                            <span></span>
                            <span>$0.00</span>
                        </div>
                        <div>
                            <div className='text-left'>
                                <span><strong>Name: {user?.displayName}</strong></span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className='text-left'>
                                <span>Email: {user?.email}</span>
                                <span className="font-semibold">$22.70</span>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between items-center'>
                                <button onClick={() => navigate(-2)} type="button" className=" w-full flex justify-center items-center md:my-0 my-2 md:w-1/3 mx-auto py-2 font-semibold border rounded dark:bg-green-400 dark:text-gray-900 dark:border-green-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                    </svg>
                                    <span> Go back</span>
                                </button>
                                <Link to='/congratulations' type="button" className="flex justify-center items-center w-full md:my-0 my-2 md:w-1/3 mx-auto py-2 font-semibold border rounded dark:bg-green-400 dark:text-gray-900 dark:border-green-400">
                                    <span>Complete checkout</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Checkout;