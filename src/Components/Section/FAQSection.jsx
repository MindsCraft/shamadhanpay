import React, {Fragment} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ActionBtn from "@/Components/Button/ActionBtn";
import AccordionHelp from "@/Components/Accordion/AccordionHelp";

const FAQSection = () => {
    return (
      <section className='py-2'>
          <div className="w-full lg:px-4 xl:px-[2.5rem] py-[4rem] lg:py-[8rem] bg-bg-grey-2">
            <Container>
              <Row className='gap-y-4'>
                <Col md={5}>
                  <h2 className='mb-[2rem] md:mb-[4.5rem]'>Do you need ⎯ <br />
                    some help?</h2>

                  <div className="w-full bg-Mneutral900 p-6 rounded-[24px]">
                    <h5 className='font-medium text__24 text-white mb-[2.5rem]'>Didn't find the answer you were looking for? Our support team is here to help!</h5>

                    <ActionBtn link={"/contact"} title="Contact us" size='small' type={"2"} />
                  </div>
                </Col>
                <Col md={7}>
                  <div className="flex flex-wrap gap-y-3">
                    {

                      [
                        {
                          title: "How can I keep my account information safe?",
                          desc: "To keep your Shamadhan account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—Shamadhan will never ask for your password via email.",
                        },
                        {
                          title: "Are there any fees for using Shamadhan Digital Banking?",
                          desc: "To keep your Shamadhan account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—Shamadhan will never ask for your password via email.",
                        },
                        {
                          title: "Is Shamadhan Digital Banking safe?",
                          desc: "To keep your Shamadhan account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—Shamadhan will never ask for your password via email.",
                        },
                        {
                          title: "What should I do if I suspect fraudulent activity on my account?",
                          desc: "To keep your Shamadhan account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—Shamadhan will never ask for your password via email.",
                        },
                        {
                          title: "What can I do with Shamadhan Digital Banking?",
                          desc: "To keep your Shamadhan account information safe, use a strong, unique password and enable two-factor authentication. Regularly monitor your account for suspicious activity and ensure your app and device software are up-to-date. Be cautious of phishing scams—Shamadhan will never ask for your password via email.",
                        },
                      ].map((obj) => {
                        return <Fragment>
                          <AccordionHelp title={obj.title} desc={obj.desc} />
                          <div className="w-full h-[1px] bg-Mneutral200"></div>
                        </Fragment>
                      })
                    }



                  </div>
                </Col>
              </Row>
            </Container>
          </div>
      </section>

    )
}

export default FAQSection
