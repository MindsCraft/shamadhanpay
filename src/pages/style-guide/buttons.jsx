import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import StyleGuideNav from '@/Components/Nav/StyleGuideNav'
import { colors } from '@/styles/design-system-colors'
import DownloadIcon from '@/Components/svg/DownloadIcon'
import UserAccountIcon from '@/Components/svg/UserAccountIcon'
import GradientOscillatingButton from '@/Components/Button/GradientOscillatingButton'
import ActionBtn from '@/Components/Button/ActionBtn'

const ButtonsPage = () => {
    return (
        <Fragment>
            <LandingLayout title='Buttons - Style Guide' description='Button styles and variations'>
                <StyleGuideNav>
                    <div className='pb-16'>
                        {/* ActionBtn Component (Animated) */}
                        <section className='py-12 bg-gradient-to-br from-blue-50 to-purple-50'>
                            <Container>
                                <h2 className='mb-4'>ActionBtn Component (Animated)</h2>
                                <p className='text-gray-600 mb-8'>Animated button with arrow icon and hover effects.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <h3 className='font-semibold text__24 mb-4'>Types & Sizes</h3>
                                    <div className='flex flex-wrap gap-4 mb-6'>
                                        <ActionBtn title="Get Started" type={1} size="normal" />
                                        <ActionBtn title="Learn More" type={2} size="normal" />
                                        <ActionBtn title="Small Button" type={1} size="small" />
                                    </div>
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <code className='text-sm'>
                                            {`<ActionBtn title="Get Started" type={1} size="normal" />
<ActionBtn title="Learn More" type={2} size="normal" />
<ActionBtn title="Small Button" type={1} size="small" />`}
                                        </code>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Primary Buttons */}
                        <section className='py-12'>
                            <Container>
                                <h2 className='mb-4'>Primary Buttons</h2>
                                <p className='text-gray-600 mb-8'>Main call-to-action buttons using primary brand colors.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='flex flex-wrap items-center gap-4 mb-8'>
                                        <button className='px-6 py-3 rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            Primary Button
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-[#44AA99] text-white font-semibold hover:bg-[#3A9688] transition-all'>
                                            Secondary Button
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all'>
                                            Dark Button
                                        </button>
                                    </div>
                                    
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <code className='text-sm'>
                                            {`<button className='px-6 py-3 rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
    Primary Button
</button>`}
                                        </code>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Secondary Buttons */}
                        <section className='py-12 bg-gray-50'>
                            <Container>
                                <h2 className='mb-4'>Secondary Buttons</h2>
                                <p className='text-gray-600 mb-8'>Outlined and ghost buttons for secondary actions.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='flex flex-wrap items-center gap-4 mb-8'>
                                        <button className='px-6 py-3 rounded-md border-2 border-[#6373AD] text-[#6373AD] font-semibold hover:bg-[#6373AD] hover:text-white transition-all'>
                                            Outlined Primary
                                        </button>
                                        <button className='px-6 py-3 rounded-md border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all'>
                                            Outlined Gray
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all'>
                                            Ghost Button
                                        </button>
                                    </div>
                                    
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <code className='text-sm'>
                                            {`<button className='px-6 py-3 rounded-md border-2 border-[#6373AD] text-[#6373AD] font-semibold hover:bg-[#6373AD] hover:text-white transition-all'>
    Outlined Primary
</button>`}
                                        </code>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Button Sizes */}
                        <section className='py-12'>
                            <Container>
                                <h2 className='mb-4'>Button Sizes</h2>
                                <p className='text-gray-600 mb-8'>Different button sizes for various use cases.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='flex flex-wrap items-center gap-4'>
                                        <button className='px-3 py-1.5 text-sm rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            Small
                                        </button>
                                        <button className='px-4 py-2 text-base rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            Medium
                                        </button>
                                        <button className='px-6 py-3 text-lg rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            Large
                                        </button>
                                        <button className='px-8 py-4 text-xl rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            Extra Large
                                        </button>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Icon Buttons */}
                        <section className='py-12 bg-gray-50'>
                            <Container>
                                <h2 className='mb-4'>Icon Buttons</h2>
                                <p className='text-gray-600 mb-8'>Buttons with icons for enhanced visual communication.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='flex flex-wrap items-center gap-4 mb-8'>
                                        <button className='inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            <DownloadIcon width={20} height={20} fill="white" />
                                            <span>Download App</span>
                                        </button>
                                        <button className='inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all'>
                                            <UserAccountIcon width={20} height={20} fill="#374151" />
                                            <span>Create Account</span>
                                        </button>
                                        <button className='inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#44AA99] text-white font-semibold hover:bg-[#3A9688] transition-all'>
                                            <span>Get Started</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <code className='text-sm'>
                                            {`<button className='inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#6373AD] text-white font-semibold'>
    <DownloadIcon width={20} height={20} fill="white" />
    <span>Download App</span>
</button>`}
                                        </code>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Semantic Buttons */}
                        <section className='py-12'>
                            <Container>
                                <h2 className='mb-4'>Semantic Buttons</h2>
                                <p className='text-gray-600 mb-8'>Buttons for different states and actions.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='flex flex-wrap items-center gap-4'>
                                        <button className='px-6 py-3 rounded-md bg-[#22C55E] text-white font-semibold hover:bg-[#16A34A] transition-all'>
                                            Success
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-[#F59E0B] text-white font-semibold hover:bg-[#D97706] transition-all'>
                                            Warning
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-[#EF4444] text-white font-semibold hover:bg-[#DC2626] transition-all'>
                                            Error
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-all'>
                                            Info
                                        </button>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Button States */}
                        <section className='py-12 bg-gray-50'>
                            <Container>
                                <h2 className='mb-4'>Button States</h2>
                                <p className='text-gray-600 mb-8'>Different states for user interaction feedback.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='flex flex-wrap items-center gap-4'>
                                        <button className='px-6 py-3 rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            Normal
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-[#556299] text-white font-semibold'>
                                            Hover
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-[#485285] text-white font-semibold'>
                                            Active
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-gray-300 text-gray-500 font-semibold cursor-not-allowed' disabled>
                                            Disabled
                                        </button>
                                        <button className='px-6 py-3 rounded-md bg-[#6373AD] text-white font-semibold flex items-center gap-2'>
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Loading
                                        </button>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Special Buttons */}
                        <section className='py-12'>
                            <Container>
                                <h2 className='mb-4'>Special Buttons</h2>
                                <p className='text-gray-600 mb-8'>Unique button styles for special use cases.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='flex flex-wrap items-center gap-4'>
                                        {/* Gradient Button */}
                                        <button className='px-6 py-3 rounded-md text-white font-semibold transition-all' style={{
                                            background: 'linear-gradient(135deg, #44AA99, #6373AD)',
                                            boxShadow: '0 4px 16px 0 rgba(99, 115, 173, 0.25)'
                                        }}>
                                            Gradient Button
                                        </button>
                                        
                                        {/* Gradient Border Button */}
                                        <div className='inline-block rounded-md p-[2px]' style={{
                                            background: 'linear-gradient(135deg, #44AA99, #6373AD, #A1609D, #EA9E51)'
                                        }}>
                                            <button className='px-6 py-3 rounded-[6px] bg-white text-gray-800 font-semibold hover:bg-gray-50 transition-all'>
                                                Gradient Border
                                            </button>
                                        </div>
                                        
                                        {/* Oscillating Gradient Button */}
                                        <GradientOscillatingButton text="Animated Gradient" />
                                    </div>
                                </div>
                            </Container>
                        </section>

                        {/* Full Width Buttons */}
                        <section className='py-12 bg-gray-50'>
                            <Container>
                                <h2 className='mb-4'>Full Width Buttons</h2>
                                <p className='text-gray-600 mb-8'>Buttons that span the full width of their container.</p>
                                
                                <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                                    <div className='space-y-4 max-w-md'>
                                        <button className='w-full px-6 py-3 rounded-md bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                            Full Width Primary
                                        </button>
                                        <button className='w-full px-6 py-3 rounded-md border-2 border-[#6373AD] text-[#6373AD] font-semibold hover:bg-[#6373AD] hover:text-white transition-all'>
                                            Full Width Outlined
                                        </button>
                                    </div>
                                </div>
                            </Container>
                        </section>

                    </div>
                </StyleGuideNav>
            </LandingLayout>
        </Fragment>
    )
}

export default ButtonsPage
