import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center align-middle mx-5'>
                < div className='text-start' >
                    <h1 className="text-5xl font-bold">Distant learning for further <span className="dark:text-green-500">expansion</span>
                    </h1>
                    <p className='text-slate-400 my-5'>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
                    <div className='mt-10'>
                        <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-white mr-2">Courses</Link>
                        <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-white ml-2">Our Blogs</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/NN3GHxH/banner-image.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;