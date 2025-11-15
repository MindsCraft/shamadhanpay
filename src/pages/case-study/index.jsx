import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Index = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Case Study' description='Case Study Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-2 md:mb-4'>Empowering <br />
                            fintech ⎯ innovators.</h2>
                        <p className='text__20 text-Mneutral700 leading-relaxed mb-[3rem]'>a fast-growing tech startup, overcame significant financial management <br className='md:block hidden' />
                            challenges by integrating</p>

                        <img src={originalUrl + "/images/Group 162649.svg"} className='mx-auto' alt="" />
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
                                                <img src={originalUrl + "/images/std (3).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Financial <br /> Transformation with ⎯ Finpro</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Discover how fintech, a fast-growing tech startup, overcame significant financial management challenges by integrating. </p>

                                                    <ActionBtn link='/case-study/detail/financial-transformation-with-⎯-finpro' title="Get Started" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={7} className='my-auto md:!order-1 order-2'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Revolutionizing <br /> Financial Management with ⎯ Finpro</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>a rapidly growing tech startup, faced challenges managing cash flow and increasing financial transactions, they turned to our mobile banking solution.</p>

                                                    <ActionBtn link='/case-study/detail/financial-transformation-with-⎯-finpro' title="Get Started" />
                                                </div>
                                            </Col>
                                            <Col md={5} className='my-auto order-1 md:!order-2'>
                                                <img src={originalUrl + "/images/std (1).svg"} alt="" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={5} className='my-auto'>
                                                <img src={originalUrl + "/images/std (2).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Streamlining ⎯ <br />Financial Operations for Finpro</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>A leading retail chain with multiple locations, streamlined its financial operations and improved transaction accuracy using [App Name].</p>

                                                    <ActionBtn link='/case-study/detail/financial-transformation-with-⎯-finpro' title="Get Started" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp title='Join the Finpro <br /> ⎯ Family' />

            </Layout>
        </Fragment>
    )
}

export default Index
