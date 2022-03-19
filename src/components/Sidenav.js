import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = ({pageTitle}) => {
    const nav = ["STORE", "CHOOSE YOUR FATE", "TABULA RASA"];
    const navElements = nav.map((element, index)=>{
        if (element.toLowerCase() === pageTitle.toLowerCase()){
            return(
                <Link key={index+1} to={`/${element.toLowerCase().replaceAll(' ','-')}`}>
                    <div className="activeSideNav">
                        {element.toUpperCase()}
                    </div>
                </Link>
            )
        } else{
            return (
                <Link key={index + 1} to={`/${element.toLowerCase().replaceAll(' ', '-')}`}>
                    <div className="sideNavElement">
                        {element.toUpperCase()}
                    </div>
                </Link>
            )
        }
    })
    return(
        <div className='sideNav'>
            {navElements}
        </div>
    )
}

export default Sidenav;