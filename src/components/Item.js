import React from 'react'


const Item = ({model, modelImage}) => {
    return(
        <div className='item'>
            <div className="itemModel">
                <model-viewer alt="SCX hat" src={model} poster={modelImage} disable-zoom bounds="tight" min-camera-orbit="0deg 65deg 1.2m" max-camera-orbit="360deg 65deg 1m" seamless-poster shadow-intensity="1" scale="2 2 2" field-of-view="180deg" camera-controls></model-viewer>
            </div>
            <div className="itemInfo">
                <div className="itemType">PHYSICAL</div> / <div className="itemType">NFT</div>
            </div>
        </div>
    )
}

export default Item;