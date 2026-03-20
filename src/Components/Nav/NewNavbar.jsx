import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import useHostname from '../Provider/HostnameProvider';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import DownloadIcon from '../svg/DownloadIcon';
import UserAccountIcon from '../svg/UserAccountIcon';

const NewNavbar = () => {
    const originalUrl = useHostname();
    const router = useRouter();

    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [ActiveMenu, setActiveMenu] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Stop scrolling when mobile menu is open
    useEffect(() => {
        if (ToogleMenuResponsive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [ToogleMenuResponsive]);

    const [activeFeatureTab, setActiveFeatureTab] = useState("send-money")
    const [selectedLanguage, setSelectedLanguage] = useState("EN")
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
    const timeoutRef = React.useRef(null);

    const languages = [
        { code: "EN", name: "English" },
        { code: "BN", name: "বাংলা" }
    ]

    const handleLanguageChange = (code) => {
        setSelectedLanguage(code)
        setShowLanguageDropdown(false)
    }

    const HandleChaneMenu = (e) => {
        if (ActiveMenu == e) {
            setActiveMenu("");
        } else {
            setActiveMenu(e)
        }
    }

    const handleMouseEnter = (menu) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveMenu(menu);
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu("");
        }, 150);
    }

    return (
        <Fragment>
            {/* Main Navbar */}
            <div className={`fixed w-full z-[99] top-0 transition-all duration-300 ${scrolled ? 'glass-header py-0' : 'bg-transparent py-3'}`}>
                <Container>
                    <div className="flex w-full items-center justify-between py-2.5">
                        {/* Left Side - Logo and Navigation Links */}
                        <div className="flex items-center gap-10">
                            <Link href="/" className='inline-block'>
                                <img src={originalUrl + "/content/spay-logo.svg"} alt="Shamadhan Pay" style={{ maxHeight: '28px' }} />
                            </Link>

                            {/* Desktop Navigation Links */}
                            <div className="hidden lg:flex items-center gap-1">
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100">
                                    <p className='font-semibold'>Offers</p>
                                </div>
                                <div 
                                    className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100"
                                    onMouseEnter={() => handleMouseEnter("features")} 
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="flex items-center gap-2">
                                        <p className='font-semibold'>Individual</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-3 ' + (ActiveMenu === "features" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                </div>
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100">
                                    <p className='font-semibold'>Business</p>
                                </div>
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100">
                                    <p className='font-semibold'>Company</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Language Dropdown, Login, Download Button */}
                        <div className="flex items-center gap-1">
                            {/* Language Dropdown - Desktop */}
                            <div className="hidden lg:block relative">
                                <button
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                    className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span className="text__14 font-semibold ">{selectedLanguage}</span>
                                    <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-3 ' + (showLanguageDropdown ? "-rotate-180" : "rotate-0")} alt="" />
                                </button>

                                {showLanguageDropdown && (
                                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className={`w-full text-left px-3 py-2 text__14 hover:bg-gray-50 transition-colors ${
                                                    selectedLanguage === lang.code ? 'font-bold' : ''
                                                }`}
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Login Link - Desktop */}
                            <Link href="/login" className='hidden lg:inline-block font-semibold transition-colors px-3 py-2'>
                                <span>Login</span>
                            </Link>

                            {/* Download App Button - Desktop */}
                            <Link href="/download" className='hidden lg:inline-flex items-center gap-2 rounded-md px-3 py-2 bg-[#6373AD] text-white text__14 font-semibold hover:bg-[#556299] transition-all' style={{ boxShadow: '0 3px 8px 0 rgba(99, 115, 173, 0.2)'}}>
                                <span>Download App</span>
                                <DownloadIcon width={18} height={18} fill="white" />
                            </Link>

                            {/* Language Switcher — Mobile (Top Bar) — Matching Desktop style */}
                            <div className="lg:hidden relative mr-1">
                                <button
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                    className="flex items-center gap-1.5 px-2 py-2 rounded-lg transition-colors hover:bg-gray-100"
                                    style={{ color: scrolled ? '#1F2937' : '#111827' }}
                                >
                                    <span className="text-[13px] font-bold">{selectedLanguage}</span>
                                    <img 
                                        src={originalUrl + "/images/Arrow Down.svg"} 
                                        className={'transition-all duration-300 w-2.5 ' + (showLanguageDropdown ? "-rotate-180" : "rotate-0")} 
                                        alt="" 
                                        style={{ filter: scrolled ? 'none' : 'brightness(0) invert(0)' }}
                                    />
                                </button>

                                {showLanguageDropdown && (
                                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-[100px] z-[120]">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className={`w-full text-left px-3 py-2 text-[13px] hover:bg-gray-50 transition-colors ${
                                                    selectedLanguage === lang.code ? 'font-bold text-black' : 'text-gray-600'
                                                }`}
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Menu Button — Premium Pill Design */}
                            <button
                                className="lg:hidden flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 group overflow-hidden"
                                onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)}
                                aria-label={ToogleMenuResponsive ? 'Close menu' : 'Open menu'}
                                aria-expanded={ToogleMenuResponsive}
                                style={{
                                    background: 'rgba(255,255,255,0.95)',
                                    backdropFilter: 'blur(12px)',
                                    borderColor: ToogleMenuResponsive ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.06)',
                                    boxShadow: ToogleMenuResponsive ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                                }}
                            >
                                {/* Staggered morphing icon */}
                                <div className="relative w-5 h-5 flex flex-col items-center justify-center gap-[6px]">
                                    <span style={{
                                        display: 'block',
                                        width: '100%',
                                        height: '2px',
                                        borderRadius: '2px',
                                        background: '#111827',
                                        transformOrigin: 'center',
                                        transform: ToogleMenuResponsive ? 'translateY(4px) rotate(45deg)' : 'none',
                                        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                                    }} />
                                    <span style={{
                                        display: 'block',
                                        width: ToogleMenuResponsive ? '100%' : '70%',
                                        height: '2px',
                                        borderRadius: '2px',
                                        background: '#111827',
                                        alignSelf: 'flex-start',
                                        transformOrigin: 'center',
                                        transform: ToogleMenuResponsive ? 'translateY(-4px) rotate(-45deg)' : 'none',
                                        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                                    }} />
                                </div>
                                {/* Label text */}
                                <span 
                                    className="text-[13px] font-bold tracking-[0.05em] uppercase transition-all duration-300"
                                    style={{
                                        color: '#111827',
                                        width: ToogleMenuResponsive ? '44px' : '40px',
                                    }}
                                >
                                    {ToogleMenuResponsive ? 'Close' : 'Menu'}
                                </span>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu — Full-viewport Light Overlay */}
            <div
                className="lg:hidden fixed inset-0 z-[110]"
                style={{
                    pointerEvents: ToogleMenuResponsive ? 'auto' : 'none',
                    opacity: ToogleMenuResponsive ? 1 : 0,
                    transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                    background: '#ffffff',
                }}
            >
                {/* Subtle light gradient pattern */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-15%',
                    width: '420px',
                    height: '420px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />


                {/* Inner layout */}
                <div className="flex flex-col h-full px-6 pt-6 pb-10">

                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-10">
                        <Link href="/" onClick={() => setToogleMenuResponsive(false)}>
                            <img src={originalUrl + '/content/spay-logo.svg'} alt="Shamadhan Pay" style={{ maxHeight: '28px' }} />
                        </Link>
                        <button
                            onClick={() => setToogleMenuResponsive(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
                            style={{ background: 'rgba(0,0,0,0.05)' }}
                            aria-label="Close menu"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12M4 4l8 8" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Nav Links — large numbered items */}
                    <nav className="flex-1">
                        {[
                            { num: '00', label: 'Home', href: '/' },
                            { num: '01', label: 'Offers', href: '/offers' },
                            { num: '02', label: 'Individual', href: '/individual' },
                            { num: '03', label: 'Business', href: '/business' },
                            { num: '04', label: 'Company', href: '/company' },
                        ].map((item, i) => {
                            const isActive = router.asPath === item.href;
                            return (
                                <Link
                                    key={i}
                                    href={item.href}
                                    onClick={() => setToogleMenuResponsive(false)}
                                    className="group flex items-center justify-between py-4 border-b"
                                    style={{
                                        borderColor: 'rgba(0,0,0,0.05)',
                                        transform: ToogleMenuResponsive ? 'translateY(0)' : 'translateY(20px)',
                                        opacity: ToogleMenuResponsive ? 1 : 0,
                                        transition: `transform 0.4s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s, opacity 0.35s ease ${i * 0.07}s`,
                                    }}
                                >
                                    <div className="flex items-baseline gap-4 relative">
                                        <span style={{ 
                                            fontSize: '11px', 
                                            fontWeight: 700, 
                                            color: isActive ? '#111827' : 'rgba(0,0,0,0.2)', 
                                            letterSpacing: '0.1em', 
                                            lineHeight: 1 
                                        }}>
                                            {item.num}
                                        </span>
                                            <span style={{ 
                                                fontSize: '18px', 
                                                fontWeight: isActive ? 700 : 600, 
                                                color: isActive ? '#000000' : '#111827', 
                                                opacity: isActive ? 1 : 0.8,
                                                letterSpacing: '-0.01em', 
                                                lineHeight: 1.1, 
                                                fontFamily: "'Inter Tight', sans-serif" 
                                            }}>
                                                {item.label}
                                            </span>
                                        </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        style={{ 
                                            color: isActive ? '#000000' : 'rgba(0,0,0,0.1)', 
                                            transform: isActive ? 'translateX(4px)' : 'none',
                                            transition: 'color 0.2s, transform 0.2s' 
                                        }}
                                        className="group-hover:!text-black group-hover:translate-x-1"
                                    >
                                        <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* CTA buttons */}
                    <div
                        className="space-y-4 pt-4"
                        style={{
                            transform: ToogleMenuResponsive ? 'translateY(0)' : 'translateY(16px)',
                            opacity: ToogleMenuResponsive ? 1 : 0,
                            transition: 'transform 0.4s 0.32s, opacity 0.35s 0.32s',
                        }}
                    >
                        <Link
                            href="/download"
                            onClick={() => setToogleMenuResponsive(false)}
                            className="flex items-center justify-center gap-2 w-full rounded-md py-3.5 bg-[#6373AD] hover:bg-[#556299] transition-all"
                            style={{
                                boxShadow: '0 4px 16px 0 rgba(99, 115, 173, 0.25)',
                            }}
                        >
                            <span className="font-semibold text-white">Download App</span>
                            <DownloadIcon width={20} height={20} fill="white" />
                        </Link>
                        <Link
                            href="/register"
                            onClick={() => setToogleMenuResponsive(false)}
                            className="flex items-center justify-center gap-2 w-full rounded-md py-3.5 bg-white border border-gray-100 hover:bg-gray-50 transition-all font-semibold text-gray-700"
                        >
                            <span>Create Account</span>
                            <UserAccountIcon width={18} height={18} fill="#4B5563" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mega Menu - Features Dropdown */}
            <div 
                className={"fixed w-full z-[90] top-16 transition-all duration-300 lg:block hidden " + (ActiveMenu === "features" ? "opacity-100" : "opacity-0 pointer-events-none max-h-0 overflow-hidden")}
                onMouseEnter={() => {
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }} 
                onMouseLeave={handleMouseLeave}
            >
                <Container>
                    <div className="w-full shadow-lg bg-white/95 backdrop-blur-3xl rounded-bl-md rounded-br-md overflow-hidden">
                        <div className="flex">
                            {/* Left Sidebar - Tabs */}
                            <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
                                <h6 className="font-semibold mb-4">Payment Solutions</h6>
                                <div className="space-y-2">
                                    <div 
                                        onClick={() => setActiveFeatureTab("send-money")}
                                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                            activeFeatureTab === "send-money" 
                                                ? "bg-white border border-brand-primary" 
                                                : "hover:bg-white border border-transparent"
                                        }`}
                                    >
                                        <h6 className="font-semibold mb-1">Send Money</h6>
                                        <p className="text-sm text-gray-600">Transfer funds instantly and securely.</p>
                                    </div>
                                    <div 
                                        onClick={() => setActiveFeatureTab("bill-payments")}
                                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                            activeFeatureTab === "bill-payments" 
                                                ? "bg-white border border-brand-primary" 
                                                : "hover:bg-white border border-transparent"
                                        }`}
                                    >
                                        <h6 className="font-semibold mb-1">Bill Payments</h6>
                                        <p className="text-sm text-gray-600">Pay all your bills in one place.</p>
                                    </div>
                                    <div 
                                        onClick={() => setActiveFeatureTab("qr-payments")}
                                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                            activeFeatureTab === "qr-payments" 
                                                ? "bg-white border border-brand-primary" 
                                                : "hover:bg-white border border-transparent"
                                        }`}
                                    >
                                        <h6 className="font-semibold mb-1">QR Payments</h6>
                                        <p className="text-sm text-gray-600">Scan and pay at merchants.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Section - Feature Links */}
                            <div className="flex-1 p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    {activeFeatureTab === "send-money" && (
                                        <>
                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Instant Transfers</h6>
                                                    <p className="text-sm text-gray-600">Send money to anyone instantly with zero fees.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Bank Transfers</h6>
                                                    <p className="text-sm text-gray-600">Transfer to any bank account seamlessly.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">International Remittance</h6>
                                                    <p className="text-sm text-gray-600">Send money abroad with low fees.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Schedule Payments</h6>
                                                    <p className="text-sm text-gray-600">Set up recurring transfers automatically.</p>
                                                </div>
                                            </Link>
                                        </>
                                    )}

                                    {activeFeatureTab === "bill-payments" && (
                                        <>
                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Utility Bills</h6>
                                                    <p className="text-sm text-gray-600">Pay electricity, gas, and water bills easily.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Mobile Recharge</h6>
                                                    <p className="text-sm text-gray-600">Top up any mobile number instantly.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Internet Bills</h6>
                                                    <p className="text-sm text-gray-600">Pay your broadband and internet bills.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Credit Card Bills</h6>
                                                    <p className="text-sm text-gray-600">Pay credit card bills on time.</p>
                                                </div>
                                            </Link>
                                        </>
                                    )}

                                    {activeFeatureTab === "qr-payments" && (
                                        <>
                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Scan & Pay</h6>
                                                    <p className="text-sm text-gray-600">Scan QR codes at partner merchants.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Generate QR Code</h6>
                                                    <p className="text-sm text-gray-600">Create your own QR code to receive payments.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Merchant Payments</h6>
                                                    <p className="text-sm text-gray-600">Pay at shops, restaurants, and stores.</p>
                                                </div>
                                            </Link>

                                            <Link href="#" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold mb-1 group-hover:text-brand-primary transition-colors">Payment History</h6>
                                                    <p className="text-sm text-gray-600">View all your QR payment transactions.</p>
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Right Section - Highlighted Cards */}
                            <div className="w-80 p-6 bg-gray-50 border-l border-gray-200 space-y-4">
                                <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
                                    <h6 className="font-semibold mb-2">New Feature</h6>
                                    <p className="text-sm text-gray-700 mb-3">Elevate your financial productivity with smart features.</p>
                                    <Link href="#" className="text-sm font-semibold text-brand-primary hover:underline">
                                        Learn More →
                                    </Link>
                                </div>

                                <div className="p-4 rounded-lg bg-gray-900 text-white">
                                    <h6 className="font-semibold mb-2">Integrations</h6>
                                    <div className="space-y-2 mb-3">
                                        <p className="text-sm">bKash</p>
                                        <p className="text-sm">Nagad</p>
                                        <p className="text-sm">Rocket</p>
                                    </div>
                                    <Link href="#" className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors">
                                        See all integrations
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div onClick={() => {
                setActiveMenu("")
                setShowLanguageDropdown(false)
            }} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-200 lg:block hidden " + (ActiveMenu !== "" || showLanguageDropdown ? "bg-white/20 backdrop-blur-lg" : "opacity-0 pointer-events-none")}></div>
        </Fragment>
    )
}

export default NewNavbar
