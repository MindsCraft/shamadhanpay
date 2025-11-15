import React, { Fragment, useState } from 'react'
import useHostname from '../Provider/HostnameProvider';

const AccordionHelp = ({ title, desc }) => {
    const originalUrl = useHostname();

    const [activeToogle, setActiveToogle] = useState(false);

    return (
        <Fragment>
            <div className="w-full">
                <div className={"flex items-start gap-2 cursor-pointer py-3 "} onClick={() => setActiveToogle(!activeToogle)}>
                    <img src={originalUrl + "/images/right.svg"} className={'mt-[0.4rem] transition-all duration-200 overflow-hidden ' + (activeToogle ? "max-w-max" : "max-w-0")} alt="" />
                    <p className={'font-medium text__20 transition-all duration-200 ' + (activeToogle ? "text-Mneutral900" : "text-Mneutral600")}>{title}</p>
                </div>

                <div className={"transition-all duration-300 overflow-hidden " + (activeToogle ? "max-h-screen" : "max-h-0")}>
                    <p className='text__16 text-Mneutral700'>{desc}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default AccordionHelp