import { combineReducers } from "redux";
import cartReducer from "./cart";
import productReducer from "./product";

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
});

export default rootReducer;