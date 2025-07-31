import React from 'react';
import Slider from '../components/Slider';
import Services from '../components/Services';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ElevateU</title>
            </Helmet>
            <div className='max-w-11/12 mx-auto'>
                <section className='slider'>
                    <Slider></Slider>
                </section>
                <section className='services'>
                    <Services></Services>
                </section>

            </div>
        </>
    );
};

export default Home;