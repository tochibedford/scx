import React, { useEffect, useRef, useState } from 'react'
import CanvasDraw from "react-canvas-draw";
import {isMobile} from 'react-device-detect';

const TabulaRasaBody = () => {
    // utitliy functions
    const componentToHex = (c)=>{
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    const rgbToHex = (rgbArr)=>{
        const [r, g, b] = rgbArr;
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    // 0 to 255;
    const number256Generator = () => {
        return Math.floor(Math.random() * 256);
    }

    const newRgb = () =>{
        return ([number256Generator(), number256Generator(), number256Generator()])
    }

    // states
    const [canvasWidth, setCanvasWidth] = useState(400);
    const [canvasHeight, setCanvasHeight] = useState(400);
    const [color, setColor] = useState(rgbToHex(newRgb()))
    const [randomize, setRandomize] = useState(true);

    //form element handlers
    const handleColor = (e)=>{
        setColor(e.target.value)
    }

    const handleRandomize = ()=>{
        setRandomize(prev=>!randomize)
    }

    return (
        <div className="tabulaRasaBody">
            <CanvasDraw
                lazyRadius = {5}
                brushRadius = {3}
                brushColor = {color}
                onChange={() => {
                    if(!randomize){
                        return
                    }
                    setColor(rgbToHex(newRgb()))
                }}
                hideGrid
                canvasWidth = {canvasWidth}
                canvasHeight = {canvasHeight}
            />
            <div className="canvasButtons">
                <div>
                    <input className="colorPicker" value={color} onChange={handleColor} type="color" name="colorPicker"/> Pick a color
                </div>
                <div>
                    <input className="randomizeColor" checked={randomize} onChange={handleRandomize} type="checkbox" name="randomizeColor"/> Randomize color
                </div>
            </div>
            
        </div>
    )
}

export default TabulaRasaBody;