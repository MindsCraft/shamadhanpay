import React, { Fragment, useRef, useState } from 'react'
import useHostname from '../Provider/HostnameProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const CurrencySlide = () => {
    const originalUrl = useHostname();

    const Logos = [
        { id: 1, src: originalUrl + '/images/cr (4).svg', bg: '#262626' },
        { id: 2, src: originalUrl + '/images/cr (1).svg', bg: '#fe4f11' },
        { id: 3, src: originalUrl + '/images/cr (2).svg', bg: '#2b7979' },
        { id: 4, src: originalUrl + '/images/cr (3).svg', bg: '#fda712' },
    ];

    const swiperRef = useRef(null);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            setActiveSlideIndex(swiperRef.current.swiper.realIndex); // Get realIndex from Swiper instance
        }
    };

    return (
        <Fragment>
            <div className={"h-[46px] xx:h-[54px] ss:h-[64px] lg:h-[85px] xl:h-[110px] w-[90px] xx:w-[100px] ss:w-[110px] lg:w-[150px] xl:w-[190px] flex items-center justify-center rounded-full px-4 xx:px-8 pointer-events-none transition-all duration-300 "} style={{ backgroundColor: Logos[activeSlideIndex]?.bg }} >
                <Swiper
                    ref={swiperRef}
                    direction="vertical" // Set direction to vertical
                    autoplay={{
                        delay: 2500, // Delay in ms
                        disableOnInteraction: false,
                    }}
                    loop={true} // Enable looping
                    pagination={{ clickable: true }} // Enable pagination
                    modules={[Autoplay]} // Import necessary modules
                    className="mySwiper"
                    style={{ height: '100%' }}
                    onSlideChange={handleSlideChange}
                >
                    {Logos.map((img) => (
                        <SwiperSlide key={img.id}>
                            <div className="w-full h-full flex items-center justify-center">
                                <img src={img.src} className='w-[50px] lg:w-[65px] xl:w-auto' alt={`Slide ${img.id}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    )
}

export default CurrencySlide
