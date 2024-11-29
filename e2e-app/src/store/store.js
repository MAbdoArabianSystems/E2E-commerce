const { configureStore, combineReducers } = require("@reduxjs/toolkit");

import ProductsReducer from './slices/productsSlice'
import CartReducer from './slices/cartsSlice'

const reducers = combineReducers({
    Products : ProductsReducer,
    Carts : CartReducer
})

export const store  = configureStore({
    reducer: reducers,
})
