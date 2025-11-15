import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import SecTestimonial from '@/Components/Section/SecTestimonial';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const EasyMoneyTransfers = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Easy Money Transfers' description='Easy Money Transfers Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4 sm:mb-[3rem] lg:mb-[5rem] text-center'>Simple, secure, and fast: easy <br className='xs:block hidden' /> money transfer</h2>
                        <img src={originalUrl + "/images/Group 162644.png"} className='mx-auto sm:block hidden' alt="" />
                        <img src={originalUrl + "/images/Group 162653.png"} className='mx-auto sm:hidden' alt="" />
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row className='justify-between lg:px-4 xl:px-[2.5rem]'>
                            <Col md={6} xl={5}>
                                <h3 className='font-medium text__64'>Enjoy the convenience of instant fund ⎯ transfers</h3>
                            </Col>
                            <Col md={6} xl={5}>
                                <div className="grid grid-rows-1 gap-y-3">

                                    {
                                        [
                                            {
                                                icon: originalUrl + "/images/es (2).svg",
                                                title: "Ease of use",
                                                desc: "Send money with just a few simple steps, even for new users.",
                                            },
                                            {
                                                icon: originalUrl + "/images/es (1).svg",
                                                title: "Optimal security",
                                                desc: "High-level protection with state-of-the-art encryption technology, ensuring safe and secure transactions.",
                                            },
                                            {
                                                icon: originalUrl + "/images/es (3).svg",
                                                title: "Real-time assurance",
                                                desc: "Funds arrive instantly in the recipient's account, without delay.",
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
                                                <img src={originalUrl + "/images/ess (2).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Transaction ⎯ <br /> History</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Track all your transactions with clear and
                                                        accessible details.</p>

                                                    <ActionBtn link='/about' title="Get Started" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={7} className='my-auto md:!order-1 order-2'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Instant ⎯ <br />Notifications</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Receive real-time notifications for every incoming and outgoing transaction.</p>

                                                    <ActionBtn link='/about' title="Get Started" />
                                                </div>
                                            </Col>
                                            <Col md={5} className='my-auto order-1 md:!order-2'>
                                                <img src={originalUrl + "/images/ess (3).svg"} alt="" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={5} className='my-auto'>
                                                <img src={originalUrl + "/images/ess (1).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>The Process is ⎯ Straightforward!</h4>
                                                    <ul className='text__18 mb-2 list-decimal pl-5 text-Mneutral800'>
                                                        <li>Select the recipient </li>
                                                        <li>Enter the amount you wish to send</li>
                                                        <li>And complete the transaction securely using our advanced security features. </li>
                                                    </ul>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>All accessible directly from the mobile app, ensuring a seamless user experience.</p>

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

                <SecGetApp title='Start Sending ⎯ <br /> Money Now' subtext='Ready to take the next step? Sign up <br class="xl:hidden block" /> for a free <br class="xl:block hidden" /> account and explore our platform.' />
            </Layout>
        </Fragment>
    )
}

export default EasyMoneyTransfers