import React from 'react'
import teamMembers from '../json/teams.json'

export default function Teams() {
    return (
      <div className="yd-stats">
      <div className="container-s">
        <div className="row text-center">
          <div className="col-sm-12">
            <div className="intro">
              <h4>OUR RESULTS</h4>
              <h2>Our Awesome Team</h2>
            </div>
          </div>

            {
                teamMembers.map(member => {
                    return (
                        <>
                            <div className="col-6 col-sm-3">
            <div className="counter-up">
              <div className="counter-icon">
                <img src={"assets/icons/"+member.image} alt="Icon" />
              </div>
              <h3>
                {member.name}
              </h3>
              <div className="counter-text">
                <h2>{member.position}</h2>
              </div>
            </div>
          </div>
                        </>
                    )
                })
            }

         
         
        </div>
      </div>
    </div>
    )
}
