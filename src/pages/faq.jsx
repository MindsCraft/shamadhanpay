import AccordionHelp from '@/Components/Accordion/AccordionHelp';
import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Faq = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Faq' description='Faq Desc' >

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container className="relative z-[1] mt-[3rem]">

                                <Row className='gap-y-4'>
                                    <Col md={6}>
                                        <h2 className='font-medium text__64 mb-2'>Frequently <br />
                                            asked ⎯ questions</h2>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>We’ve been doing this for quite some time so we’ve pulled together some of the more common questions we get asked.</p>


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
                                            <div className="flex flex-wrap gap-y-3">
                                                <p className='text__18 text-Mneutral700'>Questions and answers</p>
                                                {

                                                    [
                                                        {
                                                            title: "What is Finpro?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "How do I sign up for a Finpro account?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "How can I keep my account information safe?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "Is there a fee for using Finpro?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "How do I reset my password?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "How can I update my personal information?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "How does Finpro protect my financial information?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "What should I do if I notice suspicious activity on my account?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "How do I transfer money to another account?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "Can I set up automatic payments for my bills?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "Is the Finpro app available for both iOS and Android?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                        {
                                                            title: "How can I enable biometric login on the Finpro app?",
                                                            desc: "A1: Finpro is a digital banking platform designed to provide convenient, secure, and efficient banking services. Our goal is to make managing your finances as easy and accessible as possible.",
                                                        },
                                                    ].map((obj) => {
                                                        return <Fragment>
                                                            <AccordionHelp title={obj.title} desc={obj.desc} />
                                                            <div className="w-full h-[1px] bg-Mneutral200"></div>
                                                        </Fragment>
                                                    })
                                                }



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

export default Faq