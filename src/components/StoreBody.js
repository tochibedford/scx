import React from 'react'
import Item from './Item';
import capModel from '../models/cap.glb';
import capImage from '../models/cap.png'

const StoreBody = () => {
    return (
        <div className="storeBody">
            <Item  model={capModel} modelPoster={capImage}/>
            <Item  model={capModel} modelPoster={capImage}/>
            <Item  model={capModel} modelPoster={capImage}/>
        </div>
    )
}

export default StoreBody;