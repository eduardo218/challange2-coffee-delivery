import { createContext, ReactNode, useState } from "react";

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
    removeItemFromCart: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
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

    const removeItemFromCart = (id: number) => {
        const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== id)
        setcartItems(filteredCartItems)
    }

    const increaseQuantity = (id: number) => {
        setcartItems(state => state.map(cartItem => {
            if(cartItem.id === id){
                const newQuantity = cartItem.quantity + 1
                return {...cartItem, quantity: newQuantity}
            }
            return cartItem
        }))
    }

    const decreaseQuantity = (id: number) => {
        setcartItems(state => state.map(cartItem => {
            if(cartItem.id === id && cartItem.quantity > 1){
                const newQuantity = cartItem.quantity - 1
                return {...cartItem, quantity: newQuantity}
            }else if(cartItem.id === id && cartItem.quantity === 1){
                removeItemFromCart(id)
            }
            return cartItem
        }))
    }


    return <CartContext.Provider 
                value={
                    {
                        cartItems, 
                        addItemToCart, 
                        removeItemFromCart,
                        increaseQuantity,
                        decreaseQuantity
                    }
                }>
                {children}
            </CartContext.Provider>
}