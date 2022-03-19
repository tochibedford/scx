import React from 'react'
import logo from '../images/scxLogo.png'

const Topnav = ({pageTitle}) => {
    return(
        <div className='topNav'>
            <div className="logoImageContainer">
                <img src={logo} alt="scxLogo" className="logoImage"/>
            </div>
            <div className="pageTitle">
                {pageTitle.toUpperCase()}
            </div>
        </div>
    )
}

export default Topnav;