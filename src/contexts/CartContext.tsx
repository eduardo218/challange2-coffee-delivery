import { createContext, ReactNode, useEffect, useState } from "react";

export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

interface CartContextTypes {
    cartItems: CartItem[]
    addItemToCart: (itemToAdd : CartItem) => void
    removeItemFromCart: () => void
}

interface ProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextTypes)

export const CartProvider = ({children}: ProviderProps) => {
    const [cartItems, setcartItems] = useState<CartItem[]>([])
    
    const addItemToCart = (itemToAdd: CartItem) => {
        const itemExists = cartItems.find(item => item.id === itemToAdd.id)
        if(itemExists) {
            const newQuantity = itemExists.quantity += itemToAdd.quantity
            setcartItems(state => state.map(cartItem => {
                if( cartItem.id === itemExists.id) {
                    return {...cartItem, quantity: newQuantity}
                }
                return cartItem
            }))
        }else {
            setcartItems(state => [...state, itemToAdd])
        }
    }

    const removeItemFromCart = () => {
        setcartItems([])
    }


    return <CartContext.Provider 
                value={
                    {
                        cartItems, 
                        addItemToCart, 
                        removeItemFromCart
                    }
                }>
                {children}
            </CartContext.Provider>
}