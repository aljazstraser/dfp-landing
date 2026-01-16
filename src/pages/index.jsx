import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import HomeDfpCustom from '../components/home';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="DragonFlyPads - Agnostic Infrastructure Solutions for Drones" />
            <HomeDfpCustom />
        </Wrapper>
    );
};

export default index;