import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Checkout.css"
import Subtotal from './Subtotal'
import useShop from '../ShopContext'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const { products } = useShop();
    const navigate = useNavigate();



    const showProducts = products.map((product) => {
        return <CheckoutProduct products={product} />
    })

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <h1 className='checkout__title'>Your Shopping Basket</h1>
                {showProducts}

            </div>
            <div className="checkout__right">

                <Subtotal />
                <small className='subtotal_gift'>
                    <input type="checkbox" />
                    This order contains a gift
                </small>
                <Link to="/payment">
                    <button onClick={e => navigate("/payment", { replace: true })} className='checkout__button '>
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
