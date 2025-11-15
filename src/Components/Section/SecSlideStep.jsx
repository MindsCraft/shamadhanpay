import React, { Fragment, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller, Autoplay } from 'swiper/modules';

import useHostname from '../Provider/HostnameProvider';

const SecSlideStep = () => {
    const originalUrl = useHostname();

    const [swiper1, setSwiper1] = useState(null);
    const [swiper2, setSwiper2] = useState(null);

    const [activeIndex, setActiveIndex] = useState(0); // State to store the active index

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex); // Update the active index when slide changes

        if (swiper1 && swiper2) {
            console.log(swiper.realIndex)
            swiper2.slideTo(swiper.realIndex);
        }
    };

    const StepData = [
        {
            title: "Download the Finpro app",
            desc: "Start by downloading the Finpro mobile app from the App Store or Google Play.",
            img: originalUrl + '/images/mockup0.png'
        },
        {
            title: "Specify amount",
            desc: "Enter the exact amount of money you want to transfer.",
            img: originalUrl + '/images/mockup (1).png'
        },
        {
            title: "Set-up your Finpro account",
            desc: "Follow the simple on-screen instructions to create your Finpro account.",
            img: originalUrl + '/images/mockup (2).png'
        },
        {
            title: "Review and confirm",
            desc: "Before finalizing, carefully review all the entered details: recipient information, amount, date, and memo (if applicable).",
            img: originalUrl + '/images/mockup (3).png'
        },
        {
            title: "Choose funding account",
            desc: "Select the specific account you want to use to send the money.",
            img: originalUrl + '/images/mockup (4).png'
        },
        {
            title: "Payment successful!",
            desc: "Great news! Your payment has been processed successfully.",
            img: originalUrl + '/images/mockup (5).png'
        },
    ]

    return (
        <Fragment>
            <section>
                <Container>
                    <Row className='h-full gap-y-4'>
                        <Col md={5} lg={4} className='flex-fill'>
                            <div className="h-[420px] xs:h-[380px] lg:h-[430px] xl:h-[520px] overflow-hidden w-full bg-Mneutral200 rounded-3xl flex flex-wrap gap-3">

                                <div className="w-full flex-shrink-0 p-4 !pb-0">
                                    <Swiper
                                        onSlideChange={handleSlideChange}
                                        direction="vertical"
                                        spaceBetween={0}
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        slidesPerView={"auto"}
                                        autoHeight={true}
                                        loop={true}
                                        onSwiper={setSwiper1}
                                        controller={{ control: swiper2 }}
                                        modules={[Controller, Autoplay]}
                                        autoplay={{
                                            delay: 3000, // 3 seconds delay between slides
                                            disableOnInteraction: false, // Keeps autoplay even after user interaction
                                        }}
                                    >
                                        {StepData.map((obj, idx) => {
                                            return <SwiperSlide key={idx}>
                                                <h5 className='font-medium text__24 mb-2'>{obj.title}</h5>
                                                <p className='text__16'>{obj.desc}</p>
                                            </SwiperSlide>
                                        })}
                                    </Swiper>
                                </div>
                                <div className="w-full self-end pointer-events-none">
                                    <Swiper
                                        direction="vertical"
                                        spaceBetween={0}
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        slidesPerView={"auto"}
                                        autoHeight={true}
                                        loop={true}
                                        onSwiper={setSwiper2}
                                        modules={[Controller, Autoplay]}
                                    >
                                        {StepData.map((obj, idx) => {
                                            return <SwiperSlide key={idx}>
                                                <img src={obj.img} className='w-full object-cover' alt="" />
                                            </SwiperSlide>
                                        })}
                                    </Swiper>
                                </div>



                            </div>
                        </Col>
                        <Col md={7} lg={8} className='flex-fill'>
                            <div className="flex flex-wrap h-full">
                                <h2 className='font-medium text__64 mb-[4rem] sm:mb-0'>Get Started with Finpro: A Step ⎯ by-Step Guide</h2>

                                <div className={"grid grid-cols-6 gap-2 w-full self-end"}>
                                    {
                                        StepData.map((obj, idx) => {
                                            return <div className={"w-full h-[4px] rounded-full " + (idx == activeIndex ? "bg-Msecondary600" : "bg-Mneutral200")}></div>
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment >
    )
}

export default SecSlideStep