import React, { useEffect, useRef, useState } from 'react'

const StoreBody = () => {
    
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("rgb(0,0,0)");

    var touchAvailable = ('createTouch' in document) || ('onstarttouch' in window);

    // 0 to 255;
    const number255Generator = () => {
        return Math.floor(Math.random() * 256);
    }

    useEffect(()=>{
        const canvas = canvasRef.current;
        var scale = window.devicePixelRatio;
        const canvasPadding = 50;

        // code to support higher pixel density
        canvas.width = Math.floor((canvas.parentNode.offsetWidth - canvasPadding) * scale);
        canvas.height = Math.floor((canvas.parentNode.offsetHeight - canvasPadding) * scale);
        canvas.style.width = `${canvas.parentNode.offsetWidth - canvasPadding}px`;
        canvas.style.height = `${canvas.parentNode.offsetHeight - canvasPadding}px`;

        const context = canvas.getContext('2d');
        context.scale = (scale, scale);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = color;
        context.lineWidth = 3;
        contextRef.current = context;
    },[]);

    const startDrawing = ({nativeEvent})=>{
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
        return false;
    }

    const finishDrawing = ()=>{
        contextRef.current.closePath();
        setColor(`rgb(${number255Generator()}, ${number255Generator()}, ${number255Generator()})`)
        contextRef.current.strokeStyle = color;
        setIsDrawing(false);
        return false;
    }

    const draw = ({nativeEvent})=>{
        if(!isDrawing){
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        return false;
    }

    return (
        <div className="tabulaRasaBody">
            {touchAvailable?
                <canvas 
                ref = {canvasRef} 
                onTouchStart={startDrawing} 
                onTouchEnd={finishDrawing} 
                onTouchCancel={finishDrawing} 
                onTouchMove={draw} 
                className="tabulaCanvas"/>:
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                    className="tabulaCanvas"
                />
            }
        </div>
    )
}

export default StoreBody;