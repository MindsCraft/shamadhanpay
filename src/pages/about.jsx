import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const about = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='About Us' description='About Us Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4 sm:mb-[2rem]'>Your digital <br />
                            ⎯ banking partner</h2>

                        <Row className='gap-y-8'>
                            <Col md={7} className='md:!order-1 order-2'>
                                <img src={originalUrl + "/images/Group 162646.png"} alt="" />
                            </Col>
                            <Col md={5} className='order-1 md:!order-2'>
                                <p className='text__20 text-Mneutral700 leading-relaxed mb-[2rem]'>Finpro is a leading innovator in the digital banking landscape. We empower individuals and businesses with the tools and resources they need to thrive in today's fast-paced financial world.</p>

                                <ActionBtn link='/about' title="Get Started" />
                            </Col>
                        </Row>

                    </Container>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[56px]">
                            <Container>
                                <h3 className='font-medium text__40 mb-[2rem]'>Leaders and <br />
                                    fast ⎯ paced startups.</h3>
                                <div className="flex xl:flex-nowrap flex-wrap xl:justify-between gap-x-4 lg:gap-x-3 gap-y-4 xl:gap-3">
                                    <img src={originalUrl + "/images/cop (4).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (5).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (1).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (2).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (3).png"} className='lg:w-auto w-[150px]' alt="" />
                                </div>

                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full px-[0.5rem] xx:px-[1.5rem] xs:px-[2.5rem] py-[1.5rem] xx:py-[2.5rem] xs:py-[4rem] rounded-[56px]">
                            <Container>

                                <Row className='gap-y-4'>
                                    <Col md={6} lg={4}>
                                        <div className="w-full h-[300px] xl:h-[400px] p-4 rounded-[24px] bg-Mneutral50 flex flex-wrap">
                                            <h5 className='font-medium text__24 w-full'>Launched</h5>

                                            <div className="self-end">
                                                <h3 className='font-medium text__72 mb-2'>2019</h3>
                                                <p className='text__14'>5 years of experience on fintech</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <div className="w-full h-[300px] xl:h-[400px] p-4 rounded-[24px] bg-Mneutral50 flex flex-wrap">
                                            <h5 className='font-medium text__24 w-full'>Country represent</h5>

                                            <div className="self-end">
                                                <h3 className='font-medium text__72 mb-2'>45+</h3>
                                                <p className='text__14'>Countries represented (so far)</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <div className="w-full h-[300px] xl:h-[400px] p-4 rounded-[24px] bg-Mneutral50 flex flex-wrap">
                                            <h5 className='font-medium text__24 w-full'>Funding</h5>

                                            <div className="self-end">
                                                <h3 className='font-medium text__72 mb-2'>$12M+</h3>
                                                <p className='text__14'>Raised by institutional investors across the world.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <Row className='gap-y-4'>
                                    <Col md={6} className='my-auto'>
                                        <img src={originalUrl + "/images/fvhfghfgh.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Our mission</h4>
                                        <p className='text__20 leading-relaxed text-Mneutral700 mb-2'>At Finpro, we are dedicated to making banking simpler, smarter, and more accessible for everyone.
                                            We achieve this by</p>
                                        <ul className='text__20 leading-relaxed text-Mneutral700 pl-6 list-disc'>
                                            <li>Developing user-friendly digital banking platforms that are intuitive and secure.</li>
                                            <li>Offering a comprehensive suite of financial products and services tailored to your unique needs.</li>
                                            <li>Providing exceptional customer support to ensure you have a positive banking experience.</li>
                                        </ul>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>
                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <Row className='gap-y-4'>
                                    <Col md={6} className='my-auto'>
                                        <img src={originalUrl + "/images/dsfdsfdfs.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Our Values</h4>
                                        <p className='text__20 leading-relaxed text-Mneutral700 mb-2'>Our core values guide everything we do:</p>
                                        <ul className='text__20 leading-relaxed text-Mneutral700 pl-6 list-disc'>
                                            <li>Innovation: We are constantly pushing boundaries to develop cutting-edge digital banking solutions.</li>
                                            <li>Security: We prioritize the safety and security of your financial information.</li>
                                            <li>Convenience: We make banking effortless and accessible, allowing you to manage your finances on your terms.</li>
                                            <li>Transparency: We believe in clear communication and providing you with the information you need to make informed financial decisions.</li>
                                        </ul>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <div className="text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-3'>Meet our ⎯ <br />
                                        team</h3>
                                    <p className='text__20 text-Mneutral700'>It’s all about the people</p>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (2).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Ruben Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>CEO</h5>
                                        <p className='text__16 text-Mneutral500'>A visionary leader with over 20 years of experience in finance and technology.</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (3).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>James Culhane</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>CFO</h5>
                                        <p className='text__16 text-Mneutral500'>With a deep understanding of financial operations and strategic growth.</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (4).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>CTO</h5>
                                        <p className='text__16 text-Mneutral500'>A tech enthusiast with a background in software engineering and fintech</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (5).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>Finance Experts</h5>
                                        <p className='text__16 text-Mneutral500'>Our finance team ensures that we offer the best rates and products</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (6).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>Developers</h5>
                                        <p className='text__16 text-Mneutral500'>The tech team behind our platform is constantly innovating.</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (1).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>Customer Support</h5>
                                        <p className='text__16 text-Mneutral500'>Always here to help, our customer support team is available 24/7 to assist.</p>
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <div className="text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-3'>Hear more from  ⎯ people <br className='ss:block hidden' /> like Finpro</h3>
                                </div>


                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                                    {
                                        [
                                            {
                                                desc: `"We were struggling to tell our brand story effectively. Spark helped us develop a clear and compelling message that resonated with our audience. We've seen a significant increase in brand awareness and sales since working with them."`,
                                                name: "Skylar Workman",
                                                company: "Marketing Manager at [Client Company]",
                                            },
                                            {
                                                desc: `"The team at [Agency Name] is incredibly creative and strategic. They're always up-to-date on the latest marketing trends and know how to apply them to our specific needs. I feel confident that we're in good hands with them."`,
                                                name: "Rayna Donin",
                                                company: "CEO of [Client Company]",
                                            },
                                            {
                                                desc: `"Spark helped us develop a brand identity that truly reflects our values and resonates with our target audience. We've seen a significant increase in brand loyalty since working with them."`,
                                                name: "Aspen Dias",
                                                company: "Marketing Manager at [Client Company]",
                                            },
                                            {
                                                desc: `"Spark Agency's targeted social media campaign helped us reach a new customer base and resulted in a 25% increase in gym memberships within the first quarter. We're thrilled with the results!"`,
                                                name: "Anika Torff",
                                                company: "Owner, Acme Fitness",
                                            },
                                            {
                                                desc: `"We were struggling to compete with online retailers. Spark Agency developed a creative marketing campaign that highlighted our unique selection and community events. We saw a 20% increase in foot traffic within just a few months. They helped us rediscover the magic of local bookstores!"`,
                                                name: "Ashlynn Dokidis",
                                                company: "CEO, Technovation Inc.",
                                            },
                                            {
                                                desc: `"Spark Agency has been our trusted marketing partner for over 5 years.  Their expertise in SEO and content marketing has kept our website at the top of search results, consistently generating high-quality leads. We appreciate their strategic thinking and data-driven approach."`,
                                                name: "Livia Press",
                                                company: "Owner, Bloom Books.",
                                            },
                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px]">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>

                                <div className="text-center mt-8">
                                    <ActionBtn title="See All" type={2} />
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

export default about