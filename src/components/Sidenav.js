import React, {useState} from 'react'
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

    const [navArrow, setNavArrow] = useState(false) // false meaning the side Nav should show
    
    const handleRightArrow = (e)=>{
        if(!navArrow){
            e.target.parentNode.classList.add("hiddenSideNav")
            e.target.classList.add("rotateNavArrow")
            setNavArrow(prev=>(!prev))
        }else{
            e.target.parentNode.classList.remove("hiddenSideNav")
            e.target.classList.remove("rotateNavArrow")
            setNavArrow(prev => (!prev))
        }

    }

    return(
        <div className='sideNav'>
            {navElements}
            <div className="navArrow" onClick={handleRightArrow}>{`<<`}</div>
        </div>
    )
}

export default Sidenav;