import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import useHostname from '../Provider/HostnameProvider'
import DownloadIcon from '../svg/DownloadIcon'

const CTASectionAlternative2 = ({ 
    title = "Join the next generation <br /> of smart payments", 
    subtext = "Simple, secure, and built for your daily life. Shamadhan Pay is <br class='hidden lg:block' /> everything you need for effortless financial management."
}) => {
    const originalUrl = useHostname();

    return (
        <Fragment>
            <section className="py-12 lg:py-24 relative overflow-hidden text-center">
                {/* Background Concentric Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] pointer-events-none opacity-20">
                    <div className="absolute inset-0 rounded-full border border-gray-200 animate-pulse-slow" style={{ animationDelay: '0s' }} />
                    <div className="absolute inset-[15%] rounded-full border border-gray-100" />
                    <div className="absolute inset-[30%] rounded-full border border-gray-200 animate-pulse-slow" style={{ animationDelay: '2s' }} />
                    <div className="absolute inset-[45%] rounded-full border border-gray-100" />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Status Chip */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6373AD]/5 rounded-full border border-[#6373AD]/10 mb-8 mx-auto">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6373AD] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6373AD]"></span>
                            </span>
                            <span className="text-[12px] font-bold text-[#6373AD] uppercase tracking-[0.1em]">Currently onboarding new users</span>
                        </div>

                        {/* Title */}
                        <h2 
                            className="text-4xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]"
                            style={{ letterSpacing: '-0.04em' }}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />

                        {/* Description */}
                        <p 
                            className="text-gray-500 text-lg lg:text-2xl mb-12 leading-relaxed font-medium opacity-80"
                            dangerouslySetInnerHTML={{ __html: subtext }}
                        />

                        {/* Call to Action Wrapper */}
                        <div className="relative inline-block max-w-[300px] w-full">
                            {/* Floating Success indicators around the button */}
                            <div className="absolute -left-16 top-0 bg-white shadow-xl rounded-xl p-3 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div>
                                    <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">Instant Transfer</span>
                                </div>
                            </div>
                            <div className="absolute -right-20 bottom-4 bg-white shadow-xl rounded-xl p-3 hidden lg:block animate-float" style={{ animationDelay: '0s' }}>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">৳</div>
                                    <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">Cashback Earned</span>
                                </div>
                            </div>

                            <Link 
                                href="/download" 
                                className="flex items-center justify-center gap-3 w-full py-5 bg-[#6373AD] text-white rounded-[20px] font-bold text-xl hover:bg-[#556299] transition-all hover:scale-[1.05] shadow-2xl active:scale-95"
                                style={{ boxShadow: '0 25px 50px -12px rgba(99, 115, 173, 0.4)' }}
                            >
                                <span>Get the App</span>
                                <DownloadIcon width={28} height={28} fill="white" />
                            </Link>
                        </div>

                        {/* Secondary Indicators */}
                        <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                             <div className="flex items-center gap-2">
                                <span className="font-bold text-sm tracking-tight">Available on</span>
                                <div className="flex gap-4">
                                     <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[28px]" />
                                     <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-[28px]" />
                                </div>
                             </div>
                        </div>
                    </div>
                </Container>

                <style jsx>{`
                    @keyframes pulse-slow {
                        0%, 100% { opacity: 0.1; transform: scale(1); }
                        50% { opacity: 0.3; transform: scale(1.05); }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0) rotate(-2deg); }
                        50% { transform: translateY(-12px) rotate(2deg); }
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 8s infinite ease-in-out;
                    }
                    .animate-float {
                        animation: float 5s infinite ease-in-out;
                    }
                `}</style>
            </section>
        </Fragment>
    )
}

export default CTASectionAlternative2
