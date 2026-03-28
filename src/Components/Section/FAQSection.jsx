import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import AccordionHelp from "@/Components/Accordion/AccordionHelp";

const FAQSection = () => {
  return (
    <section className='relative py-20 lg:py-32 overflow-hidden bg-bg-grey-2'>
      {/* Soft Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#6373AD]/[0.05] to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#A1609D]/[0.03] to-transparent blur-[100px]"></div>
      </div>

      <Container className="relative z-10">
        <Row className='gap-y-16'>
          {/* Left Column: Title & Premium Support Card */}
          <Col lg={5} md={12}>
            <div className="lg:sticky lg:top-32">
              
              {/* Premium Badge */}
              <div className='inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full mb-8'>
                <div className='flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-sm text-[#6373AD]'>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <span className='text-[11px] font-black uppercase tracking-[0.15em] text-gray-700'>Support & FAQ</span>
              </div>

              {/* Standard Heading */}
              <h2 className='mb-10 text-3xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Got questions? <br /> We have answers.
              </h2>

              {/* Elevated Support Card */}
              <div className="w-full mt-12 bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-xl relative overflow-hidden group">
                {/* Card Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6373AD]/5 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-125"></div>
                
                <h3 className='text-2xl font-bold text-gray-900 mb-4 relative z-10'>Still need help?</h3>
                <p className='text-gray-500 text-lg leading-relaxed mb-8 relative z-10'>
                  Can't find what you're looking for? Our dedicated team is available 24/7 to assist you with anything.
                </p>
                
                <div className="relative z-10 mt-6">
                  <Link 
                      href="#!" 
                      className='inline-block rounded-md transition-all duration-300 px-6 py-3 bg-[#6373AD] hover:bg-[#556299]' 
                      style={{ boxShadow: '0 4px 16px 0 rgba(99, 115, 173, 0.25)' }}
                  >
                      <p className="flex items-center gap-2 mb-0">
                          <span className='font-semibold text-white'>Contact Support</span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                      </p>
                  </Link>
                </div>
              </div>

            </div>
          </Col>

          {/* Right Column: Sleek Accordions */}
          <Col lg={{ span: 6, offset: 1 }} md={12}>
            <div className="flex flex-col lg:pl-6 pt-4">
              {
                [
                  {
                    title: "How can I keep my account information safe?",
                    desc: "To keep your Shamadhan account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—Shamadhan will never ask for your password via email.",
                  },
                  {
                    title: "Are there any fees for using Shamadhan Digital Banking?",
                    desc: "Our standard digital banking features are completely free to use. There are no monthly account maintenance fees, and person-to-person transfers within the Shamadhan network are always free. Some charges may apply for external bank transfers or specialized utility payments.",
                  },
                  {
                    title: "Is Shamadhan Digital Banking safe?",
                    desc: "Yes, Shamadhan is built with military-grade security. We use end-to-end encryption for all data, bio-metric authentication for app access, and automated fraud detection systems that monitor your account 24/7 to prevent unauthorized access.",
                  },
                  {
                    title: "What should I do if I suspect fraudulent activity?",
                    desc: "If you suspect any unauthorized activity, immediately freeze your account via the app settings. Once secured, contact our 24/7 support team instantly through the 'Contact Support' button. We will investigate and help you recover access safely.",
                  },
                  {
                    title: "What can I do with Shamadhan Digital Banking?",
                    desc: "You can manage your entire financial life: pay any utility bill, recharge mobile balance, send money instantly to any phone number, scan & pay at thousands of merchants, and track your spending with automated analytics.",
                  },
                ].map((obj, index) => (
                  <AccordionHelp key={index} title={obj.title} desc={obj.desc} />
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQSection
