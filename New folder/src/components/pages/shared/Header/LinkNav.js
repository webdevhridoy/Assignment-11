import React from 'react';

const LinkNav = ({ route }) => {
    return (

        <div>
            <li className='mr-12' > <a href={route.path}> {route.name}</a> </li>
        </div>

    );
};

export default LinkNav;