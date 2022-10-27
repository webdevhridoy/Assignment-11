import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Instructor from './Instructor';
import event1 from '../../pages/Home/HomeImages/events-01.jpg';
import event2 from '../../pages/Home/HomeImages/events-02.jpg';

const Home = () => {
    const instructors = useLoaderData();
    return (
        <div className='container mx-auto'>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col md:flex-row justify-center items-center align-middle mx-5 py-10'>
                        <div className='w-full md:w-2/4 md:pl-24'>
                            <h1 className=" text-2xl text-center md:text-left md:text-5xl font-bold">Distant learning for further <span className="text-green-500">expansion</span>
                            </h1>
                            <p className='text-slate-400 my-5 text-center md:text-left'>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
                            <div className='mt-10 text-center md:text-left'>
                                <Link rel="noopener noreferrer" to='/courses' className="px-8 py-3 font-semibold rounded bg-green-500 text-white mr-2">Courses</Link>
                                <Link rel="noopener noreferrer" to='/blog' className="px-8 py-3 font-semibold rounded outline text-black ml-2 hover:bg-green-500 hover:text-white duration-500 ease-in-out hover:border-0 border-green-500">Our Blogs</Link>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full md:w-2/4'>
                            <img src="https://i.ibb.co/NN3GHxH/banner-image.png" alt="" className="object-contain mt-10 md:mt-0 w-full md:w-2/3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-20 pb-10'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h2 className='text-2xl md:text-4xl uppercase font-bold'>Our Best <span className='text-green-500'>Instructors</span></h2>
                        <p className='text-gray-400 px-10'>Choose your best instructors and acheive your goals.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-20'>
                    {
                        instructors.map((instructor, index) => <Instructor
                            key={index}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center mx-5 md:mx-28'>
                    <div>
                        <div className='mt-5 mb-12'>
                            <h2 className='text-2xl md:text-4xl uppercase font-bold'>Upcoming <span className="text-green-500">Events</span></h2>
                            <p className='text-lg text-gray-500 pt-1'>Let's hangout together</p>
                        </div>
                        <div className='flex flex-col sm:flex-col md:flex-row justify-between items-center hover:shadow-2xl duration-500 shadow-lg rounded-sm p-5 my-12'>
                            <div>
                                <img src={event1} alt="" />
                            </div>
                            <div className='text-left flex justify-center items-center'>
                                <div className='ml-0 md:ml-10'>
                                    <h2 className='text-xl font-semibold mt-2'>Basic UI & UX Design for new development</h2>
                                    <div className='flex flex-col md:flex-row my-5'>
                                        <p className='mx-1 flex md:justify-center items-center'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                </svg>
                                            </span>
                                            <span>22 December, 2022</span>
                                        </p>
                                        <p className='mx-1 flex md:justify-center items-center'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                            <span>8.00am - 5.00pm</span>
                                        </p>
                                        <p className='mx-1 flex md:justify-center items-center'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            </span>
                                            <span>
                                                Rangpur, Bangladesh
                                            </span>
                                        </p>
                                    </div>
                                    <p className='text-base'>Willing to learn UI & UX design as your new skills?  Let's come and join with our upcoming events where you will get free tickets and 20% enrollment discount!</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-col md:flex-row justify-between items-center hover:shadow-2xl duration-500 shadow-lg rounded-sm p-5 my-12'>
                            <div>
                                <img src={event2} alt="" />
                            </div>
                            <div className='text-left flex justify-center items-center'>
                                <div className='ml-0 md:ml-10'>
                                    <h2 className='text-xl font-semibold mt-2'>Digital Art & 3D Model – a future for film company</h2>
                                    <div className='flex flex-col md:flex-row my-5'>
                                        <p className='mx-1 flex md:justify-center items-center'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                </svg>
                                            </span>
                                            <span>22 December, 2022</span>
                                        </p>
                                        <p className='mx-1 flex md:justify-center items-center'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                            <span>8.00am - 5.00pm</span>
                                        </p>
                                        <p className='mx-1 flex md:justify-center items-center'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            </span>
                                            <span>
                                                Rangpur, Bangladesh
                                            </span>
                                        </p>
                                    </div>
                                    <p className='text-base'>Willing to learn Digital Art & 3D Model as your new skills?  Let's come and join with our upcoming events where you will get free tickets and 20% enrollment discount!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;