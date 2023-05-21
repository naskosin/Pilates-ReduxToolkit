import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { email: "", accessToken: "" },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload.value;
    case "LOG_OUT":
      return initialState;
    default:
      return state;
  }
};
export const logInAction = (value) => {
  localStorage.setItem("user", JSON.stringify(value));
  return { type: "LOGIN", payload: value };
};
export const logOut = () => {
  localStorage.clear("user");
  return { type: "LOG_OUT", payload: initialState };
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { email: "", accessToken: "" },
  },
  reducers: {
    logInHandler(state, action) {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logOutHandler(state) {
      state.user = { email: "", accessToken: "" };
      localStorage.removeItem("user");
      console.log(localStorage.getItem("user"));
      //localStorage.clear('user');
    },
    logErrorhandler(state, action) {
      alert(action.payload);
    },
  },
});

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addThisProduct(state, action) {
      //console.log(choice)
      if (state.some((x) => x.name === action.payload.name)) {
        return state.map((x) => {
          return action.payload.name === x.name
            ? { ...x, quantity: x.quantity + action.payload.quantity }
            : x;
        });
      }
      return [...state, action.payload];
    },
    changeCount(state,action){
      return [...action.payload]
    },
    emptyCart(state){
      return []
    }
  },
});
export const authActions = authSlice.actions;
export const productActions = productSlice.actions;
const middleWareMine = (store) => (next) => (action) => {
  console.log("This is action", action);
  console.log(action.payload);

  next(action);
};
export const store = configureStore({
  reducer: { auth: authSlice.reducer, product: productSlice.reducer },
  //reducer: productSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWareMine),
  //[...getDefaultMiddleware(),middleWareMine]
});
