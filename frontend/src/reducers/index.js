import {combineReducers} from "redux";
import pizzaReducer from "./pizzaReducer";
import additionalMenuReducer from "./additionalMenuReducer";
import navigationReducer from "./navigationReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
    pizzaReducer,
    additionalMenuReducer,
    navigationReducer,
    formReducer,
});

export default rootReducer;