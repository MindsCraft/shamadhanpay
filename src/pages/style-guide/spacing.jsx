import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import StyleGuideNav from '@/Components/Nav/StyleGuideNav'

const SpacingPage = () => {
    return (
        <Fragment>
            <LandingLayout title='Spacing - Style Guide' description='Spacing scale and layout guidelines'>
                <StyleGuideNav>
                    <div className='pb-16'>
                        <section className='py-12'>
                            <Container>
                                <h2 className='font-bold text__48 mb-4'>Spacing</h2>
                                <p className='text__18 text-gray-600 mb-8'>Coming soon...</p>
                            </Container>
                        </section>
                    </div>
                </StyleGuideNav>
            </LandingLayout>
        </Fragment>
    )
}

export default SpacingPage
