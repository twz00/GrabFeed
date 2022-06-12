import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //must spread the state.items like 'copying' the intiial state of the items and adding on to it
      //the payload contains the item that we want to add
      const found = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (found) {
        const index = state.items.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        state.items[index].quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
        state.count += 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectCount = (state) => state.cart.count;
export const selectTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;
