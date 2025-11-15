import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useHostname from '@/Components/Provider/HostnameProvider'
import DownloadIcon from '@/Components/svg/DownloadIcon'
import Link from 'next/link'
import UserAccountIcon from "@/Components/svg/UserAccountIcon";

const HeroSection = () => {
    const originalUrl = useHostname()

    return (
        <section className='relative py-[80px] lg:py-[120px] overflow-hidden'>
            {/* <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" /> */}
            {/*<img src={originalUrl + "/content/hero-bg-blue.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />*/}
            <Container className='relative z-[1]'>
                <Row className='items-center min-h-[60vh]'>
                    {/* Left Content */}
                    <Col lg={7} className='mb-12 lg:mb-20 mt-8 lg:mt-0 lg:pl-6 pl-4'>
                        {/* Badge/Tag */}
                        <div className='mb-8'>
                            <div className='inline-flex items-center gap-2 pl-1 pr-3 py-1 bg-bg-grey-2 rounded-full'>
                                <div className='flex items-center justify-center w-6 h-6 bg-Mbrand400 rounded-full'>
                                    <span className=''>🚀</span>
                                </div>
                                <span className='text__14 font-semibold uppercase'>
                                    We are live on Product Hunt
                                </span>
                            </div>
                        </div>

                        {/* Hero Message */}
                        <h1 className='mb-6'>
                            Payments Made Simple, Secure, and Smart.
                        </h1>
                        {/* Secondary Description */}
                        <p className='mb-12'>
                            Send money, pay bills, and recharge instantly — all from one app.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-wrap items-center gap-4'>
                            {/* Primary Button */}
                            <Link href="/download" className='inline-block rounded-md transition-all duration-300 px-6 py-3 bg-[#6373AD] hover:bg-[#556299]' style={{ boxShadow: '0 4px 16px 0 rgba(99, 115, 173, 0.25)' }}>
                                <p className="flex items-center gap-2">
                                    <span className='font-semibold text-white'>Download App</span>
                                    <DownloadIcon width={24} height={24} fill="white" />
                                </p>
                            </Link>
                            <Link href="/download" className='inline-block rounded-md transition-all duration-300 px-6 py-3 bg-white hover:bg-[#556299] group'>
                                <p className="flex items-center gap-2">
                                    <span className='font-semibold text-gray-600 group-hover:text-gray-800 transition-colors'>Create Account</span>
                                    <UserAccountIcon width={24} height={24} fill="#111827" />
                                </p>
                            </Link>

                        </div>
                    </Col>

                    {/* Right Image */}
                    <Col lg={5} className='relative'>

                        {/* Main App Image */}
                        <div className='relative z-10 flex justify-center'>
                            <img
                                src={originalUrl + "/content/app-hero.svg"}
                                className='w-full h-auto drop-shadow-2xl lg:mr-[-50px]'
                                alt="Shomadhan Mobile Banking App"
                            />
                        </div>
                    </Col>
                </Row>

                {/* Logo Cloud - Affiliated Banks Slider - Pure CSS Animation */}
                <Row className='mt-16'>
                    <Col xs={12}>
                        <h6 className='mb-8 text-primary text-center'>
                            Trusted by leading financial institutions
                        </h6>
                        <div
                            className="overflow-hidden relative"
                            style={{
                                height: '60px',
                                maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
                            }}
                        >
                            <div className="flex animate-scroll">
                                {/* Duplicate logos twice for seamless infinite loop */}
                                {[
                                    { file: 'dhaka-bank.png', name: 'Dhaka Bank' },
                                    { file: 'dbbl.png', name: 'Dutch Bangla Bank' },
                                    { file: 'city-bank.png', name: 'City Bank' },
                                    { file: 'brac-bank.svg', name: 'BRAC Bank' },
                                    { file: 'bangladesh-bank.svg', name: 'Bangladesh Bank' },
                                    { file: 'ebl.png', name: 'Eastern Bank Limited' },
                                    { file: 'islami-bank.png', name: 'Islami Bank Bangladesh' },
                                    { file: 'prime-bank.png', name: 'Prime Bank' },
                                    { file: 'trust-bank.png', name: 'Trust Bank PLC' },
                                    { file: 'standard-chartered.svg', name: 'Standard Chartered Bank' },
                                ].concat([
                                    { file: 'dhaka-bank.png', name: 'Dhaka Bank' },
                                    { file: 'dbbl.png', name: 'Dutch Bangla Bank' },
                                    { file: 'city-bank.png', name: 'City Bank' },
                                    { file: 'brac-bank.svg', name: 'BRAC Bank' },
                                    { file: 'bangladesh-bank.svg', name: 'Bangladesh Bank' },
                                    { file: 'ebl.png', name: 'Eastern Bank Limited' },
                                    { file: 'islami-bank.png', name: 'Islami Bank Bangladesh' },
                                    { file: 'prime-bank.png', name: 'Prime Bank' },
                                    { file: 'trust-bank.png', name: 'Trust Bank PLC' },
                                    { file: 'standard-chartered.svg', name: 'Standard Chartered Bank' },
                                ]).map((bank, index) => (
                                    <div key={index} className="flex-shrink-0 px-6 flex items-center justify-center">
                                        <img
                                            src={`${originalUrl}/content/banks/${bank.file}`}
                                            alt={bank.name}
                                            className='h-8 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection
