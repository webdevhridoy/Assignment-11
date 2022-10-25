import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from './CoursesDetails';

const AllCourses = () => {
    const allCourses = useLoaderData();

    // console.log(allCourses);

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    allCourses.map((courses, index) => <CoursesDetails
                        key={index}
                        courses={courses}
                    ></CoursesDetails>)
                }
            </div>
        </div>
    );
};

export default AllCourses;