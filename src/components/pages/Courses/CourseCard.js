import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from './CoursesDetails';

const CourseCard = () => {
    const allCourses = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allCourses.map((courses, index) => <CoursesDetails
                    key={index}
                    courses={courses}
                ></CoursesDetails>)
            }
        </div>
    );
};

export default CourseCard;
