import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product) => {
        const updateCart = state.products.concat(product)
        updatePrice(updateCart)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCart,
            }
        })
    }

    const removeFromCart = (product) => {
        const updateCart = state.products.filter((currentProduct) => currentProduct.id !== product.id)
        updatePrice(updateCart)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updateCart
            }
        })
    }

    const updatePrice = (products) => {
        let total = 0
        products.forEach((product) => total += product.price)
        dispatch({
            type: "UPDATE_PRICE",
            payload: {
                total
            }
        })
    }

    const updateUserStatus = (authUser) => {
        console.log(authUser, "updateUserStatus")
        if (authUser) {
            dispatch({
                type: "SET_USER",
                payload: {
                    user: authUser
                }
            })
        } else {
            dispatch({
                type: "SET_USER",
                payload: {
                    user: null
                }
            })
        }
    }



    const value = {
        total: state.total,
        products: state.products,
        user: state.user,
        addToCart,
        removeFromCart,
        updateUserStatus,
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error("useShop must be defined")
    }
    return context
}

export default useShop