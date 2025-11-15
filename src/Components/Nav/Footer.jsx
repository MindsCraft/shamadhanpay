import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider';
import Link from 'next/link';

const Footer = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <footer className='bg-bg-grey-2 py-16'>
                <Container>
                    {/* Top Section - 2 Main Columns */}
                    <Row className="mb-12">
                        {/* Left Column - Logo, Brand & App Download */}
                        <Col lg={6} className='mb-8 lg:mb-0'>
                            {/* Logo */}
                            <div className='mb-6'>
                                <img src={originalUrl + "/content/spay-logo-square.svg"} alt="Shamadhan Logo" className='h-12' />
                            </div>

                            {/* Brand Description */}
                            <p className='text__16 text-gray-600 mb-8 max-w-md'>
                                Your trusted digital payment solution. Send money, pay bills, and manage your finances securely — all in one app.
                            </p>

                            {/* Download Section */}
                            <div className='mb-10'>
                                <h4 className='font-semibold text__18 mb-3'>Get the App</h4>
                                <p className='text__14 text-gray-600 mb-4'>Download now and experience seamless digital payments.</p>
                                {/* App Store Buttons */}
                                <div className='flex flex-wrap gap-3'>
                                    <Link href="#!" className='inline-block hover:opacity-80 transition-opacity'>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className='h-12' />
                                    </Link>
                                    <Link href="#!" className='inline-block hover:opacity-80 transition-opacity'>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className='h-12' />
                                    </Link>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h4 className='font-semibold text__16 mb-4'>Follow Us</h4>
                                <div className="flex gap-3">
                                    <Link href="#!" className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:border-[#6373AD] hover:bg-[#6373AD] hover:text-white transition-all group'>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className='text-gray-600 group-hover:text-white transition-colors'>
                                            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M8 11V16M8 8V8.01M12 16V13M12 13V11M12 13C12 11 13.5 10.5 15 11M16 16V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                    <Link href="#!" className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:border-[#6373AD] hover:bg-[#6373AD] hover:text-white transition-all group'>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className='text-gray-600 group-hover:text-white transition-colors'>
                                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                                        </svg>
                                    </Link>
                                    <Link href="#!" className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:border-[#6373AD] hover:bg-[#6373AD] hover:text-white transition-all group'>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className='text-gray-600 group-hover:text-white transition-colors'>
                                            <path d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        {/* Right Column - All Link Columns */}
                        <Col lg={6}>
                            <Row>
                                {/* Services Column */}
                                <Col md={4} sm={6} className='mb-6 md:mb-0'>
                                    <h4 className='font-semibold text__16 mb-4 text-gray-900'>Services</h4>
                                    <div className="flex flex-col gap-3">
                                        <Link href="/digital-wallet-management" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Digital Wallet Management
                                        </Link>
                                        <Link href="/investment-and-trading" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Investment and Trading
                                        </Link>
                                        <Link href="/easy-money-transfers" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Easy Money Transfer
                                        </Link>
                                    </div>
                                </Col>

                                {/* Company Column */}
                                <Col md={4} sm={6} className='mb-6 md:mb-0'>
                                    <h4 className='font-semibold text__16 mb-4 text-gray-900'>Company</h4>
                                    <div className="flex flex-col gap-3">
                                        <Link href="/about" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            About us
                                        </Link>
                                        <Link href="/contact" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Contact
                                        </Link>
                                        <Link href="/faq" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            FAQs
                                        </Link>
                                        <Link href="/blog" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Blog
                                        </Link>
                                    </div>
                                </Col>

                                {/* Support Column */}
                                <Col md={4} sm={6}>
                                    <h4 className='font-semibold text__16 mb-4 text-gray-900'>Support</h4>
                                    <div className="flex flex-col gap-3">
                                        <Link href="/help" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Help Center
                                        </Link>
                                        <Link href="/terms" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Term of Service
                                        </Link>
                                        <Link href="/partner" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                            Hire a Partner
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* Bottom Section - Copyright */}
                    <div className='pt-8 border-t border-gray-200'>
                        <Row className='items-center'>
                            <Col md={6} className='mb-4 md:mb-0'>
                                <p className='text__14 text-gray-600'>© 2025 Shamadhanpay. All rights reserved.</p>
                            </Col>
                            <Col md={6} className='text-md-end'>
                                <div className='flex flex-wrap gap-4 justify-start md:justify-end'>
                                    <Link href="/privacy" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                        Privacy Policy
                                    </Link>
                                    <Link href="/terms" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                        Terms of Service
                                    </Link>
                                    <Link href="/cookies" className='text__14 text-gray-600 hover:text-[#6373AD] transition-colors'>
                                        Cookie Policy
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </footer>
        </Fragment>
    )
}

export default Footer
