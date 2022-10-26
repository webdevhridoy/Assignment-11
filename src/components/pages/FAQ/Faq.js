import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FaqDetails from './FaqDetails';

const Faq = () => {
    const faqs = useLoaderData();
    return (
        <div>
            <div className="container flex flex-col justify-center px-4 py-4 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">You’ll learn how to build everything from Learn With Hridoy. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-5 md:m-10'>
                {
                    faqs.map((faq, index) => <FaqDetails
                        key={index}
                        faq={faq}
                    ></FaqDetails>)
                }
            </div>
        </div>
    );
};

export default Faq;