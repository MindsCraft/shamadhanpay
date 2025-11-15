import React, { Fragment, useState } from 'react'
import useHostname from '../Provider/HostnameProvider';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

const NewNavbar = () => {
    const originalUrl = useHostname();

    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
    const [ActiveMenu, setActiveMenu] = useState("")
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
            <div className="fixed w-full z-[99] top-4">
                <Container  className="">
                    <div className="flex w-full items-center justify-between py-2 px-3  bg-white/95 backdrop-blur-3xl rounded-lg" style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.01), 0 8px 10px -10px rgba(0, 0, 0, 0.02)' }}>
                        {/* Left Side - Logo and Navigation Links */}
                        <div className="flex items-center gap-8">
                            <Link href="/" className='inline-block'>
                                <img src={originalUrl + "/content/spay-logo.svg"} alt="" style={{ maxHeight: '40px' }} />
                            </Link>

                            {/* Desktop Navigation Links */}
                            <div className="hidden lg:flex items-center gap-1">
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-Mlogo1" onMouseEnter={() => handleMouseEnter("features")} onMouseLeave={handleMouseLeave}>
                                    <div className="flex items-center gap-2">
                                        <p className='text__16 font-medium text-gray-900'>Features</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 ' + (ActiveMenu == "features" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                </div>
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-Mlogo1" onMouseEnter={() => handleMouseEnter("resources")} onMouseLeave={handleMouseLeave}>
                                    <div className="flex items-center gap-2">
                                        <p className='text__16 font-medium text-gray-900'>Resources</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 ' + (ActiveMenu == "resources" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                </div>
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-Mlogo1" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
                                    <div className="flex items-center gap-2">
                                        <p className='text__16 font-medium text-gray-900'>Company</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 ' + (ActiveMenu == "company" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Language Dropdown, Login, Download Button */}
                        <div className="flex items-center">
                            {/* Language Dropdown - Desktop */}
                            <div className="hidden lg:block relative">
                                <button
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                    className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span className="text__14 font-medium ">{selectedLanguage}</span>
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
                            <Link href="/login" className='hidden lg:inline-block text__16 font-medium text-gray-900 hover:text-[#6373AD] transition-colors px-3 py-2'>
                                Login
                            </Link>

                            {/* Download App Button - Desktop */}
                            <Link href="/download" className='hidden lg:inline-block rounded-md px-3 py-2 bg-[#6373AD] text-white font-semibold text-sm hover:bg-[#556299] transition-all'>
                                Download App
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
                            <Link href="/download" className='block w-full text-center rounded-md px-6 py-3 bg-[#6373AD] text-white font-semibold hover:bg-[#556299] transition-all'>
                                Download App
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
                                <div className="flex justify-between items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("features")}>
                                    <p className='text__18 font-medium text-gray-800'>Features</p>
                                    <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-[20px] ' + (ActiveMenu == "features" ? "-rotate-180" : "rotate-0")} alt="" />
                                </div>
                                <div className={"transition-all duration-300 overflow-hidden " + (ActiveMenu == "features" ? "max-h-screen pt-3" : "max-h-0")}>
                                    <div className="space-y-2">
                                        <Link href="/digital-wallet-management" className="text__16 block py-2 text-gray-600 transition-colors">
                                            Digital Wallet Management
                                        </Link>
                                        <Link href="/investment-and-trading" className="text__16 block py-2 text-gray-600 transition-colors">
                                            Investment and Trading
                                        </Link>
                                        <Link href="/easy-money-transfers" className="text__16 block py-2 text-gray-600 transition-colors">
                                            Easy Money Transfers
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Resources */}
                            <div className="border-b border-gray-100 pb-4 px-4">
                                <div className="flex justify-between items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("resources")}>
                                    <p className='text__18 font-medium text-gray-800'>Resources</p>
                                    <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-[20px] ' + (ActiveMenu == "resources" ? "-rotate-180" : "rotate-0")} alt="" />
                                </div>
                                <div className={"transition-all duration-300 overflow-hidden " + (ActiveMenu == "resources" ? "max-h-screen pt-3" : "max-h-0")}>
                                    <div className="space-y-2">
                                        <Link href="/resources-library" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            Resources Library
                                        </Link>
                                        <Link href="/blog" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            Blog
                                        </Link>
                                        <Link href="/webinar" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            Webinar
                                        </Link>
                                        <Link href="/podcast" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            Podcast
                                        </Link>
                                        <Link href="/case-study" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="pb-4 px-4">
                                <div className="flex justify-between items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("company")}>
                                    <p className='text__18 font-medium text-gray-800'>Company</p>
                                    <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-[20px] ' + (ActiveMenu == "company" ? "-rotate-180" : "rotate-0")} alt="" />
                                </div>
                                <div className={"transition-all duration-300 overflow-hidden " + (ActiveMenu == "company" ? "max-h-screen pt-3" : "max-h-0")}>
                                    <div className="space-y-2">
                                        <Link href="/about" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            About us
                                        </Link>
                                        <Link href="/careers" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            Careers
                                        </Link>
                                        <Link href="/testimonial" className="block py-2 text-gray-600 hover:text-Mlogo1 transition-colors">
                                            Testimonial
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Desktop Dropdown Menu */}
            <div className={"fixed w-full z-[90] top-16 transition-all duration-300 lg:block hidden " + (ActiveMenu != "" ? "opacity-100" : "opacity-0 pointer-events-none max-h-0 overflow-hidden")} onMouseEnter={() => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            }} onMouseLeave={handleMouseLeave}>
                <Container>
                    <div className="w-full shadow-lg px-8 py-8 bg-white/95 backdrop-blur-3xl rounded-bl-md rounded-br-md" >
                        {ActiveMenu == "features" && (
                            <div className="grid grid-cols-3 gap-6">
                                <Link href='/digital-wallet-management' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Digital Wallet Management</h6>
                                    <p className="text-gray-600 text-sm">Manage your digital wallet with ease</p>
                                </Link>
                                <Link href='/investment-and-trading' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Investment and Trading</h6>
                                    <p className="text-gray-600 text-sm">Smart investment and trading tools</p>
                                </Link>
                                <Link href='/easy-money-transfers' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Easy Money Transfers</h6>
                                    <p className="text-gray-600 text-sm">Send money quickly and securely</p>
                                </Link>
                            </div>
                        )}

                        {ActiveMenu == "resources" && (
                            <div className="grid grid-cols-4 gap-6">
                                <Link href='/resources-library' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Resources Library</h6>
                                    <p className="text-gray-600 text-sm">Access our knowledge base</p>
                                </Link>
                                <Link href='/blog' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Blog</h6>
                                    <p className="text-gray-600 text-sm">Latest insights and updates</p>
                                </Link>
                                <Link href='/webinar' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Webinar</h6>
                                    <p className="text-gray-600 text-sm">Join our educational sessions</p>
                                </Link>
                                <Link href='/podcast' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Podcast</h6>
                                    <p className="text-gray-600 text-sm">Listen to expert discussions</p>
                                </Link>
                            </div>
                        )}

                        {ActiveMenu == "company" && (
                            <div className="grid grid-cols-3 gap-6">
                                <Link href='/about' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">About us</h6>
                                    <p className="text-gray-600 text-sm">Learn about our mission</p>
                                </Link>
                                <Link href='/careers' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Careers</h6>
                                    <p className="text-gray-600 text-sm">Join our growing team</p>
                                </Link>
                                <Link href='/testimonial' className="p-6 rounded-lg border border-gray-200 hover:border-Mlogo1 transition-colors group">
                                    <h6 className="font-semibold text-gray-800 group-hover:text-Mlogo1 mb-2">Testimonial</h6>
                                    <p className="text-gray-600 text-sm">What our customers say</p>
                                </Link>
                            </div>
                        )}
                    </div>
                </Container>
            </div>

            {/* Background Overlays */}
            <div onClick={() => {
                setActiveMenu("")
                setShowLanguageDropdown(false)
            }} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-200 lg:block hidden " + (ActiveMenu != "" || showLanguageDropdown ? "bg-white/20 backdrop-blur-lg" : "opacity-0 pointer-events-none")}></div>
            <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-200 lg:hidden " + (ToogleMenuResponsive ? "bg-black opacity-60" : "opacity-0 pointer-events-none")}></div>
        </Fragment>
    )
}

export default NewNavbar
