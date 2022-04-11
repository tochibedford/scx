import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScxFigure from './components/ScxFigure'
import Pages from './components/Pages'
import './styles/style.css'
import kevBackground2 from './plasma/kevBackground2.gif'

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
                                navText="STORE"
                                classAdd="firstFigure"
                            />
                            <ScxFigure
                                id={2}
                                blur={blur[1]}
                                setBlur={setBlur}
                                imageMod={kevBackground2}
                                navText="CHOOSE YOUR FATE"
                                classAdd="secondFigure"
                            />
                            <ScxFigure
                                id={3}
                                blur={blur[2]}
                                setBlur={setBlur}
                                imageMod={kevBackground2}
                                navText="TABULA RASA"
                                classAdd="thirdFigure"
                            />
                        </div>
                        <div className="brandName">SOCIAL CRUCIFIXION</div>
                    </Route>
                    <Route exact path="/store">
                        <Pages pageTitle="store"/>
                    </Route>
                    <Route exact path="/choose-your-fate">
                        <Pages pageTitle="choose your fate"/>
                    </Route>
                    <Route exact path="/tabula-rasa">
                        <Pages pageTitle="tabula rasa"/>
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