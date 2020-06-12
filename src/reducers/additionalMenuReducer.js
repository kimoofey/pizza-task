import {additionalList} from "../FakeBackend/items";
import {ADD_ITEM, REMOVE_ITEM} from "../actions/additionalMenuAT";

const initialState = additionalList.slice();

export default function additionalMenuReducer(state = {items: initialState}, action) {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                items: state.items.map((element) =>
                    element.id === action.id
                        ? {...element, amount: element.amount + 1}
                        : element
                )
            }
        }
        case REMOVE_ITEM: {
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