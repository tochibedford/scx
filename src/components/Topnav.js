import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/scxLogo.png'

const Topnav = ({pageTitle}) => {
    return(
        <div className='topNav'>
            <div className="logoImageContainer">
                <Link to='/'><img src={logo} alt="scxLogo" className="logoImage"/></Link>
            </div>
            <div className="pageTitle">
                {pageTitle.toUpperCase()}
            </div>
        </div>
    )
}

export default Topnav;