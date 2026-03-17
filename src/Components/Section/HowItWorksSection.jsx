import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider'

const cards = [
    {
        tag: "Wallet",
        tagColor: "#6373AD",
        tagBg: "rgba(99,115,173,0.1)",
        accentGrad: "linear-gradient(90deg, #6373AD, #8fa3d4)",
        image: "/content/campaigns/research.png",
        title: "Recharge Your Wallet",
        description: "Top up your Shamadhan Pay wallet in seconds using your bank account or card — fast, secure, and ready to go.",
        stepsTitle: "Steps to Recharge",
        steps: [
            "Open the Shamadhan Pay app",
            "Tap \"Add Money\"",
            "Choose Bank Account or Card",
            "Enter amount and confirm",
            "Your wallet is instantly ready",
        ],
        imagePosition: "left",
    },
    {
        tag: "Bills",
        tagColor: "#44AA99",
        tagBg: "rgba(68,170,153,0.1)",
        accentGrad: "linear-gradient(90deg, #44AA99, #7fcfc4)",
        image: "/content/campaigns/paybills.png",
        title: "Pay Utility Bills",
        description: "Pay DESCO, WASA, Gas and dozens of providers directly from your wallet — no queues, instant confirmation.",
        stepsTitle: "Steps to Pay Bills",
        steps: [
            "Tap \"Bill Pay\" in the app",
            "Select your provider (e.g., DESCO)",
            "Enter account number & amount",
            "Confirm and pay",
            "Receive your receipt instantly",
        ],
        imagePosition: "right",
    },
    {
        tag: "QR Pay",
        tagColor: "#A1609D",
        tagBg: "rgba(161,96,157,0.1)",
        accentGrad: "linear-gradient(90deg, #A1609D, #cc8fc9)",
        image: "/content/campaigns/qrcode.png",
        title: "Shop with QR Scan",
        description: "Just scan the merchant's QR code and pay directly from your wallet — no cash, no contact, in seconds.",
        stepsTitle: "Steps to Scan & Pay",
        steps: [
            "Tap \"Scan QR\" on the home screen",
            "Point camera at the merchant's QR",
            "Verify the amount shown",
            "Confirm with one tap",
            "Done — payment is instant!",
        ],
        imagePosition: "left",
    },
    {
        tag: "Transfer",
        tagColor: "#EA9E51",
        tagBg: "rgba(234,158,81,0.1)",
        accentGrad: "linear-gradient(90deg, #EA9E51, #f2c285)",
        image: "/content/campaigns/sendMoney.png",
        title: "Send Money Instantly",
        description: "Split bills, pay your tutor, or send to family — enter a phone number and tap Send. Done in seconds.",
        stepsTitle: "Steps to Send Money",
        steps: [
            "Tap \"Send Money\"",
            "Enter recipient's phone number",
            "Type the amount",
            "Add a note (optional)",
            "Confirm — it arrives instantly",
        ],
        imagePosition: "right",
    },
]

const HowItWorksSection = () => {
    const originalUrl = useHostname()

    return (
        <section className='py-2'>
            <div className="py-[4rem] lg:py-[8rem] bg-bg-grey-2">
                <Container>
                    {/* Section Header */}
                    <Row className='justify-between mb-[2.5rem] sm:mb-[3.5rem] lg:mb-[5rem]'>
                        <Col md={7} className='lg:my-auto'>
                            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#6373AD' }}>
                                Seamless Experience
                            </span>
                            <h2 className='mb-3 font-InterTight font-bold text-gray-900' style={{ letterSpacing: '-0.02em' }}>
                                How Shamadhan Works
                            </h2>
                            <p className='text-gray-500 text-lg leading-relaxed max-w-xl'>
                                From wallet recharge to QR payments — every step of Shamadhan Pay is designed to be effortless.
                            </p>
                        </Col>
                    </Row>

                    {/* Cards */}
                    <div className="flex flex-col gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full bg-white rounded-[20px] overflow-hidden"
                                style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)' }}
                            >
                                <Row className='g-0 justify-between'>
                                    {/* Image Column */}
                                    <Col
                                        md={5}
                                        className={`${card.imagePosition === 'right' ? 'order-1 md:!order-2' : ''}`}
                                        style={{ minHeight: '360px' }}
                                    >
                                        <div className="w-full h-full relative overflow-hidden" style={{ minHeight: '360px' }}>
                                            {/* Coloured gradient overlay on image */}
                                            <div
                                                className="absolute inset-0 z-10"
                                                style={{
                                                    background: `linear-gradient(135deg, ${card.tagColor}22 0%, transparent 60%)`,
                                                }}
                                            />
                                            <img
                                                className="w-full h-full object-cover"
                                                style={{ minHeight: '360px' }}
                                                src={originalUrl + card.image}
                                                alt={card.title}
                                            />
                                        </div>
                                    </Col>

                                    {/* Text Column */}
                                    <Col
                                        md={7}
                                        className={`my-auto ${card.imagePosition === 'right' ? 'md:!order-1 order-2' : ''}`}
                                    >
                                        <div className="p-8 lg:p-12">

                                            {/* Pill Tag */}
                                            <div className="mb-5">
                                                <span
                                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] px-4 py-2 rounded-full border"
                                                    style={{
                                                        color: card.tagColor,
                                                        background: card.tagBg,
                                                        borderColor: `${card.tagColor}30`,
                                                    }}
                                                >
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                        style={{ background: card.tagColor }}
                                                    />
                                                    {card.tag}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className="font-InterTight font-bold text-gray-900 mb-3 leading-tight"
                                                style={{ letterSpacing: '-0.02em' }}
                                            >
                                                {card.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-7">
                                                {card.description}
                                            </p>

                                            {/* Gradient Divider */}
                                            <div
                                                className="h-px mb-6 rounded-full"
                                                style={{ background: `linear-gradient(to right, ${card.tagColor}50, transparent)` }}
                                            />

                                            {/* Steps Label */}
                                            <p
                                                className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4"
                                                style={{ color: card.tagColor }}
                                            >
                                                {card.stepsTitle}
                                            </p>

                                            {/* Steps List */}
                                            <ol className="space-y-3">
                                                {card.steps.map((step, si) => (
                                                    <li key={si} className="flex items-start gap-4">
                                                        {/* Numbered Chip */}
                                                        <span
                                                            className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5"
                                                            style={{
                                                                background: card.tagBg,
                                                                color: card.tagColor,
                                                                border: `1px solid ${card.tagColor}25`,
                                                            }}
                                                        >
                                                            {si + 1}
                                                        </span>
                                                        <span className="text-gray-700 text-sm lg:text-base font-medium leading-snug pt-1">
                                                            {step}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default HowItWorksSection
