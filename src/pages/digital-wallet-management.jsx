import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import SecTestimonial from '@/Components/Section/SecTestimonial';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DigitalWalletManagement = () => {
    const originalUrl = useHostname();

    return (
        <Fragment>
            <Layout title='Digital Wallet Management' description='Digital Wallet Management Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4 sm:mb-[3rem] lg:mb-[5rem] text-center'>Effortless Digital Wallet <br className='xx:block hidden' /> Management</h2>
                        <img src={originalUrl + "/images/asdasdasd.svg"} className='mx-auto sm:block hidden' alt="" />
                        <img src={originalUrl + "/images/Group 162652 (1).svg"} className='mx-auto sm:hidden' alt="" />
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row className='justify-between lg:px-4 xl:px-[2.5rem]'>
                            <Col md={6} xl={5}>
                                <h3 className='font-medium text__64'>Discover the Essentials ⎯ Unlock the Best</h3>
                            </Col>
                            <Col md={6} xl={5}>
                                <div className="grid grid-rows-1 gap-y-3">

                                    {
                                        [
                                            {
                                                icon: originalUrl + "/images/disc (1).svg",
                                                title: "Unified Dashboard",
                                                desc: "View all your financial accounts in one centralized dashboard.",
                                            },
                                            {
                                                icon: originalUrl + "/images/disc (2).svg",
                                                title: "Real-Time Updates",
                                                desc: "Receive instant notifications of transactions and balance changes.",
                                            },
                                            {
                                                icon: originalUrl + "/images/disc (3).svg",
                                                title: "Security",
                                                desc: "Bank-level security with 256-bit encryption to protect your data.",
                                            },
                                            {
                                                icon: originalUrl + "/images/disc (4).svg",
                                                title: "Accessibility",
                                                desc: "Access your wallet from anywhere, anytime, using any device.",
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
                                                <img src={originalUrl + "/images/asdasd.svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Streamlined Financial Management</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Manage your finances effortlessly with all your accounts, expenses, and investments in one place. Say goodbye to switching between multiple apps.</p>

                                                    <ActionBtn link='/about' title="Get Started" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={7} className='my-auto md:!order-1 order-2'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Enhanced Security</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Enjoy peace of mind with top-level security measures and advanced encryption protocols that keep your financial information safe and confidential.</p>

                                                    <ActionBtn link='/about' title="Get Started" />
                                                </div>
                                            </Col>
                                            <Col md={5} className='my-auto order-1 md:!order-2'>
                                                <img src={originalUrl + "/images/gfbgfh (1).svg"} alt="" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={5} className='my-auto'>
                                                <img src={originalUrl + "/images/gfbgfh (2).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Time-Saving Efficiency</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Benefit from automated tracking and real-time updates, allowing you to stay informed and make quick, effective financial decisions without the manual effort.</p>

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

                <SecGetApp title='Get started with digital ⎯ <br class="ss:block hidden" /> wallet management today' subtext='Open an account today and experience the <br class="ss:block hidden" /> difference of digital banking with Finpro!' />
            </Layout>
        </Fragment>
    )
}

export default DigitalWalletManagement
