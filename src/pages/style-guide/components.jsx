import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import LandingLayout from '@/Components/Layout/LandingLayout'
import StyleGuideNav from '@/Components/Nav/StyleGuideNav'

const ComponentsPage = () => {
    return (
        <Fragment>
            <LandingLayout title='Components - Style Guide' description='UI components and patterns'>
                <StyleGuideNav>
                    <div className='pb-16'>
                        <section className='py-12'>
                            <Container>
                                <h2 className='font-bold text__48 mb-4'>Components</h2>
                                <p className='text__18 text-gray-600 mb-8'>Coming soon...</p>
                            </Container>
                        </section>
                    </div>
                </StyleGuideNav>
            </LandingLayout>
        </Fragment>
    )
}

export default ComponentsPage
