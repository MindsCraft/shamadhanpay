import React, { Fragment } from 'react'
import Head from 'next/head'
import NewNavbar from '../Nav/NewNavbar';
import Footer from '../Nav/Footer';

const LandingLayout = ({ children, title = "Landing Page", description = "Landing page description", navbar = true, footer = true }) => {
    React.useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Once visible, we can stop observing this specific element
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-up');
        revealElements.forEach(el => observer.observe(el));

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, [children]); // Re-run when children change to catch dynamic content

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