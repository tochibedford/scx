import React from 'react'
import { useHistory } from 'react-router-dom'
import scxFigureImage from '../images/SCX-MAIN-FIGURES.png'

const ScxFigure = ({id, setBlur, blur, classAdd, imageMod, navText})=>{
    const history = useHistory();
    const styles = {
        filter: `invert(1) blur(${blur? 2 : 0}px)`
    }

    const stylesText = {
        filter: `blur(${blur? 2 : 0}px)`
    }
    
    const toggleHover = (event)=>{

        //starting actual blur
        setBlur(prevBlur => {
            const newBlur = [...prevBlur]
            for (let index = 0; index < newBlur.length; index++) {
                if(index !== event.target.id-1){
                    newBlur[index] = !prevBlur[event.target.id - 1]
                }
            }
            
            return (
                newBlur
            )
        })

        //change gif based on component
        if (event.target.id === "1"){
            const imgMod = event.target.parentNode
            imgMod.lastChild.classList.remove("hidden")
        }

        if(event.target.id === "2"){
            const imgMod = event.target.parentNode
            imgMod.lastChild.classList.remove("hidden")
            imgMod.lastChild.style.opacity = 1;

        }

        if (event.target.id === "3"){
            const imgMod = event.target.parentNode
            imgMod.lastChild.classList.remove("hidden")
        }
    }

    const resetBlur = (event)=>{
        setBlur([false, false, false])
        document.querySelector("body").style.backgroundImage = null
        const imgMod = event.target.parentNode
        if (event.target.id === "1" || event.target.id === "3") {
            imgMod.lastChild.classList.add("hidden")

        }
        else{
            imgMod.lastChild.style.opacity = 0;
            imgMod.lastChild.classList.add("hidden");
        }
    }
    
    // check if component instance is the middle one, then remove hidden
    if(id-1 === 2){
        // const imgMod = document.querySelector(".secondFigure");
        // console.log(imgMod)
        // imgMod.classList.remove("hidden")   
    }

    const handleNav = ()=>{
        history.push(`/${navText.toLowerCase().replaceAll(' ','-')}`)
    }
    return(
        <div className={`scxFigureImageContainer ${classAdd}`}>
            <img id={id} onClick={handleNav} style={styles} onMouseOver={toggleHover} onMouseOut={resetBlur} className={`scxFigureImage ${classAdd}Image`} src={scxFigureImage} alt="scxFigureImage"/>
            <h2 className="navText" style={stylesText}>{navText}</h2>
            <img id={`mod${id}`} src={imageMod} className="imageMod hidden" alt="plasmaImage"/>
        </div>
    )
}

export default ScxFigure;