import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import useHostname from '@/Components/Provider/HostnameProvider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Constants
// Card min height is now responsive in the component

// Navigation Arrow Component
const NavigationArrow = ({ direction, onClick, originalUrl }) => {
    const isNext = direction === 'next'
    const iconPath = isNext ? 'ang-right.svg' : 'ang-left.svg'

    return (
        <button
            onClick={onClick}
            className="w-10 h-10 rounded-full bg-bg-grey-2 hover:bg-grey-3 flex items-center justify-center transition-colors"
            aria-label={`${isNext ? 'Next' : 'Previous'} slide`}
        >
            <img
                src={`${originalUrl}/content/icons/${iconPath}`}
                alt=""
                className="w-6 h-6"
            />
        </button>
    )
}

// Feature Card Component
const FeatureCard = ({ category, title, description, image, imageAlt, originalUrl }) => {
    return (
        <div className="bg-bg-grey-1 w-[90vw] xs:w-[400px] sm:w-[450px] md:w-[480px] lg:w-[520px] bg-grey-1 rounded-[12px] overflow-hidden">
            <div className="p-4 xs:p-6 sm:p-8 pt-6 xs:pt-8 sm:pt-10 pb-4 xs:pb-5 sm:pb-6">
                <h6 className='mb-3'>{category}</h6>
                <h4 className='mb-2 text-brand-primary'>
                    {title}
                </h4>
                <p className='text-sm xs:text-base leading-relaxed mb-4 xs:mb-6'>
                    {description}
                </p>
            </div>
            <div className="relative px-4 xs:px-6 sm:px-8 pb-3 xs:pb-4">
                <div className="relative bg-white rounded-lg overflow-hidden flex items-center justify-center" style={{ minHeight: '200px' }}>
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                    />
                    <button
                        className="absolute bottom-4 right-4 w-10 h-10 bg-bg-dark hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
                        aria-label={`Learn more about ${category}`}
                    >
                        <img
                            src={`${originalUrl}/content/icons/arrow-link.svg`}
                            alt=""
                            className="w-5 h-5"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

const FeatureCardsSection = () => {
    const originalUrl = useHostname()
    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = React.useState(1)

    // Feature data
    const features = [
        {
            id: 'send-money',
            category: 'Send Money',
            title: 'Transfer money in seconds.',
            description: 'Move money instantly to friends, family, or merchants — anytime, anywhere in Bangladesh.',
            image: `${originalUrl}/content/features/feature-6.jpeg`,
            imageAlt: 'Send money feature'
        },
        {
            id: 'bill-payments',
            category: 'Bill Payments',
            title: 'Pay all bills in one place.',
            description: 'Electricity, gas, water, and mobile recharges — all handled directly from your wallet.',
            image: `${originalUrl}/content/features/feature-8.jpeg`,
            imageAlt: 'Bill payments feature'
        },
        {
            id: 'qr-payments',
            category: 'QR Payments',
            title: 'Shop smarter with QR.',
            description: 'Scan and pay at shops, restaurants, and pharmacies — no cash, no hassle.',
            image: `${originalUrl}/content/features/feature-3.jpeg`,
            imageAlt: 'QR payments feature'
        },
        {
            id: 'savings',
            category: 'Savings',
            title: 'Save more, earn more.',
            description: 'Secure your money and enjoy cashback or rewards every time you spend.',
            image: `${originalUrl}/content/features/feature-7.jpeg`,
            imageAlt: 'Savings feature'
        },
        {
            id: 'security',
            category: 'Security',
            title: 'Your money, protected.',
            description: 'Backed by Grameen Telecom with bank‑level encryption and compliance.',
            image: `${originalUrl}/content/features/feature-5.jpeg`,
            imageAlt: 'Security feature'
        }
    ]

    return (
        <section className='py-0' aria-label="Features">
            <div className="w-full py-[2rem] sm:py-[3rem] lg:py-[8rem] bg-white relative overflow-hidden">
                <Container>
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-[2rem] sm:mb-[3rem] lg:mb-[4rem] gap-4">
                        <h2>
                            Everything You Need <br className='sm:block hidden' />
                            in One Digital Wallet
                        </h2>
                        {/* See All Features Link */}
                        <a href="/features" className="flex align-items-end lg:flex btn-link text-brand-primary">
                            <span>All Features</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                            >
                                <path
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </Container>

                {/* Swiper Slider */}
                <Swiper
                    onSwiper={(swiper) => { swiperRef.current = swiper }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                    modules={[Navigation, Keyboard]}
                    spaceBetween={16}
                    slidesPerView="auto"
                    grabCursor={true}
                    speed={800}
                    centeredSlides={false}
                    slidesOffsetAfter={typeof window !== 'undefined' ? (
                        window.innerWidth < 768
                            ? 16
                            : Math.max(16, (window.innerWidth - 1296) / 2)
                    ) : 16}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        320: {
                            spaceBetween: 12,
                        },
                        640: {
                            spaceBetween: 16,
                        },
                        1024: {
                            spaceBetween: 24,
                        },
                    }}
                    style={{
                        paddingLeft: typeof window !== 'undefined' && window.innerWidth < 768 ? '1rem' : 'max(1rem, calc((100vw - 1296px) / 2))',
                        paddingRight: '0'
                    }}
                >
                    {features.map((feature) => (
                        <SwiperSlide key={feature.id} style={{ width: 'auto' }}>
                            <FeatureCard
                                category={feature.category}
                                title={feature.title}
                                description={feature.description}
                                image={feature.image}
                                imageAlt={feature.imageAlt}
                                originalUrl={originalUrl}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Container>
                    {/* Mobile Slide Counter & Desktop Navigation */}
                    <div className="flex items-center justify-between mt-6 lg:mt-8">
                        {/* Slide Counter - Mobile Only */}
                        <div className="lg:hidden flex items-center gap-2">
                            <span className="text-brand-primary font-semibold text-lg">{currentSlide}</span>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-600">{features.length}</span>
                        </div>

                        {/* Navigation Arrows - Desktop Only */}
                        <div className="flex gap-3 ml-auto" role="group" aria-label="Slider navigation">
                            <NavigationArrow
                                direction="prev"
                                onClick={() => swiperRef.current?.slidePrev()}
                                originalUrl={originalUrl}
                            />
                            <NavigationArrow
                                direction="next"
                                onClick={() => swiperRef.current?.slideNext()}
                                originalUrl={originalUrl}
                            />
                        </div>
                    </div>
                </Container>

            </div>
        </section>
    )
}

export default FeatureCardsSection
