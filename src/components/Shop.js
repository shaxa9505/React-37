import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodList from './GoodList';
import Loader from './Loader';

function Shop(props) {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])
    const [isBasket, setBasket] = useState(false)

    function addToBasket (item) {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else{
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else{
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
    }
    
    function handleBasket () {
        setBasket(!isBasket)
    }

    function removeFromPost (itemId) {
        const newOrder = order.filter(item => item.id !== itemId)
        setOrder(newOrder)
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization:  API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false)
            console.log(data);
        })
    }, [])



    return (
        <div className="container content">
        <Cart quantity={order.length} handleBasket={handleBasket} />
            {loading ? <Loader /> : <GoodList goods={goods} addToBasket={addToBasket} />}
            {isBasket && <BasketList order={order} handleBasket={handleBasket} removeFromPost={removeFromPost} />}
        </div>
    );
}

export default Shop;