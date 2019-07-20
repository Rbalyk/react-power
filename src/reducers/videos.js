export function videos(state = [], action) {
    switch (action.type) {
        case "VIDEOS_FETCH_DATA_SUCCESS" :
            return action.videos;
        default:
            return state;
    }
}
