import React, { Fragment } from 'react'
import Head from 'next/head'
import NewNavbar from '../Nav/NewNavbar';
import Footer from '../Nav/Footer';

const LandingLayout = ({ children, title = "Landing Page", description = "Landing page description", navbar = true, footer = true }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
            </Head>

            <div className='w-full overflow-hidden min-h-screen'>

                {
                    navbar ? <NewNavbar /> : ""
                }

                {children}

                {
                    footer ? <Footer /> : ""
                }
            </div>

            <script
                src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
                crossOrigin="anonymous"
            ></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin="anonymous"
            ></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin="anonymous"
            ></script>
        </Fragment>
    )
}

export default LandingLayout