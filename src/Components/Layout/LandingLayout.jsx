import React, { Fragment } from 'react'
import Head from 'next/head'
import NewNavbar from '../Nav/NewNavbar';
import Footer from '../Nav/Footer';
import FooterAlternative from '../Nav/FooterAlternative';

const LandingLayout = ({ children, title = "Landing Page", description = "Landing page description", navbar = true, footer = true, footerType = 1 }) => {
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
                    footer ? (
                        footerType === 1 ? <Footer /> : <FooterAlternative />
                    ) : ""
                }
            </div>


        </Fragment>
    )
}

export default LandingLayout