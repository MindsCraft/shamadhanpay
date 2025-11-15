
import React, { Fragment, useState } from 'react'
import useHostname from '../Provider/HostnameProvider';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

const Navbar = () => {
    const originalUrl = useHostname();

    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);

    const [ActiveMenu, setActiveMenu] = useState("")

    const HandleChaneMenu = (e) => {
        if (ActiveMenu == e) {
            setActiveMenu("");
        } else {
            setActiveMenu(e)
        }
    }
    return (
        <Fragment>
            <div className="fixed w-full z-[99] top-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center">
                <div className="inline-block">
                    <div className="flex items-center justify-between sm:justify-start sm:w-auto w-[300px] xs:w-[340px] p-1 rounded-[16px] bg-Mneutral900 gap-3 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                        <Link href="/" className='inline-block'>
                            <img src={originalUrl + "/images/Logo.svg"} alt="" />
                        </Link>
                        <div className="hidden sm:flex items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("features")}>
                            <p className='text__14 text-white'>Features</p>
                            <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 ' + (ActiveMenu == "features" ? "-rotate-180" : "rotate-0")} alt="" />
                        </div>
                        <div className="hidden sm:flex items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("resources")}>
                            <p className='text__14 text-white'>Resources</p>
                            <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 ' + (ActiveMenu == "resources" ? "-rotate-180" : "rotate-0")} alt="" />
                        </div>
                        <div className="hidden sm:flex items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("company")}>
                            <p className='text__14 text-white'>Company</p>
                            <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 ' + (ActiveMenu == "company" ? "-rotate-180" : "rotate-0")} alt="" />
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="/contact" className='inline-block font-medium text__14 px-4 py-2 bg-white text-Mbaseblack rounded-[12px]'>Contact us</Link>

                            <div className="md:hidden">
                                <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={" relative p-1 barIcon w-[32px] h-[32px] cursor-pointer ml-auto rounded-full border !border-[rgba(0,0,0,0.12)] " + (ToogleMenuResponsive ? "active" : "")}>
                                    <div className={"bg-white"}></div>
                                    <div className={"bg-white"}></div>
                                    <div className={"bg-white"}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mt-3 md:mt-4 w-full transition-all duration-300 md:hidden " + (ToogleMenuResponsive ? "opacity-100" : "opacity-0 pointer-events-none max-h-0 overflow-hidden")}>
                    <Container>
                        <div className="w-full xl:w-[960px] mx-auto p-6 rounded-[24px] bg-Mneutral900 max-h-[calc(100vh_-_100px)] overflow-auto">

                            <div className="p-3 border !border-Mneutral800 rounded-[20px] grid grid-rows-1 gap-y-3">

                                <div className={""}>
                                    <div className="flex justify-between items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("features")}>
                                        <p className='text__24 font-medium text-white'>Features</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-[30px] ' + (ActiveMenu == "features" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                    <div className={"transition-all duration-300 overflow-hidden grid grid-rows-1 gap-y-3 " + (ActiveMenu == "features" ? "max-h-screen pt-3" : "max-h-0")}>
                                        <Link href="/digital-wallet-management" className="flex items-center justify-between gap-2">
                                            <p className='font-medium text__18 text-white clamp-1'>Digital Wallet Management</p>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href="/investment-and-trading" className="flex items-center justify-between gap-2">
                                            <p className='font-medium text__18 text-white clamp-1'>Investment and Trading</p>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href="/easy-money-transfers" className="flex items-center justify-between gap-2">
                                            <p className='font-medium text__18 text-white clamp-1'>Easy Money Transfers</p>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className={""}>
                                    <div className="flex justify-between items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("resources")}>
                                        <p className='text__24 font-medium text-white'>Resources</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-[30px] ' + (ActiveMenu == "resources" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                    <div className={"transition-all duration-300 overflow-hidden grid grid-rows-1 gap-y-3 " + (ActiveMenu == "resources" ? "max-h-screen pt-3" : "max-h-0")}>
                                        <div className="w-full h-[140px] rounded-[20px] bg-Msecondary800 overflow-hidden relative p-3">
                                            <img src={originalUrl + "/images/Pattern (1).svg"} className='absolute left-0 top-0' alt="" />

                                            <Link href='/resources-library' className="relative z-[1] w-full h-full flex justify-end flex-wrap items-stretch">
                                                <img src={originalUrl + "/images/arrow up.svg"} className='self-start w-[40px] h-[40px]' alt="" />
                                                <p className='font-medium text__18 text-white w-full self-end'>Resources Library</p>
                                            </Link>
                                        </div>
                                        <Link href='/blog' className="flex items-center justify-between  text-white">
                                            <div className="flex items-center gap-6">
                                                <div className="w-[40px] h-[40px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/icc (3).svg"} className='w-[20px]' alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Blog</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href='/webinar' className="flex items-center justify-between  text-white">
                                            <div className="flex items-center gap-6">
                                                <div className="w-[40px] h-[40px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/icc (4).svg"} className='w-[20px]' alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Webinar</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href='/podcast' className="flex items-center justify-between  text-white">
                                            <div className="flex items-center gap-6">
                                                <div className="w-[40px] h-[40px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/icc (1).svg"} className='w-[20px]' alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Podcast</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href='/case-study' className="flex items-center justify-between  text-white">
                                            <div className="flex items-center gap-6">
                                                <div className="w-[40px] h-[40px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/icc (2).svg"} className='w-[20px]' alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Case study</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className={""}>
                                    <div className="flex justify-between items-center gap-2 relative cursor-pointer" onClick={() => HandleChaneMenu("company")}>
                                        <p className='text__24 font-medium text-white'>Company</p>
                                        <img src={originalUrl + "/images/Arrow Down.svg"} className={'transition-all duration-300 w-[30px] ' + (ActiveMenu == "company" ? "-rotate-180" : "rotate-0")} alt="" />
                                    </div>
                                    <div className={"transition-all duration-300 overflow-hidden grid grid-rows-1 gap-y-3 " + (ActiveMenu == "company" ? "max-h-screen pt-3" : "max-h-0")}>
                                        <Link href='/about' className="flex items-center justify-between text-white rounded-[20px]">
                                            <div className="flex items-center gap-6">
                                                <div className="w-[40px] h-[40px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/iccs (1).svg"} className='w-[20px]' alt="" />
                                                </div>
                                                <p className='font-medium text__18'>About us</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href='/careers' className="flex items-center justify-between text-white rounded-[20px]">
                                            <div className="flex items-center gap-6">
                                                <div className="w-[40px] h-[40px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/iccs (2).svg"} className='w-[20px]' alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Careers</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href='/testimonial' className="flex items-center justify-between text-white rounded-[20px]">
                                            <div className="flex items-center gap-6">
                                                <div className="w-[40px] h-[40px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/iccs (3).svg"} className='w-[20px]' alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Testimonial</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                    </div>
                                </div>




                            </div>

                        </div>
                    </Container>
                </div>
                <div className={"mt-4 w-full transition-all duration-300 md:block hidden " + (ActiveMenu != "" ? "opacity-100" : "opacity-0 pointer-events-none max-h-0 overflow-hidden")}>
                    <Container>
                        <div className="w-full xl:w-[960px] mx-auto p-6 rounded-[24px] bg-Mneutral900">

                            {
                                ActiveMenu == "features" ? <Fragment>
                                    <div className="w-full grid grid-cols-3 gap-3">
                                        <Link href='/digital-wallet-management' className="inline-block w-full MenuHover">

                                            <div className="w-full h-[210px] overflow-hidden rounded-[20px] relative transition-all duration-300 bg-Mneutral800 flex justify-center square one">

                                                <img src={originalUrl + "/images/navIc (1).svg"} className='absolute left-1/2 -translate-x-1/2 top-[60%] transition-all duration-500 -rotate-45 icon' alt="" />
                                                <img src={originalUrl + "/images/NavMoc (2).svg"} className='self-end relative z-[1] transition-all duration-300 mockup' alt="" />

                                            </div>

                                            <div className="mt-4 flex items-center justify-between gap-2">
                                                <p className='font-medium text__18 text-white clamp-1'>Digital Wallet Management</p>
                                                <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                            </div>

                                        </Link>
                                        <Link href='/investment-and-trading' className="inline-block w-full MenuHover">

                                            <div className="w-full h-[210px] overflow-hidden rounded-[20px] relative transition-all duration-300 bg-Mneutral800 flex justify-center square two">

                                                <img src={originalUrl + "/images/navIc (2).svg"} className='absolute left-1/2 -translate-x-1/2 top-[60%] transition-all duration-500 -rotate-45 icon' alt="" />
                                                <img src={originalUrl + "/images/NavMoc (3).svg"} className='self-end relative z-[1] transition-all duration-300 mockup' alt="" />

                                            </div>

                                            <div className="mt-4 flex items-center justify-between gap-2">
                                                <p className='font-medium text__18 text-white clamp-1'>Investment and Trading</p>
                                                <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                            </div>

                                        </Link>
                                        <Link href='/easy-money-transfers' className="inline-block w-full MenuHover">

                                            <div className="w-full h-[210px] overflow-hidden rounded-[20px] relative transition-all duration-300 bg-Mneutral800 flex justify-center square three">

                                                <img src={originalUrl + "/images/navIc (3).svg"} className='absolute left-1/2 -translate-x-1/2 top-[60%] transition-all duration-500 -rotate-45 icon' alt="" />
                                                <img src={originalUrl + "/images/NavMoc (1).svg"} className='self-end relative z-[1] transition-all duration-300 mockup' alt="" />

                                            </div>

                                            <div className="mt-4 flex items-center justify-between gap-2">
                                                <p className='font-medium text__18 text-white clamp-1'>Easy Money Transfers</p>
                                                <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                            </div>

                                        </Link>
                                    </div>
                                </Fragment> : ActiveMenu == "resources" ? <Fragment>
                                    <div className="w-full grid grid-cols-3 gap-3">
                                        <div className="w-full h-full rounded-[20px] bg-Msecondary800 overflow-hidden relative p-3">
                                            <img src={originalUrl + "/images/Pattern (1).svg"} className='absolute left-0 top-0' alt="" />

                                            <Link href='/resources-library' className="relative z-[1] w-full h-full flex justify-end flex-wrap items-stretch">
                                                <img src={originalUrl + "/images/arrow up.svg"} className='self-start' alt="" />
                                                <p className='font-medium text__18 text-white w-full self-end'>Resources Library</p>
                                            </Link>
                                        </div>
                                        <div className="col-span-2 border !border-Mneutral800 rounded-[20px]">
                                            <div className="grid grid-cols-2 py-2 px-2">
                                                <Link href='/blog' className="flex items-center justify-between p-3 text-white">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-[50px] h-[50px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                            <img src={originalUrl + "/images/icc (3).svg"} alt="" />
                                                        </div>
                                                        <p className='font-medium text__18'>Blog</p>
                                                    </div>
                                                    <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                                </Link>
                                                <Link href='/webinar' className="flex items-center justify-between p-3 text-white">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-[50px] h-[50px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                            <img src={originalUrl + "/images/icc (4).svg"} alt="" />
                                                        </div>
                                                        <p className='font-medium text__18'>Webinar</p>
                                                    </div>
                                                    <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                                </Link>
                                            </div>
                                            <div className="grid grid-cols-2 py-2 px-2 border-t !border-Mneutral800">
                                                <Link href='/podcast' className="flex items-center justify-between p-3 text-white">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-[50px] h-[50px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                            <img src={originalUrl + "/images/icc (1).svg"} alt="" />
                                                        </div>
                                                        <p className='font-medium text__18'>Podcast</p>
                                                    </div>
                                                    <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                                </Link>
                                                <Link href='/case-study' className="flex items-center justify-between p-3 text-white">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-[50px] h-[50px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                            <img src={originalUrl + "/images/icc (2).svg"} alt="" />
                                                        </div>
                                                        <p className='font-medium text__18'>Case study</p>
                                                    </div>
                                                    <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment> : <Fragment>
                                    <div className="w-full grid grid-cols-3 gap-3">
                                        <Link href='/about' className="flex items-center justify-between p-3 text-white border !border-Mneutral800 rounded-[20px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-[50px] h-[50px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/iccs (1).svg"} alt="" />
                                                </div>
                                                <p className='font-medium text__18'>About us</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href='/careers' className="flex items-center justify-between p-3 text-white border !border-Mneutral800 rounded-[20px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-[50px] h-[50px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/iccs (2).svg"} alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Careers</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                        <Link href='/testimonial' className="flex items-center justify-between p-3 text-white border !border-Mneutral800 rounded-[20px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-[50px] h-[50px] rounded-full bg-Mneutral800 flex items-center justify-center">
                                                    <img src={originalUrl + "/images/iccs (3).svg"} alt="" />
                                                </div>
                                                <p className='font-medium text__18'>Testimonial</p>
                                            </div>
                                            <img src={originalUrl + "/images/arrowWehite.svg"} alt="" />
                                        </Link>
                                    </div>
                                </Fragment>

                            }



                        </div>
                    </Container>
                </div>
            </div>

            <div onClick={() => setActiveMenu("")} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-300 md:block hidden " + (ActiveMenu != "" ? "bg-black opacity-60" : "opacity-0 pointer-events-none")}></div>
            <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"fixed w-full h-full left-0 top-0 z-[70] transition-all duration-300 md:hidden " + (ToogleMenuResponsive ? "bg-black opacity-60" : "opacity-0 pointer-events-none")}></div>
        </Fragment>
    )
}

export default Navbar
