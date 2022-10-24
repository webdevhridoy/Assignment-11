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
            <h2>This is left side</h2>
            <div>
                {
                    categories.map(category =>
                        <Link className='block' to={`/categories/${category.category}`}>{category.category}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideBar;