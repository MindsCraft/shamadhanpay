import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import useHostname from '../Provider/HostnameProvider'
import DownloadIcon from '../svg/DownloadIcon'

const CTASectionAlternative4 = ({ 
    title = "Ready to start your <br class='hidden lg:block' /> smart financial journey?", 
    subtext = "Experience the ultimate in secure and smart digital payments. <br class='hidden lg:block' /> Send money, pay bills, and more — all from one beautiful app."
}) => {
    const originalUrl = useHostname();

    return (
        <Fragment>
            <section className="w-full bg-[#f9fafb] border-y border-gray-100 py-20 lg:py-32 overflow-hidden">
                <Container>
                    <Row className="items-center">
                        {/* Text Content */}
                        <Col lg={6} className="mb-16 lg:mb-0">
                            <div className='inline-flex items-center gap-2 px-3 py-1 bg-white shadow-sm rounded-full mb-8 border border-gray-100'>
                                <span className="text-[11px] font-bold text-[#6373AD] uppercase tracking-widest">Get the Shamadhan App</span>
                            </div>
                            <h2 
                                className="text-4xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]"
                                style={{ letterSpacing: '-0.04em' }}
                                dangerouslySetInnerHTML={{ __html: title }}
                            />
                            <p 
                                className="text-gray-500 text-lg lg:text-2xl mb-12 leading-relaxed font-medium opacity-80"
                                dangerouslySetInnerHTML={{ __html: subtext }}
                            />
                            
                            <div className="flex flex-wrap gap-5 items-center">
                                <Link 
                                    href="/download" 
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#6373AD] text-white rounded-2xl font-bold text-xl hover:bg-[#556299] transition-all hover:translate-y-[-4px] shadow-2xl hover:shadow-[#6373AD]/40 active:scale-95"
                                >
                                    <span>Download App</span>
                                    <DownloadIcon width={28} height={28} fill="white" />
                                </Link>

                                <div className="flex flex-col gap-2">
                                     <div className="flex gap-4">
                                         <Link href="#!" className="hover:opacity-80 transition-opacity">
                                             <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[40px]" />
                                         </Link>
                                         <Link href="#!" className="hover:opacity-80 transition-opacity">
                                             <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-[40px]" />
                                         </Link>
                                     </div>
                                     <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest pl-1">Available Globally</p>
                                </div>
                            </div>
                        </Col>

                        {/* Large Image Portion */}
                        <Col lg={6} className="relative">
                            <div className="relative group">
                                {/* Subtle large Brand Logo Background behind Image */}
                                <div 
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-gray-200/20 select-none pointer-events-none -z-10"
                                    style={{ letterSpacing: '-0.05em' }}
                                >
                                    S
                                </div>

                                <img 
                                    src={originalUrl + "/images/iPhone 15 Pro Mockup, Front and Back View (1) 2.svg"} 
                                    alt="Mockup" 
                                    className="w-full max-w-[600px] mx-auto lg:ml-auto filter drop-shadow-[0_45px_100px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-4 transition-transform duration-700"
                                />

                                {/* Extra Information Tag */}
                                <div className="absolute left-1/4 bottom-10 bg-white shadow-2xl rounded-2xl p-6 hidden lg:block border border-gray-50 max-w-[200px] animate-float">
                                    <p className="text-gray-900 font-bold mb-1 text-sm">Security Hub</p>
                                    <p className="text-gray-400 text-xs leading-relaxed">Active 256-bit encryption protecting your wallet.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-15px); }
                    }
                    .animate-float {
                        animation: float 6s infinite ease-in-out;
                    }
                `}</style>
            </section>
        </Fragment>
    )
}

export default CTASectionAlternative4
