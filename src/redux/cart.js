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
    increment: (state, action) => {
      state.cartList.forEach((item) => {
        if (item.idMeal === action.payload.idMeal) {
          item.count++;
        }
      });
    },
    decrement: (state, action) => {
      const exist = state.cartList.find(
        (item) => item.idMeal === action.payload.idMeal
      );
      if (exist.count === 1) {
        state.cartList = state.cartList.filter(
          (item) => item.idMeal !== action.payload.idMeal
        );
      } else {
        state.cartList.forEach((item) => {
          if (item.idMeal === action.payload.idMeal) {
            item.count--;
          }
        });
      }
    },
    removeItem: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.idMeal !== action.payload.idMeal
      );
    },
  },
});
export const { addToCart, increment, decrement, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
