import React from 'react';
import OurMenu from '../../components/ourMenuSection/OurMenu';
import BannerHome from './BannerHome'

const Home = () => {
    return (
        <div className=''>
            <BannerHome></BannerHome>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;