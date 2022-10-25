import React from 'react';
import { Link } from 'react-router-dom';

const Congratulations = () => {
    return (
        <div className='flex justify-center items-center pt-10 pb-14'>
            <section className="bg-white">
                <div>
                    <div className='text-center flex justify-center item'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-green-400">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl font-semibold leading-none">Thank you. Your order has been received.</h2>
                    <p className="mt-4 mb-8 text-sm px-5">Your order’s been processed. You’re all set to start learning. Ready to jump in?</p>
                    <Link to='/' className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-green-400 dark:text-gray-900">Start learning</Link>
                </div>
            </section>
        </div>
    );
};

export default Congratulations;