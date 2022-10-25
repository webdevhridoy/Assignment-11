import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from './CoursesDetails';

const AllCourses = () => {
    const allCourses = useLoaderData();

    console.log(allCourses);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    allCourses.map(courses => <CoursesDetails
                        key={courses.id}
                        courses={courses}
                    ></CoursesDetails>)
                }
            </div>
        </div>
    );
};

export default AllCourses;