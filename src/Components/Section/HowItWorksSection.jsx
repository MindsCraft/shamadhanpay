import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider'

const cards = [
    {
        image: "/content/campaigns/research.png",
        tag: "Wallet",
        title: "Recharge Your Wallet",
        description: "Top up your Shamadhan Pay wallet using your bank account or debit/credit card in seconds. It's fast, secure, and sets you up for everything else.",
        stepsTitle: "How to recharge",
        steps: [
            "Open the Shamadhan Pay app",
            "Tap \"Add Money\" on the home screen",
            "Choose Bank Account or Card",
            "Enter amount and confirm with PIN",
            "Your wallet is instantly ready to use",
        ],
        accent: "#6373AD",
        accentSoft: "rgba(99, 115, 173, 0.12)",
    },
    {
        image: "/content/campaigns/paybills.png",
        tag: "Bills",
        title: "Pay Utility Bills",
        description: "Pay DESCO, WASA, Gas, and dozens of other providers directly from your wallet — no queues, no hassle, instant confirmation.",
        stepsTitle: "How to pay bills",
        steps: [
            "Tap \"Bill Pay\" in the app",
            "Select your provider (e.g., DESCO)",
            "Enter your account number and amount",
            "Confirm and pay",
            "Receive your digital receipt instantly",
        ],
        accent: "#44AA99",
        accentSoft: "rgba(68, 170, 153, 0.12)",
    },
    {
        image: "/content/campaigns/qrcode.png",
        tag: "QR Pay",
        title: "Shop with QR Scan",
        description: "Whether you're buying groceries or grabbing tea, just scan the merchant's QR code and pay directly from your wallet — no cash, no contact.",
        stepsTitle: "How to scan & pay",
        steps: [
            "Tap \"Scan QR\" on the home screen",
            "Point your camera at the merchant's QR",
            "Verify the amount shown",
            "Confirm with one tap",
            "Done — payment is instant!",
        ],
        accent: "#A1609D",
        accentSoft: "rgba(161, 96, 157, 0.12)",
    },
    {
        image: "/content/campaigns/sendMoney.png",
        tag: "Transfer",
        title: "Send Money Instantly",
        description: "Split lunch bills, pay your tutor, or send money to family — just enter a phone number and tap Send. Money reaches them in seconds.",
        stepsTitle: "How to send money",
        steps: [
            "Tap \"Send Money\"",
            "Enter recipient's phone number",
            "Type the amount",
            "Add a note (optional)",
            "Confirm — it arrives instantly",
        ],
        accent: "#EA9E51",
        accentSoft: "rgba(234, 158, 81, 0.12)",
    },
]

