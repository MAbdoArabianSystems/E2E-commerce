import { addNewCart, deleteCart, fetchingCarts } from "../thunkFunction/cartsFunctions";

const { createSlice } = require("@reduxjs/toolkit");


const CartsReducer = createSlice({
  name: "Carts",
  initialState: {
    carts: [], // Initialize as an array
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetching all carts
    builder.addCase(fetchingCarts.fulfilled, (state, action) => {
      state.carts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchingCarts.rejected, (state, action) => {
      state.error = action.payload || action.error.message;
      state.loading = false;
    });

    // Adding a new cart

    builder.addCase(addNewCart.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addNewCart.fulfilled, (state, action) => {
      if (state.carts.products) {
        const existingProduct = state.carts.products.find(
          (pro) => pro?.productId === action.payload?.productId
        );

        if (!existingProduct) {
          state.carts.products.push(action.payload); // Add only if the product doesn't exist
        } else {
          state.error = `Product with ID ${action.payload.productId} already exists.`;
        }
      } else {
        // Initialize `products` if it doesn't exist
        state.carts.products = [action.payload];
      }

      state.loading = false;
    });
    builder.addCase(addNewCart.rejected, (state, action) => {
      state.error = action.payload || action.error.message;
      state.loading = false;
    });

    //delete cart
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      if (state.carts.products) {
        state.carts.products = state.carts.products.filter(
          (pro) => pro.productId !== action.payload
        );
      }
      state.loading = false;
    });
    builder.addCase(deleteCart.rejected, (state, action) => {
      state.error = action.payload || action.error.message;
      state.loading = false;
    });
  },
});

export default CartsReducer.reducer;
