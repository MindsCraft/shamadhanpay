import React from 'react';
import Link from 'next/link';

const GradientOscillatingButton = ({ 
    href = "/download", 
    text = "Get Started",
    className = "" 
}) => {
    return (
        <div className={`relative inline-block overflow-hidden rounded-md ${className}`}>
            {/* Oscillating Gradient Background */}
            <div className='absolute w-[200px] h-[200px] rounded-full pointer-events-none' style={{
                background: 'conic-gradient(from 0deg, #EA9E51 0deg 90deg, #A1609D 90deg 180deg, #6373AD 180deg 270deg, #44AA99 270deg 360deg)',
                animation: 'oscillateGradient 4s ease-in-out infinite',
                filter: 'blur(5px)',
                opacity: 1,
                top: '-68px',
                left: '-5%'
            }}></div>
            
            {/* Button with Gradient Border */}
            <div className='relative rounded-[8px] p-[3px]' style={{
                background: 'linear-gradient(135deg, #44AA99, #6373AD, #A1609D, #EA9E51)',
                boxShadow: '0 4px 16px 0 rgba(68, 170, 153, 0.25)'
            }}>
                <Link href={href} className='inline-block rounded-[4px] transition-all duration-300 px-4 py-3 md:py-2 bg-white hover:bg-gray-50'>
                    <p className="flex items-center gap-2">
                        <span className='font-semibold text__18 text-gray-800'>{text}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#424143" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default GradientOscillatingButton;
