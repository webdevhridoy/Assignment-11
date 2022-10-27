import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/shared/Footer/Footer';
import Header from '../components/pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='mb-10'>
                <Header></Header>
            </div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;