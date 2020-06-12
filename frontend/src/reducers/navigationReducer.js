import {NEXT_PAGE, PREV_PAGE, RESET} from "../actions/navigationAT";

const initialState = {
    activePage: 0,
    steps: ['Select pizza!', 'Add some taste!', 'Finish order!'],
};

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_PAGE: {
            return {
                ...state,
                activePage: state.activePage + 1,
            }
        }
        case PREV_PAGE: {
            return {
                ...state,
                activePage: state.activePage - 1,
            }
        }
        case RESET: {
            return {
                ...state,
                activePage: 0,
            }
        }
        default:
            return state;
    }
}