import React from 'react'
import Item from './Item';
import capModel1 from '../models/brown1.glb';
import capModel2 from '../models/blue1.glb';
import capModel3 from '../models/whiteBlack1.glb';
import capImage from '../models/cap.png'

const StoreBody = () => {
    return (
        <div className="storeBody">
            <Item  model={capModel1} modelPoster={capImage}/>
            <Item  model={capModel2} modelPoster={capImage}/>
            <Item  model={capModel3} modelPoster={capImage}/>
        </div>
    )
}

export default StoreBody;