import React from 'react'

export default function FAQs() {
    return (
        <>
        {/* Faq Section */}
      <div id="faqs" className="yd_faqs">
        <div className="container">
          <div className="faq_inner">
            <div className="col-md-10 offset-md-1">
              <div className="faq_intro">
                <h2>Frequently Asked Queries</h2>
                <p>
                  Pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </p>
                <h5>Still have questions?</h5>{" "}
                <a className="link-btm" href="#">
                  Contact us
                </a>
              </div>
              <div id="accordion">
                <div className="row">
                  <div className="col-md-6 custompadding">
                    <div className="card mb-0">
                      <div
                        className="card-header collapsed"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <a className="card-title">What is the purpose of a Developer Students Club?</a>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                          DSC is a Google Developers program for university students, designed to help them build their mobile and web development skills and knowledge. It is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 custompadding">
                    <div className="card mb-0">
                      <div
                        className="card-header collapsed"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <a className="card-title">
                        What's the eligibility criteria for becoming a DSC lead?

                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                          You must have to be enrolled in an undergraduate program at a college or university.
                          You must have to be a student of either 1st year or 2nd year.
                          For getting selected, you must have to be committed to the program for at least one year.

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 custompadding">
                    <div className="card mb-0">
                      <div
                        className="card-header collapsed"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <a className="card-title">
                        What is the purpose of 30 day Google Cloud Program?
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                          30 Days of Google Cloud program will provide you an opportunity to kickstart your career in cloud and get hands-on practice on Google Cloud Platform - the tool that powers apps like Google Search, Gmail and YouTube.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 custompadding">
                    <div className="card mb-0">
                      <div
                        className="card-header collapsed"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <a className="card-title">
                        What skills do you need to become a developer?
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                          <b>Coding and programming</b>- Professional developers specialise in at least one programming language, though most have a knowledge of several.
<b>Problem-solving</b>-No matter the discipline, developers are called upon to solve user problems with code and fix problems inside programs.
<b>Testing and maintaining</b>
Developers are tasked with debugging, upgrading and reiterating programs and work with testers and users to keep improving them.

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Faq Section End */}
        </>
    )
}
