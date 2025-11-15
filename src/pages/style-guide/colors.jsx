import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import StyleGuideNav from '@/Components/Nav/StyleGuideNav'
import { colors } from '@/styles/design-system-colors'

const ColorsPage = () => {
    return (
        <Fragment>
            <LandingLayout title='Colors - Style Guide' description='Color system and palette'>
                <StyleGuideNav>
                    <div className='pb-16'>
                    
                    {/* Brand Colors - NEW */}
                    <section className='py-12 bg-gradient-to-br from-blue-50 to-teal-50'>
                        <Container>
                            <h2 className='font-bold text__48 mb-4'>Brand Colors</h2>
                            <p className='text__18 text-gray-600 mb-8'>Quick-access brand colors with simple class names for easy implementation.</p>
                            
                            <Row className='gap-y-6'>
                                {/* Primary */}
                                <Col md={6} lg={4}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full'>
                                        <div className='w-full h-32 rounded-lg mb-4 shadow-md flex items-center justify-center' style={{ backgroundColor: colors.brand.primary }}>
                                            <span className='text-white font-bold text__24'>Primary</span>
                                        </div>
                                        <h4 className='font-semibold text__20 mb-2'>Primary Blue</h4>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded block mb-3'>{colors.brand.primary}</code>
                                        <div className='space-y-2'>
                                            <p className='text-xs text-gray-600'>Tailwind: <code className='bg-blue-100 px-2 py-0.5 rounded'>bg-primary</code></p>
                                            <p className='text-xs text-gray-600'>Use: Main buttons, primary actions</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* Primary Dark */}
                                <Col md={6} lg={4}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full'>
                                        <div className='w-full h-32 rounded-lg mb-4 shadow-md flex items-center justify-center' style={{ backgroundColor: colors.brand.primaryDark }}>
                                            <span className='text-white font-bold text__24'>Hover</span>
                                        </div>
                                        <h4 className='font-semibold text__20 mb-2'>Primary Dark</h4>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded block mb-3'>{colors.brand.primaryDark}</code>
                                        <div className='space-y-2'>
                                            <p className='text-xs text-gray-600'>Tailwind: <code className='bg-blue-100 px-2 py-0.5 rounded'>hover:bg-primary-dark</code></p>
                                            <p className='text-xs text-gray-600'>Use: Button hover states</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* Secondary */}
                                <Col md={6} lg={4}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full'>
                                        <div className='w-full h-32 rounded-lg mb-4 shadow-md flex items-center justify-center' style={{ backgroundColor: colors.brand.secondary }}>
                                            <span className='text-white font-bold text__24'>Secondary</span>
                                        </div>
                                        <h4 className='font-semibold text__20 mb-2'>Secondary Teal</h4>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded block mb-3'>{colors.brand.secondary}</code>
                                        <div className='space-y-2'>
                                            <p className='text-xs text-gray-600'>Tailwind: <code className='bg-teal-100 px-2 py-0.5 rounded'>bg-secondary</code></p>
                                            <p className='text-xs text-gray-600'>Use: Secondary actions, accents</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* Accent */}
                                <Col md={6} lg={4}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full'>
                                        <div className='w-full h-32 rounded-lg mb-4 shadow-md flex items-center justify-center' style={{ backgroundColor: colors.brand.accent }}>
                                            <span className='text-white font-bold text__24'>Accent</span>
                                        </div>
                                        <h4 className='font-semibold text__20 mb-2'>Accent Purple</h4>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded block mb-3'>{colors.brand.accent}</code>
                                        <div className='space-y-2'>
                                            <p className='text-xs text-gray-600'>Tailwind: <code className='bg-purple-100 px-2 py-0.5 rounded'>bg-accent</code></p>
                                            <p className='text-xs text-gray-600'>Use: Premium features, highlights</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* Warning */}
                                <Col md={6} lg={4}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full'>
                                        <div className='w-full h-32 rounded-lg mb-4 shadow-md flex items-center justify-center' style={{ backgroundColor: colors.brand.warning }}>
                                            <span className='text-white font-bold text__24'>Warning</span>
                                        </div>
                                        <h4 className='font-semibold text__20 mb-2'>Warning Orange</h4>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded block mb-3'>{colors.brand.warning}</code>
                                        <div className='space-y-2'>
                                            <p className='text-xs text-gray-600'>Tailwind: <code className='bg-orange-100 px-2 py-0.5 rounded'>bg-warning</code></p>
                                            <p className='text-xs text-gray-600'>Use: Alerts, important notices</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* Light */}
                                <Col md={6} lg={4}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full'>
                                        <div className='w-full h-32 rounded-lg mb-4 shadow-md border border-gray-200 flex items-center justify-center' style={{ backgroundColor: colors.brand.light }}>
                                            <span className='text-gray-900 font-bold text__24'>Light</span>
                                        </div>
                                        <h4 className='font-semibold text__20 mb-2'>Light Background</h4>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded block mb-3'>{colors.brand.light}</code>
                                        <div className='space-y-2'>
                                            <p className='text-xs text-gray-600'>Tailwind: <code className='bg-gray-100 px-2 py-0.5 rounded'>bg-light</code></p>
                                            <p className='text-xs text-gray-600'>Use: Section backgrounds</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            {/* Usage Examples */}
                            <div className='mt-12 bg-white rounded-xl p-8 shadow-lg'>
                                <h3 className='font-semibold text__32 mb-6'>Usage Examples</h3>
                                <div className='space-y-4'>
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <p className='text-sm font-semibold mb-2'>Primary Button:</p>
                                        <code className='text-sm'>className="bg-primary hover:bg-primary-dark text-white"</code>
                                    </div>
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <p className='text-sm font-semibold mb-2'>Secondary Button:</p>
                                        <code className='text-sm'>className="bg-secondary hover:bg-secondary-dark text-white"</code>
                                    </div>
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <p className='text-sm font-semibold mb-2'>Light Section:</p>
                                        <code className='text-sm'>className="bg-light"</code>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* Primary Color - Blue */}
                    <section className='py-12'>
                        <Container>
                            <h2 className='font-bold text__48 mb-4'>Primary Color - Blue</h2>
                            <p className='text__18 text-gray-600 mb-8'>Main brand color from logo. Use for primary actions, links, and key UI elements.</p>
                            
                            <div className='flex flex-wrap gap-2 mb-12'>
                                {Object.entries(colors.primary).map(([shade, color]) => (
                                    <div key={shade} className='flex-1 min-w-[100px]'>
                                        <div className='h-24 rounded-lg mb-2 shadow-md' style={{ backgroundColor: color }}></div>
                                        <p className='text-sm font-semibold mb-1'>{shade}</p>
                                        <code className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded'>{color}</code>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </section>

                    {/* Secondary Color - Teal */}
                    <section className='py-12 bg-gray-50'>
                        <Container>
                            <h2 className='font-bold text__48 mb-4'>Secondary Color - Teal</h2>
                            <p className='text__18 text-gray-600 mb-8'>Supporting brand color. Use for secondary actions and accents.</p>
                            
                            <div className='flex flex-wrap gap-2 mb-12'>
                                {Object.entries(colors.secondary).map(([shade, color]) => (
                                    <div key={shade} className='flex-1 min-w-[100px]'>
                                        <div className='h-24 rounded-lg mb-2 shadow-md' style={{ backgroundColor: color }}></div>
                                        <p className='text-sm font-semibold mb-1'>{shade}</p>
                                        <code className='text-xs text-gray-600 bg-white px-2 py-1 rounded'>{color}</code>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </section>

                    {/* Accent Colors */}
                    <section className='py-12'>
                        <Container>
                            <h2 className='font-bold text__48 mb-8'>Accent Colors</h2>
                            
                            <Row className='gap-y-12'>
                                <Col md={6}>
                                    <h3 className='font-semibold text__32 mb-4'>Purple</h3>
                                    <p className='text__16 text-gray-600 mb-6'>Use for premium features and special highlights.</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {Object.entries(colors.accent1).map(([shade, color]) => (
                                            <div key={shade} className='flex-1 min-w-[80px]'>
                                                <div className='h-20 rounded-lg mb-2 shadow-md' style={{ backgroundColor: color }}></div>
                                                <p className='text-xs font-semibold mb-1'>{shade}</p>
                                                <code className='text-xs text-gray-600 bg-gray-100 px-1 py-0.5 rounded block'>{color}</code>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <h3 className='font-semibold text__32 mb-4'>Orange</h3>
                                    <p className='text__16 text-gray-600 mb-6'>Use for energy, growth, and call-to-action elements.</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {Object.entries(colors.accent2).map(([shade, color]) => (
                                            <div key={shade} className='flex-1 min-w-[80px]'>
                                                <div className='h-20 rounded-lg mb-2 shadow-md' style={{ backgroundColor: color }}></div>
                                                <p className='text-xs font-semibold mb-1'>{shade}</p>
                                                <code className='text-xs text-gray-600 bg-gray-100 px-1 py-0.5 rounded block'>{color}</code>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Grayscale */}
                    <section className='py-12 bg-gray-50'>
                        <Container>
                            <h2 className='font-bold text__48 mb-4'>Grayscale - Neutral Colors</h2>
                            <p className='text__18 text-gray-600 mb-8'>Use for text, borders, backgrounds, and UI elements.</p>
                            
                            <div className='flex flex-wrap gap-2'>
                                {Object.entries(colors.gray).map(([shade, color]) => (
                                    <div key={shade} className='flex-1 min-w-[100px]'>
                                        <div className='h-24 rounded-lg mb-2 border shadow-md' style={{ backgroundColor: color }}></div>
                                        <p className='text-sm font-semibold mb-1'>{shade}</p>
                                        <code className='text-xs text-gray-600 bg-white px-2 py-1 rounded'>{color}</code>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </section>

                    {/* Semantic Colors */}
                    <section className='py-12'>
                        <Container>
                            <h2 className='font-bold text__48 mb-4'>Semantic Colors</h2>
                            <p className='text__18 text-gray-600 mb-8'>Colors for UI states and feedback messages.</p>
                            
                            <Row className='gap-y-6'>
                                <Col md={6} lg={3}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                        <div className='w-16 h-16 rounded-full mb-4 shadow-md' style={{ backgroundColor: colors.success[500] }}></div>
                                        <h4 className='font-semibold text__20 mb-2'>Success</h4>
                                        <p className='text-sm text-gray-600 mb-3'>Positive actions, confirmations</p>
                                        <code className='text-xs bg-gray-100 px-2 py-1 rounded block'>{colors.success[500]}</code>
                                    </div>
                                </Col>
                                <Col md={6} lg={3}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                        <div className='w-16 h-16 rounded-full mb-4 shadow-md' style={{ backgroundColor: colors.warning[500] }}></div>
                                        <h4 className='font-semibold text__20 mb-2'>Warning</h4>
                                        <p className='text-sm text-gray-600 mb-3'>Caution, important notices</p>
                                        <code className='text-xs bg-gray-100 px-2 py-1 rounded block'>{colors.warning[500]}</code>
                                    </div>
                                </Col>
                                <Col md={6} lg={3}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                        <div className='w-16 h-16 rounded-full mb-4 shadow-md' style={{ backgroundColor: colors.error[500] }}></div>
                                        <h4 className='font-semibold text__20 mb-2'>Error</h4>
                                        <p className='text-sm text-gray-600 mb-3'>Errors, destructive actions</p>
                                        <code className='text-xs bg-gray-100 px-2 py-1 rounded block'>{colors.error[500]}</code>
                                    </div>
                                </Col>
                                <Col md={6} lg={3}>
                                    <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                        <div className='w-16 h-16 rounded-full mb-4 shadow-md' style={{ backgroundColor: colors.info[500] }}></div>
                                        <h4 className='font-semibold text__20 mb-2'>Info</h4>
                                        <p className='text-sm text-gray-600 mb-3'>Information, neutral messages</p>
                                        <code className='text-xs bg-gray-100 px-2 py-1 rounded block'>{colors.info[500]}</code>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Text Colors */}
                    <section className='py-12 bg-gray-50'>
                        <Container>
                            <h2 className='font-bold text__48 mb-4'>Text Colors</h2>
                            <p className='text__18 text-gray-600 mb-8'>Standard text color hierarchy.</p>
                            
                            <div className='bg-white rounded-xl p-8 shadow-lg'>
                                <div className='space-y-4'>
                                    <div className='flex items-center justify-between border-b pb-4'>
                                        <p className='text__18 font-semibold' style={{ color: colors.text.primary }}>Primary Text</p>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded'>{colors.text.primary}</code>
                                    </div>
                                    <div className='flex items-center justify-between border-b pb-4'>
                                        <p className='text__18' style={{ color: colors.text.secondary }}>Secondary Text</p>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded'>{colors.text.secondary}</code>
                                    </div>
                                    <div className='flex items-center justify-between border-b pb-4'>
                                        <p className='text__18' style={{ color: colors.text.tertiary }}>Tertiary Text</p>
                                        <code className='text-sm bg-gray-100 px-3 py-1 rounded'>{colors.text.tertiary}</code>
                                    </div>
                                    <div className='flex items-center justify-between bg-gray-900 p-4 rounded-lg'>
                                        <p className='text__18' style={{ color: colors.text.inverse }}>Inverse Text (on dark)</p>
                                        <code className='text-sm bg-gray-800 text-white px-3 py-1 rounded'>{colors.text.inverse}</code>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* Background Colors */}
                    <section className='py-12'>
                        <Container>
                            <h2 className='font-bold text__48 mb-4'>Background Colors</h2>
                            <p className='text__18 text-gray-600 mb-8'>Background colors for sections, cards, and page layouts.</p>
                            
                            <Row className='gap-y-6'>
                                {/* Primary Backgrounds */}
                                <Col md={6}>
                                    <h3 className='font-semibold text__24 mb-4'>Primary Backgrounds</h3>
                                    <div className='space-y-4'>
                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.background.primary }}>
                                                <span className='text-gray-900 font-medium'>Primary Background</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Primary (White)</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.background.primary}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Main page background</p>
                                            </div>
                                        </div>

                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.background.secondary }}>
                                                <span className='text-gray-900 font-medium'>Secondary Background</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Secondary</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.background.secondary}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Alternate sections</p>
                                            </div>
                                        </div>

                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.background.tertiary }}>
                                                <span className='text-gray-900 font-medium'>Tertiary Background</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Tertiary</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.background.tertiary}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Cards, panels</p>
                                            </div>
                                        </div>

                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.background.dark }}>
                                                <span className='text-white font-medium'>Dark Background</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Dark</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.background.dark}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Dark mode, footers</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                {/* Brand Tinted Backgrounds */}
                                <Col md={6}>
                                    <h3 className='font-semibold text__24 mb-4'>Brand Tinted Backgrounds</h3>
                                    <div className='space-y-4'>
                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.primary[50] }}>
                                                <span className='text-gray-900 font-medium'>Blue Tint</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Primary Blue 50</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.primary[50]}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Subtle blue sections</p>
                                            </div>
                                        </div>

                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.secondary[50] }}>
                                                <span className='text-gray-900 font-medium'>Teal Tint</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Secondary Teal 50</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.secondary[50]}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Subtle teal sections</p>
                                            </div>
                                        </div>

                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.accent1[50] }}>
                                                <span className='text-gray-900 font-medium'>Purple Tint</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Accent Purple 50</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.accent1[50]}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Subtle purple sections</p>
                                            </div>
                                        </div>

                                        <div className='border border-gray-200 rounded-lg overflow-hidden'>
                                            <div className='h-24 flex items-center justify-center' style={{ backgroundColor: colors.accent2[50] }}>
                                                <span className='text-gray-900 font-medium'>Orange Tint</span>
                                            </div>
                                            <div className='p-4 bg-white'>
                                                <p className='text-sm font-semibold mb-1'>Accent Orange 50</p>
                                                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>{colors.accent2[50]}</code>
                                                <p className='text-xs text-gray-600 mt-2'>Subtle orange sections</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    </div>
                </StyleGuideNav>
            </LandingLayout>
        </Fragment>
    )
}

export default ColorsPage
