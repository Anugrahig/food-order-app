import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  cartList: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.cartList.find(
        (item) => item.idMeal === action.payload.idMeal
      );
      // console.log("Action", action);
      if (itemExist) {
        state.cartList.forEach((item) => {
          if (item.idMeal === action.payload.idMeal) {
            item.count++;
          }
        });
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
      // state.cartCount = 1;
    },
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      state.cartCount -= 1;
    },
  },
});
export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
