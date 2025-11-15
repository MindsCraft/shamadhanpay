import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    return (
        <Fragment>
            <Layout title='Case Study Detail' description='Case Study Detail Desc' >
                <section className='relative overflow-hidden pt-[50px] md:pt-[80px] pb-0'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem] pb-[40px] lg:pb-[80px]'>
                        <Row className='mb-[2rem] md:mb-0'>
                            <Col md={6}>
                                <div className="mb-2 inline-block">
                                    <div onClick={() => router.back()} className='flex gap-2 items-center cursor-pointer'>
                                        <img src={originalUrl + "/images/ArrowCircleLeft.svg"} alt="" />
                                        <p className='text__18 text-Mneutral700'>Case Studies</p>
                                    </div>
                                </div>
                                <h2 className='font-medium text__72 mb-4'>Financial <br className='md:block hidden' /> transformation with <br className='xl:block hidden' /> ⎯ Finpro</h2>
                                <div className="inline-block px-6 py-3 bg-white shadow-[16px_22px_20px_-20px_rgba(29,42,52,0.04)] rounded-full">
                                    <div className="flex items-center gap-2">
                                        <img src={originalUrl + "/images/Atom.svg"} alt="" />
                                        <p className='font-medium text__18 text-Mneutral500'>FIntech</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <img src={originalUrl + "/images/fdgfdgdf.svg"} className='md:absolute md:right-0 md:bottom-0 mx-auto lg:w-auto md:w-[350px]' alt="" />
                    </Container>
                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>
                                <Row className='justify-between gap-y-4'>
                                    <Col md={"5"} xl={"4"}>

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
                                                <div className="py-4 border-b !border-Mneutral200">
                                                    <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                                        <p className='font-medium text__20'>Conclusion</p>
                                                        <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                    <Col md={"7"}>
                                        <h3 className='text__24 font-medium leading-relaxed mb-4'>At Finpro, we are committed to transforming how you manage your finances. With our innovative mobile banking app, we deliver an easier, faster, and safer journey.</h3>

                                        <div className="mb-4">
                                            <h4 className='text__24 font-medium mb-2'>Challenges</h4>
                                            <p className='text__18 leading-relaxed text-Mneutral700'>As a leader in the banking industry, we face demands to continuously enhance our services. Our primary challenge is to improve user experience without compromising on security and efficiency.</p>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className='text__24 font-medium mb-3'>Solutions</h4>

                                            <div className="mb-3">
                                                <h5 className='text__18 leading-relaxed text-Mneutral700 mb-2'>1. Intuitive Mobile App</h5>
                                                <p className='text__18 leading-relaxed text-Mneutral700'>We designed an intuitive and user-friendly mobile banking app. With a clean interface and clear navigation, our clients can quickly access their account information, perform fund transfers, and manage their investments more efficiently.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h5 className='text__18 leading-relaxed text-Mneutral700 mb-2'>2. State-of-the-art Security</h5>
                                                <p className='text__18 leading-relaxed text-Mneutral700'>Security is our top priority. We employ the latest encryption technology and two-factor authentication features to protect every transaction. This allows our clients to transact with full confidence.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h5 className='text__18 leading-relaxed text-Mneutral700 mb-2'>3. Personalized User Experience</h5>
                                                <p className='text__18 leading-relaxed text-Mneutral700'>We understand that each client has unique needs. With advanced data analytics algorithms, we provide personalized recommendations for our products and services. This ensures that each user experience is tailored to their preferences.</p>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className='text__24 font-medium mb-2'>Results</h4>
                                            <p className='text__18 leading-relaxed text-Mneutral700'>Thanks to our innovative mobile banking app, we have successfully increased client satisfaction and operational efficiency. App usage has significantly risen, and we have received positive feedback from clients regarding ease of use and enhanced security.</p>
                                        </div>

                                        <div className="mt-[2rem] w-full p-4 bg-Mneutral900 rounded-[24px] mb-4">

                                            <img src={originalUrl + "/images/Frame 22607.svg"} className='w-[48px] h-[48px] rounded-full' alt="" />

                                            <h4 className='font-medium text__24 my-[2rem] text-white'>“FinPro has transformed how I manage my finances. Having all my accounts in one place is incredibly convenient, and the real-time updates keep me informed about every transaction. It's a game-changer!”</h4>

                                            <div className="">
                                                <h5 className='font-medium text__24 mb-2 text-white'>Susan Taylor</h5>
                                                <p className='text__18 text-Mneutral400'>CEO, Finpro</p>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className='text__24 font-medium mb-2'>Conclusion</h4>
                                            <p className='text__18 leading-relaxed text-Mneutral700'>At Finpro, we believe that digital transformation is the key to the future of banking. With our commitment to continuous innovation, we are ready to deliver a better banking experience for our clients.</p>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp title='Join the Finpro <br /> ⎯ Family' />
            </Layout>
        </Fragment>
    )
}

export default Slug