import {combineReducers} from "redux";
import pizzaReducer from "./pizzaReducer";
import additionalMenuReducer from "./additionalMenuReducer";

const rootReducer = combineReducers({
    pizzaReducer,
    additionalMenuReducer,
});

export default rootReducer;