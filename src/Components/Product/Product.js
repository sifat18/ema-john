import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';


const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <img src={props.product.img} alt="" />
            <div className='info'>
                <h3>{props.product.name}</h3>
                <p>Price: {props.product.price}</p>
                <p>Category: {props.product.category}</p>
                {!props.q ?
                    <p>Stock:  {props.product.stock}</p> :
                    <p>Quantity:  {props.product.quantity ? props.product.quantity : 1}</p>
                }
                <p className='star'>
                    <Rating initialRating={props.product.star} emptySymbol='far fa-star' fullSymbol='fas fa-star' readonly></Rating>
                </p><button className="btn" onClick={() => props.heandleclick(props.product)}>{element}{props.btnname} to cart</button>
            </div>
        </div>
    );
};

export default Product;