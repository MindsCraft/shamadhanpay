import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player';


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
            <Layout title='Webinar Detail' description='Webinar Detail Desc' >

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container className="relative z-[1] mt-[3rem]">

                                <Row className='justify-between gap-y-4'>
                                    <Col md={5} lg={4}>
                                        <div className="w-full bg-white p-6 rounded-[32px] grid grid-rows-1 gap-4">
                                            <h4 className='font-medium text__24'>Webinar Details</h4>

                                            <div className="">
                                                <p className='text__16 text-Mneutral600 mb-1'>Date:</p>
                                                <h5 className='font-medium text__20 text-Mneutral700'>January 30, 2024</h5>
                                            </div>

                                            <div className="w-full h-[1px] bg-Mneutral200"></div>

                                            <div className="">
                                                <p className='text__16 text-Mneutral600 mb-1'>Time:</p>
                                                <h5 className='font-medium text__20 text-Mneutral700'>On Demand</h5>
                                            </div>

                                            <div className="w-full h-[1px] bg-Mneutral200"></div>

                                            <div className="">
                                                <p className='text__16 text-Mneutral600 mb-1'>Duration:</p>
                                                <h5 className='font-medium text__20 text-Mneutral700'>1.5 hours</h5>
                                            </div>

                                            <div className="w-full h-[1px] bg-Mneutral200"></div>

                                            <div className="">
                                                <p className='text__16 text-Mneutral600 mb-1'>Platform:</p>
                                                <h5 className='font-medium text__20 text-Mneutral700'>Zoom (A link will be sent upon registration)</h5>
                                            </div>

                                            <div className="w-full h-[1px] bg-Mneutral200"></div>

                                            <div className="grid grid-rows-1 gap-y-2">
                                                <h5 className="text__18 text-Mneutral600 mb-3">Speakers:</h5>
                                                <div className="flex gap-2 items-start">
                                                    <img src={originalUrl + "/images/Frame 22607.png"} alt="" className='w-[64px] h-[64px] rounded-full object-contain' />

                                                    <div>
                                                        <h5 className='text__20 font-medium mb-2 text-Mneutral700'>Dr. John Doe</h5>
                                                        <p className='text__14 text-Mneutral600 leading-relaxed'>Senior Financial Analyst with over 20 years of experience in the investment industry.</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 items-start">
                                                    <img src={originalUrl + "/images/Frame 22607 (1).png"} alt="" className='w-[64px] h-[64px] rounded-full object-contain' />

                                                    <div>
                                                        <h5 className='text__20 font-medium mb-2 text-Mneutral700'>Jane Smith</h5>
                                                        <p className='text__14 text-Mneutral600 leading-relaxed'>CFP®, Certified Financial Planner who specializes in helping individuals build and manage their investment portfolios.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7} lg={8}>
                                        <h3 className='text__40 font-medium'>Investing 101: Building Your First Investment Portfolio</h3>

                                        <div className="w-full rounded-[24px] overflow-hidden my-3">
                                            <ReactPlayer
                                                className="!h-[250px] md:!h-[300px] lg:!h-[450px]"
                                                url={originalUrl + "/videos/7692924-hd_1920_1080_25fps (1).mp4"}
                                                controls
                                                width={"100%"}
                                                config={{
                                                    file: {
                                                        attributes: {
                                                            style: {
                                                                objectFit: 'cover',
                                                                width: '100%',
                                                                height: '100%'
                                                            }
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>

                                        <div className=" mb-3">
                                            <h4 className='font-medium text__20 mb-2 text-Mneutral700'>Description</h4>
                                            <p className='text-Mneutral700 text__18 leading-relaxed'>Are you new to investing and looking to build your first investment portfolio? Join our free webinar where financial experts will guide you through the essentials of investing. Whether you're saving for retirement, a major purchase, or simply looking to grow your wealth, this webinar will provide you with the foundational knowledge and tools you need to get started.</p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-y-3">
                                            <h4 className='font-medium text__20 mb-2 text-Mneutral700'>What You Will Learn:</h4>

                                            <div className="flex items-start gap-2">
                                                <img src={originalUrl + "/images/CheckCircle.svg"} alt="" />
                                                <div className="">
                                                    <h5 className='font-medium text__18 mb-1 text-Mneutral700'>Investment Basics: </h5>
                                                    <p className='text-Mneutral700 text__18 leading-relaxed'>Understand the different types of investments, including stocks, bonds, mutual funds, and ETFs.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <img src={originalUrl + "/images/CheckCircle.svg"} alt="" />
                                                <div className="">
                                                    <h5 className='font-medium text__18 mb-1 text-Mneutral700'>Risk and Return</h5>
                                                    <p className='text-Mneutral700 text__18 leading-relaxed'>Learn about the relationship between risk and return, and how to balance them in your portfolio.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <img src={originalUrl + "/images/CheckCircle.svg"} alt="" />
                                                <div className="">
                                                    <h5 className='font-medium text__18 mb-1 text-Mneutral700'>Building a Diversified Portfolio</h5>
                                                    <p className='text-Mneutral700 text__18 leading-relaxed'>Discover the importance of diversification and how to allocate your assets to minimize risk.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <img src={originalUrl + "/images/CheckCircle.svg"} alt="" />
                                                <div className="">
                                                    <h5 className='font-medium text__18 mb-1 text-Mneutral700'>Investment Strategies</h5>
                                                    <p className='text-Mneutral700 text__18 leading-relaxed'>Explore various investment strategies that align with your financial goals and risk tolerance.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <img src={originalUrl + "/images/CheckCircle.svg"} alt="" />
                                                <div className="">
                                                    <h5 className='font-medium text__18 mb-1 text-Mneutral700'>Tools and Resources</h5>
                                                    <p className='text-Mneutral700 text__18 leading-relaxed'>Get introduced to tools and resources that can help you manage and monitor your investments effectively.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>



                            </Container>
                        </div>
                    </div>

                </section>


                <section className='py-2 relative z-[1]'>

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <h3 className='font-medium text__64 mb-[2.5rem]'>More ⎯ <br />
                                Webinars</h3>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                                    {
                                        [
                                            
                                            {
                                                img: originalUrl + "/images/pp (9).png",
                                                bg: "bg-Mwarning100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Managing Debt: Effective Strategies to Get Out of Debt Faster",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },

                                            {
                                                img: originalUrl + "/images/pp (8).png",
                                                bg: "bg-Mnegative100",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Cryptocurrency and Blockchain: What You Need to Know",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },
                                            {
                                                img: originalUrl + "/images/pp (7).png",
                                                bg: "bg-Mpositive50",
                                                name: "WEBINAR",
                                                date: "JUL 23 2024",
                                                title: "Financial Wellness for Entrepreneurs: Managing Business and Personal Finances",
                                                link: "/webinar/detail/mastering-personal-budgeting-tips-and-tools-for-effective-money-management"
                                            },

                                        ].map((obj) => {
                                            return <div className="">
                                                <div className={"relative w-full h-[264px] rounded-[32px]  overflow-hidden border-[4px] !border-white " + obj.bg}>

                                                    <img src={obj.img} className='w-full h-full object-cover object-top [mix-blend-mode:luminosity]' alt="" />
                                                </div>

                                                <div className="p-4 !pb-0">
                                                    <p className='text__16 uppercase text-Mneutral600 mb-2'>{obj.name} · {obj.date}</p>
                                                    <h5 className='font-medium text__20 mb-4'>{obj.title}</h5>

                                                    <ActionBtn link={obj.link} title="Watch" size='small' type={"2"} />
                                                </div>
                                            </div>
                                        })
                                    }



                                </div>

                                <div className="mt-[2.5rem] text-center">
                                    <a href="#!" className='font-semibold text__20 px-6 py-3 rounded-full bg-neutral-50 inline-block'>See All</a>
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