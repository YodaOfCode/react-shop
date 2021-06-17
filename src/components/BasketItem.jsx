import React, {useContext} from 'react';
import {ShopContext} from "../context";

const BasketItem = ({
                        id,
                        name,
                        price,
                        quantity,
                    }) => {

    const {incQuantity, decQuantity, removeFromBasket} = useContext(ShopContext)


    return (
        <ul>
            <li className="collection-item">
                {name} {' '}
                <i className='material-icons basket-icon' onClick={() => incQuantity(id)}>add</i> {' '}
                x{quantity} {' '}
                <i className='material-icons basket-icon'
                   onClick={() => decQuantity(id)}>remove</i> = {price * quantity}
                <span className="secondary-content">
                        <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i>
                </span>
            </li>
        </ul>
    );
};

export default BasketItem;
