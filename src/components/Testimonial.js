import React from 'react'

export default function Testimonial() {
    return (
        
        
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

    )
}
