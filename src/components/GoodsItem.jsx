import React, {useContext} from 'react';
import {ShopContext} from "../context";

const GoodsItem = ({id, name, description, price, full_background}) => {

    const {addToBasket} = useContext(ShopContext)

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>

            </div>
            <div className="card-content">
                <p>{description}</p>
                <span className="card-title">{name}</span>
            </div>
            <div className="card-action">
                <button className='btn' onClick={() => addToBasket({id, name, price})}>Купить</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price}</span>
            </div>
        </div>
    );
}

export default GoodsItem;
