import React, { useState } from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import useShop from '../ShopContext';
import { v4 as uuidv4 } from 'uuid';


function Product({ title, price, image, rating }) {
    const [animationStarted, setAnimationStarted] = useState(false);
    const { addToCart } = useShop()
    const id = uuidv4();



    const addProduct = () => {
        setAnimationStarted(true)
        const product = { title, price, image, rating, id }
        addToCart(product)
    }

    const ratingRound = Math.round(rating);

    return (
        <div className='product__container'>
            <h1 className='product__title'>{title}</h1>
            <h1 className='product__price'>{price}$</h1>
            <img src={image} alt="" className='product__image' />
            <div className='product__ratingContainer'>
                {Array(ratingRound)
                    .fill().map((_, i) => (
                        < StarIcon className='product__starIcon' />
                    ))}
            </div>
            <button className={`product__button ${animationStarted ? 'animation' : ''}`} onClick={addProduct} onAnimationEnd={() => setAnimationStarted(false)}
            >
                Add To Basket
            </button>
        </div >
    )
}

export default Product
