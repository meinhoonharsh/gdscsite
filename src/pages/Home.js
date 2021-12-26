import React from 'react'
import Events from '../components/Events.js'
import Sponsors from '../components/Sponsors.js'
import CommunityPartners from '../components/CommunityPartners.js'
import Departments from '../components/Departments.js'
import Hero from '../components/Hero.js'
import Navbar from '../components/Navbar.js'
import Teams from '../components/Teams.js'
import FAQs from '../components/FAQs.js'
import Blogs from '../components/Blogs.js'
import Testimonial from '../components/Testimonial.js'

export default function Home() {
    return (
        <>
  <div className="wrapper">
    <Navbar />
    <div id="main" className="main">
      <Hero />
      <Departments />
      <Blogs />
      <Teams />
      <Testimonial />
      <Events />
      <Sponsors />
      <CommunityPartners />
      <FAQs />
              
      <div id="cta" className="yd_cta_box">
        <div className="container">
          <div className="cta_box">
            <div className="cta_box_inner">
              <div className="col-sm-12 col-md-12">
                <h4>Join Us</h4>
                <h2>Get connected with us and be up to date on everything!
                </h2>
                <div className="form">
                  <form
                    id="chimp-form"
                    className="subscribe-form"
                    action="http://ydirection.com/Connect/assets/php/subscribe.php"
                    method="post"
                    acceptCharset="UTF-8"
                    encType="application/x-www-form-urlencoded"
                    autoComplete="off"
                    noValidate
                  >
                    <input
                      className="mail"
                      id="chimp-email"
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      autoComplete="off"
                    />
                    <input
                      className="submit-button"
                      type="submit"
                      defaultValue="Sign Up"
                    />
                  </form>
                  <div id="response" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="footer-logo">
                <h2>C O N N E C T.</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul className="footer-menu">
                <li>
                  <a href="#main">About</a>{" "}
                </li>
                <li>
                  <a href="#main">Privacy</a>{" "}
                </li>
                <li>
                  <a href="#main">Terms</a>{" "}
                </li>
                <li>
                  <a href="#main">Contact</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-12">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="#main">
                      {" "}
                      <img
                        className="img-fluid"
                        src="assets/icons/i1.png"
                        alt="Icon"
                      />{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#main">
                      {" "}
                      <img
                        className="img-fluid"
                        src="assets/icons/i2.png"
                        alt="Icon"
                      />{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#main">
                      {" "}
                      <img
                        className="img-fluid"
                        src="assets/icons/i3.png"
                        alt="Icon"
                      />{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#main">
                      {" "}
                      <img
                        className="img-fluid"
                        src="assets/icons/i4.png"
                        alt="Icon"
                      />{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll To Top */}
          <a
            id="back-top"
            className="back-to-top js-scroll-trigger"
            href="#main"
          />
          {/* Scroll To Top Ends*/}
        </div>
      </div>
    </div>{" "}
    {/* Main */}
  </div>
  {/* Wrapper */}
</>

    )
}
