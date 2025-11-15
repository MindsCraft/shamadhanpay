import React from 'react'
import Link from 'next/link'
import { logoColors } from '@/styles/brand-colors'

const CustomButton = ({ 
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'right',
    fullWidth = false,
    className = '',
    target = '_self',
    ...props
}) => {

    // Size variants
    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-6 py-4 text-lg',
        xl: 'px-8 py-5 text-xl'
    }

    // Color variants
    const variantClasses = {
        primary: `bg-Mlogo1 hover:bg-opacity-90 text-white border-transparent`,
        secondary: `bg-Mlogo2 hover:bg-opacity-90 text-white border-transparent`,
        outline: `bg-transparent hover:bg-Mlogo1 hover:text-white text-Mlogo1 border-2 border-Mlogo1`,
        ghost: `bg-transparent hover:bg-gray-100 text-gray-700 border-transparent`,
        danger: `bg-red-500 hover:bg-red-600 text-white border-transparent`,
        success: `bg-green-500 hover:bg-green-600 text-white border-transparent`,
        warning: `bg-yellow-500 hover:bg-yellow-600 text-white border-transparent`,
        dark: `bg-gray-900 hover:bg-gray-800 text-white border-transparent`,
        light: `bg-gray-100 hover:bg-gray-200 text-gray-900 border-transparent`,
    }

    // Base classes
    const baseClasses = `
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-300
        border
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Mlogo1
        disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
    `.trim().replace(/\s+/g, ' ')

    // Loading spinner component
    const LoadingSpinner = () => (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    )

    // Icon component
    const IconComponent = ({ icon, position }) => {
        if (!icon) return null
        
        const iconClasses = `
            ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : size === 'xl' ? 'w-7 h-7' : 'w-5 h-5'}
            ${position === 'left' ? 'mr-2' : 'ml-2'}
        `
        
        if (typeof icon === 'string') {
            return <img src={icon} alt="" className={iconClasses} />
        }
        
        return <span className={iconClasses}>{icon}</span>
    }

    // Button content
    const buttonContent = (
        <>
            {loading && <LoadingSpinner />}
            {icon && iconPosition === 'left' && !loading && <IconComponent icon={icon} position="left" />}
            <span>{children}</span>
            {icon && iconPosition === 'right' && !loading && <IconComponent icon={icon} position="right" />}
        </>
    )

    // If href is provided, render as Link
    if (href) {
        return (
            <Link 
                href={href} 
                target={target}
                className={baseClasses}
                {...props}
            >
                {buttonContent}
            </Link>
        )
    }

    // Otherwise render as button
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={baseClasses}
            {...props}
        >
            {buttonContent}
        </button>
    )
}

export default CustomButton