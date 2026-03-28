import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider'
import Link from 'next/link'

const FooterAlternative = () => {
    const originalUrl = useHostname();

    return (
        <footer className="bg-white pt-20 pb-12">
            <Container>
                {/* Floating Card Content Container */}
                <div className="bg-[#F8FAFC] rounded-[40px] px-8 py-16 lg:px-20 lg:py-24 border border-gray-100 overflow-hidden relative">
                    {/* Background Visual Flair */}
                    <div className="absolute bottom-0 right-0 p-8 select-none pointer-events-none opacity-[0.03]">
                        <img src={originalUrl + "/content/spay-logo.svg"} alt="" className="h-24 grayscale" />
                    </div>

                    <Row className="justify-between relative z-10">
                        {/* 1. Center - Major Logo & App Badge Group */}
                        <Col lg={4} className="mb-16 lg:mb-0">
                            <img src={originalUrl + "/content/spay-logo.svg"} alt="Logo" className="h-10 mb-8" />
                            <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10 max-w-sm">
                                Join the next generation of financial freedom. Accessible, secure, and always rewarding.
                            </p>
                            <div className="flex gap-4">
                                <Link href="#!" className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-3">
                                   <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[20px]" />
                                </Link>
                                <Link href="#!" className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-3">
                                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-[20px]" />
                                </Link>
                            </div>
                        </Col>

                        {/* 2. Right - Split Column Links */}
                        <Col lg={7}>
                            <Row>
                                {[
                                    {
                                        title: 'Discover',
                                        links: ['About us', 'Features', 'Pricing', 'Careers']
                                    },
                                    {
                                        title: 'Support',
                                        links: ['Help Center', 'Partners', 'System Status', 'FAQs']
                                    },
                                    {
                                        title: 'Legal',
                                        links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
                                    }
                                ].map((col, idx) => (
                                    <Col md={4} sm={4} key={idx} className="mb-8 md:mb-0">
                                        <h4 className="text-[12px] font-black uppercase tracking-widest text-[#6373AD] mb-8">{col.title}</h4>
                                        <ul className="list-none p-0 m-0 space-y-4">
                                            {col.links.map((link, lIdx) => (
                                                <li key={lIdx}>
                                                    <Link href="#!" className="text-[15px] font-bold text-gray-900 opacity-60 hover:opacity-100 hover:text-[#6373AD] transition-all flex items-center gap-2 group">
                                                        <span>{link}</span>
                                                        <svg className="w-0 group-hover:w-3 h-3 overflow-hidden transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                            <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>

                    {/* Footer Bottom - Inside Card */}
                    <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center relative z-10">
                        <div className="flex gap-8 items-center mb-6 md:mb-0">
                            <span className="text-[14px] font-bold text-gray-400">© 2025 Shamadhanpay</span>
                            <div className="flex gap-4">
                                {[
                                    { name: 'X', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                    { name: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 007.5 21z' },
                                    { name: 'Linkedin', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z' }
                                ].map((social, idx) => (
                                    <Link 
                                        key={idx} 
                                        href="#!" 
                                        className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#6373AD] hover:border-[#6373AD] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                                        aria-label={social.name}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={social.path} />
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            {/* Trust Badge Simplified */}
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg text-green-600">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                <span className="text-[10px] font-black uppercase tracking-wider">SSL Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default FooterAlternative
