import React from 'react'

export default function Navbar() {
    return (
        <>
             {/* Navbar Section */}
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top wt-border">
      <div className="container">
        <a className="navbar-brand" href="#">
          GDSC UIT RGPV
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#main">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#features">
                Departments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#reviews">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#pricing">
                Join Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#faqs">
                Blogs
              </a>
            </li>
            {/* <li>
              <a className="btn-nav js-scroll-trigger" href="#cta">
                Download
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    {/* Navbar End */}
   
        </>
    )
}
