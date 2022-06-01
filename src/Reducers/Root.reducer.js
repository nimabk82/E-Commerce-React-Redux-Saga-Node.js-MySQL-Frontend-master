import { combineReducers } from "redux";
import CartReducer from "./Cart.reducer";
import SearchReducer from "./Search.reducer";
import ReviewReducer from "./Review.reducer";

const RootReducer = combineReducers({
  CartReducer,
  SearchReducer,
  ReviewReducer,
});

export default RootReducer;
