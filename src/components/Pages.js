import React from 'react'
import Topnav from './Topnav'
import Sidenav from './Sidenav'
import StoreBody from './StoreBody'
import FateBody from './FateBody'
import TabulaRasaBody from './TabulaRasaBody'

const Pages = ({pageTitle})=>{
    // try adding store class to page div
    return(
        <div className='page'>
            <Topnav pageTitle={pageTitle}/>
            <Sidenav pageTitle={pageTitle}/>
            {
                pageTitle.toLowerCase()==="store"? <StoreBody />:
                    pageTitle.toLowerCase() === "choose your fate"? <FateBody />:
                        <TabulaRasaBody />

            }
        </div>
    )
}

export default Pages;