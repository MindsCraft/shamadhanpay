import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider';
import Link from 'next/link';

const Footer = () => {
    const originalUrl = useHostname();
    
    return (
        <footer className='bg-[#FBFBFC] pt-20 pb-10 border-t border-gray-100'>
            <Container>
                {/* Upper Footer - Newsletter & Primary Content */}
                <Row className="pb-16 mb-16 border-b border-gray-100">
                    <Col lg={5} className="mb-12 lg:mb-0">
                        <div className='mb-8'>
                            <img src={originalUrl + "/content/spay-logo.svg"} alt="Shamadhan Logo" className='h-8 w-auto' />
                        </div>
                        <p className='text-gray-500 text-lg font-medium leading-relaxed max-w-sm'>
                            Your trusted digital payment solution. Secure, fast, and built for your modern financial lifestyle.
                        </p>
                    </Col>

                    <Col lg={7}>
                        <Row>
                            {/* Navigation Columns */}
                            {[
                                {
                                    title: "Services",
                                    links: [
                                        { name: "Digital Wallet", href: "/wallet" },
                                        { name: "Bill Payments", href: "/bills" },
                                        { name: "Money Transfer", href: "/transfer" },
                                        { name: "QR Payments", href: "/qr" }
                                    ]
                                },
                                {
                                    title: "Company",
                                    links: [
                                        { name: "About us", href: "/about" },
                                        { name: "Careers", href: "/careers" },
                                        { name: "Contact", href: "/contact" },
                                        { name: "Blog", href: "/blog" }
                                    ]
                                },
                                {
                                    title: "Legal",
                                    links: [
                                        { name: "Privacy Policy", href: "/privacy" },
                                        { name: "Terms of Service", href: "/terms" },
                                        { name: "Cookie Policy", href: "/cookies" },
                                        { name: "Licenses", href: "/licenses" }
                                    ]
                                }
                            ].map((col, idx) => (
                                <Col md={4} key={idx} className="mb-8 md:mb-0">
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">{col.title}</h4>
                                    <ul className="list-none p-0 m-0 space-y-4">
                                        {col.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link 
                                                    href={link.href} 
                                                    className="text-[14px] text-gray-500 font-medium hover:text-[#6373AD] transition-all hover:translate-x-1 inline-block"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* Middle Footer - App Store & Trust Badges */}
                <Row className="items-center pb-12">
                    <Col lg={4} className="mb-8 lg:mb-0">
                        <div className="flex gap-4">
                            <Link href="#!" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                            </Link>
                            <Link href="#!" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
                            </Link>
                        </div>
                    </Col>
                    
                    <Col lg={4} className="mb-8 lg:mb-0">
                        {/* Social Links (Premium Minimalist) */}
                       <div className="flex justify-center gap-6">
                            {[
                                { name: 'fb', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                { name: 'tw', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                { name: 'ig', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z' },
                                { name: 'li', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z' }
                            ].map((social, idx) => (
                                <Link key={idx} href="#!" className="text-gray-400 hover:text-[#6373AD] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={social.path} />
                                    </svg>
                                </Link>
                            ))}
                       </div>
                    </Col>

                    <Col lg={4} className="flex justify-start lg:justify-end gap-6 items-center opacity-40 grayscale">
                        {/* Trust Badges */}
                        <div className="flex items-center gap-1">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <span className="text-[10px] font-black uppercase tracking-widest">PCI-DSS</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                            <span className="text-[10px] font-black uppercase tracking-widest">SSL Secure</span>
                        </div>
                    </Col>
                </Row>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[13px] text-gray-400 font-medium mb-0">
                        © 2025 Shamadhanpay. Licensed by the Central Bank of Bangladesh.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/support" className="text-[13px] text-gray-400 font-bold hover:text-gray-600 transition-colors">Support</Link>
                        <Link href="/status" className="text-[13px] text-gray-400 font-bold hover:text-gray-600 transition-colors">System Status</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
