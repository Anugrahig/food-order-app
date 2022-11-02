import React, { createContext, useReducer } from "react";
export const DispatchContext = createContext();
export const StateContext = createContext();

const AppProvider = ({ children }) => {
  // console.log("Props", props);
  const initialState = {
    cartItems: [],
    cartCount: 0,
  };
  const reducer = (state, action) => {
    // console.log("Action", action.payload);
    // console.log("state", state);
    switch (action.type) {
      case "add_to_cart":
        const itemExist = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        if (itemExist) {
          return {
            ...state,
            // cartItems: [...state.cartItems, action.payload],
            count: ++state.cartCount,
          };
        } else {
          return {
            ...state,
            cartItems: [
              ...state.cartItems,

              action.payload,
              { count: state.cartCount + 1 },
            ],
          };
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default AppProvider;
