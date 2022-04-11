import React from 'react'
import Item from './Item';
import capModel1 from '../models/brown1.glb';
import capModel2 from '../models/blue1.glb';
import capModel3 from '../models/whiteBlack1.glb';
import capImage from '../models/cap.png'

const StoreBody = () => {
	const productIds = ["product-component-1649633574114", "product-component-1649635110274", "product-component-1649635310221"]
    return (
        <div className="storeBody">
            <Item  model={capModel1} modelPoster={capImage} productId={productIds[0]}/>
            <Item  model={capModel2} modelPoster={capImage} productId={productIds[1]}/>
            <Item  model={capModel3} modelPoster={capImage} productId={productIds[2]}/>
        </div>
    )
}

export default StoreBody;