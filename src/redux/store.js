import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productsReducer'
import cartReducer from './cartReducer'
import dark from './DarkMode'
const store = configureStore({
    reducer : {
        products : productReducer,
        cart : cartReducer,
        mode : dark
    }
})

export default store