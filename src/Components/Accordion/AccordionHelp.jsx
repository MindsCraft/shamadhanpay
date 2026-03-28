import React, { Fragment, useState } from 'react'

const AccordionHelp = ({ title, desc }) => {
    const [activeToggle, setActiveToggle] = useState(false);

    return (
        <Fragment>
            <div 
                className={`w-full transition-all duration-300 rounded-xl mb-4 overflow-hidden border ${
                    activeToggle 
                        ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-[#6373AD]/20' 
                        : 'bg-white border-transparent hover:border-gray-100 hover:shadow-sm'
                }`}
            >
                <div 
                    className="flex justify-between cursor-pointer p-6 group items-center" 
                    onClick={() => setActiveToggle(!activeToggle)}
                >
                    <h4 className={`text-lg lg:text-[1.15rem] font-bold transition-colors m-0 pr-6 ${
                        activeToggle ? 'text-[#6373AD]' : 'text-gray-800 group-hover:text-gray-900'
                    }`}>
                        {title}
                    </h4>
                    <div className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
                        <span className={`absolute w-4 h-[2px] rounded-full transition-all duration-300 ${activeToggle ? 'bg-[#6373AD] rotate-180' : 'bg-gray-400 group-hover:bg-gray-800'}`}></span>
                        <span className={`absolute w-4 h-[2px] rounded-full transition-all duration-300 ${activeToggle ? 'bg-[#6373AD] rotate-180 opacity-0' : 'bg-gray-400 group-hover:bg-gray-800 rotate-90'}`}></span>
                    </div>
                </div>

                <div 
                    className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        activeToggle ? "max-h-[400px] opacity-100 pb-6 px-6" : "max-h-0 opacity-0 px-6 pb-0"
                    }`}
                >
                    <p className='text-gray-500 text-base leading-relaxed m-0'>
                        {desc}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default AccordionHelp