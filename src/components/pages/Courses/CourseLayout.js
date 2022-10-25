import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';

const CourseLayout = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between'>
                <aside className='bg-slate-100 sticky top-0 pt-20 md:h-screen px-20'>
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