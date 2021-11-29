import React from 'react'

export default function Hero() {
    return (
        <>
         <div className="home">
        <div className="container">
          <div className="hero-content wow fadeIn">
            <div className="flex-split">
              <div className="container">
                <div className="flex-inner flex-inverted align-center">
                  <div className="f-image f-image-inverted">
                    <img
                      className="img-fluid"
                      src="assets/images/head.png"
                      alt="Feature"
                    />
                  </div>
                  <div className="f-text">
                    <div className="left-content">
                      <h4>Google Developer Students Club</h4>
                      <h2>University Institute of Technology, RGPV</h2> 
                      <a
                        className="btn-action btn-outline nav-link js-scroll-trigger"
                        href="#features"
                      >
                        See More
                      </a>
                      <a className="btn-action" href="#">
                        Join Us
                      </a>
                    </div>
                    <p className="condition_txt">
                    The DSC chapter of University Institute of Technology RGPV, Bhopal promotes and felicitates a community of like minded students who are problem solvers and eager learners from different subject backgrounds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
        </>
    )
}
