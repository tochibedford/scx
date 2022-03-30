import React, { useEffect, useRef, useState } from 'react'

const TabulaRasaBody = () => {
    
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("rgb(0,0,0)");
    const [lineWidth, setLineWidth] = useState(3);
    const [lineOpacity, setLineOpacity] = useState(0.1);

    //get current position of mouse
    function getMousePosition(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
    }

    // 0 to 255;
    const number255Generator = () => {
        return Math.floor(Math.random() * 256);
    }

    useEffect(()=>{
        const canvas = canvasRef.current;
        var scale = window.devicePixelRatio;
        const canvasPadding = 80;

        // code to support higher pixel density
        canvas.width = Math.floor((canvas.parentNode.offsetWidth - canvasPadding) * 1);
        canvas.height = Math.floor((canvas.parentNode.offsetHeight - canvasPadding) * 1);
        canvas.style.width = `${canvas.parentNode.offsetWidth - canvasPadding}px`;
        canvas.style.height = `${canvas.parentNode.offsetHeight - canvasPadding}px`;

        const context = canvas.getContext('2d');
        context.scale = (1, 1);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.globalAlpha = lineOpacity;
        contextRef.current = context;

        // canvas.addEventListener('touchstart', function (e) {
        //     if (e.target === canvas) {
        //         e.preventDefault();
        //     }
        // }, { passive: false });

        // canvas.addEventListener('touchend', function (e) {
        //     if (e.target === canvas) {
        //         e.preventDefault();
        //     }
        // }, { passive: false });

        // canvas.addEventListener('touchmove', function (e) {
        //     if (e.target === canvas) {
        //         e.preventDefault();
        //     }
        // }, );

        canvas.addEventListener('touchstart',function(e){
            e.preventDefault();
            var mousePos = getMousePosition(canvas,e)
            var touch = e.touches[0];
            var mouseEvent =  new MouseEvent("mousedown",{
                clientX:touch.clientX,
                clientY:touch.clientY
            });
            console.log(mouseEvent)
            canvas.dispatchEvent(mouseEvent)
        },{ passive: false });
        canvas.addEventListener('touchend', function (e) {
            e.preventDefault();
            var mouseEvent = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(mouseEvent)
        }, { passive: false });
        canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent)
        }, { passive: false });
    }, []);

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
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                className="tabulaCanvas"
            />
        </div>
    )
}

export default TabulaRasaBody;