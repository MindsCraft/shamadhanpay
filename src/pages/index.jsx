import React, { Fragment, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import useHostname from '@/Components/Provider/HostnameProvider'
import Link from 'next/link'
import ActionBtn from "@/Components/Button/ActionBtn"
import HeroSection from '@/Components/Section/HeroSection'
import FeatureCardsSection from "@/Components/Section/FeatureCardsSection"
import SecuritySection from '@/Components/Section/SecuritySection'
import CampaignSliderSection from '@/Components/Section/CampaignSliderSection'
import CTASection from '@/Components/Section/CTASection'
import NewsSection from '@/Components/Section/NewsSection'
import FAQSection from '@/Components/Section/FAQSection'
import HowItWorksSection from "@/Components/Section/HowItWorksSection";

const Index = () => {
    const originalUrl = useHostname()

    // State for interactive elements
    const [activeIndex, setActiveIndex] = useState(1)
    const [activeChartIndex, setActiveChartIndex] = useState(1)
    const [activePhoneIndex, setActivePhoneIndex] = useState(1)

    // Ref for feature slider
    const featureSliderRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    // Event handlers
    const handleMouseEnter = (index) => {
        setActiveIndex(index)
    }

    const handleChartMouseEnter = (index) => {
        setActiveChartIndex(index)
    }

    const handlePhoneMouseEnter = (index) => {
        setActivePhoneIndex(index)
    }

    // Feature slider navigation handlers
    const scrollFeatureSlider = (direction) => {
        if (featureSliderRef.current) {
            const scrollAmount = 450 // card width + gap
            const newScrollPosition = featureSliderRef.current.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount)
            featureSliderRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            })
        }
    }



    return (
        <Fragment>
            <LandingLayout title='Landing Page - Healify' description='Layout description'>

                <HeroSection />

                <FeatureCardsSection />

                <SecuritySection />

                <CampaignSliderSection />

                <HowItWorksSection />

                <NewsSection />

                <FAQSection />

                <CTASection type={1} />

            </LandingLayout>
        </Fragment>
    )
}

export default Index
