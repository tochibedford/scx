import React from 'react'


const Item = ({model, modelImage}) => {
    return(
        <div className='item'>
            <div className="itemModel">
                <model-viewer alt="SCX hat" src={model} poster={modelImage} disable-zoom seamless-poster shadow-intensity="1" camera-controls></model-viewer>
            </div>
            <div className="itemInfo">
                <div className="itemType">PHYSICAL</div> / <div className="itemType">NFT</div>
            </div>
        </div>
    )
}

export default Item;