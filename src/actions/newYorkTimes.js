import {NEWYORKTIMES_BASE_URL} from "../app.const";

export function fetchNewYorkTimesDataSuccess(articles) {
    return {
        type: "NEWYORKTIMES_FETCH_DATA_SUCCESS",
        articles
    }
}

const baseURL = new URL(NEWYORKTIMES_BASE_URL);

export function fetchNewYorkTimesData() {
    return async (dispatch) => {
         const data = await fetch(baseURL);
         const response = await data.json();
         dispatch(fetchNewYorkTimesDataSuccess(response));
    }
}
