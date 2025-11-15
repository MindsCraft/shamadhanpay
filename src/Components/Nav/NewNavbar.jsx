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
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-Mlogo1">
                                    <p className='text__16 font-medium text-gray-900'>Features</p>
                                </div>
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-Mlogo1">
                                    <p className='text__16 font-medium text-gray-900'>Resources</p>
                                </div>
                                <div className="relative cursor-pointer transition-all duration-300 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-Mlogo1">
                                    <p className='text__16 font-medium text-gray-900'>Company</p>
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



            {/* Background Overlays */}
            <div onClick={() => {
                setShowLanguageDropdown(false)
            }} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-200 lg:block hidden " + (showLanguageDropdown ? "bg-white/20 backdrop-blur-lg" : "opacity-0 pointer-events-none")}></div>
            <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-200 lg:hidden " + (ToogleMenuResponsive ? "bg-black opacity-60" : "opacity-0 pointer-events-none")}></div>
        </Fragment>
    )
}

export default NewNavbar
