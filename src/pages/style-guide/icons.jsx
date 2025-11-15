import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import StyleGuideNav from '@/Components/Nav/StyleGuideNav'

const IconsPage = () => {
    return (
        <Fragment>
            <LandingLayout title='Icons - Style Guide' description='Icon library and usage'>
                <StyleGuideNav>
                    <div className='pb-16'>
                        <section className='py-12'>
                            <Container>
                                <h2 className='font-bold text__48 mb-4'>Icons</h2>
                                <p className='text__18 text-gray-600 mb-8'>Coming soon...</p>
                            </Container>
                        </section>
                    </div>
                </StyleGuideNav>
            </LandingLayout>
        </Fragment>
    )
}

export default IconsPage
