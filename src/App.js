import React, {useState} from 'react'
import ScxFigure from './components/ScxFigure'
import './styles/style.css'
import kevBackground1 from './plasma/kevBackground1.gif'
import kevBackground2 from './plasma/kevBackground2.gif'
// import kevBackground2 from './plasma/test.mp4'
import kevBackground3 from'./plasma/kevBackground3.gif'

const App = ()=>{
    const [blur, setBlur] = useState([false, false, false]);
    return(
        <div className="app">
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
                    navText="TABULA ROSSA"
                    classAdd="thirdFigure"
                />
            </div>
            <div className="brandName">SOCIAL CRUCIFIXION</div>
        </div>
    )
}

export default App