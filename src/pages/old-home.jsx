import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import useHostname from '@/Components/Provider/HostnameProvider'
import Layout from '@/Components/Layout/Layout'
import CurrencySlide from '@/Components/Slide/CurrencySlide'
import ActionBtn from '@/Components/Button/ActionBtn'
import SecSlideStep from '@/Components/Section/SecSlideStep'
import { ChartStepIcon, InfoStepIcon, MCardIcon, XCardIcon } from '@/Components/svg/Svg'
import AccordionHelp from '@/Components/Accordion/AccordionHelp'
import SecGetApp from '@/Components/Section/SecGetApp'

const OldHome = () => {
    const originalUrl = useHostname();

    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const [activeChartIndex, setActiveChartIndex] = useState(1);

    const handleChartMouseEnter = (index) => {
        setActiveChartIndex(index);
    };

    const [activePhoneIndex, setActivePhoneIndex] = useState(1);

    const handlePhoneMouseEnter = (index) => {
        setActivePhoneIndex(index);
    };
    
    return (
        <Fragment>
            <Layout title='Finpro' description='Finpro Desc' >

                <section className='relative pt-[50px] md:pt-[80px] md:pb-[9rem] xl:pb-[18rem]'>

                    <img src={originalUrl + "/images/mockup.png"} className='absolute right-0 bottom-0 w-[380px] lg:w-[450px] xl:w-auto sm:block hidden' alt="" />

                    <Container className='mt-[3rem]'>
                        <div className="relative z-[1]">
                            <h1 className='font-medium text-[36px] xx:text-[48px] ss:text-[54px] lg:text-[76px] xl:text-[108px]'>
                                <div className="flex items-center gap-4">
                                    Convenient <CurrencySlide />
                                </div>
                                <span className='sm:pl-[2rem] lg:pl-[3rem] xl:pl-[5rem]'>banking solution</span>
                            </h1>

                            <p className='text__18 text-Mneutral700 mt-[2rem] lg:mt-[4rem] mb-8'>Finpro is a digital bank  offers a range of financial <br className='hidden sm:block lg:hidden' /> services primarily <br className='hidden lg:block xl:hidden' /> through <br className='hidden xl:block' /> a mobile app. With our <br className='hidden sm:block lg:hidden' /> user-friendly interface, you can easily <br className='hidden lg:block xl:hidden' /> manage your <br className='xl:block hidden sm:block lg:hidden' /> money on-the-go.</p>

                            <ActionBtn link='/about' title="Get Started" />
                        </div>


                        <img src={originalUrl + "/images/mockup.png"} className='-mt-[2rem] ml-auto sm:hidden' alt="" />
                    </Container>
                </section>

                <SecSlideStep />

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral900 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <Row className='justify-between mb-[3rem]'>
                                    <Col md={6} className='lg:my-auto'>
                                        <h4 className='font-medium text__64 text-white'>Manage your <br /> money ⎯ anytime, anywhere</h4>
                                    </Col>
                                    <Col md={5} className='lg:my-auto'>
                                        <p className='text__18 text-white leading-relaxed mb-[2.5rem]'>Experience the convenience of instant transfers, powerful budgeting tools, and a wide range of investment options with our mobile app.</p>

                                        <ActionBtn type={2} title="Get the App" />
                                    </Col>
                                </Row>

                                <Row className='h-full gap-y-4'>
                                    <Col md={5} className='flex-fill'>
                                        <div className="grid grid-rows-2 gap-y-4 md:gap-y-8 h-full">
                                            <div className="w-full flex items-center justify-center p-4 rounded-[32px] bg-Msecondary600">
                                                <div className="">
                                                    <div className="bg-white w-[80px] h-[80px] rounded-full mb-4">
                                                        <img src={originalUrl + "/images/Avatar Image.png"} className='object-cover w-full h-full' alt="" />
                                                    </div>

                                                    <p className='text__18 leading-relaxed text-white mb-2'>“FinPro's educational resources boosted my financial literacy. I now make informed decisions.”</p>
                                                    <h5 className='font-medium text-white text__18'>Sarah Rose</h5>
                                                </div>
                                            </div>
                                            <div className="w-full flex items-end justify-center p-4 rounded-[32px] bg-white">
                                                <div className="">
                                                    <h5 className='font-medium text__48 mb-2 text-Mneutral900'>80%</h5>
                                                    <p className='text__18 leading-relaxed text-Mneutral600'>of users report reaching their financial goals faster with our planning tools.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7} className='flex-fill'>
                                        <img src={originalUrl + "/images/dsasds.png"} className='object-cover w-full rounded-[32px] h-full' alt="" />
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
                                        <img src={originalUrl + "/images/sadsadsad.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Experience the - convenience, security, and low fees of using Finpro.</h4>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>With Finpro's mobile app, you can easily manage your money on-the-go. Enjoy the peace of mind knowing that your financial transactions are secure and take advantage of our low fees.</p>
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
                                        <img src={originalUrl + "/images/asdsad.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Manage your money
                                            on-the-go with our user-friendly mobile app.</h4>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>We strive to ensure that you have access to the utmost convenience and flexibility for all of your banking needs, so you can manage your finances with ease and confidence.</p>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral900 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <h2 className='text-Mbasewhite text__64 font-medium mb-[2.5rem] text-center'>Discover a world of convenience <br className='sm:block hidden' />
                                    ⎯ with our mobile app</h2>

                                <div className="grid gap-3">
                                    <div className="grid lg:grid-cols-2 gap-3">
                                        <div className="p-8 rounded-[32px] bg-[rgba(46,46,46,0.32)] relative overflow-hidden cardGrid" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseEnter(1)}>
                                            <img src={originalUrl + "/images/Group 162642 (1).svg"} className={'absolute w-full h-full left-0 top-0 transition-all duration-300 opacity-0 imgCoverBg'} alt="" />
                                            <div className="relative z-[1]">
                                                <h4 className='font-medium text__24 text-white mb-2'>Manage your digital wallet.</h4>
                                                <p className='text__18 leading-relaxed opacity-60 text-white'>Banking made simple. Manage your digital wallet, invest, trade, send money - all at your fingertips.</p>

                                                <div className="mt-[2.5rem] flex items-center justify-center gap-3 wrapCaradHover">
                                                    <div className="inline-block">
                                                        <MCardIcon classData={"transition-all duration-300 " + (activeIndex == 1 ? "hoverCard one" : "")} />
                                                    </div>
                                                    <div className="inline-block">
                                                        <XCardIcon classData={"transition-all duration-300 " + (activeIndex == 2 ? "hoverCard two" : "")} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8 rounded-[32px] bg-[rgba(46,46,46,0.32)] relative overflow-hidden cardGrid" onMouseEnter={() => handleChartMouseEnter(2)} onMouseLeave={() => handleChartMouseEnter(1)}>
                                            <img src={originalUrl + "/images/Group 162642 (1).svg"} className={'absolute w-full h-full left-0 top-0 transition-all duration-300 opacity-0 imgCoverBg'} alt="" />
                                            <div className="relative z-[1]">
                                                <h4 className='font-medium text__24 text-white mb-2'>Invest, trade, and more.</h4>
                                                <p className='text__18 leading-relaxed opacity-60 text-white'>Track your spending, set budgets, and receive personalized financial insights.</p>

                                                <div className="mt-[2.5rem]">

                                                    <div className="flex flex-wrap sm:!flex-nowrap items-start gap-2">
                                                        <div className="w-[40%] sm:!w-auto">
                                                            <InfoStepIcon activeChartIndex={activeChartIndex} classData='w-full' />
                                                        </div>
                                                        <div className="w-full sm:!w-[68%] flex-shrink-0">
                                                            <ChartStepIcon activeChartIndex={activeChartIndex} classData="w-full" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 !pb-0 rounded-[32px] bg-[rgba(46,46,46,0.32)] relative overflow-hidden cardGrid" onMouseEnter={() => handlePhoneMouseEnter(2)} onMouseLeave={() => handlePhoneMouseEnter(1)}>

                                        <img src={originalUrl + "/images/Group 162642 (1).svg"} className={'absolute w-full h-full left-0 top-0 transition-all duration-300 opacity-0 imgCoverBg'} alt="" />

                                        <Row className='relative z-[1]'>
                                            <Col md={6} className='pb-8'>

                                                <h5 className='font-medium text__48 mb-2 text-white'>Send money with <br />
                                                    ⎯ ease.</h5>
                                                <p className='text__18 leading-relaxed text-white opacity-80 mb-[2.5rem]'>Your all-in-one financial hub. Manage your <br className='lg:block hidden' /> digital wallet, invest, trade, and send <br className='lg:block hidden' /> money with ease.</p>

                                                <ActionBtn Onhover={true} activeState={activePhoneIndex == 2 ? false : true} type={2} title="Get the App" />

                                            </Col>
                                            <Col md={6} className='relative overflow-hidden h-full'>

                                                <img src={originalUrl + "/images/Transfer detail.svg"} className={'absolute left-0 w-[60%] md:w-[200px] lg:w-auto transition-all duration-500 z-[1] ' + (activePhoneIndex == 2 ? "bottom-0" : "-bottom-[30rem]")} alt="" />
                                                <img src={originalUrl + "/images/iPhone 14 Pro.svg"} className={'mx-auto transition-all duration-300 ' + (activePhoneIndex == 2 ? "opacity-30" : "opacity-100")} alt="" />
                                            </Col>
                                        </Row>

                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-white rounded-[24px] sm:rounded-[56px]">
                            <Container>
                                <h4 className='font-medium text__64 text-center mb-8'>Feature article ⎯ of <br /> the week</h4>

                                <Row className='gap-y-4'>
                                    <Col md={6} lg={4}>
                                        <img src={originalUrl + "/images/img (2).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-3 lg:p-4">
                                            <h4 className='font-medium text__20 mb-2'>Top 5 ways digital banking makes
                                                life easier</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Expand on this headline by highlighting the five key ways digital banking simplifies finances</p>

                                            <ActionBtn link='/blog/detail/top-5-ways-digital-banking-makes-life-easier' title="Read More" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <img src={originalUrl + "/images/img (3).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-3 lg:p-4">
                                            <h4 className='font-medium text__20 mb-2'>Security & speed: why digital banking is the future</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Emphasize the robust security measures in digital banking and the benefits of faster transactions.</p>

                                            <ActionBtn link='/blog/detail/top-5-ways-digital-banking-makes-life-easier' title="Read More" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <img src={originalUrl + "/images/img (1).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-3 lg:p-4">
                                            <h4 className='font-medium text__20 mb-2'>Upgrade your banking experience: we've launched exciting new features!</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Focus on the convenience and power of mobile banking apps.</p>

                                            <ActionBtn link='/blog/detail/top-5-ways-digital-banking-makes-life-easier' title="Read More" size='small' type={"2"} />

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
                                    <Col md={5}>
                                        <h2 className='text__64 font-medium mb-[2rem] md:b-[4.5rem]'>Do you need ⎯ <br />
                                            some help?</h2>

                                        <div className="w-full bg-Mneutral900 p-6 rounded-[24px]">
                                            <h5 className='font-medium text__24 text-white mb-[2.5rem]'>Didn't find the answer you were looking for? Our support team is here to help!</h5>

                                            <ActionBtn link={"/contact"} title="Contact us" size='small' type={"2"} />
                                        </div>
                                    </Col>
                                    <Col md={7}>

                                        <div className="flex flex-wrap gap-y-3">
                                            {

                                                [
                                                    {
                                                        title: "How can I keep my account information safe?",
                                                        desc: "To keep your FinPro account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—FinPro will never ask for your password via email.",
                                                    },
                                                    {
                                                        title: "Are there any fees for using FinPro Digital Banking?",
                                                        desc: "To keep your FinPro account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—FinPro will never ask for your password via email.",
                                                    },
                                                    {
                                                        title: "Is FinPro Digital Banking safe?",
                                                        desc: "To keep your FinPro account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—FinPro will never ask for your password via email.",
                                                    },
                                                    {
                                                        title: "What should I do if I suspect fraudulent activity on my account?",
                                                        desc: "To keep your FinPro account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—FinPro will never ask for your password via email.",
                                                    },
                                                    {
                                                        title: "What can I do with FinPro Digital Banking?",
                                                        desc: "To keep your FinPro account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—FinPro will never ask for your password via email.",
                                                    },
                                                ].map((obj) => {
                                                    return <Fragment>
                                                        <AccordionHelp title={obj.title} desc={obj.desc} />
                                                        <div className="w-full h-[1px] bg-Mneutral200"></div>
                                                    </Fragment>
                                                })
                                            }



                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp />
            </Layout>

        </Fragment>
    )
}

export default OldHome