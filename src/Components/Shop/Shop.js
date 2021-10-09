import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import '../../fakedb';
import { addToDb, getStoredCart } from '../../fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [displayProduct, setdisplayProduct] = useState([])

    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
                setdisplayProduct(data);
            })
    }, []);
    // getting data from localstorage
    useEffect(() => {
        if (products.length) {
            const store = getStoredCart()
            const storeCart = [];
            for (const key in store) {
                // gettin matched products in a object
                const productL = products.find(productt => productt.key === key);
                // saving the quantity
                if (productL) {
                    const quantity = store[key];
                    productL.quantity = quantity;
                    storeCart.push(productL);
                }
            }
            setcart(storeCart);
        }
        // [] is a dependency. giving products means run this when my products change
    }, [products])
    const [cart, setcart] = useState([]);

    const heandleclick = (prod) => {
        let newcart = []
        // setting quatity
        let productExist = cart.find(product => product.key === prod.key);
        if (productExist) {
            let otherProducts = cart.filter(product => product.key !== prod.key);
            productExist.quantity++;
            newcart = [...otherProducts, productExist];
        } else {
            prod.quantity = 1;
            newcart = [...cart, prod];

        }
        setcart(newcart);
        console.log(cart);
        // adding to localstorage
        addToDb(prod.key);

    }
    let handlesearch = event => {
        let text = event.target.value;
        let result = products.filter(p => p.name.toLowerCase().includes(text.toLowerCase()))
        setdisplayProduct(result);

    }
    return (
        <>
            <div className="searchDiv">
                <input className='search' onChange={handlesearch} placeholder='Search' type="text" name="search" id="search" />
            </div>
            <div className='shop'>
                <div className='product-container'>
                    {displayProduct.map(m => <Product btnname={'add'} heandleclick={heandleclick} key={m.key} product={m}></Product>)}
                </div>
                <div className='cart-container'>
                    <Cart carts={cart}>
                        <Link to='/orders'>
                            <button className='btn'>Review Order</button>
                        </Link>
                    </Cart>

                </div>
            </div>
        </>
    );
};

export default Shop;