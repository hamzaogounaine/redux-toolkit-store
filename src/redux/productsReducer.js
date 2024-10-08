import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts: (state, action) => {
            state.products = action.payload
        },
        clearProducts: (state) => {
            state.products = []
        },
       
    }
})

export const { fetchProducts, clearProducts} = productsSlice.actions
export default productsSlice.reducer