import React from 'react'
import DepartmentsJSON from '../json/departments.json'

export default function Departments() {
    return (
        <>
         {/*- About Section */}
      <div className="yd-cat">
        <div className="container">
          <div className="cat-inner">
            <div className="cat-flex">
              <div className="cat2">
                <h4>What's inside</h4>
                <h2>About Our Departments </h2>
                <p>
                  
                Various technical and non technical departments work in synergy with each other and play a pivotal role in our overall success!

                </p>
              </div>
            </div>
            <div className="cat-flex">
              
              {DepartmentsJSON.map((item, index) => (
              <div className="cat1">
                <div className={'cat-item clr'+(index+1)} style={{
                  background: "#"+item.bg
                }}>
                  <div className="cat-icon">
                    <div className="cat-img">
                      <img
                        src={'assets/icons/'+item.icon}
                        width={80}
                        alt="Feature"
                      />
                    </div>
                  </div>
                  <div className="cat-text">
                    <h3>{item.name}</h3>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              ))}
              

            </div>
          </div>
        </div>
      </div>
         
        </>
    )
}
