import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ActionBtn from '../Button/ActionBtn'
import useHostname from '../Provider/HostnameProvider'

const HowItWorksSection = () => {
    const originalUrl = useHostname()

    const cards = [
        {
            image: "/content/campaigns/research.png",
            title: "Recharge Your Wallet\n",
            description: "Top up your Shamadhan Pay wallet using your bank account or debit/credit card. It's fast, secure, and sets you up for everything else.",
            stepsTitle: "Steps to Recharge:",
            steps: ["Open the Shamadhan Pay app", "Tap \"Add Money\"", "Choose Bank Account or Card", "Enter amount and confirm", "Your wallet is ready to use"],
            link: "/case-study/detail/financial-transformation-with-⎯-finpro",
            imagePosition: "left"
        },
        {
            image: "/content/campaigns/paybills.png",
            title: "Pay Utility Bills\n",
            description: "Pay DESCO, WASA, or other bills directly from your wallet.",
            stepsTitle: " Steps to Pay Bills:",
            steps: ["Tap \"Bill Pay\" in the app", "Select your provider (e.g., DESCO)", "Enter account number and amount", "Confirm payment", "Get instant confirmation and cashback (if eligible)"],
            link: "/case-study/detail/financial-transformation-with-⎯-finpro",
            imagePosition: "right"
        },
        {
            image: "/content/campaigns/qrcode.png",
            title: "Shop with QR",
            description: "Whether you’re buying groceries or grabbing tea, just scan the QR code and pay directly from your wallet.",
            stepsTitle: "Steps to Scan & Pay:",
            steps: ["Tap \"Scan QR\" on the home screen", "Point your camera at the merchant’s QR code","Enter amount and confirm","Payment is done — no cash, no hassle"],
            link: "/case-study/detail/financial-transformation-with-⎯-finpro",
            imagePosition: "left"
        },
        {
            image: "/content/campaigns/sendMoney.png",
            title: "Send Money",
            description: "Split lunch bills, send money to family, or pay your tutor — just enter their number and tap ‘Send’.",
            stepsTitle: " Steps to Send Money:",
            steps: ["Tap \"Send Money\"", "Enter recipient’s phone number", "Type the amount", "Add a note (optional)", "Confirm and send — it’s instant"],
            link: "/case-study/detail/financial-transformation-with-⎯-finpro",
            imagePosition: "right"
        }
    ]

    return (
        <section className='py-2'>
            <div className="py-[4rem] lg:py-[8rem] bg-bg-grey-2">
                <Container>
                    <Row className='justify-between mb-[3rem] lg:mb-[5rem]'>
                        <Col md={12} lg={6} className='lg:my-auto'>
                            <h2 className='mb-4 font-InterTight font-bold text-gray-900 tracking-tight'>How Shamadhan Works</h2>
                            <p className='text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl'>
                                From wallet recharge to QR payments —<br className="hidden md:block" />
                                Here’s how users get things done with Shamadhan Pay.
                            </p>
                        </Col>
                    </Row>
                    <div className="grid grid-rows-1 gap-y-10 lg:gap-y-16">
                        {cards.map((card, index) => (
                            <div key={index} className="w-full p-4 lg:p-8 bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300">
                                <Row className='justify-between items-center gap-y-8'>
                                    <Col md={5} className={`rounded-[16px] overflow-hidden ${card.imagePosition === 'right' ? 'order-1 md:!order-2' : ''}`}>
                                        <div className="aspect-[4/3] overflow-hidden rounded-[16px] bg-gray-50">
                                            <img 
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                                                src={originalUrl + card.image} 
                                                alt={card.title} 
                                            />
                                        </div>
                                    </Col>
                                    <Col md={7} className={`${card.imagePosition === 'right' ? 'md:!order-1 order-2' : ''}`}>
                                        <div className="lg:pl-12 lg:pr-8">
                                            <h3 className='text-3xl lg:text-4xl font-bold mb-5 text-gray-900 leading-tight'>{card.title}</h3>
                                            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>{card.description}</p>
                                            
                                            <div className="space-y-4">
                                                <h6 className='text-sm font-bold uppercase tracking-widest text-brand-primary opacity-80'>{card.stepsTitle}</h6>
                                                <ul className="space-y-4">
                                                    {card.steps.map((step, stepIndex) => (
                                                        <li key={stepIndex} className="flex gap-4 items-start group">
                                                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm font-bold mt-0.5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200">
                                                                {stepIndex + 1}
                                                            </span>
                                                            <span className="text-gray-700 font-medium leading-normal pt-0.5">{step}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
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
