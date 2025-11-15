import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ResourcesLibrary = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Resources Library' description='Resources Library Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4'>Welcome to our <br />
                            ⎯ resources library</h2>
                        <p className='text__20 text-Mneutral700 leading-relaxed mb-[3rem]'>Explore a wealth of knowledge and tools designed to help you succeed. Whether you’re <br className='lg:block hidden' /> looking for insightful articles, practical guides, in-depth research papers, or engaging <br className='lg:block hidden' />podcasts, our resources library has something for everyone.</p>

                        <img src={originalUrl + "/images/gh.svg"} className='mx-auto' alt="" />
                    </Container>
                </section>


                <section className='py-2'>

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>
                                <Row className='gap-y-4'>
                                    <Col md={6} lg={4} className='flex-fill'>
                                        <div className="w-full bg-white p-4 rounded-[32px] h-full">
                                            <div className="w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] rounded-[12px] xl:rounded-[20px] bg-Mneutral50 border !border-Mneutral200 flex items-center justify-center mb-4">
                                                <img src={originalUrl + "/images/BookOpenText.svg"} className='w-[32px] xl:w-auto' alt="" />
                                            </div>
                                            <h5 className='font-medium text__24 text-Mneutral700 mb-2'>Articles</h5>
                                            <p className='text__16 leading-relaxed text-Mneutral600 mb-4'>Stay updated with the latest trends and insights in your industry. Our articles cover a wide range of topics to keep you informed and inspired.</p>

                                            <ActionBtn link='/blog' title="Learn More" size='small' type={"2"} />
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className='flex-fill'>
                                        <div className="w-full bg-white p-4 rounded-[32px] h-full">
                                            <div className="w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] rounded-[12px] xl:rounded-[20px] bg-Mneutral50 border !border-Mneutral200 flex items-center justify-center mb-4">
                                                <img src={originalUrl + "/images/Book.svg"} className='w-[32px] xl:w-auto' alt="" />
                                            </div>
                                            <h5 className='font-medium text__24 text-Mneutral700 mb-2'>Case Studies</h5>
                                            <p className='text__16 leading-relaxed text-Mneutral600 mb-4'>Read real-world success stories and learn from the experiences of others. Our case studies provide valuable lessons and best practices.</p>

                                            <ActionBtn link='/case-study' title="Learn More" size='small' type={"2"} />
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className='flex-fill'>
                                        <div className="w-full bg-white p-4 rounded-[32px] h-full">
                                            <div className="w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] rounded-[12px] xl:rounded-[20px] bg-Mneutral50 border !border-Mneutral200 flex items-center justify-center mb-4">
                                                <img src={originalUrl + "/images/Microphone.svg"} className='w-[32px] xl:w-auto' alt="" />
                                            </div>
                                            <h5 className='font-medium text__24 text-Mneutral700 mb-2'>Podcasts</h5>
                                            <p className='text__16 leading-relaxed text-Mneutral600 mb-4'>Listen to insightful conversations and expert interviews on the go. Our podcasts cover a range of topics to keep you informed, entertained.</p>

                                            <ActionBtn link="/podcast" title="Learn More" size='small' type={"2"} />
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp title="Ready <br /> to ⎯ dive in?" type={2} />

            </Layout>
        </Fragment>
    )
}

export default ResourcesLibrary
