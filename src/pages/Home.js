import React from 'react'
import Events from '../components/Events.js'
import Sponsors from '../components/Sponsors.js'
import CommunityPartners from '../components/CommunityPartners.js'
import Departments from '../components/Departments.js'
import Hero from '../components/Hero.js'
import Navbar from '../components/Navbar.js'
import Teams from '../components/Teams.js'
import FAQs from '../components/FAQs.js'

export default function Home() {
    return (
        <>
  <div className="wrapper">
    <Navbar />
    <div id="main" className="main">
      <Hero />
      <Departments />
      {/* Features Section */}
      <div id="features" className="ft-flex">
        <div className="container">
            
        <div className="yd-stats" style={{
            marginBottom: '-150px',
            zIndex: '2',
            position: 'relative',
            background: 'none',
        }}>
        <div className="container-s"></div>
        <div className="row text-center">
            <div className="col-sm-12">
              <div className="intro">
                <h4>OUR RESULTS</h4>
                <h2>Blogs that Might Helpful for you</h2>
              </div>
            </div>
            </div>
            </div>
          <div className="ft-inner align-center">
            <div className="ft-image wow">
              <img
                className="img-fluid"
                src="assets/images/support.png"
                alt="Feature"
              />
            </div>
            <div className="ft-text">
              <div className="ft-content">
                <h2>10 Days of Open Source</h2>
                <p>
                  {" "}
                  When you get staright to the point the presentation looks
                  attractive on your web pages.
                </p>
                <ul>
                  <li>
                    <img src="assets/icons/tick.svg" alt="Tick" /> Realtime
                    broadcasts{" "}
                  </li>
                  <li>
                    <img src="assets/icons/tick.svg" alt="Tick" /> Upload and
                    sit tight{" "}
                  </li>
                  <li>
                    <img src="assets/icons/tick.svg" alt="Tick" /> View realtime
                    stats
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ft-inner ft-inverted align-center">
            <div className="ft-image f-image-inverted">
              <img
                className="img-fluid"
                src="assets/images/write.png"
                alt="Feature"
              />
            </div>
            <div className="ft-text">
              <div className="ft-content">
                <h2>Upcoming Event</h2>
                <p>
                  {" "}
                  When you get staright to the point the presentation looks
                  attractive on your web pages.
                </p>
                <ul>
                  <li>
                    <img src="assets/icons/tick.svg" alt="Tick" /> Realtime
                    broadcast{" "}
                  </li>
                  <li>
                    <img src="assets/icons/tick.svg" alt="Tick" /> View realtime
                    stats{" "}
                  </li>
                  <li>
                    <img src="assets/icons/tick.svg" alt="Tick" /> Upload and
                    sit tight{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     <Teams />

      {/* YD Flex Grid Section */}
      <div id="reviews" className="yd_reviews">
        <div className="container">
          <div className="yd_rev_inner">
            <div className="row">
              <div className="col-md-5">
                <div className="rev-intro">
                  <h2>Stories from our customers</h2>
                  <p>
                    {" "}
                    When you get staright to the point the presentation looks
                    attractive.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="rev-list owl-carousel owl-theme">
                  <div className="rev-block">
                    <img src="assets/icons/quote.svg" width={60} alt="Quote" />
                    <h2>
                      Pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. We use Connect for
                      key for easy and seamless weekly communication with our
                      clients and .
                    </h2>
                    <div className="rev-client">
                      <div className="rev-icon">
                        <div className="rev-img">
                          <img
                            className="rounded-circle"
                            src="assets/icons/rev.png"
                            width={60}
                            alt="Feature"
                          />
                        </div>
                      </div>
                      <div className="rev-text">
                        <h3>Marty McFly</h3>
                        <p>
                          Head of OP, <a href="#">Future LLC</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rev-block">
                    <img src="assets/icons/quote.svg" width={60} alt="Quote" />
                    <h2>
                      {" "}
                      Pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. We use Connect for
                      key for easy and seamless weekly communication with our
                      clients.
                    </h2>
                    <div className="rev-client">
                      <div className="rev-icon">
                        <div className="rev-img">
                          <img
                            className="rounded-circle"
                            src="assets/icons/rev2.png"
                            width={60}
                            alt="Feature"
                          />
                        </div>
                      </div>
                      <div className="rev-text">
                        <h3>Dr. Strange</h3>
                        <p>
                          CTO, <a href="#">Arma Systems</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rev-block">
                    <img src="assets/icons/quote.svg" width={60} alt="Quote" />
                    <h2>
                      We use Connect for key for easy and seamless weekly
                      communication with our clients. Pariatur cliche
                      reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid.
                    </h2>
                    <div className="rev-client">
                      <div className="rev-icon">
                        <div className="rev-img">
                          <img
                            className="rounded-circle"
                            src="assets/icons/rev3.png"
                            width={60}
                            alt="Feature"
                          />
                        </div>
                      </div>
                      <div className="rev-text">
                        <h3>John Kennedy</h3>
                        <p>
                          Manager Sales, <a href="#">Optima Corp</a>
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
      <Events />
        <Sponsors />
        <CommunityPartners />
        <FAQs />
              
      <div id="cta" className="yd_cta_box">
        <div className="container">
          <div className="cta_box">
            <div className="cta_box_inner">
              <div className="col-sm-12 col-md-12">
                <h4>start your trial</h4>
                <h2>
                  Connect is made just for you. Ready to build your next
                  project?
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
