import {FILLED_EMAIL, FILLED_FIRST_NAME, FILLED_LAST_NAME} from "../actions/formAT";

const initialState = {
    firstName: {
        value: '',
        filled: false,
    },
    lastName: {
        value: '',
        filled: false,
    },
    email: {
        value: '',
        filled: false,
    },
};

export default function formReducer(state = {items: initialState}, action) {
    switch (action.type) {
        case FILLED_FIRST_NAME: {
            return {
                ...state,
                items: {
                    ...state.items,
                    firstName: action.payload,
                },
            }
        }
        case FILLED_LAST_NAME: {
            return {
                ...state,
                items: {
                    ...state.items,
                    lastName: action.payload,
                },
            }
        }
        case FILLED_EMAIL: {
            return {
                ...state,
                items: {
                    ...state.items,
                    email: action.payload,
                },
            }
        }
        default:
            return state;
    }
}