const HowItWorksSection = () => {
    const originalUrl = useHostname()
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef(null)
    const rightColRef = useRef(null)

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-35% 0px -45% 0px',
            threshold: 0,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'))
                    setActiveIndex(index)
                }
            })
        }, observerOptions)

        const steps = containerRef.current?.querySelectorAll('.step-block')
        steps?.forEach((step) => observer.observe(step))

        return () => observer.disconnect()
    }, [])

    const activeCard = cards[activeIndex]

    return (
        <section className="py-0 how-it-works-section">
            {/* ── Header ── */}
            <div className="bg-white border-b border-gray-100 py-[4rem] lg:py-[5rem]">
                <Container>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <span
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"
                                style={{ color: '#6373AD' }}
                            >
                                <span className="w-5 h-px" style={{ background: '#6373AD', display: 'inline-block' }}></span>
                                Seamless Experience
                            </span>
                            <h2 className="font-InterTight font-bold text-gray-900 tracking-tight mb-0" style={{ lineHeight: '1.08' }}>
                                How Shamadhan<br className="hidden lg:block" /> Works
                            </h2>
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-sm lg:max-w-xs lg:text-right pb-1">
                            From wallet recharge to instant transfers — every step designed to be effortless.
                        </p>
                    </div>
                </Container>
            </div>

            {/* ── Body: Sticky-scroll layout ── */}
            <div className="bg-[#F6F7FB] py-[4rem] lg:py-[5rem]">
                <Container>
                    <div
                        ref={containerRef}
                        className="relative flex flex-col lg:flex-row gap-10 lg:gap-20 items-start"
                    >

                        {/* ─── LEFT: Sticky panel (desktop) ─── */}
                        <div className="hidden lg:flex lg:w-[48%] lg:sticky lg:top-[14vh] flex-col gap-6">

                            {/* Progress dots */}
                            <div className="flex items-center gap-3 mb-2">
                                {cards.map((c, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            const el = containerRef.current?.querySelector(`[data-index="${i}"]`)
                                            el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                        }}
                                        className="transition-all duration-300 rounded-full"
                                        style={{
                                            width: activeIndex === i ? '32px' : '8px',
                                            height: '8px',
                                            background: activeIndex === i ? c.accent : '#D1D5DB',
                                        }}
                                        aria-label={`Go to step ${i + 1}`}
                                    />
                                ))}
                                <span className="ml-2 text-xs font-semibold text-gray-400 tracking-wider">
                                    {activeIndex + 1} / {cards.length}
                                </span>
                            </div>

                            {/* Image frame */}
                            <div
                                className="relative w-full rounded-[28px] overflow-hidden shadow-2xl"
                                style={{ aspectRatio: '4/5', maxHeight: '68vh' }}
                            >
                                {cards.map((card, i) => (
                                    <div
                                        key={i}
                                        className="absolute inset-0 transition-all duration-700 ease-in-out"
                                        style={{
                                            opacity: activeIndex === i ? 1 : 0,
                                            transform: activeIndex === i ? 'scale(1) translateY(0)' : 'scale(1.04) translateY(16px)',
                                            pointerEvents: activeIndex === i ? 'auto' : 'none',
                                        }}
                                    >
                                        {/* Coloured gradient overlay */}
                                        <div
                                            className="absolute inset-0 z-10"
                                            style={{
                                                background: `linear-gradient(160deg, ${card.accent}22 0%, transparent 50%, rgba(0,0,0,0.45) 100%)`,
                                            }}
                                        />
                                        <img
                                            src={originalUrl + card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Bottom label chip */}
                                        <div
                                            className="absolute bottom-7 left-7 right-7 z-20 flex items-center justify-between"
                                        >
                                            <div
                                                className="flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-xl border"
                                                style={{
                                                    background: 'rgba(255,255,255,0.15)',
                                                    borderColor: 'rgba(255,255,255,0.25)',
                                                }}
                                            >
                                                <span
                                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                                    style={{
                                                        background: card.accent,
                                                        boxShadow: `0 0 12px ${card.accent}`,
                                                        animation: 'pulse 2s infinite',
                                                    }}
                                                />
                                                <span className="text-white text-sm font-semibold tracking-wide">
                                                    {card.title}
                                                </span>
                                            </div>

                                            {/* Step badge */}
                                            <div
                                                className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-sm backdrop-blur-xl border"
                                                style={{
                                                    background: `${card.accent}CC`,
                                                    borderColor: `${card.accent}44`,
                                                }}
                                            >
                                                {i + 1}/{cards.length}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mini step checklist reflecting active card */}
                            <div
                                className="rounded-2xl p-5 border backdrop-blur-sm"
                                style={{
                                    background: 'rgba(255,255,255,0.7)',
                                    borderColor: 'rgba(0,0,0,0.06)',
                                }}
                            >
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-3"
                                    style={{ color: activeCard.accent }}
                                >
                                    {activeCard.stepsTitle}
                                </p>
                                <ul className="space-y-2">
                                    {activeCard.steps.map((step, si) => (
                                        <li key={si} className="flex items-start gap-3">
                                            <span
                                                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                                                style={{
                                                    background: activeCard.accentSoft,
                                                    color: activeCard.accent,
                                                }}
                                            >
                                                {si + 1}
                                            </span>
                                            <span className="text-gray-700 text-sm leading-snug">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ─── RIGHT: Scrollable step blocks ─── */}
                        <div
                            ref={rightColRef}
                            className="w-full lg:w-[52%] flex flex-col gap-10 lg:gap-0"
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    data-index={index}
                                    className="step-block lg:min-h-[80vh] flex items-start lg:items-center"
                                >
                                    <div
                                        className={`
                                            w-full rounded-[24px] overflow-hidden
                                            transition-all duration-500
                                            ${activeIndex === index
                                                ? 'opacity-100 translate-y-0'
                                                : 'lg:opacity-30 lg:translate-y-4'}
                                        `}
                                    >
                                        {/* Mobile image */}
                                        <div className="lg:hidden w-full rounded-[20px] overflow-hidden mb-5 relative shadow-lg"
                                            style={{ aspectRatio: '16/9' }}>
                                            <div
                                                className="absolute inset-0 z-10"
                                                style={{
                                                    background: `linear-gradient(160deg, ${card.accent}33 0%, transparent 60%, rgba(0,0,0,0.4) 100%)`,
                                                }}
                                            />
                                            <img
                                                src={originalUrl + card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border"
                                                style={{ background: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.3)' }}>
                                                <span className="w-2 h-2 rounded-full" style={{ background: card.accent }} />
                                                <span className="text-white text-xs font-semibold">Step {index + 1}</span>
                                            </div>
                                        </div>

                                        {/* Content card */}
                                        <div
                                            className="bg-white rounded-[24px] p-7 lg:p-10 border"
                                            style={{ borderColor: activeIndex === index ? `${card.accent}30` : 'rgba(0,0,0,0.06)' }}
                                        >
                                            {/* Tag + number row */}
                                            <div className="flex items-center justify-between mb-6">
                                                <span
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full"
                                                    style={{ background: card.accentSoft, color: card.accent }}
                                                >
                                                    {card.tag}
                                                </span>
                                                <span
                                                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                                                    style={{ background: card.accentSoft, color: card.accent }}
                                                >
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className="font-InterTight font-bold text-gray-900 mb-4 leading-tight"
                                                style={{ letterSpacing: '-0.02em' }}
                                            >
                                                {card.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-7">
                                                {card.description}
                                            </p>

                                            {/* Divider */}
                                            <div
                                                className="h-px mb-6"
                                                style={{ background: `linear-gradient(to right, ${card.accent}30, transparent)` }}
                                            />

                                            {/* Steps — numbered pills */}
                                            <p
                                                className="text-[11px] font-bold uppercase tracking-[0.16em] mb-4"
                                                style={{ color: card.accent }}
                                            >
                                                {card.stepsTitle}
                                            </p>
                                            <ol className="space-y-3">
                                                {card.steps.map((step, si) => (
                                                    <li key={si} className="flex items-start gap-4">
                                                        <span
                                                            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                                                            style={{ background: card.accentSoft, color: card.accent }}
                                                        >
                                                            {si + 1}
                                                        </span>
                                                        <span className="text-gray-800 text-base font-medium leading-snug pt-1">
                                                            {step}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ol>
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
