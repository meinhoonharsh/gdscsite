import React from 'react'
import OurSponsors from '../json/sponsors.json'

export default function Sponsors() {
    return (
        <>
        <div className="titleline">
            <span>Our Sponsors</span>
        </div>
        <div className="container">
            <div className="logo-container">

                {OurSponsors.map((community, index) => {
                    return (
                        <div className="logo-item">
                            <a href={community.url}>
                                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" alt={community.name} />
                            </a>
                        </div>
                    )
                })}

            </div>
        </div>
    </>

    )
}
