import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider'

const HowItWorksSection = () => {
    const originalUrl = useHostname()
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef(null)

    const cards = [
        {
            image: "/content/campaigns/research.png",
            title: "Recharge Your Wallet",
            description: "Top up your Shamadhan Pay wallet using your bank account or debit/credit card. It's fast, secure, and sets you up for everything else.",
            stepsTitle: "Steps to Recharge:",
            steps: ["Open the Shamadhan Pay app", "Tap \"Add Money\"", "Choose Bank Account or Card", "Enter amount and confirm", "Your wallet is ready to use"],
        },
        {
            image: "/content/campaigns/paybills.png",
            title: "Pay Utility Bills",
            description: "Pay DESCO, WASA, or other bills directly from your wallet.",
            stepsTitle: "Steps to Pay Bills:",
            steps: ["Tap \"Bill Pay\" in the app", "Select your provider (e.g., DESCO)", "Enter account number and amount", "Confirm payment", "Get instant confirmation"],
        },
        {
            image: "/content/campaigns/qrcode.png",
            title: "Shop with QR",
            description: "Whether you’re buying groceries or grabbing tea, just scan the QR code and pay directly from your wallet.",
            stepsTitle: "Steps to Scan & Pay:",
            steps: ["Tap \"Scan QR\" on the home screen", "Point your camera at the merchant’s QR code","Enter amount and confirm","Payment is done — no cash, no hassle"],
        },
        {
            image: "/content/campaigns/sendMoney.png",
            title: "Send Money",
            description: "Split lunch bills, send money to family, or pay your tutor — just enter their number and tap ‘Send’.",
            stepsTitle: "Steps to Send Money:",
            steps: ["Tap \"Send Money\"", "Enter recipient’s phone number", "Type the amount", "Add a note (optional)", "Confirm and send — it’s instant"],
        }
    ]

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -50% 0px',
            threshold: 0
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'))
                    setActiveIndex(index)
                }
            })
        }, observerOptions)

        const steps = containerRef.current.querySelectorAll('.step-content')
        steps.forEach((step) => observer.observe(step))

        return () => observer.disconnect()
    }, [])

    return (
        <section className='py-0'>
            <div className="bg-bg-grey-2 py-[4rem] lg:py-[6rem]">
                <Container>
                    <div className="mb-[4rem] lg:mb-[6rem] text-center lg:text-left">
                        <h6 className="text-brand-primary font-bold uppercase tracking-widest mb-3">Seamless Experience</h6>
                        <h2 className='text-4xl lg:text-6xl font-bold font-InterTight text-gray-900 tracking-tight'>How Shamadhan Works</h2>
                    </div>

                    <div ref={containerRef} className="relative flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
                        {/* Left Side: Sticky Image Visual (Desktop Only) */}
                        <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-[12vh]">
                            <div className="w-full aspect-[4/5] max-h-[75vh] rounded-[32px] overflow-hidden bg-white shadow-2xl relative border border-gray-100">
                                {cards.map((card, index) => (
                                    <div 
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                                            activeIndex === index 
                                            ? 'opacity-100 scale-100 translate-y-0' 
                                            : 'opacity-0 scale-105 translate-y-8 pointer-events-none'
                                        }`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10"></div>
                                        <img 
                                            src={originalUrl + card.image} 
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                        
                                        {/* Dynamic Label Indicator */}
                                        <div className="absolute bottom-8 left-8 z-20 bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-6 py-2 shadow-lg">
                                            <p className="text-white font-semibold text-sm flex items-center gap-3">
                                                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_rgba(99,115,173,0.8)]"></span>
                                                Step {index + 1}: {card.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Scrollable Content Blocks */}
                        <div className="w-full lg:w-1/2 space-y-16 lg:space-y-[35vh] pb-[5vh] lg:pb-[20vh]">
                            {cards.map((card, index) => (
                                <div 
                                    key={index} 
                                    data-index={index}
                                    className={`step-content transition-opacity duration-500 pt-[2vh] lg:pt-[10vh] ${
                                        activeIndex === index ? 'opacity-100' : 'lg:opacity-30'
                                    }`}
                                >
                                    {/* Mobile Image (Hidden on Desktop) */}
                                    <div className="block lg:hidden w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 relative shadow-lg">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10"></div>
                                        <img 
                                            src={originalUrl + card.image} 
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20 bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-lg">
                                            <p className="text-white font-medium text-xs flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                                                Step {index + 1}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-5 lg:space-y-8 bg-white lg:bg-transparent p-6 lg:p-0 rounded-[24px] lg:rounded-none shadow-sm lg:shadow-none border border-gray-100 lg:border-none">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-xl mb-2 lg:mb-4 shadow-md bg-opacity-10 text-brand-primary lg:bg-brand-primary lg:text-white lg:shadow-none">
                                            {index + 1}
                                        </div>
                                        
                                        <h3 className='text-2xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight'>
                                            {card.title}
                                        </h3>
                                        
                                        <p className='text-base lg:text-xl text-gray-600 leading-relaxed max-w-xl'>
                                            {card.description}
                                        </p>
                                        
                                        <div className="pt-6 lg:pt-8 border-t border-gray-100 lg:border-gray-200">
                                            <h6 className='text-xs lg:text-sm font-bold uppercase tracking-widest text-[#6373AD] mb-4 lg:mb-6'>
                                                {card.stepsTitle}
                                            </h6>
                                            <ul className="space-y-4 lg:space-y-5">
                                                {card.steps.map((step, stepIndex) => (
                                                    <li key={stepIndex} className="flex gap-4 lg:gap-5 items-start">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-800 font-medium text-base lg:text-lg leading-snug">
                                                            {step}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default HowItWorksSection
