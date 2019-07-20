export function currency(state = [], action) {
    switch (action.type) {
        case "CURRENCY_FETCH_DATA_SUCCESS" :
            return action.currency;
        default:
            return state;
    }
}
