import { createAsyncThunk } from "@reduxjs/toolkit";

const stander_url = "https://fakestoreapi.com/carts";

// Fetching all carts
export const fetchingCarts = createAsyncThunk(
  "fetchingCarts",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${stander_url}/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch carts.");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Adding a new cart
export const addNewCart = createAsyncThunk(
  "addNewCart",
  async (products, { rejectWithValue }) => {
    try {
      return products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "deleteCart",
  async (cartId, { rejectWithValue }) => {
    try {
      return cartId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
