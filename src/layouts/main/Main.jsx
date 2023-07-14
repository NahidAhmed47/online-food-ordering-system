import React from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Navbar from '../../components/shared/Navbar';
import MiniTopNav from '../../components/shared/MiniTopNav';
import Footer from '../../components/shared/Footer';
import Loading from '../../components/shared/Loading';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    return (
        <div className='w-full relative'>
            <div className='sticky -top-6 md:-top-14 z-10'>
                <Navbar></Navbar>
            </div>
            <MiniTopNav></MiniTopNav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position='bottom-center'></Toaster>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;