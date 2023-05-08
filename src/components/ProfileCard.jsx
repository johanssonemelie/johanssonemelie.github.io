import React from 'react'
import avatar from '../assets/avatar.jpeg'

function ProfileCard() {
    return (
        <div className="card-container">
            <div className="card-shadow"></div>
            <div className="card-frame">
                <div className="card-frame-navbar">
                    <ul>
                        <li className="ball red"></li>
                        <li className="ball yellow"></li>
                        <li className="ball green"></li>
                    </ul>
                    <p>profile.jpeg</p>
                </div>
                <div className="image-wrapper">
                    <img src={avatar} className="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;