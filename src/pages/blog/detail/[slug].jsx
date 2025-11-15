import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout';
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';


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
            <Layout title='Blog Detail' description='Blog Detail Desc' >

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container className="relative z-[1] mt-[3rem]">

                                <Row className='justify-center'>
                                    <Col md={10}>
                                        <h5 className='text__16 font-medium text-Mneutral500 mb-2'>REYNALDO SMITH · JUL 23 2024</h5>
                                        <h4 className='text__56 font-medium text-Mneutral700 mb-4'>Top 5 ways digital banking <br className='ss:block hidden' />
                                            makes life easier</h4>

                                        <img src={originalUrl + "/images/sdasdsad.png"} className='w-full object-cover rounded-[24px] mb-4' alt="" />

                                        <h5 className='font-medium text__20 leading-relaxed text-Mneutral700 mb-3'>In today's fast-paced world, convenience is king. One of the significant advancements that have reshaped how we manage our finances is digital banking. Gone are the days of waiting in long lines at the bank or dealing with cumbersome paperwork. Here are the top five ways digital banking makes life easier:</h5>

                                        <div className="mb-3">
                                            <h5 className='font-medium text__20 leading-relaxed text-Mneutral700 mb-2'>1. 24/7 Accessibility</h5>
                                            <p className='text__18 text-Mneutral700 leading-relaxed'>One of the most significant benefits of digital banking is the ability to access your account anytime, anywhere. Whether it's late at night or during a busy workday, you can check your balance, transfer funds, or pay bills with just a few clicks. This round-the-clock accessibility ensures that you have control over your finances at all times.</p>
                                        </div>
                                        <div className="mb-3">
                                            <h5 className='font-medium text__20 leading-relaxed text-Mneutral700 mb-2'>2. Convenient Payments and Transfers</h5>
                                            <p className='text__18 text-Mneutral700 leading-relaxed'>Digital banking simplifies the process of making payments and transferring money. You can easily pay bills online, set up automatic payments for recurring expenses, and transfer funds between accounts instantly. This convenience saves time and reduces the risk of late payments and associated fees.</p>
                                        </div>
                                        <div className="mb-3">
                                            <h5 className='font-medium text__20 leading-relaxed text-Mneutral700 mb-2'>3. Enhanced Security</h5>
                                            <p className='text__18 text-Mneutral700 leading-relaxed'>Digital banking platforms are equipped with advanced security features to protect your financial information. Multi-factor authentication, encryption, and real-time fraud monitoring are just a few of the measures in place to ensure your data is secure. Additionally, you can receive instant alerts for any suspicious activity, allowing you to take immediate action.</p>
                                        </div>
                                        <div className="mb-3">
                                            <h5 className='font-medium text__20 leading-relaxed text-Mneutral700 mb-2'>4. Budgeting and Financial Management Tools</h5>
                                            <p className='text__18 text-Mneutral700 leading-relaxed'>Many digital banking apps offer built-in budgeting and financial management tools. These features help you track your spending, set savings goals, and monitor your progress. With detailed insights into your financial habits, you can make more informed decisions and stay on top of your financial health.</p>
                                        </div>
                                        <div className="mb-3">
                                            <h5 className='font-medium text__20 leading-relaxed text-Mneutral700 mb-2'>5. Paperless Statements and Records</h5>
                                            <p className='text__18 text-Mneutral700 leading-relaxed'>Digital banking reduces the need for paper statements and records. You can access your account statements online, download transaction histories, and even receive digital receipts. This not only helps the environment by reducing paper waste but also makes it easier to organize and retrieve your financial documents whenever you need them.</p>
                                        </div>


                                        <div className="mt-[2rem] w-full p-4 bg-Mneutral900 rounded-[24px] mb-3">

                                            <img src={originalUrl + "/images/Frame 22607.svg"} className='w-[48px] h-[48px] rounded-full' alt="" />

                                            <h4 className='font-medium text__24 my-[2rem] text-white'>Embrace the future of banking and experience how these digital tools can transform your financial management, providing peace of mind and freeing up valuable time for other important aspects of your life.</h4>

                                            <div className="">
                                                <h5 className='font-medium text__24 mb-2 text-white'>Susan Taylor</h5>
                                                <p className='text__18 text-Mneutral400'>CEO, Finpro</p>
                                            </div>
                                        </div>

                                        <div className="">
                                            <h5 className='font-medium text__20 leading-relaxed text-Mneutral700 mb-2'>Conclusion</h5>
                                            <p className='text__18 text-Mneutral700 leading-relaxed'>Digital banking has revolutionized the way we manage our money, offering unparalleled convenience, security, and efficiency. By embracing these technological advancements, you can simplify your financial life and enjoy more time for the things that matter most. Whether you're paying bills, transferring money, or managing your budget, digital banking makes it all easier and more accessible.</p>
                                        </div>
                                    </Col>
                                </Row>



                            </Container>
                        </div>
                    </div>

                </section>


                <section className='py-2'>

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>


                                <h4 className='font-medium text__64 mb-[2rem]'>Related <br />
                                    ⎯  Articles</h4>


                                <Row className='gap-y-6'>
                                    <Col sm={6} lg={4}>
                                        <img src={originalUrl + "/images/img (2).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-4">
                                            <h4 className='font-medium text__20 mb-2'>Top 5 ways digital banking makes
                                                life easier</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Expand on this headline by highlighting the five key ways digital banking simplifies finances</p>

                                            <ActionBtn title="Read More" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4}>
                                        <img src={originalUrl + "/images/img (3).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-4">
                                            <h4 className='font-medium text__20 mb-2'>Security & speed: why digital banking is the future</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Emphasize the robust security measures in digital banking and the benefits of faster transactions.</p>

                                            <ActionBtn title="Read More" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4}>
                                        <img src={originalUrl + "/images/img (1).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-4">
                                            <h4 className='font-medium text__20 mb-2'>Upgrade your banking experience: we've launched exciting new features!</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Focus on the convenience and power of mobile banking apps.</p>

                                            <ActionBtn title="Read More" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                </Row>


                                <div className="text-center mt-[2rem]">
                                    <a href="#!" className='inline-block px-6 py-3 rounded-full bg-Mneutral50 text-Mneutral900 font-semibold text__16'>See All</a>
                                </div>
                            </Container>
                        </div>
                    </div>

                </section>
            </Layout>
        </Fragment>
    )
}

export default Slug