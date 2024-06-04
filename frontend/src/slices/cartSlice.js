import { createSlice } from "@reduxjs/toolkit";
import updateCart from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((cart) => cart._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((cart) =>
          cart._id === existItem._id ? item : cart
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart._id !== action.payload
      );

      return updateCart(state);
    },
  },
});

// export state to component (useSelector())

// export action to component (useDispatch())
export const { addToCart, removeFromCart } = cartSlice.actions;

// export reducer to store
export default cartSlice.reducer;
