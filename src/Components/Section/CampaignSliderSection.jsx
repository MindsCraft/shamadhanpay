import React, { useRef, useState } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import useHostname from '@/Components/Provider/HostnameProvider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Navigation Arrow Component
const NavigationArrow = ({ direction, onClick, originalUrl }) => {
    const isNext = direction === 'next'
    const iconPath = isNext ? 'ang-right.svg' : 'ang-left.svg'

    return (
        <button
            onClick={onClick}
            className="w-10 h-10 rounded-full bg-bg-grey-2 hover:bg-grey-3 flex items-center justify-center transition-colors"
            aria-label={`${isNext ? 'Next' : 'Previous'} campaign`}
        >
            <img
                src={`${originalUrl}/content/icons/${iconPath}`}
                alt=""
                className="w-6 h-6"
            />
        </button>
    )
}

// Campaign Card Component
const CampaignCard = ({ emoji, tagline, description, audience, cta, image, originalUrl }) => {
    return (
        <div className="bg-bg-grey-1 rounded-[12px] overflow-hidden flex campaign-card" style={{}}>
            {/* Content Section */}
            <div className="p-6 lg:px-12 my-auto w-[40%]">
                <h3 className="mb-4 text-black">{tagline}</h3>
                <p className="leading-relaxed text__18">{description}</p>
                {/*<div className="">*/}
                {/*    <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">*/}
                {/*        For: {audience}*/}
                {/*    </span>*/}
                {/*</div>*/}


            </div>
            {/* Image Section */}
            <div className="relative overflow-hidden p-2 w-[60%]">
                <img
                    src={`${originalUrl}/content/campaigns/${image}`}
                    alt={tagline}
                    className="w-full h-[600px] object-cover  rounded-[8px] "
                />
                {/*<div className="absolute top-4 left-4 text-5xl">{emoji}</div>*/}
                <button
                    className="absolute bottom-6 right-6 w-10 h-10 bg-bg-dark hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label={`Learn more about ${tagline}`}
                >
                    <img
                        src={`${originalUrl}/content/icons/arrow-link.svg`}
                        alt=""
                        className="w-5 h-5"
                    />
                </button>
            </div>
        </div>

        //  <div className="bg-bg-grey-1 rounded-[12px] overflow-hidden flex position-relative" style={{boxShadow:'0 13px 27px -5px rgba(50, 50, 93, 0.02), 0 8px 16px -8px rgba(0, 0, 0, 0.1)'}}>
        //     <div className="relative overflow-hidden p-2 w-full">
        //         <img
        //           src={`${originalUrl}/content/campaigns/${image}`}
        //           alt={tagline}
        //           className="w-full h-full object-cover  rounded-[8px] "
        //         />
        //     </div>
        //      <div className="campaign-overlay">
        //          <h3 className="mb-2 text-black">{tagline}</h3>
        //          <p className="leading-relaxed text-black">{description}</p>
        //          <button className="absolute bottom-6 right-6 w-10 h-10 bg-bg-dark hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
        //                  aria-label={`Learn more about ${tagline}`}
        //          ><img
        //            src={`${originalUrl}/content/icons/arrow-link.svg`}
        //            alt=""
        //            className="w-5 h-5"
        //          />
        //          </button>
        //      </div>
        // </div>
    )
}

