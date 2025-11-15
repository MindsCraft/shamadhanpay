import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const index = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Blog' description='Blog Desc' >
                <section className='pb-0 relative'>
                    <Container className='relative z-[1] mt-[3rem]'>
                        <Row className='gap-y-4'>
                            <Col lg={4}>
                                <h2 className='font-medium text__72 mb-2'>The Finpro <br />
                                    ⎯ blog</h2>
                                <p className='text-Mneutral700 text__18 mb-[2rem]'>Thoughts on the future of work, from the people and teams creating it.</p>

                                <div className="grid grid-cols-1">
                                    <div className="py-4 border-b !border-Mneutral200">
                                        <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                            <p className='font-medium text__20'>Tech</p>
                                            <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                        </a>
                                    </div>
                                    <div className="py-4 border-b !border-Mneutral200">
                                        <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                            <p className='font-medium text__20'>Inspiration</p>
                                            <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                        </a>
                                    </div>
                                    <div className="py-4 border-b !border-Mneutral200">
                                        <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                            <p className='font-medium text__20'>Security</p>
                                            <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                        </a>
                                    </div>
                                    <div className="py-4 border-b !border-Mneutral200">
                                        <a href="#!" className='flex justify-between items-center text-Mneutral700'>
                                            <p className='font-medium text__20'>Finance management</p>
                                            <img src={originalUrl + "/images/chevron-right.svg"} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {
                                        [
                                            {
                                                img: originalUrl + "/images/img (2).png",
                                                title: 'Top 5 ways digital banking makes life easier',
                                                desc: 'Expand on this headline by highlighting the five key ways digital banking simplifies finances',
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                            {
                                                img: originalUrl + "/images/img (3).png",
                                                title: 'Security & speed: why digital banking is the future',
                                                desc: 'Emphasize the robust security measures in digital banking and the benefits of faster transactions.',
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                            {
                                                img: originalUrl + "/images/img (1).png",
                                                title: `Upgrade your banking experience: we've launched exciting new features!`,
                                                desc: 'Focus on the convenience and power of mobile banking apps.',
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                            {
                                                img: originalUrl + "/images/blg (1).png",
                                                title: `5 Ways online banking can save you time and money`,
                                                desc: `Learn how online banking can revolutionize your financial life.`,
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                            {
                                                img: originalUrl + "/images/blg (2).png",
                                                title: `Is online banking safe? addressing your security concerns`,
                                                desc: `Security is paramount. This guide addresses common online banking concerns and provides tips for protecting your finances.`,
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                            {
                                                img: originalUrl + "/images/blg (3).png",
                                                title: `Banking reimagined: why online banking is the future`,
                                                desc: `Explore how online banking is revolutionizing the financial landscape.`,
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                            {
                                                img: originalUrl + "/images/blg (4).png",
                                                title: `Unlocking financial freedom: how online banking empowers you`,
                                                desc: `Take charge of your financial well-being.  Learn how online banking empowers you to manage your money, budget effectively, and achieve your financial goals.`,
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                            {
                                                img: originalUrl + "/images/blg (5).png",
                                                title: `Beyond bill pay: exploring the hidden features of online banking`,
                                                desc: `There's more to online banking than meets the eye!  `,
                                                link: "/blog/detail/top-5-ways-digital-banking-makes-life-easier",
                                            },
                                        ].map((obj) => {
                                            return <div className="w-full">
                                                <img src={obj.img} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                                <div className="p-4 !pb-0">
                                                    <h4 className='font-medium text__20 mb-2'>{obj.title}</h4>
                                                    <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>{obj.desc}</p>

                                                    <ActionBtn link={obj.link} title="Read More" size='small' type={"2"} />

                                                </div>
                                            </div>
                                        })
                                    }
                                </div>


                                <div className="text-center mt-[2rem]">
                                    <a href="#!" className='inline-block px-6 py-3 rounded-full bg-Mneutral900 text-Mbasewhite font-semibold text__16 shadow-[0px_4px_16px_rgba(0,30,43,0.2)]'>Load More</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <SecGetApp title='Join the Finpro <br /> ⎯ Family' />
            </Layout>
        </Fragment>
    )
}

export default index