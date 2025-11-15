import React from 'react'
import CustomButton from './CustomButton'
import { PrimaryButton, SecondaryButton, OutlineButton, GhostButton, CTAButton, DownloadButton, ContactButton, PlayButton } from './ButtonVariants'

const ButtonShowcase = () => {
    return (
        <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Custom Button Components</h1>
                
                {/* Basic Variants */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Basic Variants</h2>
                    <div className="flex flex-wrap gap-4">
                        <CustomButton variant="primary">Primary</CustomButton>
                        <CustomButton variant="secondary">Secondary</CustomButton>
                        <CustomButton variant="outline">Outline</CustomButton>
                        <CustomButton variant="ghost">Ghost</CustomButton>
                        <CustomButton variant="danger">Danger</CustomButton>
                        <CustomButton variant="success">Success</CustomButton>
                        <CustomButton variant="warning">Warning</CustomButton>
                        <CustomButton variant="dark">Dark</CustomButton>
                        <CustomButton variant="light">Light</CustomButton>
                    </div>
                </section>

                {/* Sizes */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Sizes</h2>
                    <div className="flex flex-wrap items-center gap-4">
                        <CustomButton variant="primary" size="sm">Small</CustomButton>
                        <CustomButton variant="primary" size="md">Medium</CustomButton>
                        <CustomButton variant="primary" size="lg">Large</CustomButton>
                        <CustomButton variant="primary" size="xl">Extra Large</CustomButton>
                    </div>
                </section>

                {/* With Icons */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">With Icons</h2>
                    <div className="flex flex-wrap gap-4">
                        <CustomButton variant="primary" icon="→" iconPosition="right">Get Started</CustomButton>
                        <CustomButton variant="outline" icon="⬇" iconPosition="left">Download</CustomButton>
                        <CustomButton variant="ghost" icon="▶" iconPosition="left">Play Video</CustomButton>
                        <CustomButton variant="secondary" icon="📧" iconPosition="left">Contact</CustomButton>
                    </div>
                </section>

                {/* States */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">States</h2>
                    <div className="flex flex-wrap gap-4">
                        <CustomButton variant="primary">Normal</CustomButton>
                        <CustomButton variant="primary" loading>Loading</CustomButton>
                        <CustomButton variant="primary" disabled>Disabled</CustomButton>
                    </div>
                </section>

                {/* Preset Components */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Preset Components</h2>
                    <div className="flex flex-wrap gap-4">
                        <PrimaryButton>Primary Button</PrimaryButton>
                        <SecondaryButton>Secondary Button</SecondaryButton>
                        <OutlineButton>Outline Button</OutlineButton>
                        <GhostButton>Ghost Button</GhostButton>
                    </div>
                </section>

                {/* Specialized Buttons */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Specialized Buttons</h2>
                    <div className="flex flex-wrap gap-4">
                        <CTAButton href="/signup">Get Started Free</CTAButton>
                        <DownloadButton href="/download" />
                        <ContactButton href="/contact" />
                        <PlayButton onClick={() => alert('Playing video...')} />
                    </div>
                </section>

                {/* Full Width */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Full Width</h2>
                    <div className="space-y-4">
                        <CustomButton variant="primary" fullWidth>Full Width Primary</CustomButton>
                        <CustomButton variant="outline" fullWidth>Full Width Outline</CustomButton>
                    </div>
                </section>

                {/* Usage Examples */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
                    <div className="bg-white p-6 rounded-lg border">
                        <pre className="text-sm text-gray-600 overflow-x-auto">
{`// Basic usage
<CustomButton variant="primary">Click me</CustomButton>

// With link
<CustomButton variant="outline" href="/about">Learn More</CustomButton>

// With icon and loading
<CustomButton 
  variant="primary" 
  icon="→" 
  loading={isLoading}
  onClick={handleSubmit}
>
  Submit Form
</CustomButton>

// Preset components
<CTAButton href="/signup">Get Started Free</CTAButton>
<DownloadButton href="/download" />
<ContactButton href="/contact" />
<PlayButton onClick={playVideo} />`}
                        </pre>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ButtonShowcase