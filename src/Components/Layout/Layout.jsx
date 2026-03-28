import React, { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Navbar from '../Nav/Navbar';
import Footer from '../Nav/Footer';

const Layout = ({ children, title = "Homepage", description = "Homepage Desc", navbar = true, footer = true }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
            </Head>

            <div className='w-full overflow-hidden min-h-screen'>

                {
                    navbar ? <Navbar /> : ""
                }

                {children}

                {
                    footer ? <Footer /> : ""
                }
            </div>


        </Fragment>
    )
}

export default Layout