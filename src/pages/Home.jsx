import React from 'react';
import Slider from '../components/Slider';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <section className='slider'>
                <Slider></Slider>
            </section>
            <section className='services'>
                <Services></Services>
            </section>

        </div>
    );
};

export default Home;