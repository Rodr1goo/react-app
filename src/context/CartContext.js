import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart((prev) => [...prev, item])
    }

    return(
        <CartContext.Provider value={{cart, addItem}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
