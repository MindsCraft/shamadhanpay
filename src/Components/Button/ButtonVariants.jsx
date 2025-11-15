import React from 'react'
import CustomButton from './CustomButton'

// Preset button variants for common use cases
export const PrimaryButton = (props) => (
    <CustomButton variant="primary" {...props} />
)

export const SecondaryButton = (props) => (
    <CustomButton variant="secondary" {...props} />
)

export const OutlineButton = (props) => (
    <CustomButton variant="outline" {...props} />
)

export const GhostButton = (props) => (
    <CustomButton variant="ghost" {...props} />
)

// Specialized buttons for your app
export const CTAButton = ({ children, ...props }) => (
    <CustomButton 
        variant="primary" 
        size="lg"
        icon="→"
        iconPosition="right"
        className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        {...props}
    >
        {children}
    </CustomButton>
)

export const DownloadButton = ({ children, ...props }) => (
    <CustomButton 
        variant="dark" 
        size="md"
        icon="⬇"
        iconPosition="left"
        className="rounded-full"
        {...props}
    >
        {children || "Download App"}
    </CustomButton>
)

export const ContactButton = ({ children, ...props }) => (
    <CustomButton 
        variant="outline" 
        size="md"
        className="rounded-full border-2"
        {...props}
    >
        {children || "Contact us"}
    </CustomButton>
)

export const PlayButton = ({ children, ...props }) => (
    <CustomButton 
        variant="ghost" 
        size="md"
        icon="▶"
        iconPosition="left"
        className="hover:bg-Mlogo1 hover:text-white"
        {...props}
    >
        {children || "Watch Demo"}
    </CustomButton>
)