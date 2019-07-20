export function articles(state = [], action) {
    switch (action.type) {
        case "NEWYORKTIMES_FETCH_DATA_SUCCESS" :
            return action.articles;
        default:
            return state;
    }
}
