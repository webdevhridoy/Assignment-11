import React from 'react';

const Instructor = ({ instructor }) => {
    console.log(instructor);
    const { author_img, author, rating, students, category
    } = instructor;
    return (
        <div>
            <div className="flex flex-col justify-center p-6 shadow-md rounded-xl m-8">
                <img src={author_img} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold">{author}</h2>
                        <small>{students}</small>
                        <p className="px-5 text-xs sm:text-base text-gray-400">Specialist: {category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;