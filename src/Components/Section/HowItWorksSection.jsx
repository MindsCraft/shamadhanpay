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
                    <Row className='justify-between mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]'>
                        <Col md={6} className='lg:my-auto'>
                            <h2 className='mb-4'>How Shamadhan Works</h2>
                            <p className=''>
                                From wallet recharge to QR payments —<br/>
                                Here’s how users get things done with Shamadhan Pay.
                            </p>
                        </Col>
                    </Row>
                    <div className="grid grid-rows-1 gap-y-6">
                        {cards.map((card, index) => (
                            <div key={index} className="w-full p-3 bg-white rounded-[12px]">
                                <Row className='justify-between gap-y-3'>
                                    <Col md={5} className={`my-auto rounded-[8px] ${card.imagePosition === 'right' ? 'order-1 md:!order-2' : ''}`}>
                                        <img className="rounded-[8px]" src={originalUrl + card.image} alt={card.title} />
                                    </Col>
                                    <Col md={7} className={`my-auto ${card.imagePosition === 'right' ? 'md:!order-1 order-2' : ''}`}>
                                        <div className="lg:px-[4rem]">
                                            <h4 className='mb-3'>{card.title}</h4>
                                            <p className='mb-4'>{card.description}</p>
                                            <h5 className='mb-2'>{card.stepsTitle}</h5>
                                            <ul className="pl-6 list-decimal mb-6">
                                                {card.steps.map((step, stepIndex) => (
                                                    <li key={stepIndex}>{step}</li>
                                                ))}
                                            </ul>
                                            {/*<ActionBtn link={card.link} title="Get Started" />*/}
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
