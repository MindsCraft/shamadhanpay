import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import SecTestimonial from '@/Components/Section/SecTestimonial';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Index = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Webinar' description='Webinar Desc' >
                <section className='relative pt-[50px] md:pt-[80px] pb-0'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full object-cover left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem] text-center'>
                        <h2 className='font-medium text__72 mb-2 lg:mb-4'>Our free ⎯ webinar!</h2>
                        <p className='text__20 text-Mneutral700 leading-relaxed mb-[3rem]'>Join leading financial experts and learn the latest strategies for managing personal <br className='lg:block hidden' /> finances and investments.</p>

                        <img src={originalUrl + "/images/Group 162651.svg"} className='mx-auto' alt="" />
                    </Container>
                </section>


                <section className='pb-2 relative z-[1]'>

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>
                            <h2 className='font-medium text__64 mb-6 text-center'>Why join ⎯ us?</h2>
                                <Row className='gap-y-4'>
                                    <Col md={6} lg={4} className='flex-fill'>
                                        <div className="w-full bg-white p-4 rounded-[32px] h-full">
                                            <div className="w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] rounded-[12px] xl:rounded-[20px] bg-Mneutral50 border !border-Mneutral200 flex items-center justify-center mb-4">
                                                <img src={originalUrl + "/images/BookOpenText.svg"} className='w-[32px] xl:w-auto' alt="" />
                                            </div>
                                            <h5 className='font-medium text__24 text-Mneutral700 mb-2'>Learn from Experts</h5>
                                            <p className='text__16 leading-relaxed text-Mneutral600 mb-4'>Gain knowledge from seasoned professionals in the financial industry.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className='flex-fill'>
                                        <div className="w-full bg-white p-4 rounded-[32px] h-full">
                                            <div className="w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] rounded-[12px] xl:rounded-[20px] bg-Mneutral50 border !border-Mneutral200 flex items-center justify-center mb-4">
                                                <img src={originalUrl + "/images/asas (2).svg"} className='w-[32px] xl:w-auto' alt="" />
                                            </div>
                                            <h5 className='font-medium text__24 text-Mneutral700 mb-2'>Interactive</h5>
                                            <p className='text__16 leading-relaxed text-Mneutral600 mb-4'>Ask your questions directly and get relevant answers.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className='flex-fill'>
                                        <div className="w-full bg-white p-4 rounded-[32px] h-full">
                                            <div className="w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] rounded-[12px] xl:rounded-[20px] bg-Mneutral50 border !border-Mneutral200 flex items-center justify-center mb-4">
                                                <img src={originalUrl + "/images/asas (1).svg"} className='w-[32px] xl:w-auto' alt="" />
                                            </div>
                                            <h5 className='font-medium text__24 text-Mneutral700 mb-2'>Free Access</h5>
                                            <p className='text__16 leading-relaxed text-Mneutral600 mb-4'>Enjoy the benefits of financial education at no cost.</p>
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>


                <section className='py-2 relative z-[1]'>

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <h3 className='font-medium text__64 mb-[2.5rem]'>All ⎯ <br />
                                    Webinars</h3>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                                    {
                                        [
                                            {
                                                img: originalUrl + "/images/pp (7).png",
                                                bg: "bg-Mnegative100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Mastering Personal Budgeting: Tips and Tools for Effective Money Management",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (14).png",
                                                bg: "bg-Msecondary100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Investing 101: Building Your First Investment Portfolio",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (13).png",
                                                bg: "bg-Mpositive50",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Retirement Planning: Securing Your Future Financial Independence",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (12).png",
                                                bg: "bg-Msecondary100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Understanding the Stock Market: Basics and Beyond",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (11).png",
                                                bg: "bg-Mbrand100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Tax Planning Strategies: Maximizing Your Tax Refund",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (10).png",
                                                bg: "bg-Mbrand100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Real Estate Investment: Opportunities and Risks",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (9).png",
                                                bg: "bg-Mwarning100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Managing Debt: Effective Strategies to Get Out of Debt Faster",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },

                                            {
                                                img: originalUrl + "/images/pp (8).png",
                                                bg: "bg-Mnegative100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Cryptocurrency and Blockchain: What You Need to Know",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (7).png",
                                                bg: "bg-Mpositive50",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Financial Wellness for Entrepreneurs: Managing Business and Personal Finances",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },

                                        ].map((obj) => {
                                            return <div className="">
                                                <div className={"relative w-full h-[264px] rounded-[32px]  overflow-hidden border-[4px] !border-white " + obj.bg}>

                                                    <img src={obj.img} className='w-full h-full object-cover object-top [mix-blend-mode:luminosity]' alt="" />
                                                </div>

                                                <div className="p-4 !pb-0">
                                                    <p className='text__16 uppercase text-Mneutral600 mb-2'>{obj.name} · {obj.date}</p>
                                                    <h5 className='font-medium text__20 mb-4'>{obj.title}</h5>

                                                    <ActionBtn link={obj.link} title="Watch" size='small' type={"2"} />
                                                </div>
                                            </div>
                                        })
                                    }



                                </div>

                                <div className="mt-[2.5rem] text-center">
                                    <a href="#!" className='font-semibold text__20 px-6 py-3 rounded-full bg-neutral-50 inline-block'>Load More</a>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <SecTestimonial title={`"This webinar was incredibly informative and helped me better understand how to manage my personal finances."`} action={false} status='Participant' />


                <SecGetApp title='Don’t miss this opportunity <br /> to ⎯ learn from the <br /> experts' subtext='Don’t miss this opportunity to learn from the <br /> experts. Space is limited, so make sure to <br /> register now!' />
            </Layout>
        </Fragment >
    )
}

export default Index