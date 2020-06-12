import {pizzaList} from "../FakeBackend/items";
import {ADD_PIZZA, REMOVE_PIZZA} from "../actions/pizzaAT";

const initialState = pizzaList.slice();

export default function pizzaReducer(state = {items: initialState}, action) {
    switch (action.type) {
        case ADD_PIZZA: {
            return {
                ...state,
                items: state.items.map((element) =>
                    element.id === action.id
                        ? {...element, amount: element.amount + 1}
                        : element
                )
            }
        }
        case REMOVE_PIZZA: {
            return {
                ...state,
                items: state.items.map((element) =>
                    element.id === action.id
                        ? {...element, amount: element.amount - 1}
                        : element
                )
            }
        }
        default:
            return state;
    }
}