import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Index = () => {
    const originalUrl = useHostname();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Fragment>
            <Layout title='Podcast' description='Podcast Desc' >
                <section className='relative pt-[50px] md:pt-[80px]'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full object-cover left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4'>Tune in to <br />
                            the latest financial <br />
                            ⎯ insights</h2>

                        <div className="inline-block" onClick={() => scrollToSection('section1')}>
                            <ActionBtn title="Start Listening" />
                        </div>

                        <img src={originalUrl + "/images/Group 162650.svg"} className='md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mx-auto md:w-[450px] xl:w-auto mt-8 md:mt-0' alt="" />
                    </Container>
                </section>


                <section className='py-2 relative z-[1]' id="section1">

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <h3 className='font-medium text__64 mb-[2.5rem]'>Latest <br />
                                    ⎯ Episode</h3>

                                <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-4">

                                    <div className="w-full p-4 bg-white rounded-[32px]">
                                        <h4 className='font-medium text__32 mb-2'>Bringing Banking Experience to Your Fingertips</h4>
                                        <div className="grid grid-cols-1">
                                            <div className="py-4 border-b !border-Mneutral200">
                                                <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                                    <p className='font-medium text__20'>Challenges</p>
                                                    <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                                </a>
                                            </div>
                                            <div className="py-4 border-b !border-Mneutral200">
                                                <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                                    <p className='font-medium text__20'>Solutions</p>
                                                    <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                                </a>
                                            </div>
                                            <div className="py-4 border-b !border-Mneutral200">
                                                <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                                    <p className='font-medium text__20'>Results</p>
                                                    <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                                </a>
                                            </div>
                                            <div className="py-4">
                                                <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                                    <p className='font-medium text__20'>Conclusion</p>
                                                    <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        [
                                            {
                                                img: originalUrl + "/images/pp (7).png",
                                                bg: "bg-Mnegative100",
                                                name: "REYNALDO SMITH",
                                                date: "JUL 23 2024",
                                                title: "Investing in the Future: Tech Stocks to Watch",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (14).png",
                                                bg: "bg-Msecondary100",
                                                name: "DANIEL JAMES",
                                                date: "JUL 23 2024",
                                                title: "Entrepreneurship 101: From Startup to Success",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (13).png",
                                                bg: "bg-Mpositive50",
                                                name: "ALBERT JUAN",
                                                date: "JUL 23 2024",
                                                title: "Entrepreneurship 101: From Startup to Success",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (12).png",
                                                bg: "bg-Msecondary100",
                                                name: "SELMA KNIGHT",
                                                date: "JUL 23 2024",
                                                title: "Real Estate Investing: Market Insights and Strategies",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (11).png",
                                                bg: "bg-Mbrand100",
                                                name: "DAVID BEANE",
                                                date: "JUL 23 2024",
                                                title: "Cryptocurrency 101: Navigating the Digital Currency World",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (10).png",
                                                bg: "bg-Mbrand100",
                                                name: "MARIA JOYCE",
                                                date: "JUL 23 2024",
                                                title: "Sustainable Investing: Profit with a Purpose",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (9).png",
                                                bg: "bg-Mwarning100",
                                                name: "LARA OCHOA",
                                                date: "JUL 23 2024",
                                                title: "The Psychology of Money: Understanding Financial Behavior",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },

                                            {
                                                img: originalUrl + "/images/pp (8).png",
                                                bg: "bg-Mnegative100",
                                                name: "ERIC YATES",
                                                date: "JUL 23 2024",
                                                title: "Retirement Planning: Securing Your Future Today",
                                                link: "/podcast/detail/investing-in-the-future-tech-stocks-to-watch"
                                            },

                                        ].map((obj) => {
                                            return <div className="">
                                                <div className={"relative w-full h-[360px] rounded-[32px]  overflow-hidden border-[4px] !border-white " + obj.bg}>

                                                    <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[rgba(15,15,15,0.2)] backdrop-blur-[10px] z-[1] cursor-pointer">
                                                        <img src={originalUrl + "/images/Play.svg"} alt="" />
                                                    </div>

                                                    <img src={obj.img} className='w-full h-full object-cover [mix-blend-mode:luminosity]' alt="" />
                                                </div>

                                                <div className="p-4 !pb-0">
                                                    <p className='text__16 uppercase text-Mneutral600 mb-2'>{obj.name} · {obj.date}</p>
                                                    <h5 className='font-medium text__20 mb-4'>{obj.title}</h5>

                                                    <ActionBtn link={obj.link} title="Listen Now" size='small' type={"2"} />
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
            </Layout>
        </Fragment>
    )
}

export default Index
