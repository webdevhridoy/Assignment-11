import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';

const CourseLayout = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between'>
                <aside className='bg-white sticky top-0 md:pt-20 py-3 md:h-screen px-20 shadow-xl'>
                    <LeftSideBar></LeftSideBar>
                </aside>
                <main className='mx-auto'>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default CourseLayout;