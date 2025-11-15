import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import ActionBtn from '../Button/ActionBtn'
import useHostname from '../Provider/HostnameProvider'

const NewsSection = () => {
    const originalUrl = useHostname()
    return (
      <section className='py-2'>

        <div className="px-2">
          <div className="w-full lg:px-4 xl:px-[2.5rem] py-[4rem] lg:py-[8rem] bg-white rounded-[12px]">
            <Container>
              <Row className='justify-between mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]'>
                <Col md={6} className='lg:my-auto'>
                  <h2 className='mb-0'>Updates & Insights</h2>
                </Col>
                <Col md={5} className='flex justify-between flex-column align-items-end'>
                  <a href="/blog" className="flex align-items-end lg:flex btn-link text-brand-primary mt-3">
                    <span>More News</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Col>
              </Row>

              <Row className='gap-y-4'>
                <Col md={6} lg={4}>
                  <div className="blog-card">
                    <img src={originalUrl + "/images/img (2).png"} className='w-full object-cover rounded-[8px]' alt="" />
                    <div className="p-3 lg:p-4">
                      <h5 className='mb-3'>30 Days to Go: Shamadhan Pay Launches Soon</h5>
                      <p className='mb-3 clamp-2'>
                        We’re almost ready. The app is in final testing, and early users will get exclusive rewards. Here’s what to expect on launch day.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="blog-card">
                    <img src={originalUrl + "/images/img (3).png"} className='w-full object-cover rounded-[8px]' alt="" />
                    <div className="p-3 lg:p-4">
                      <h5 className='mb-3'>Grameen Telecom Backs Shamadhan Pay</h5>
                      <p className='mb-3 clamp-2'>
                        We’re proud to announce our partnership with Grameen Telecom to expand secure digital payments across Bangladesh.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="blog-card">
                    <img src={originalUrl + "/images/img (1).png"} className='w-full object-cover rounded-[8px]' alt="" />
                    <div className="p-3 lg:p-4">
                      <h5 className='mb-3'>Bill Pay, QR Scan, and More — What’s Inside the App</h5>
                      <p className='mb-3 clamp-2'>
                        From utility payments to instant transfers, Shamadhan Pay is packed with features designed for everyday life.
                      </p>
                    </div>

                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

      </section>
    )
}

export default NewsSection
