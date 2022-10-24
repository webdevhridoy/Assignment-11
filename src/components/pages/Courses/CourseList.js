import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ details }) => {
    console.log(details);
    const { category, course_name, short_details, price, id, rating, image } = details;
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md m-3">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{course_name}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{course_name}</h2>
                </div>
                <p className="text-gray-500">{short_details.slice(0, 80)}...</p>
            </div>
        </div>
    );
};

export default CourseList;