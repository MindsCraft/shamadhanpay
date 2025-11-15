import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout';
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import SecTestimonial from '@/Components/Section/SecTestimonial';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const iInvestmentAndTrading = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Investment and Trading' description='Investment and Trading Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4 sm:mb-[3rem] lg:mb-[5rem] text-center'> Invest smarter, trade <br /> confidently</h2>
                        <img src={originalUrl + "/images/Group 162643.png"} className='mx-auto' alt="" />
                    </Container>
                </section>


                <section>
                    <Container>
                        <Row className='justify-between lg:px-4 xl:px-[2.5rem]'>
                            <Col md={6} xl={5}>
                                <h3 className='font-medium text__64'>Empower Your ⎯ Investing Journey</h3>
                            </Col>
                            <Col md={6} xl={5}>
                                <div className="grid grid-rows-1 gap-y-3">

                                    {
                                        [
                                            {
                                                icon: originalUrl + "/images/asa (1).svg",
                                                title: "Automated trading",
                                                desc: "Set it and forget it. Let our algorithms execute trades based on your preferences.",
                                            },
                                            {
                                                icon: originalUrl + "/images/asa (2).svg",
                                                title: "In-depth market analysis",
                                                desc: "Stay ahead of the curve with real-time market data and expert insights.",
                                            },
                                            {
                                                icon: originalUrl + "/images/asa (3).svg",
                                                title: "Customizable portfolios",
                                                desc: "Build a portfolio that aligns with your unique goals and risk tolerance.",
                                            },
                                        ].map((obj) => {
                                            return <div className="flex items-start gap-4 py-[2rem] border-b !border-Mneutral200">
                                                <div className="w-[56px] xl:w-[72px] h-[56px] xl:h-[72px] rounded-[10px] bg-Mneutral100 flex items-center justify-center flex-shrink-0">
                                                    <img src={obj.icon} alt="" />
                                                </div>

                                                <div className="">
                                                    <h5 className='font-medium text__24 mb-2'>{obj.title}</h5>
                                                    <p className='text__16'>{obj.desc}</p>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='py-2'>

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <div className="grid grid-rows-1 gap-y-6">

                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={5} className='my-auto'>
                                                <img src={originalUrl + "/images/in (2).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Detailed Market
                                                        <br /> ⎯ Analysis</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Provide users with real-time market data, charts, and technical indicators to help them make informed trading decisions.</p>

                                                    <ActionBtn link='/about' title="Get Started" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={7} className='my-auto md:!order-1 order-2'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Customizable
                                                        <br /> ⎯ Trading Platforms</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Provide users with real-time market data, charts, and technical indicators to help them make informed trading decisions.</p>

                                                    <ActionBtn link='/about' title="Get Started" />
                                                </div>
                                            </Col>
                                            <Col md={5} className='my-auto order-1 md:!order-2'>
                                                <img src={originalUrl + "/images/in (3).svg"} alt="" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={5} className='my-auto'>
                                                <img src={originalUrl + "/images/in (1).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Algorithmic ⎯ <br /> Trading</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Enable users to automate their trading strategies with advanced algorithms.</p>

                                                    <ActionBtn link='/about' title="Get Started" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>


                <SecTestimonial />

                <SecGetApp title='Start ⎯ <br /> Investing Today' subtext='Ready to take the next step? Sign up <br class="xl:hidden block" /> for a free <br class="xl:block hidden" /> account and explore our platform.' />

            </Layout>
        </Fragment>
    )
}

export default iInvestmentAndTrading