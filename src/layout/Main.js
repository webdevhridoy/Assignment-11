import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='mb-10'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;