import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export async function getServerSideProps({ params }) {
    const { slug } = params;
    return {
        props: {
            slug,
        },
    };
}

const Slug = ({ slug }) => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Podcast Detail' description='Podcast Detail Desc' >

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container className="relative z-[1] mt-[3rem]">

                                <Row className='justify-between gap-y-4'>
                                    <Col md={5} lg={4}>
                                        <div className="w-full bg-white p-6 rounded-[32px]">
                                            <p className='text__16 uppercase text-Mneutral600 mb-2'>JOHN SMITH · JUL 23 2024</p>
                                            <h4 className='font-medium text__24'>Investing in the Future: Tech Stocks to Watch</h4>

                                            <div className="relative w-full h-[360px] rounded-[32px]  overflow-hidden border-[4px] !border-white bg-Mpositive50 my-3">
                                                <img src={originalUrl + "/images/pp (7).png"} className='w-full h-full object-cover [mix-blend-mode:luminosity]' alt="" />
                                            </div>

                                            <h5 className='font-medium text__145 text-Mneutral600 mb-2'>Listen on:</h5>
                                            <div className="flex items-center gap-2">
                                                <a href={"#!"} className="px-3 py-2 rounded-full flex items-center gap-2 bg-Mneutral200">
                                                    <img src={originalUrl + "/images/pod (1).png"} alt="" />
                                                    <p className='text__14 font-medium text-Mneutral700'>Apple Podcast</p>
                                                </a>
                                                <a href={"#!"} className="px-3 py-2 rounded-full flex items-center gap-2 bg-Mneutral200">
                                                    <img src={originalUrl + "/images/pod (2).png"} alt="" />
                                                    <p className='text__14 font-medium text-Mneutral700'>Spotify</p>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7} lg={8}>
                                        <div className="w-full p-4 bg-Mneutral900 rounded-[24px] mb-3">

                                            <img src={originalUrl + "/images/sadasd.svg"} className='w-[48px] h-[48px] rounded-full' alt="" />

                                            <div className="mt-[2rem]">
                                                <p className='text-white text__18 opacity-60 mb-2'>Emily</p>
                                                <h4 className='font-medium text__24 text-white'>"Joining us today is John Smith, a seasoned financial analyst with over 15 years of experience in the industry. John has a <span className='opacity-30'>keen eye for market trends and has been closely following the tech sector. Welcome to the show, John!"</span></h4>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <h5 className='font-medium text__20 mb-2'>Description</h5>
                                            <p className='text__18 leading-relaxed text-Mneutral700'>In this episode, we explore the exciting world of technology stocks and how they are shaping the future of investing. Our expert guest, John Smith, a seasoned Financial Analyst, shares his insights on the most promising tech companies to watch, trends to keep an eye on, and strategies for building a tech-focused investment portfolio. Whether you're a seasoned investor or just starting out, this episode provides valuable guidance on navigating the dynamic tech sector.</p>
                                        </div>

                                        <div className="mb-3">
                                            <p className='text__18 mb-2 text-Mneutral600'>Speaker:</p>
                                            <h5 className='font-medium text__20 text-Mneutral700'>John Smith</h5>
                                        </div>

                                        <div className="mb-3">
                                            <p className='text__18 mb-2 text-Mneutral600'>Duration:</p>
                                            <h5 className='font-medium text__20 text-Mneutral700'>45 minutes</h5>
                                        </div>

                                        <div className="mb-3">
                                            <h5 className='font-medium text__20 text-Mneutral700 mb-2'>Key Topics Covered:</h5>
                                            <p className='text__18 mb-1 text-Mneutral700'>1. Current Trends in the Tech Industry: Understanding the major trends driving growth in the technology sector.</p>
                                            <p className='text__18 mb-1 text-Mneutral700'>2. Top Tech Stocks to Consider: A closer look at specific companies that are leading the way in innovation and market performance.</p>
                                            <p className='text__18 mb-1 text-Mneutral700'>3. Investment Strategies: Tips and strategies for incorporating tech stocks into your investment portfolio.</p>
                                        </div>
                                    </Col>
                                </Row>



                            </Container>
                        </div>
                    </div>

                </section>
            </Layout>
        </Fragment>
    )
}

export default Slug