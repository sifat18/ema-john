import React from 'react';

const Cart = (props) => {
    let total = 0;
    let totalQuantity = 0;
    let tax = 0
    for (const prod of props.carts) {
        let quantity = !prod.quantity ? 1 : prod.quantity;
        total = total + prod.price * quantity;
        totalQuantity = totalQuantity + quantity;
    }
    let ship = totalQuantity > 0 ? 15 : 0;
    tax = totalQuantity > 0 ? (total + ship * .10) : 0;

    return (
        <div className='summary'>
            <h3 className='red'>Order Summary</h3>
            <h3 className='red'>items: {totalQuantity}</h3>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shippig: {ship.toFixed(2)}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>grandtotal: {(tax + total).toFixed(2)}</p>
            {props.children}


        </div>
    );
};

export default Cart;