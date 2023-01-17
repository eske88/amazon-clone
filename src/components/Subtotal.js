import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import useShop from '../ShopContext'

function Subtotal() {
    const { total, products } = useShop();
    const itemsInCart = products.length;

    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>Subtotal({itemsInCart} items): <strong>{value}</strong></p>
                </>
            )}
                decimalScale={2}
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal
