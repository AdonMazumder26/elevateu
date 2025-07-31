// src/components/MarqueeSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';

const images = [img1, img2, img3, img4, img5];

export default function MarqueeSlider() {
    return (
        <div className="w-full overflow-hidden py-4">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}
                allowTouchMove={false}
                className="mySwiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
