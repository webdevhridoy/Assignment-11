import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learn-with-hridoy-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h2 className='text-base font-semibold tracking-widest uppercase dark:text-gray-500 text-center md:text-left'>Getting Started</h2>
            <hr className='border-b-2 border-b-green-100 mx-auto w-1/2 h-1' />
            <div className='text-center md:text-left grid grid-cols-3 md:grid-cols-1 mt-2'>
                {
                    categories.map((category, index) =>
                        <p key={index}>
                            <Link className='block text-gray-600 text-lg my-1 hover:underline hover:text-green-500' to={`/categories/${category.category}`}>{category.category}</Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideBar;