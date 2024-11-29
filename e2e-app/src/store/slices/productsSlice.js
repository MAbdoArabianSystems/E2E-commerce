const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const stander_url = "https://fakestoreapi.com/products";

export const fetchingProducts = createAsyncThunk(
  "fetchingProducts",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(`${stander_url}?${params}`);
      const data = response.json();
      if (!response.ok) throw new Error("Fetching products failed !");
      return data;
    } catch (error) {
      throw new Error(rejectWithValue(error.message));
    }
  }
);

export const fetchOneProduct = createAsyncThunk(
  "fetchOneProduct",
  async (productId, { rejectWithValue }) => {
    let response = null;
    try {
      response = await fetch(`${stander_url}/${productId}`);
      const data = response.json();
      if (!response.ok) throw new Error("Fetching product failed !");
      return data;
    } catch (error) {
      throw new Error(rejectWithValue(error.message));
    }
  }
);

const ProductsReducer = createSlice({
  name: "products",
  initialState: {
    products: {
      data: [],
      error: null,
      loading: true,
    },
    productDetails: {
      data: {},
      error: null,
      loadingDetails: true,
    },
  },
  reducers: {},

  // fitching products
  extraReducers: (builder) => {
    builder.addCase(fetchingProducts.pending, (state) => {
        state.products.loading = true;
      });

    builder.addCase(fetchingProducts.fulfilled, (state, action) => {
      state.products.data = action.payload;
      state.products.loading = false;
    });
    builder.addCase(fetchingProducts.rejected, (state, action) => {
      state.products.error = action.error;
      state.products.loading = false;
    });

    // fitching one product
    builder.addCase(fetchOneProduct.pending, (state) => {
      state.productDetails.loadingDetails = true;
    });
    builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
      state.productDetails.data = action.payload;
      state.productDetails.loadingDetails = false;
    });
    builder.addCase(fetchOneProduct.rejected, (state, action) => {
      state.productDetails.error = action.error;
      state.productDetails.loadingDetails = false;
    });
  },
});

export default ProductsReducer.reducer;
