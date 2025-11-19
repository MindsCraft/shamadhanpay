import React, { Fragment, useState } from 'react'
import useHostname from '../Provider/HostnameProvider';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import DownloadIcon from '../svg/DownloadIcon';

const NewNavbar = () => {
    const originalUrl = useHostname();

    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
    const [ActiveMenu, setActiveMenu] = useState("")
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
            <div className="fixed w-full z-[99] top-0 bg-white/50 backdrop-blur-2xl">
                <Container>
                    <div className="flex w-full items-center justify-between py-2.5">
                        {/* Left Side - Logo and Navigation Links */}
                        <div className="flex items-center gap-10">
                            <Link href="/" className='inline-block'>
                                <img src={originalUrl + "/content/spay-logo-square.svg"} alt="Shamadhan Pay" style={{ maxHeight: '56px' }} />
                            </Link>

                            {/* Desktop Navigation Links */}
                            <div className="hidden lg:flex items-center gap-1">
                                <div 
                                    className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100"
                                    onMouseEnter={() => handleMouseEnter("features")} 
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="flex items-center gap-2">
                                        <p className='font-semibold'>Features</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-3 ' + (ActiveMenu === "features" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                </div>
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100">
                                    <p className='font-semibold'>Resources</p>
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

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden">
                                <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={" relative p-1 barIcon w-[32px] h-[32px] cursor-pointer ml-auto rounded-lg hover:bg-gray-100 transition-colors " + (ToogleMenuResponsive ? "active" : "")}>
                                    <div className={"bg-gray-700 h-[2px] w-full rounded"}></div>
                                    <div className={"bg-gray-700 h-[2px] w-full rounded mt-1"}></div>
                                    <div className={"bg-gray-700 h-[2px] w-full rounded mt-1"}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            <div className={"fixed w-full z-[90] top-20 transition-all duration-300 lg:hidden  " + (ToogleMenuResponsive ? "opacity-100" : "opacity-0 pointer-events-none max-h-0 overflow-hidden")}>
                <Container>
                    <div className="py-6 bg-white border-b border-gray-100">
                        {/* Mobile Action Buttons */}
                        <div className="px-4 pb-4 border-b border-gray-100 mb-4 space-y-3">
                            <Link href="/download" className='flex items-center justify-center gap-2 w-full rounded-md px-6 py-3 bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                <span>Download App</span>
                                <DownloadIcon width={20} height={20} fill="white" />
                            </Link>
                            <Link href="/login" className='block w-full text-center rounded-md px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all'>
                                Login
                            </Link>
                        </div>

                        {/* Mobile Language Switcher */}
                        <div className="px-4 pb-4 border-b border-gray-100 mb-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Language</p>
                            <div className="flex items-center bg-gray-50 rounded-lg p-1 w-fit">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setSelectedLanguage(lang.code)}
                                        className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                            selectedLanguage === lang.code
                                                ? 'text-gray-900 bg-white shadow-sm'
                                                : 'text-gray-600 hover:bg-white hover:text-gray-900'
                                        }`}
                                        title={lang.name}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 ">
                            {/* Features */}
                            <div className="border-b border-gray-100 pb-4 px-4">
                                <p className='text__18 font-medium text-gray-800'>Features</p>
                            </div>

                            {/* Resources */}
                            <div className="border-b border-gray-100 pb-4 px-4">
                                <p className='text__18 font-medium text-gray-800'>Resources</p>
                            </div>

                            {/* Company */}
                            <div className="pb-4 px-4">
                                <p className='text__18 font-medium text-gray-800'>Company</p>
                            </div>
                        </div>
                    </div>
                </Container>
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

            {/* Background Overlays */}
            <div onClick={() => {
                setActiveMenu("")
                setShowLanguageDropdown(false)
            }} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-200 lg:block hidden " + (ActiveMenu !== "" || showLanguageDropdown ? "bg-white/20 backdrop-blur-lg" : "opacity-0 pointer-events-none")}></div>
            <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-200 lg:hidden " + (ToogleMenuResponsive ? "bg-black opacity-60" : "opacity-0 pointer-events-none")}></div>
        </Fragment>
    )
}

export default NewNavbar
