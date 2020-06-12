import {createSelector} from 'reselect'

const getPizza = state => state.pizzaReducer.items;
const getAdditional = state => state.additionalMenuReducer.items;

export const getTotalPricePizza = createSelector(
    getPizza,
    items => items.reduce((acc, item) => acc + (item.amount * item.price), 0)
);

export const getTotalPriceAdditional = createSelector(
    getAdditional,
    items => items.reduce((acc, item) => acc + (item.amount * item.price), 0)
);