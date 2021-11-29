import React from 'react'
import './components.css'
import Communities from '../json/communitypartners.json'
export default function CommunityPartners() {
    return (
        
        <>
            <div className="titleline">
                <span>Our Community Partners</span>
            </div>
            <div className="container">
                <div className="logo-container">

                    {Communities.map((community, index) => {
                        return (
                            <div className="logo-item">
                                <a href={community.url}>
                                    <img src={require('./../assets/images/logos/'+community.logo+'.png').default} alt={community.name} />
                                </a>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
