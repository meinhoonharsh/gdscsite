import React from 'react'

export default function Events() {
    return (
      <div id="pricing" className="pricing-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1">
            <div className="pricing-intro">
              <h1>Past & Unpcoming Events</h1>
              <p>
              GDSC- UIT RGPV organises events throughout the year to encourage the students to learn new skills.

              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="table-left">
                  <h2>10 Days of Open Source</h2>
                  <p>Limited features</p>
                  <img
                    className="img-fluid"
                    src="assets/icons/f1.png"
                    width={120}
                    alt="Icon"
                  />
                  <div className="pricing-details">
                    <span>Free</span>
                    <div className="sub_span">One year</div>
                  </div>
                  <a className="btn-action">Download</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="table-right">
                  <h2>Things to do in Freshmen year</h2>
                  <p>Unlimited Lifetime</p>
                  <img
                    className="img-fluid"
                    src="assets/icons/f3.png"
                    width={120}
                    alt="Icon"
                  />
                  <div className="pricing-details">
                    <span>$99.99</span>
                    <div className="sub_span sub_span_alt">Lifetime</div>
                  </div>
                  <a className="btn-action btn-outline">Subscribe</a>
                </div>
              </div>
            </div>
            <p className="refund-txt">
              * Refund requests can be accepted with in 10 days of the
              purchase.
            </p>
          </div>
        </div>
      </div>
    </div>

    )
}
