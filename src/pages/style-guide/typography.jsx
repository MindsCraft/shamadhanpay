import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import StyleGuideNav from '@/Components/Nav/StyleGuideNav'

const TypographyPage = () => {
    const fontWeights = [
        { weight: 800, name: 'Extra Bold', value: '800', usage: 'Special emphasis, hero text' },
        { weight: 700, name: 'Bold', value: '700', usage: 'Main headings, strong emphasis' },
        { weight: 600, name: 'Semibold', value: '600', usage: 'Subheadings, important text' },
        { weight: 500, name: 'Medium', value: '500', usage: 'Buttons, labels, H1/H2' },
        { weight: 400, name: 'Regular', value: '400', usage: 'Body text, paragraphs' },
    ]

    const headings = [
        { tag: 'H1', size: '72px', weight: '500', lineHeight: '110%', spacing: '-4%', sample: 'Heading 1 / Page Header' },
        { tag: 'H2', size: '64px', weight: '500', lineHeight: '110%', spacing: '-4%', sample: 'Heading 2' },
        { tag: 'H3', size: '32px', weight: '600', lineHeight: '130%', spacing: 'normal', sample: 'Heading 3' },
        { tag: 'H4', size: '24px', weight: '600', lineHeight: '140%', spacing: 'normal', sample: 'Heading 4' },
        { tag: 'H5', size: '20px', weight: '500', lineHeight: '140%', spacing: 'normal', sample: 'Heading 5' },
    ]

    const bodyText = [
        { name: 'Large', size: '24px', weight: '400', usage: 'Introductory paragraphs' },
        { name: 'Regular', size: '18px', weight: '400', usage: 'Standard body text' },
        { name: 'Small', size: '16px', weight: '400', usage: 'Secondary information' },
        { name: 'Caption', size: '14px', weight: '400', usage: 'Captions and labels' },
    ]

    return (
        <Fragment>
            <LandingLayout title='Typography - Style Guide' description='Typography system and text styles'>
                <StyleGuideNav>
                    <div className='pb-16 bg-white'>
                        {/* Font Family */}
                        <section className='py-12'>
                            <Container>
                                <h2 className='mb-4'>Font Family</h2>
                                <p className='text-gray-600 mb-12'>We use a dual-font system for optimal hierarchy and readability.</p>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    {/* Inter Tight */}
                                    <div className='bg-gray-50 p-8 rounded-lg'>
                                        <div className='mb-6'>
                                            <h3 className='font-bold text__24 mb-1'>Inter Tight</h3>
                                            <p className='text__14 text-gray-600'>Headings (H1-H6)</p>
                                        </div>
                                        <div className='font-InterTight bg-white p-6 rounded'>
                                            <p className='text-7xl font-medium mb-4'>Aa</p>
                                            <p className='text-base mb-1'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                            <p className='text-base mb-1'>abcdefghijklmnopqrstuvwxyz</p>
                                            <p className='text-base'>0123456789</p>
                                        </div>
                                    </div>

                                    {/* Inter */}
                                    <div className='bg-gray-50 p-8 rounded-lg'>
                                        <div className='mb-6'>
                                            <h3 className='font-bold text__24 mb-1'>Inter</h3>
                                            <p className='text__14 text-gray-600'>Body text, UI elements</p>
                                        </div>
                                        <div className='font-Inter bg-white p-6 rounded'>
                                            <p className='text-7xl font-normal mb-4'>Aa</p>
                                            <p className='text-base mb-1'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                            <p className='text-base mb-1'>abcdefghijklmnopqrstuvwxyz</p>
                                            <p className='text-base'>0123456789</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Font Weights Table */}
                        <section className='py-12 bg-gray-50'>
                            <Container>
                                <h2 className='mb-4'>Font Weights</h2>
                                <p className='text-gray-600 mb-8'>Available font weights for Inter Tight and Inter.</p>
                                
                                <div className='bg-white rounded-lg overflow-hidden'>
                                    {/* Table Header */}
                                    <div className='grid grid-cols-12 gap-4 p-4 bg-gray-100 font-semibold text-sm'>
                                        <div className='col-span-2'>Weight</div>
                                        <div className='col-span-2'>Value</div>
                                        <div className='col-span-3'>Usage</div>
                                        <div className='col-span-5'>Sample</div>
                                    </div>
                                    
                                    {/* Table Rows */}
                                    {fontWeights.map((item, index) => (
                                        <div key={item.value} className={`grid grid-cols-12 gap-4 p-4 items-center ${index !== fontWeights.length - 1 ? 'border-b border-gray-100' : ''}`}>
                                            <div className='col-span-2 font-semibold'>{item.name}</div>
                                            <div className='col-span-2'>
                                                <span className='text-sm font-mono bg-gray-100 px-2 py-1 rounded'>{item.value}</span>
                                            </div>
                                            <div className='col-span-3 text-sm text-gray-600'>{item.usage}</div>
                                            <div className='col-span-5'>
                                                <p className='text-2xl' style={{ fontWeight: item.weight }}>The quick brown fox</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Container>
                        </section>

                        {/* Headings Table */}
                        <section className='py-12'>
                            <Container>
                                <h2 className='mb-4'>Headings</h2>
                                <p className='text-gray-600 mb-8'>Heading styles using Inter Tight with specific font weights.</p>
                                
                                <div className='bg-white rounded-lg overflow-hidden border border-gray-200'>
                                    {/* Table Header */}
                                    <div className='grid grid-cols-12 gap-4 p-4 bg-gray-100 font-semibold text-sm'>
                                        <div className='col-span-1'>Tag</div>
                                        <div className='col-span-1'>Size</div>
                                        <div className='col-span-1'>Weight</div>
                                        <div className='col-span-2'>Line Height</div>
                                        <div className='col-span-2'>Spacing</div>
                                        <div className='col-span-5'>Sample</div>
                                    </div>
                                    
                                    {/* Table Rows */}
                                    {headings.map((item, index) => (
                                        <div key={item.tag} className={`grid grid-cols-12 gap-4 p-4 items-center ${index !== headings.length - 1 ? 'border-b border-gray-100' : ''}`}>
                                            <div className='col-span-1'>
                                                <span className='font-mono font-semibold text-sm'>{item.tag}</span>
                                            </div>
                                            <div className='col-span-1 text-sm'>{item.size}</div>
                                            <div className='col-span-1 text-sm'>{item.weight}</div>
                                            <div className='col-span-2 text-sm'>{item.lineHeight}</div>
                                            <div className='col-span-2 text-sm'>{item.spacing}</div>
                                            <div className='col-span-5'>
                                                {item.tag === 'H1' && <h1 className='!text-3xl'>{item.sample}</h1>}
                                                {item.tag === 'H2' && <h2 className='!text-2xl'>{item.sample}</h2>}
                                                {item.tag === 'H3' && <h3 className='!text-xl'>{item.sample}</h3>}
                                                {item.tag === 'H4' && <h4 className='!text-lg'>{item.sample}</h4>}
                                                {item.tag === 'H5' && <h5 className='!text-base'>{item.sample}</h5>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Container>
                        </section>

                        {/* Body Text Table */}
                        <section className='py-12 bg-gray-50'>
                            <Container>
                                <h2 className='mb-4'>Body Text Sizes</h2>
                                <p className='text-gray-600 mb-8'>Text sizes for body content using Inter font.</p>
                                
                                <div className='bg-white rounded-lg overflow-hidden'>
                                    {/* Table Header */}
                                    <div className='grid grid-cols-12 gap-4 p-4 bg-gray-100 font-semibold text-sm'>
                                        <div className='col-span-2'>Name</div>
                                        <div className='col-span-1'>Size</div>
                                        <div className='col-span-1'>Weight</div>
                                        <div className='col-span-3'>Usage</div>
                                        <div className='col-span-5'>Sample</div>
                                    </div>
                                    
                                    {/* Table Rows */}
                                    {bodyText.map((item, index) => (
                                        <div key={item.name} className={`grid grid-cols-12 gap-4 p-4 items-center ${index !== bodyText.length - 1 ? 'border-b border-gray-100' : ''}`}>
                                            <div className='col-span-2 font-semibold'>{item.name}</div>
                                            <div className='col-span-1 text-sm'>{item.size}</div>
                                            <div className='col-span-1'>
                                                <span className='text-sm font-mono bg-gray-100 px-2 py-1 rounded'>{item.weight}</span>
                                            </div>
                                            <div className='col-span-3 text-sm text-gray-600'>{item.usage}</div>
                                            <div className='col-span-5'>
                                                <p style={{ fontSize: item.size }}>The quick brown fox jumps over the lazy dog</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Container>
                        </section>

                        {/* Usage Example */}
                        <section className='py-12'>
                            <Container>
                                <h2 className='mb-4'>Usage Example</h2>
                                <p className='text-gray-600 mb-8'>Real-world example showing typography hierarchy.</p>
                                
                                <div className='bg-gray-50 p-8 rounded-lg'>
                                    <h2 className='mb-4'>Financial Freedom Starts Here</h2>
                                    <p className='text__18 text-gray-700 leading-relaxed mb-6'>
                                        Shamadhan is your all-in-one digital wallet solution. Send money, pay bills, and manage your finances with ease. 
                                        Experience the convenience of instant transfers, powerful budgeting tools, and a wide range of investment options.
                                    </p>
                                    <p className='text__16 text-gray-600 leading-relaxed mb-4'>
                                        Join thousands of users who trust Shamadhan for their daily financial transactions. 
                                        Our platform combines security, simplicity, and innovation to give you complete control over your money.
                                    </p>
                                    <p className='text__14 text-gray-500'>
                                        Available on iOS and Android. Download now and get started in minutes.
                                    </p>
                                </div>
                            </Container>
                        </section>
                    </div>
                </StyleGuideNav>
            </LandingLayout>
        </Fragment>
    )
}

export default TypographyPage
