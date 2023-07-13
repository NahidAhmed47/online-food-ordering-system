import React from 'react';
import OurMenu from '../../components/ourMenuSection/OurMenu';
import PagesBanner from '../../components/shared/PagesBanner';

const Menu = () => {
    return (
        <div>
            <PagesBanner>Our Menu</PagesBanner>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Menu;