import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Careers = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Careers' description='Careers Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4'>Welcome to <br />
                            our ⎯ Careers page!</h2>
                        <p className='text__20 text-Mneutral700 leading-relaxed mb-4 sm:mb-[3rem]'>We're so glad you're interested in joining our team. We're a group of passionate and <br className='lg:block hidden' /> talented individuals who are committed to making a difference in the world. We believe <br className='lg:block hidden' /> that work should be fun and rewarding, and we strive to create a work environment <br className='lg:block hidden' /> where everyone can thrive.</p>

                        <img src={originalUrl + "/images/Group 162645.svg"} className='mx-auto sm:block hidden' alt="" />
                        <img src={originalUrl + "/images/Group 162654.svg"} className='mx-auto sm:hidden' alt="" />
                    </Container>
                </section>
                <section>
                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px]">
                            <Container>
                                <div className="md:text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-2'>What we're looking for</h3>
                                    <p className='text__20 text-Mneutral500'>We're looking for people who are:</p>
                                </div>

                                <Row className='gap-y-4'>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (4).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Passionate about our mission</h5>
                                            <p className='text__16 text-Mneutral700'>We're looking for someone who really believes in what we're doing.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (1).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Talented and have a knack for what they do</h5>
                                            <p className='text__16 text-Mneutral700'>Receive instant notifications of transactions and balance changes.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (3).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Team players who are excited to collaborate</h5>
                                            <p className='text__16 text-Mneutral700'>Bank-level security with 256-bit encryption to protect your data.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (2).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Driven and results-oriented</h5>
                                            <p className='text__16 text-Mneutral700'>We're all about getting stuff done. Someone who’s not afraid to roll up their sleeves.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px] bg-Mneutral900">
                            <Container>
                                <Row className='justify-between'>
                                    <Col md={6} xl={5}>
                                        <h3 className='font-medium text__56 text-white mb-2'>What we offer</h3>
                                        <p className='text__20 opacity-60 text-white'>We offer a competitive compensation and benefits package, including:</p>
                                    </Col>
                                    <Col md={6} xl={5}>
                                        <div className="grid grid-rows-1 gap-y-3">

                                            {
                                                [
                                                    {
                                                        icon: originalUrl + "/images/lex (3).svg",
                                                        title: "Competitive salary",
                                                        desc: "We don’t mess around when it comes to paychecks.",
                                                    },
                                                    {
                                                        icon: originalUrl + "/images/lex (2).svg",
                                                        title: "Paid time off",
                                                        desc: "We’ve got you covered (literally).",
                                                    },
                                                    {
                                                        icon: originalUrl + "/images/lex (1).svg",
                                                        title: "Retirement savings plan",
                                                        desc: "Save for your future self. We'll help you get started.",
                                                    },
                                                    {
                                                        icon: originalUrl + "/images/lex (4).svg",
                                                        title: "Tuition reimbursement",
                                                        desc: "Want to level up your skills? We'll chip in.",
                                                    },
                                                ].map((obj) => {
                                                    return <div className="flex items-start gap-4 py-[2rem] border-b !border-[rgba(229,229,229,0.2)]">
                                                        <div className="w-[56px] xl:w-[72px] h-[56px] xl:h-[72px] rounded-[10px] bg-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                                                            <img src={obj.icon} alt="" />
                                                        </div>

                                                        <div className="">
                                                            <h5 className='font-medium text__24 mb-2 text-white'>{obj.title}</h5>
                                                            <p className='text__16 text-white opacity-60'>{obj.desc}</p>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <Row className='gap-y-4'>
                                    <Col md={6} className='my-auto'>
                                        <img src={originalUrl + "/images/dsfdsfdfs.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Our culture</h4>
                                        <p className='text__20 leading-relaxed text-Mneutral900 mb-3'>We're a casual and fun-loving group of people who are passionate about our work. We believe in work-life balance and we encourage our employees to take time for themselves. </p>
                                        <p className='text__20 leading-relaxed text-Mneutral900'>We also have a variety of social events and activities throughout the year.</p>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>
                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <div className="text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-2'>Explore our latest job <br /> ⎯ listings</h3>
                                    <p className='text__20 text-Mneutral500'>We're looking for people who are:</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className='font-medium text__24 mb-3'>Tech Industry</h4>

                                    <div className="grid grid-rows-1 gap-y-3">
                                        {
                                            [
                                                {
                                                    title: "Full Stack Developer",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "UI/UX Designer",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Data Scientist",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Product Manage",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                            ].map((obj) => {
                                                return <div className="py-3 pl-8 pr-4 w-full border !border-Mneutral200 rounded-full grid-cols-3 grid md:grid-cols-5 items-center">
                                                    <div className="col-span-2">
                                                        <h5 className='font-medium text__20'>{obj.title}</h5>
                                                        <p className='text__16 text__700'>{obj.status}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 md:block hidden">
                                                        <img src={originalUrl + "/images/MapPin.svg"} alt="" />
                                                        <p className='text__14 text-Mneutral500'>{obj.location}</p>
                                                    </div>
                                                    <div className="text-center md:block hidden">
                                                        <div className="inline-block text-left">
                                                            <p className='text__16 text__500'>{obj.type}</p>
                                                            <h5 className='font-medium text__20'>{obj.price}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <a href={obj.link} className="w-[46px] md:w-[56px] h-[46px] md:h-[56px] rounded-full flex items-center justify-center bg-Mneutral50 border !border-Mneutral200 ml-auto inline-block">
                                                            <img src={originalUrl + "/images/arrowright.svg"} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className='font-medium text__24 mb-3'>Marketing & Sales</h4>

                                    <div className="grid grid-rows-1 gap-y-3">
                                        {
                                            [
                                                {
                                                    title: "Digital Marketing Specialist",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Sales Representative",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Content Marketing Manager",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                            ].map((obj) => {
                                                return <div className="py-3 pl-8 pr-4 w-full border !border-Mneutral200 rounded-full grid-cols-3 grid md:grid-cols-5 items-center">
                                                    <div className="col-span-2">
                                                        <h5 className='font-medium text__20'>{obj.title}</h5>
                                                        <p className='text__16 text__700'>{obj.status}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 md:block hidden">
                                                        <img src={originalUrl + "/images/MapPin.svg"} alt="" />
                                                        <p className='text__14 text-Mneutral500'>{obj.location}</p>
                                                    </div>
                                                    <div className="text-center md:block hidden">
                                                        <div className="inline-block text-left">
                                                            <p className='text__16 text__500'>{obj.type}</p>
                                                            <h5 className='font-medium text__20'>{obj.price}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <a href={obj.link} className="w-[46px] md:w-[56px] h-[46px] md:h-[56px] rounded-full flex items-center justify-center bg-Mneutral50 border !border-Mneutral200 ml-auto inline-block">
                                                            <img src={originalUrl + "/images/arrowright.svg"} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>


                                <div className="">
                                    <h4 className='font-medium text__24 mb-3'>Creative Industry</h4>

                                    <div className="grid grid-rows-1 gap-y-3">
                                        {
                                            [
                                                {
                                                    title: "Graphic Designer",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Copywriter",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Video Editor",
                                                    status: "Full time",
                                                    location: "San Diego, California",
                                                    type: "Hourly",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },

                                            ].map((obj) => {
                                                return <div className="py-3 pl-8 pr-4 w-full border !border-Mneutral200 rounded-full grid-cols-3 grid md:grid-cols-5 items-center">
                                                    <div className="col-span-2">
                                                        <h5 className='font-medium text__20'>{obj.title}</h5>
                                                        <p className='text__16 text__700'>{obj.status}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 md:block hidden">
                                                        <img src={originalUrl + "/images/MapPin.svg"} alt="" />
                                                        <p className='text__14 text-Mneutral500'>{obj.location}</p>
                                                    </div>
                                                    <div className="text-center md:block hidden">
                                                        <div className="inline-block text-left">
                                                            <p className='text__16 text__500'>{obj.type}</p>
                                                            <h5 className='font-medium text__20'>{obj.price}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <a href={obj.link} className="w-[46px] md:w-[56px] h-[46px] md:h-[56px] rounded-full flex items-center justify-center bg-Mneutral50 border !border-Mneutral200 ml-auto inline-block">
                                                            <img src={originalUrl + "/images/arrowright.svg"} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp title='Join the Finpro <br /> ⎯ Family' />
            </Layout>
        </Fragment >
    )
}

export default Careers