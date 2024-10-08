import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(el => el.id === action.payload.id)

            if (existingProduct) {
                state.cart = state.cart.map(el => el.id === action.payload.id ?
                    { ...el, quantity: el.quantity + 1 } :
                    el)
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart : (state , action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload)
        },
        increment: (state, action) => {
            state.cart = state.cart.map(el => el.id === action.payload ?
                { ...el, quantity: el.quantity + 1 } : el)
        },
        decrement: (state, action) => {
            state.cart = state.cart.map(el => el.id === action.payload ?
                { ...el, quantity: el.quantity - 1 } : el)
            state.cart = state.cart.filter(el => el.quantity > 0)
        },
    }
})


export const { addToCart , removeFromCart , decrement , increment} = cartSlice.actions
export default cartSlice.reducer