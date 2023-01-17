import React, { useEffect, useState } from 'react'
import "./Home.css"
import Product from "./Product"
import blackLogo from "../images/amazon-logo-black.png"

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const createItems = data.map((item, index) => {
        return <Product key={index} title={item.title} image={item.image} rating={item.rating.rate} price={item.price} />
    })

    return (
        <div className='home'>
            <div className="home__container">
                <img src="https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg" alt="" className='home__image' />
                <h1 className='home__title'> <img src={blackLogo} alt="" className='home__black__logo' /></h1>
            </div>
            <div className="all__products">
                {data && createItems}
            </div>
        </div>
    )
}

export default Home
