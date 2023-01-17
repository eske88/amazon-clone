import React from 'react'
import { Link } from 'react-router-dom';
import useShop from '../ShopContext';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"

function Payment() {
    const { products, user } = useShop();

    const showProducts = products.map((product) => {
        return <CheckoutProduct products={product} />
    })
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{products?.length} items</Link>)

                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>

                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>Abildgade 11 2.th</p>
                        <p>Aarhus N, 8000</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {showProducts}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
