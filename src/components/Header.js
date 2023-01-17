import React from 'react'
import "./Header.css"
import amazonLogo from "../images/amazon-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import useShop from '../ShopContext';
import { auth } from '../firebase';


function Header() {
    const { products, user } = useShop();
    const itemsInCart = products.length;


    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img src={amazonLogo} alt="" className='header__logo' />
            </Link>
            <div className="header__search">
                <input type="text" name="" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="inactive__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className='header__optionLineOne'>
                            Hello {user ? user.email.substring(0, user.email.indexOf("@")) : "Guest"}
                        </span>
                        <span className='header__optionLinetow'>
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLinetow'>
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLinetow'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className='header__basketIcon' />
                        <span className='header__optionLineTow header__basketCount'>
                            {itemsInCart}
                        </span>
                    </div>
                </Link>


            </div>


        </div>
    )
}

export default Header
