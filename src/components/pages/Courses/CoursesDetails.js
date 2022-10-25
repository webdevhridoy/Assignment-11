import React from 'react';
import { Link } from 'react-router-dom';

const CoursesDetails = ({ courses }) => {
    const { course_name, image, short_details, price, rating, id } = courses;
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md m-3">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md dark:bg-gray-500" />
                <div className='text-left'>
                    <div className="mt-6 mb-2">
                        <h2 className="text-base font-semibold tracking-wide">{course_name}</h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">
                            {short_details.length > 80 ? short_details.slice(0, 80) : short_details}
                        </p>
                    </div>
                    <hr className='border-b-2 border-b-green-100 mx-auto w-1/2 my-5' />
                    <div className='flex justify-between items-center mt-5'>
                        <span className="block text-xs font-medium tracking-widest uppercase text-green-600">Price: {price}</span>
                        <span className="block text-xs font-medium tracking-widest uppercase text-green-600">Rating: {rating}</span>
                    </div>
                    <div className='mt-5 flex justify-center items-center'>
                        <Link to={`/course-details/${id}`} className='bg-outline-500 border-2 border-green-500 hover:bg-green-500 hover:text-white px-2 py-2 rounded-3xl duration-500 ease-in-out'>Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;