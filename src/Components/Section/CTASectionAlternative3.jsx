import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import useHostname from '../Provider/HostnameProvider'
import DownloadIcon from '../svg/DownloadIcon'

const CTASectionAlternative3 = ({ 
    title = "Your finances, <br /> reimagined in one app.", 
    subtext = "Stop juggling multiple apps. Pay bills, send money, and manage <br class='hidden lg:block' /> your digital wallet from a single, beautiful interface."
}) => {
    const originalUrl = useHostname();

    return (
        <Fragment>
            <section className="py-12 lg:py-24">
                <Container>
                    <div 
                        className="relative overflow-hidden rounded-[32px] bg-[#F8FAFC] border border-gray-100 px-8 py-16 lg:px-16 lg:py-24"
                    >
                        {/* Soft Gradient Accent */}
                        <div 
                            className="absolute -top-[10%] -left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20"
                            style={{ background: 'radial-gradient(circle, #6373AD 0%, transparent 70%)' }}
                        />

                        <Row className="items-center relative z-10">
                            {/* Text Portion */}
                            <Col lg={6} className="mb-16 lg:mb-0">
                                <h1 
                                    className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                                    style={{ letterSpacing: '-0.02em' }}
                                >
                                    Spend smarter, <br /> earn faster.
                                </h1>
                                <p 
                                    className="text-gray-500 text-lg lg:text-xl mb-10 leading-relaxed font-medium"
                                >
                                    Join 100k+ users who save more on every transaction. Get instant cashback on utilities and top-ups, all in one place.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        href="/download" 
                                        className='inline-block rounded-md transition-all duration-300 px-6 py-3 bg-[#6373AD] hover:bg-[#556299]' 
                                        style={{ boxShadow: '0 4px 16px 0 rgba(99, 115, 173, 0.25)' }}
                                    >
                                        <p className="flex items-center gap-2 mb-0">
                                            <span className='font-semibold text-white'>Download the App</span>
                                            <DownloadIcon width={24} height={24} fill="white" />
                                        </p>
                                    </Link>
                                    <Link 
                                        href="/about" 
                                        className='inline-block rounded-md transition-all duration-300 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm'
                                    >
                                        <p className="flex items-center gap-2 mb-0 text-gray-700">
                                            <span className='font-semibold'>How it Works</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </p>
                                    </Link>
                                </div>
                                <div className="mt-10 flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-gray-900">4.9/5</span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">App Store Rating</span>
                                    </div>
                                    <div className="w-px h-8 bg-gray-200" />
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-gray-900">100k+</span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Global Downloads</span>
                                    </div>
                                </div>
                            </Col>

                            {/* Isometric Image Assembly */}
                            <Col lg={6} className="relative">
                                <div className="relative w-full h-[500px] perspective-[1200px] flex justify-center items-center">
                                    {/* Layered Isometric Screen 1 (Back Shadow/Refraction) */}
                                    <div 
                                        className="absolute w-[260px] h-[520px] bg-[#6373AD]/5 rounded-[32px] blur-[2px] border border-[#6373AD]/10"
                                        style={{ 
                                            transform: 'rotateX(15deg) rotateY(-15deg) rotateZ(5deg) translateX(-40px) translateY(-20px)',
                                            zIndex: 1,
                                        }}
                                    />

                                    {/* Layered Isometric Screen 2 (Front Dashboard) */}
                                    <div 
                                        className="absolute w-[260px] h-[520px] bg-white rounded-[32px] shadow-[40px_40px_100px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden animate-float"
                                        style={{ 
                                            transform: 'rotateX(15deg) rotateY(-15deg) rotateZ(5deg) translateX(40px) translateY(20px)',
                                            zIndex: 2,
                                        }}
                                    >
                                        <img src={originalUrl + "/content/mockups/dashboard-main.png"} className="w-full h-full object-cover" alt="Financial Dashboard" />
                                    </div>

                                    {/* Cascading Success Indicators (Right Side) */}
                                    <div className="absolute top-1/2 -right-8 lg:-right-16 -translate-y-[180px] flex flex-col gap-4 z-[3]">
                                        {/* Badge 1: Payment Sent */}
                                        <div className="bg-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-50 transform hover:scale-105 transition-transform animate-float-slow" style={{ animationDelay: '0s' }}>
                                            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[10px] text-gray-400 uppercase tracking-wider mb-0">Action</p>
                                                <p className="font-bold text-xs text-gray-900 mb-0">Payment Sent</p>
                                            </div>
                                        </div>

                                        {/* Badge 2: Bill Paid */}
                                        <div className="bg-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-50 transform translate-x-4 hover:scale-105 transition-transform animate-float-slow" style={{ animationDelay: '1s' }}>
                                            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20m10-10H2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" /></svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[10px] text-gray-400 uppercase tracking-wider mb-0">Utility</p>
                                                <p className="font-bold text-xs text-gray-900 mb-0">DESCO Bill Paid</p>
                                            </div>
                                        </div>

                                        {/* Badge 3: Cashback Earned */}
                                        <div className="bg-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-50 transform translate-x-2 hover:scale-105 transition-transform animate-float-slow" style={{ animationDelay: '2s' }}>
                                            <div className="w-9 h-9 rounded-full bg-[#A1609D]/10 flex items-center justify-center text-[#A1609D]">
                                                <span className="font-black text-sm">৳</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[10px] text-gray-400 uppercase tracking-wider mb-0">Rewards</p>
                                                <p className="font-bold text-xs text-gray-900 mb-0">৳50 Cashback</p>
                                            </div>
                                        </div>

                                        {/* Badge 4: Recharged */}
                                        <div className="bg-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-50 transform -translate-x-2 hover:scale-105 transition-transform animate-float-slow" style={{ animationDelay: '3s' }}>
                                            <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[10px] text-gray-400 uppercase tracking-wider mb-0">Wallet</p>
                                                <p className="font-bold text-xs text-gray-900 mb-0">Wallet Recharged</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: rotateX(15deg) rotateY(-15deg) rotateZ(5deg) translateX(40px) translateY(20px); }
                        50% { transform: rotateX(15deg) rotateY(-15deg) rotateZ(5deg) translateX(40px) translateY(5px); }
                    }
                    @keyframes float-slow {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    .animate-float {
                        animation: float 6s infinite ease-in-out;
                    }
                    .animate-float-slow {
                        animation: float-slow 7s infinite ease-in-out;
                    }
                `}</style>
            </section>
        </Fragment>
    )
}

export default CTASectionAlternative3
