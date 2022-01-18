import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  showCart: true,
  totalPrice: 0,
  totalItems: 0,
  items: [
    {
      id: 1,
      title: "Test",
      description: "This is a first product - amazing!",
      price: 6,
    },
    {
      id: 2,
      title: "Test 2",
      description: "This is a second product - amazing!",
      price: 7,
    },
  ],
  cartItems: [],
};

const shoppingSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      let foundItem = state.cartItems.find(
        (item) => action.payload.id === item.id
      );
      if (foundItem) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, added: item.added + 1 };
          }
          return item;
        });
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload, added: 1 }];
      }
    },
    removeItem(state, action) {
      if (action.payload.added === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => action.payload.id !== item.id
        );
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, added: item.added - 1 };
          }
          return item;
        });
      }
    },
    calculateTotal(state) {
      state.totalPrice = state.cartItems.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.added;
        },
        0
      );
      state.totalItems = state.cartItems.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.added;
        },
        0
      );
    },
    addNewItem(state, action) {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },
  },
});

const store = configureStore({
  reducer: shoppingSlice.reducer,
});

export const shopActions = shoppingSlice.actions;

export default store;
