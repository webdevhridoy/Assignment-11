import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseList from './CourseList';

const CategoryDetails = () => {
    const categoryDetail = useLoaderData();
    console.log(categoryDetail);
    return (
        <div>
            <h2>Total: {categoryDetail.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    categoryDetail.map(details =>
                        <CourseList
                            key={details.id}
                            details={details}
                        ></CourseList>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;