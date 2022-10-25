import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-center items-center align-middle mx-5 py-10'>
                <div className='w-full md:w-2/4 md:pl-24'>
                    <h1 className=" text-2xl text-center md:text-left md:text-5xl font-bold">Distant learning for further <span className="dark:text-green-500">expansion</span>
                    </h1>
                    <p className='text-slate-400 my-5 text-center md:text-left'>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
                    <div className='mt-10 text-center md:text-left'>
                        <Link rel="noopener noreferrer" to='/coures' className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-white mr-2">Courses</Link>
                        <Link rel="noopener noreferrer" to='/blog' className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-white ml-2">Our Blogs</Link>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full md:w-2/4'>
                    <img src="https://i.ibb.co/NN3GHxH/banner-image.png" alt="" className="object-contain mt-10 md:mt-0 w-full md:w-2/3" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;