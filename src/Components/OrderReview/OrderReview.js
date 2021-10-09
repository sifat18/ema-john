import React from 'react';
import '../Shop/Shop.css';

import { clearTheCart, deleteFromDb } from '../../fakedb';
import useCart from '../../Utils/Cartdata';
import useProducts from '../../Utils/productLoad';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { useHistory } from 'react-router';
const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setcart] = useCart(products);
    const heandleclick = (prod) => {
        const newcart = cart.filter(product => product.key !== prod.key)
        setcart(newcart);
        console.log(cart);
        // adding to localstorage
        deleteFromDb(prod.key);

    }
    const history = useHistory();
    const handleOrder = () => {
        clearTheCart();
        history.push('/placeOrder');
        setcart([])

    }
    return (
        <div className='shop'>
            <div className='product-container'>
                {cart.map(m => <Product q={true} btnname={'remove'} heandleclick={heandleclick} key={m.key} product={m}></Product>)}
            </div>
            <div className='cart-container'>
                <Cart carts={cart}>
                    <button className='btn' onClick={handleOrder}>Place Order</button>
                </Cart>

            </div>

        </div>
    );
};

export default OrderReview;