const CampaignSliderSection = () => {
    const originalUrl = useHostname()
    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(1)

    // Campaign data
    const campaigns = [
        {
            emoji: '🥇',
            tagline: 'Your first payment earns you ৳50 — instantly.',
            description: 'New users get ৳50 cashback on their first successful transaction using Shamadhan Pay.',
            audience: 'First-time app users',
            cta: 'Download now and get rewarded.',
            image: 'campaign1.jpeg'
        },
        {
            emoji: '👥',
            tagline: 'Invite friends. Earn ৳25 each.',
            description: 'Share your referral link and earn ৳25 for every friend who signs up and makes a payment.',
            audience: 'Socially active users, students, gig workers',
            cta: 'Start referring today.',
            image: 'campaign2.jpeg'
        },
        {
            emoji: '🛍️',
            tagline: 'Scan to pay — and save.',
            description: 'Pay at partner shops using QR and unlock exclusive discounts or cashback.',
            audience: 'Urban shoppers, small business customers',
            cta: 'Find a QR merchant near you.',
            image: 'campaign3.jpeg'
        },
        {
            emoji: '🎁',
            tagline: 'Celebrate with cashback this Eid.',
            description: 'Special cashback and rewards during Eid, Puja, and other festivals.',
            audience: 'Seasonal shoppers, families',
            cta: 'Spend smart this festive season.',
            image: 'campaign4.jpeg'
        },
        {
            emoji: '📱',
            tagline: 'Top up your phone. Get rewarded.',
            description: 'Recharge any mobile number and earn loyalty points or cashback.',
            audience: 'All mobile users',
            cta: 'Recharge now, earn instantly.',
            image: 'campaign3.jpeg'
        },
        {
            emoji: '🧾',
            tagline: 'Pay bills. Get cashback.',
            description: 'Pay electricity, gas, or water bills through Shamadhan Pay and receive cashback or discounts.',
            audience: 'Homeowners, renters, salaried professionals',
            cta: 'Make your bills work for you.',
            image: 'campaign1.jpeg'
        },
        {
            emoji: '🏪',
            tagline: 'Grow your business with Shamadhan Pay.',
            description: 'Merchants who join early get free QR setup and promotional support.',
            audience: 'Small businesses, shop owners',
            cta: 'Become a partner today.',
            image: 'campaign2.jpeg'
        },
        {
            emoji: '🎓',
            tagline: 'Smart payments for smart students.',
            description: 'Students get exclusive offers on recharges, food payments, and transport.',
            audience: 'University and college students',
            cta: 'Sign up with your student ID.',
            image: 'campaign3.jpeg'
        },
        {
            emoji: '🧠',
            tagline: 'Learn. Earn. Grow.',
            description: 'Complete short financial literacy quizzes and earn wallet credits.',
            audience: 'Young adults, first-time digital wallet users',
            cta: 'Take the challenge now.',
            image: 'campaign4.jpeg'
        },
        {
            emoji: '🌍',
            tagline: 'Celebrating everyday changemakers.',
            description: 'Feature local users or merchants who use Shamadhan Pay to improve their lives or communities.',
            audience: 'General public, CSR-focused audience',
            cta: 'Nominate a local hero.',
            image: 'campaign1.jpeg'
        }
    ]

    return (
        <section className='py-[4rem] lg:py-[8rem] campaign'>
            <Container>
                <Row className='justify-between mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]'>
                    <Col md={6} className='lg:my-auto'>
                        <h2 className='mb-0'>Get More with Shamadhan Pay</h2>
                    </Col>
                    <Col md={5} className='flex justify-between flex-column align-items-end'>
                        <p className='mb-4'>
                            From cashback to referral rewards — we’re launching with benefits just for you.
                        </p>
                        <a href="/features" className="flex align-items-end lg:flex btn-link text-brand-primary mt-3">
                            <span>All Campaigns</span>
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
                    </Col>
                </Row>
            </Container>

            {/* Swiper Slider */}
            <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                modules={[Navigation, Keyboard]}
                spaceBetween={24}
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
                        spaceBetween: 16,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                    1024: {
                        spaceBetween: 24,
                    },
                }}
                style={{
                    paddingLeft: typeof window !== 'undefined' && window.innerWidth < 768 ? '1rem' : 'max(1rem, calc((100vw - 1296px) / 2))',
                    paddingRight: '1rem'
                }}
            >
                {campaigns.map((campaign, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto',overflow: 'visible'}}>
                        <div style={{ width: 'calc(100vw - 2rem)', maxWidth: '1296px', overflow: 'visible' }}>
                            <CampaignCard
                                emoji={campaign.emoji}
                                tagline={campaign.tagline}
                                description={campaign.description}
                                audience={campaign.audience}
                                cta={campaign.cta}
                                image={campaign.image}
                                originalUrl={originalUrl}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Container>
                {/* Mobile Slide Counter & Desktop Navigation */}
                <div className="flex items-center justify-between mt-6 lg:mt-8">
                    {/* Slide Counter - Mobile Only */}
                    <div className="flex items-center gap-2">
                        <span className="text-brand-primary font-semibold text-lg">{currentSlide}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">{campaigns.length}</span>
                    </div>

                    {/* Navigation Arrows - Desktop Only */}
                    <div className="hidden lg:flex gap-3 ml-auto" role="group" aria-label="Campaign navigation">
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
        </section>
    )
}

export default CampaignSliderSection
