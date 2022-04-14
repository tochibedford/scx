import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScxFigure from './components/ScxFigure'
import './styles/style.css'
import kevBackground2 from './plasma/kevBackground2.gif'
import EmailModal from './components/EmailModal'

const App = ()=>{
    const [blur, setBlur] = useState([false, false, false]);
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
                            <ScxFigure
                                id={1}
                                blur={blur[0]}
                                setBlur={setBlur}
                                imageMod={kevBackground2}
                                navText=""
                                classAdd="firstFigure"
                            />
                            <ScxFigure
                                id={2}
                                blur={blur[1]}
                                setBlur={setBlur}
                                imageMod={kevBackground2}
                                navText=""
                                classAdd="secondFigure"
                            />
                            <ScxFigure
                                id={3}
                                blur={blur[2]}
                                setBlur={setBlur}
                                imageMod={kevBackground2}
                                navText=""
                                classAdd="thirdFigure"
                            />
                        </div>
                        <div className="motto">"DESIGNER WEARHOUSE FOR YOUR DIGITAL FOOTPRINT."</div>
                        <div className="instructions">CLICK ON ANY SCX FIGURE TO SIGN UP</div>
                        <div className="brandName">SOCIAL CRUCIFIXION</div>
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