import React from 'react';

function BasketItem(props) {

    const { id, name, price, quantity, removeFromPost } = props

    return (
        <li className="colleection-item">
            {name} x{quantity} = {price * quantity} <b>$</b>
            <span className="secondary-content">
                <i className="material-icons basket-delete" onClick={() => removeFromPost(id)}>delete_forever</i>
            </span>
        </li>
    );
}

export default BasketItem;