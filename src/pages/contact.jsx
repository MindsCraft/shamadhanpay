import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Contact Us' description='Contact Us Desc' >

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container className="relative z-[1] mt-[3rem]">

                                <Row className='gap-y-4'>
                                    <Col md={6}>
                                        <h2 className='font-medium text__64 mb-2'>Get in ⎯ <br />
                                            touch with us</h2>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>We’re here to help! Whether you have a question about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you. </p>


                                        <div className="my-3">
                                            <p className='text__18 leading-relaxed text-Mneutral700'>Email:</p>
                                            <a href="mailto:hello@finpro.com" className='font-medium text__24 text-Mneutral900'>hello@finpro.com</a>
                                        </div>
                                        <div className="mt-3 mb-8">
                                            <p className='text__18 leading-relaxed text-Mneutral700'>Phone:</p>
                                            <div className='font-medium text__24 text-Mneutral900'>+1 234 567 78</div>
                                            <p className='text__14 leading-relaxed text-Mneutral600'>Available Monday to Friday, 9 AM - 6 PM GMT</p>
                                        </div>

                                        <ActionBtn title='Live Chat' />
                                    </Col>
                                    <Col md={6}>
                                        <div className="w-full p-8 rounded-[32px] bg-white">
                                            <Row className='gap-y-3'>
                                                <Col md={6}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">Firs Name</label>
                                                    <input type="text" placeholder='Enter your first name...' className='w-full h-[46px] px-3 rounded-full bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900' />
                                                </Col>
                                                <Col md={6}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">Last Name</label>
                                                    <input type="text" placeholder='Enter your last name...' className='w-full h-[46px] px-3 rounded-full bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900' />
                                                </Col>
                                                <Col md={12}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">Email</label>
                                                    <input type="text" placeholder='Enter your email address...' className='w-full h-[46px] px-3 rounded-full bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900' />
                                                </Col>
                                                <Col md={12}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">How can we help you?</label>
                                                    <textarea name="" id="" placeholder='Enter your message...' className='w-full h-[144px] px-3 py-2 rounded-[20px] bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900'  ></textarea>
                                                </Col>
                                            </Row>

                                            <div className="mt-[2rem] text-right">
                                                <ActionBtn title='Send Message' />
                                            </div>
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

export default Contact