import React, { useEffect, useRef, useState } from 'react'
import CanvasDraw from "react-canvas-draw";
import {isMobile} from 'react-device-detect';

const TabulaRasaBody = () => {

    // 0 to 255;
    const number255Generator = () => {
        return Math.floor(Math.random() * 256);
    }

    return (
        <div className="tabulaRasaBody">
            <CanvasDraw />
        </div>
    )
}

export default TabulaRasaBody;