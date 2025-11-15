import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useHostname from '@/Components/Provider/HostnameProvider'

// Security Card Component - keeping your exact HTML structure
const SecurityCard = ({ icon, category, title, description, originalUrl }) => {
    return (
        <div className='sec-card'>
            <div className='security-icon bg-bg-grey-1'>
                <img src={originalUrl + `/content/security/${icon}.svg`} alt=""/>
                <h6>{category}</h6>
            </div>
            <h5 className='text-brand-primary'>{title}</h5>
            <p className=''>{description}</p>
        </div>
    )
}

const SecuritySection = () => {
    const originalUrl = useHostname()

    // Security features data
    const securityFeatures = [
        {
            icon: 'encryption',
            category: 'Encryption',
            title: 'Bank‑level encryption',
            description: 'The same standard used by global banks.'
        },
        {
            icon: 'regulation',
            category: 'Regulation',
            title: 'Local regulatory alignment',
            description: 'Built to meet Bangladesh Bank and PSO/PSS standards.'
        },
        {
            icon: 'monitoring',
            category: 'Monitoring',
            title: '24/7 fraud checks',
            description: 'We detect suspicious activity before it becomes a threat.'
        },
        {
            icon: 'verification',
            category: 'Verification',
            title: 'Multi‑factor login',
            description: 'Extra verification - Your identity, verified your way.'
        }
    ]

    return (
        <section className='bg-bg-grey-1 py-[4rem] lg:py-[8rem]'>
            <Container>
                <Row className='flex justify-center text-center mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]'>
                    <Col lg={8}>
                        <h2 className='mb-4'>Security you can count on</h2>
                        <p className=''>Bank‑level encryption, local compliance, and
                            <br className='sm:block hidden'/>24/7 monitoring—so your money stays safe.</p>
                    </Col>
                </Row>

                <div className="grid grid-rows-1 gap-y-6">
                    <div className="w-full bg-white p-3 rounded-[12px]">
                        <Row className='justify-between gap-y-3'>
                            <Col md={7} className='my-auto'>
                                <img className='rounded-[8px]' src={originalUrl + "/content/compliance.svg"} alt="Security compliance" />
                            </Col>
                            <Col md={5} className='my-auto'>
                                <div className="lg:px-[4rem]">
                                    {securityFeatures.map((feature, index) => (
                                        <SecurityCard
                                            key={index}
                                            icon={feature.icon}
                                            category={feature.category}
                                            title={feature.title}
                                            description={feature.description}
                                            originalUrl={originalUrl}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SecuritySection
