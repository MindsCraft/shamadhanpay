import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import StyleGuideNav from '@/Components/Nav/StyleGuideNav'
import useHostname from '@/Components/Provider/HostnameProvider'
import Link from 'next/link'

const StyleGuideIndex = () => {
    const originalUrl = useHostname()

    const sections = [
        {
            title: 'Colors',
            description: 'Brand colors, grayscale, and semantic colors',
            href: '/style-guide/colors',
            icon: '🎨'
        },
        {
            title: 'Typography',
            description: 'Fonts, headings, and text styles',
            href: '/style-guide/typography',
            icon: '📝'
        },
        {
            title: 'Buttons',
            description: 'Button styles and variations',
            href: '/style-guide/buttons',
            icon: '🔘'
        },
        {
            title: 'Components',
            description: 'Cards, forms, and UI components',
            href: '/style-guide/components',
            icon: '🧩'
        },
        {
            title: 'Spacing',
            description: 'Spacing scale and layout guidelines',
            href: '/style-guide/spacing',
            icon: '📏'
        },
        {
            title: 'Icons',
            description: 'Icon library and usage',
            href: '/style-guide/icons',
            icon: '⭐'
        }
    ]

    return (
        <Fragment>
            <LandingLayout title='Design Style Guide - Healify' description='Design system and style guide'>
                <StyleGuideNav>
                    {/* Header */}
                    <section className='py-16 bg-gradient-to-br from-gray-50 to-white'>
                        <Container>
                            <div className="mb-12">
                                <img src={originalUrl + "/content/spay-logo.svg"} alt="Logo" className='mb-6' style={{ maxHeight: '60px' }} />
                                <h1 className='font-bold text-[48px] mb-4'>Design Style Guide</h1>
                                <p className='text__20 text-gray-600'>Healify Fintech Mobile Wallet Service</p>
                            </div>
                        </Container>
                    </section>

                    {/* Navigation Grid */}
                    <section className='py-16'>
                        <Container>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {sections.map((section) => (
                                    <Link 
                                        key={section.href} 
                                        href={section.href}
                                        className='block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#6373AD]'
                                    >
                                        <div className='text-5xl mb-4'>{section.icon}</div>
                                        <h3 className='font-bold text__24 mb-2'>{section.title}</h3>
                                        <p className='text__16 text-gray-600'>{section.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </Container>
                    </section>
                </StyleGuideNav>
            </LandingLayout>
        </Fragment>
    )
}

export default StyleGuideIndex
