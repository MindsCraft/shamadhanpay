import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import useHostname from '../Provider/HostnameProvider';
import DownloadIcon from '../svg/DownloadIcon'

const CTASectionAlternative = ({ 
    title = "Experience the future <br class='hidden lg:block' /> of digital payments", 
    subtext = "Get the Shamadhan Pay app today and join thousands of users <br class='hidden lg:block' /> enjoying secure, lightning-fast transactions every day.",
    image = "/images/iPhone 15 Pro Mockup, Front and Back View (1) 2.svg" 
}) => {
    const originalUrl = useHostname();

    return (
        <Fragment>
            <section className="py-12 lg:py-24">
                <Container>
                    <div 
                        className="relative overflow-hidden rounded-[32px] bg-white border border-gray-100"
                        style={{
                            boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.05), 0 10px 40px -10px rgba(0, 0, 0, 0.02)',
                        }}
                    >
                        {/* Decorative Background Elements */}
                        <div 
                            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-[0.03]"
                            style={{ background: 'radial-gradient(circle, #6373AD 0%, transparent 70%)' }}
                        />
                        <div 
                            className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-[0.02]"
                            style={{ background: 'radial-gradient(circle, #44AA99 0%, transparent 70%)' }}
                        />

                        {/* Large Background Wordmark (Watermark) */}
                        <div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none opacity-[0.015] font-black uppercase"
                            style={{ fontSize: '15vw', letterSpacing: '-0.05em', whiteSpace: 'nowrap' }}
                        >
                            Shamadhan
                        </div>

                        <Row className="items-center relative z-10 g-0">
                            {/* Text Content */}
                            <Col lg={7} className="px-8 py-16 lg:pl-20 lg:py-24">
                                <div className='inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full mb-8 border border-gray-100'>
                                    <div className="w-2 h-2 rounded-full bg-[#6373AD]" />
                                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Limited Time Offer</span>
                                </div>
                                <h2 
                                    className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.05]"
                                    style={{ letterSpacing: '-0.035em' }}
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                                <p 
                                    className="text-gray-500 text-lg lg:text-xl mb-10 leading-relaxed font-medium max-w-lg"
                                    dangerouslySetInnerHTML={{ __html: subtext }}
                                />
                                <div className="flex flex-wrap gap-4 items-center">
                                    <Link 
                                        href="/download" 
                                        className='inline-block rounded-md transition-all duration-300 px-6 py-3 bg-[#6373AD] hover:bg-[#556299]'
                                        style={{ boxShadow: '0 4px 16px 0 rgba(99, 115, 173, 0.25)' }}
                                    >
                                        <p className="flex items-center gap-2 mb-0">
                                            <span className='font-semibold text-white'>Get the App</span>
                                            <DownloadIcon width={24} height={24} fill="white" />
                                        </p>
                                    </Link>
                                    <span className='hidden sm:block text-gray-300 mx-2'>|</span>
                                    <div className='flex -space-x-3'>
                                        {[1,2,3,4].map(i => (
                                            <div key={i} className='w-10 h-10 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden'>
                                                <div className='w-full h-full bg-gradient-to-br from-gray-200 to-gray-400' />
                                            </div>
                                        ))}
                                        <div className='w-10 h-10 rounded-full border-4 border-white bg-[#6373AD] flex items-center justify-center text-[10px] font-bold text-white'>
                                            +4K
                                        </div>
                                    </div>
                                    <span className='text-sm font-bold text-gray-400'>Joined last week</span>
                                </div>
                            </Col>

                            {/* Image Mockup */}
                            <Col lg={5} className="relative px-8 lg:px-0">
                                <div className="relative group flex justify-center lg:justify-end pr-0 lg:pr-12">
                                    <div className="relative z-10">
                                        <img 
                                            src={originalUrl + image} 
                                            alt="App Mockup" 
                                            className="w-full max-w-[380px] filter drop-shadow-[0_45px_100px_rgba(0,0,0,0.1)] lg:translate-y-8"
                                        />
                                        {/* Floating Badge */}
                                        <div 
                                            className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 hidden lg:block animate-float"
                                            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                        <path d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className='text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0'>Security Status</p>
                                                    <p className="text-sm font-bold text-gray-900 mb-0">Bank-grade Secure</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-15px) translateX(5px); }
                }
                .animate-float {
                    animation: float 6s infinite ease-in-out;
                }
            `}</style>
        </Fragment>
    )
}

export default CTASectionAlternative
