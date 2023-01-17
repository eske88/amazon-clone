import React from 'react'
import useShop from '../ShopContext';
import "./CheckoutProduct.css"


function CheckoutProduct({ products }) {
    const { title, price, image } = products;

    const { removeFromCart } = useShop();

    const removeProduct = () => {
        removeFromCart(products)
    }

    return (
        <div className='checkout__product'>
            <img src={image} alt="" className='checkout__product__image' />
            <h1 className='checkout__product__title'>{title}</h1>
            <div className="checkout__product__button__price">
                <h1 className='checkout__product__price'>{price}$</h1>
                <button className='checkout__product__button' onClick={removeProduct} >
                    Remove From To Basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
