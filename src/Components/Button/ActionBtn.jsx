import React, { Fragment } from 'react'
import useHostname from '../Provider/HostnameProvider';
import Link from 'next/link';

const ActionBtn = ({ link = "#!", target = "_self", title = "Get Started", type = 1, Onhover = false, activeState = false, size = "normal" }) => {
    const originalUrl = useHostname();

    let fontSize;
    let paddingSize;

    switch (size) {
        case 'normal':
            fontSize = ' text__16 ';
            paddingSize = ' px-3 md:!px-4 py-[0.6rem] md:!py-3 ';
            break;
        case 'small':
            fontSize = ' text__12 ';
            paddingSize = ' px-2 md:!px-3 py-1 md:!py-2 ';
            break;
        default:
            fontSize = ' text__16 ';
            paddingSize = ' px-3 md:!px-4 py-[0.6rem] md:!py-3 ';
    }
    return (
        <Fragment>
            {
                Onhover == false ? <Fragment>
                    <Link href={link} target={target} className={'inline-block rounded-lg transition-all duration-300  arrowWrap ' + paddingSize + (type == 1 ? "bg-Mneutral900 hover:bg-Mbrand400" : "bg-Mneutral50 hover:bg-Mbrand400")}>
                        <div className="flex items-center gap-3">
                            <p className={'font-semibold  ' + fontSize + (type == 1 ? "text-white" : "text-Mbaseblack")}>{title}</p>
                            <div className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] rounded-lg overflow-hidden bg-white relative">
                                <div className="arrows w-max grid grid-cols-2 absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300">
                                    <div className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] flex items-center justify-center">
                                        <img src={originalUrl + "/images/right.svg"} alt="" />
                                    </div>
                                    <div className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] flex items-center justify-center">
                                        <img src={originalUrl + "/images/right.svg"} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Fragment> : <Fragment>
                    <Link href={link} target={target} className={'inline-block rounded-lg transition-all duration-300  arrowWrap ' + paddingSize + (type == 1 ? activeState ? "bg-Mneutral900" : "bg-Mbrand400" : activeState ? "bg-Mneutral50" : "bg-Mbrand400")}>
                        <div className="flex items-center gap-3">
                            <p className={'font-semibold  ' + fontSize + (type == 1 ? "text-white" : "text-Mbaseblack")}>{title}</p>
                            <div className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] rounded-lg overflow-hidden bg-white relative">
                                <div className={"arrows w-max grid grid-cols-2 absolute top-1/2 -translate-y-1/2 transition-all duration-300 " + (activeState ? "right-0" : "-right-[100%]")}>
                                    <div className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] flex items-center justify-center">
                                        <img src={originalUrl + "/images/right.svg"} alt="" />
                                    </div>
                                    <div className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] flex items-center justify-center">
                                        <img src={originalUrl + "/images/right.svg"} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Fragment>
            }

        </Fragment>
    )
}

export default ActionBtn
