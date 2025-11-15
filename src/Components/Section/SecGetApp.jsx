import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import ActionBtn from '../Button/ActionBtn'
import useHostname from '../Provider/HostnameProvider';

const SecGetApp = ({ title = `Get the app and open an <br class="xx:block hidden" /> ⎯ account here`, subtext = `Access your Finpro account on <br /> iOS and android.`, type = 1 }) => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <section className='py-2'>

                <div className="px-2">
                    <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-white rounded-[24px] sm:rounded-[56px]">
                        <Container>
                            <h2 className='text__64 font-medium -mb-8 md:-mb-[4rem]' dangerouslySetInnerHTML={{ __html: title }} />

                            <div className="relative w-full">
                                <img src={originalUrl + "/images/FINPRO.svg"} className='absolute w-full left-1/2 -translate-x-1/2 bottom-0 hidden lg:block' alt="" />
                                <div className="flex flex-wrap lg:!flex-nowrap items-center justify-center relative z-[1]">
                                    <div className="relative lg:!w-auto w-full">
                                        <img src={originalUrl + "/images/iPhone 15 Pro Mockup, Front and Back View (1) 2.svg"} className='relative z-[1]' alt="" />

                                        <img src={originalUrl + "/images/FINPRO.svg"} className='absolute w-full left-1/2 -translate-x-1/2 bottom-0 lg:hidden' alt="" />
                                    </div>
                                    <div className="lg:!-ml-8 mt-[2rem] lg:mt-0 ml-auto">
                                        {
                                            type == 1 ? <Fragment>
                                                <p className='text__18 leading-relaxed mb-4' dangerouslySetInnerHTML={{ __html: subtext }} />
                                                <ActionBtn title='Download Now' />
                                            </Fragment> : type == 2 ? <Fragment>
                                                <p className='text__18 leading-relaxed mb-4'>Don’t forget to subscribe to our <br className='xl:hidden lg:block hidden' /> newsletter to <br className='xl:block lg:hidden ss:block hidden' /> get the latest updates straight to your inbox. </p>
                                                <div className="flex items-center gap-3 justify-between px-4 py-3 rounded-full bg-Mneutral50 border !border-Mneutral200">
                                                    <input type="text" className='bg-transparent border-0 rounded-none outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900' placeholder='Enter email address...' />
                                                    <img src={originalUrl + "/images/jkfdsdf.svg"} className='cursor-pointer' alt="" />
                                                </div>
                                            </Fragment> : <Fragment>

                                            </Fragment>
                                        }

                                    </div>
                                </div>

                            </div>
                        </Container>
                    </div>
                </div>

            </section>
        </Fragment>
    )
}

export default SecGetApp