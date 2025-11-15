import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const testimonial = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Tetsimonials' description='Tetsimonials Desc' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative'>
                    <Container className='relative mt-[3rem]'>
                        <img src={originalUrl + "/images/Group 162647.png"} className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:block hidden' alt="" />
                        <img src={originalUrl + "/images/Group 162657.png"} className='absolute left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 md:hidden' alt="" />
                        <div className="text-center relative z-[1]">
                            <h2 className='font-medium text__72 mb-4'>Hear from ⎯ people <br /> like Finpro</h2>
                            <p className='text__18 text-Mneutral700 leading-relaxed'>We asked them what they think of our service. <br className='ss:block hidden' /> Here’s what they had to say…</p>

                        </div>
                    </Container>
                </section>

                <section className='pb-2'>
                    <div className="xs:px-2">
                        <div className="w-full px-[0.5rem] xx:px-[1.5rem] xs:px-[2.5rem] py-[1.5rem] xx:py-[2.5rem] xs:py-[4rem] rounded-[56px]">

                            <Container>
                                <h4 className='text__32 font-medium text-center mb-4'>Leaders and <br />
                                    fast ⎯ paced startups.</h4>

                                <div className="flex items-center justify-center gap-6 flex-wrap">
                                    <img src={originalUrl + "/images/br (1).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (2).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (3).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (4).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (5).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (6).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (7).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (8).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                </div>
                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full px-[0.5rem] xx:px-[1.5rem] xs:px-[2.5rem] py-[1.5rem] xx:py-[2.5rem] xs:py-[4rem] rounded-[56px]">
                            <Container>
                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                                    {
                                        [
                                            {
                                                desc: `"Finpro's mobile banking app has made managing my finances a breeze. I can check my balance, transfer money, and pay bills all from the comfort of my own home."`,
                                                name: "Michael Brown",
                                                company: "Entrepreneur",
                                            },
                                            {
                                                desc: `"I've tried several mobile banking apps, but Finpro is by far the best. It's user-friendly, has great features, and customer support is top-notch."`,
                                                name: "Susan Taylor",
                                                company: "Student",
                                            },
                                            {
                                                desc: `"Finpro's mobile banking app has been a lifesaver for me in college. I can check my balance, transfer money, and pay bills all without having to leave my dorm room."`,
                                                name: "Sarah Jones",
                                                company: "Marketing Manager at [Client Company]",
                                            },
                                            {
                                                desc: `" "I was always hesitant to use mobile banking apps because of security concerns. But Finpro has put my mind at ease with their robust security features."`,
                                                name: "David Smith",
                                                company: "Software Engineer",
                                            },
                                            {
                                                desc: `"I was initially skeptical about using a mobile banking app, but my son convinced me to try Finpro. I'm so glad I did! It's so easy to use, even for someone like me who isn't tech-savvy."`,
                                                name: "Jessica Miller",
                                                company: "Retired teacher",
                                            },
                                            {
                                                desc: `"I love that Finpro's mobile banking app lets me set up alerts for my account activity. I can always stay on top of my finances, even when I'm on the go."`,
                                                name: "Christopher Lee",
                                                company: "Engineer",
                                            },
                                            {
                                                desc: `"I was initially skeptical about using a mobile banking app, but my son convinced me to try Finpro. I'm so glad I did! It's so easy to use, even for someone like me who isn't tech-savvy."`,
                                                name: "Jessica Miller",
                                                company: "Retired teacher",
                                            },
                                            {
                                                desc: `"Finpro's mobile banking app has helped me streamline my business finances. I can easily track my income and expenses, and even send invoices to my clients."`,
                                                name: "Mark Williams",
                                                company: "Business owner",
                                            },
                                            {
                                                desc: `"Finpro's mobile banking app has made it so easy for me to transfer money to my family and friends. It's also great for sending quick payments to my kids for their allowance."`,
                                                name: "Anna Davis",
                                                company: "Healthcare professional",
                                            },
                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px] border !border-Mneutral200">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>
                                <div className="grid md:grid-cols-2 gap-6 my-6">

                                    {
                                        [
                                            {
                                                desc: `"Finpro's mobile banking app has been a lifesaver for me in college. I can check my balance, transfer money, and pay bills all without having to leave my dorm room."`,
                                                name: "Susan Taylor",
                                                company: "Student",
                                            },
                                            {
                                                desc: `"I love that Finpro's mobile banking app lets me set up alerts for my account activity. I can always stay on top of my finances, even when I'm on the go."`,
                                                name: "Christopher Lee",
                                                company: "Engineer",
                                            },

                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px] border !border-Mneutral200">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>
                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                                    {
                                        [
                                            {
                                                desc: `"Managing my car loan used to be a chore, but Finpro's mobile banking app has changed that. The ability to view my loan balance, make payments, and track my payment history all in one place is incredibly convenient. The app's autopay feature ensures that my payments are always on time, saving me from late fees. I also appreciate the loan payoff calculator, which helps me plan ahead and pay off my loan early."`,
                                                name: "Chloe L",
                                                company: "Fitness Enthusiast",
                                            },
                                            {
                                                desc: `"Managing my car loan used to be a chore, but Finpro's mobile banking app has changed that. The ability to view my loan balance, make payments, and track my payment history all in one place is incredibly convenient. The app's autopay feature ensures that my payments are always on time, saving me from late fees. I also appreciate the loan payoff calculator, which helps me plan ahead and pay off my loan early."`,
                                                name: "Christopher F",
                                                company: "Marketing Manager at [Client Company]",
                                            },
                                            {
                                                desc: `"Finpro's focus on financial wellness resonates with me as a fitness enthusiast. The step challenge rewards and cashback offers for gym memberships motivate me to stay active while saving money. The app's budgeting tools help me prioritize spending on healthy food and fitness equipment. Finpro has become an integral part of my overall wellness journey."`,
                                                name: "Nancy G",
                                                company: "Pet Owner",
                                            },
                                            {
                                                desc: `"Finpro's mobile banking app has been instrumental in helping me achieve my financial goals as a student. The budgeting tools have helped me prioritize spending and save for tuition, while the savings goal feature keeps me motivated. The app's educational resources have also been valuable, teaching me about investing and building credit. I'm excited to see how Finpro will continue to support my financial journey as I enter the workforce."`,
                                                name: "Christopher Lee",
                                                company: "Engineer",
                                            },
                                            {
                                                desc: `"I was initially skeptical about using a mobile banking app, but my son convinced me to try Finpro. I'm so glad I did! It's so easy to use, even for someone like me who isn't tech-savvy."`,
                                                name: "Jessica Miller",
                                                company: "Retired teacher",
                                            },
                                            {
                                                desc: `"I love that Finpro's mobile banking app lets me set up alerts for my account activity. I can always stay on top of my finances, even when I'm on the go."`,
                                                name: "Ethan M",
                                                company: "Student",
                                            },
                                            {
                                                desc: `"Finpro's mobile banking app has helped me streamline my business finances. I can easily track my income and expenses, and even send invoices to my clients."`,
                                                name: "Anna Davis",
                                                company: "Healthcare professional",
                                            },
                                            {
                                                desc: `"Finpro's mobile banking app has made it so easy for me to transfer money to my family and friends. It's also great for sending quick payments to my kids for their allowance."`,
                                                name: "Mark Williams",
                                                company: "Business owner",
                                            },
                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px] border !border-Mneutral200">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>

                                <div className="mt-6 text-center">
                                    <ActionBtn title="Load More" type={2} />
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

export default testimonial