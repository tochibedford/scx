import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScxFigure from './components/ScxFigure'
import './styles/style.css'
import kevBackground2 from './plasma/kevBackground2.gif'
import scxLogo from './images/scxLogo.png'
import EmailModal from './components/EmailModal'

const App = ()=>{
    const [blur, setBlur] = useState([false, false, false]);
    const [logo, setLogo] = useState(false);

    const showModal = () => {
        document.querySelector(".emailModal").style.display = "flex"
    }
    
    window.onresize = ()=>{
        window.innerWidth<700?setLogo(false):setLogo(true)
    }
    setInterval(()=>{
        if(window.location.pathname === "/"){
            document.body.style.backgroundColor="black";
        }else{
            document.body.style.backgroundColor="#efefef";
        }
    }, 300)
    
    return(
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <div className="scxFigureLine">
                            {window.innerWidth>700?<><ScxFigure
                                id={1}
                                blur={blur[0]}
                                setBlur={setBlur}
                                logo={false}
                                imageMod={kevBackground2}
                                navText=""
                                classAdd="firstFigure"
                            />
                            <ScxFigure
                                id={2}
                                blur={blur[1]}
                                setBlur={setBlur}
                                logo={false}
                                imageMod={kevBackground2}
                                navText=""
                                classAdd="secondFigure"
                            />
                            <ScxFigure
                                id={3}
                                blur={blur[2]}
                                setBlur={setBlur}
                                logo={false}
                                imageMod={kevBackground2}
                                navText=""
                                classAdd="thirdFigure"
                                /></>:
                                <ScxFigure
                                    id={2}
                                    blur={blur[1]}
                                    setBlur={setBlur}
                                    logo = {!logo}
                                    imageMod={kevBackground2}
                                    navText=""
                                    classAdd="secondFigure"
                                />
                                }
                        </div>
                        <div className="motto">"DESIGNER WEARHOUSE FOR YOUR DIGITAL FOOTPRINT."</div>
                        <div className="instructions">CLICK ON ANY SCX FIGURE TO SIGN UP</div>
                        <div className="brandName">SOCIAL CRUCIFIXION</div>
                        <div className="landingPageBrand" onClick={showModal}><div className="landingPageBrandImageContainer"><img className="landingPageBrandImage" src={scxLogo} alt="brand-logo"/></div></div>
                        <EmailModal />
                    </Route>
                    <Route>
                        PAGE NOT FOUND
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App