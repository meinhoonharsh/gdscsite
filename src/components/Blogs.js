import React from 'react'

export default function Blogs() {
  return (
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
  )
}
